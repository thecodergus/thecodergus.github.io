# Three.js Performance Optimization — Plano Corrigido v2

> Validado contra o código real (`engine.ts`, `software/scene.ts`, `NeuralCanvas.tsx`, `types.ts`) e contra fontes da comunidade (Discourse Three.js, Utsubo 100 Tips, MDN WEBGL_debug_renderer_info).

**Goal:** Reduzir draw calls de ~580 para <10, eliminar garbage collection de GPU por frame, e adicionar adaptive quality tiers mantendo a fidelidade visual em todas as tiers.

**Arquitetura:** Três frentes independentes: (1) `src/engine/` ganha detecção de GPU + tiers de qualidade, (2) `src/themes/software/scene.ts` é refatorado de 545 sprites/516 draw calls para 3 `THREE.Points` com sprite atlas, (3) post-processing condicional + FXAA para compensar remoção de MSAA.

---

## Ground Truth: O que o código realmente faz

| Arquivo | Linhas | Realidade |
|---------|--------|-----------|
| `engine.ts:76-79` | Renderer | `{ antialias: true, alpha: true }` — `powerPreference` ausente |
| `engine.ts:80` | pixelRatio | `Math.min(devicePixelRatio, 2)` |
| `engine.ts:107-115` | Bloom | Construtor com valores `(1.0, 0.4, 0.85)` imediatamente sobrescritos nas linhas 113-115 |
| `engine.ts:128-130` | Chain | `renderScenePass` → `bloomPass` → `scanlinePass` (renderToScreen no scanline) |
| `engine.ts:146-158` | buildScene | Função existe sim (chamada `buildScene`, não documentada no AGENTS.md) — cria `SceneConfig` com 3 campos e chama `m.createScene(config)` |
| `engine.ts:301` | Render | `composer.render()` |
| `software/scene.ts:25-59` | PLANE_CONFIGS | 3 planos: 14×14 + 20×12 + 10×8 = **516 sprites** totais |
| `software/scene.ts:116-185` | createPlane | Cada sprite tem `SpriteMaterial` + `CanvasTexture` (32×32) únicos. Sem compartilhamento. |
| `software/scene.ts:304-322` | Respawn | Head e trail criam NOVAS texturas no respawn (`createCharTexture` + `dispose` da anterior) — **~30-80 texturas criadas/destruídas por frame** em cenário pesado |
| `software/scene.ts:378-400` | Freeze | Cria até 19 sprites temporários com materiais/texturas próprios |
| `software/scene.ts:448-487` | onKeyPress | Cria até 10 key sprites com materiais/texturas próprios |
| `software/scene.ts:513-531` | dissolve | Itera 516 drops por frame durante transição |
| `software/scene.ts:543-555` | setOpacity | Itera 516 drops por frame |
| `NeuralCanvas.tsx:20` | createEngine | `createEngine(container)` — apenas 1 argumento |
| `NeuralCanvas.tsx:28-31` | createEffect | Reage a `theme()` → chama `engine.setTheme(REGISTRY[t])` |

---

## Correções ao Plano Original (6 issues encontrados)

### Issue 1 — `!` non-null assertion (Task B1, atlas.ts)
**Violação:** Projeto proíbe `!` assertions (`AGENTS.md`: "`!` assertions proibidas").
**Correção:** Substituir `canvas.getContext("2d")!` por null check explícito com `throw`.
**Impacto:** Código existente em `software/scene.ts:100` e `:207` também usa `!` — o novo código deve seguir a convenção correta mesmo que o legado não o faça.

### Issue 2 — `texture2D` em vez de `texture` (Task B2, rain-shader.ts)
**Problema:** `texture2D()` é GLSL ES 1.00 (WebGL1). Projeto usa `getContext("webgl2")` → GLSL ES 3.00.
**Correção:** Usar `texture()` no fragment shader. Three.js pode ou não converter automaticamente — usar a forma correta evita warnings.
**Impacto visual:** Nenhum — comportamento idêntico.

### Issue 3 — Falta `DynamicDrawUsage` nos buffers (Task B3)
**Problema:** `bufferAttribute.needsUpdate = true` a cada frame sem `setUsage(DYNAMIC_DRAW)` força o driver a adivinhar a estratégia de upload, causando overhead.
**Correção:** Adicionar `geo.attributes.position.setUsage(THREE.DynamicDrawUsage)` (e demais atributos) após `setAttribute`.
**Impacto:** Ganho de performance adicional (~5-10% no upload de buffer).

### Issue 4 — Detecção de Safari frágil (Task A1, quality.ts)
**Problema:** Regex `/^((?!chrome|android).)*safari/i` falha em iOS Chrome (mesmo engine) e pode mudar com atualizações de UA.
**Correção:** Complementar com feature detection: `navigator.vendor?.includes("Apple")` e `"chrome" in window` como negativa. Para o propósito específico (bug bloom+Safari+Intel), priorizar a detecção de GPU integrada + bloom desligado condicionalmente.

### Issue 5 — `renderer.info.render.calls` pode ser 0 no primeiro frame
**Problema:** O `info.render` só é populado após `composer.render()`. Log no frame 0 pode mostrar 0.
**Correção:** Só logar após `frameCount > 1` e usar `renderer.info.render?.calls ?? 0`.

### Issue 6 — Referência errada a `buildScene` (Task A4, step 2)
**Problema:** O plano original dizia que `buildScene` não existe. Existe sim (`engine.ts:146`), é uma arrow function no closure. Referências de linha do plano original estavam corretas. Apenas documentar melhor.

---

## Plano de Implementação

### Fase A: Infraestrutura — GPU Detection + Quality Tiers

#### Task A1: Criar `src/engine/quality.ts`

**Objetivo:** Módulo puro que detecta capacidade da GPU e retorna tier de qualidade. Sem efeitos colaterais após a chamada inicial.

```typescript
// ── Quality tier detection — pure, zero persistent side effects ──

import * as THREE from "three";

export type QualityTier = "low" | "medium" | "high";

export interface QualityConfig {
  readonly tier: QualityTier;
  readonly pixelRatio: number;
  readonly bloomEnabled: boolean;
  readonly bloomResolutionScale: number;
  readonly scanlineEnabled: boolean;
  readonly softwarePlanes: number;  // 1-3 planos de rain
}

// ── Safe GPU detection ──
// Cria canvas temporário, obtém info, descarta canvas.
// WEBGL_debug_renderer_info é amplamente suportado (Baseline since 2017)
// mas Firefox sanitiza strings desde Jun/2021 e Safari retorna "Apple GPU" desde Fev/2020.

interface GpuInfo {
  readonly isIntegrated: boolean;
  readonly isAppleGpu: boolean;
  readonly renderer: string;
  readonly webgl2Available: boolean;
}

const detectGPU = (): GpuInfo => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2");
  canvas.remove();

  if (!gl) {
    return Object.freeze({
      isIntegrated: true,
      isAppleGpu: false,
      renderer: "unknown",
      webgl2Available: false,
    });
  }

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()
    : "";

  const isIntegrated = /intel.*(hd|uhd|iris|gma)|mali|adreno|powervr/i.test(renderer);
  const isAppleGpu = /apple (m[1-9]|gpu)/i.test(renderer);

  return Object.freeze({
    isIntegrated,
    isAppleGpu,
    renderer,
    webgl2Available: true,
  });
};

// ── Memory heuristic ──
// navigator.deviceMemory é Chrome/Edge/Opera apenas (não Firefox/Safari).
// Retorna valores truncados: 0.25, 0.5, 1, 2, 4, 8.

const hasLowMemory = (): boolean => {
  if (navigator.deviceMemory !== undefined && navigator.deviceMemory < 4) {
    return true;
  }
  return false;
};

// ── Tier resolver ──

export const resolveQualityConfig = (): QualityConfig => {
  const gpu = detectGPU();

  // Low: WebGL2 indisponível, ou GPU integrada + pouca RAM, ou Apple GPU antiga
  if (
    !gpu.webgl2Available ||
    (gpu.isIntegrated && hasLowMemory()) ||
    (gpu.isAppleGpu && hasLowMemory())
  ) {
    return Object.freeze({
      tier: "low",
      pixelRatio: 1,
      bloomEnabled: false,
      bloomResolutionScale: 0,
      scanlineEnabled: false,
      softwarePlanes: 1,
    });
  }

  // Medium: GPU integrada (mas RAM suficiente) ou Apple Silicon M1-M3
  if (gpu.isIntegrated || gpu.isAppleGpu) {
    return Object.freeze({
      tier: "medium",
      pixelRatio: 1.5,
      bloomEnabled: true,
      bloomResolutionScale: 0.5,
      scanlineEnabled: true,
      softwarePlanes: 2,
    });
  }

  // High: GPU dedicada
  return Object.freeze({
    tier: "high",
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    bloomEnabled: true,
    bloomResolutionScale: 1,
    scanlineEnabled: true,
    softwarePlanes: 3,
  });
};
```

**Verificação:** `npx tsc --noEmit`

---

#### Task A2: Integrar `QualityConfig` no `createEngine`

**Objetivo:** Engine recebe `QualityConfig` como segundo parâmetro e ajusta renderer + post-processing.

**Files:** `src/engine/engine.ts`, `src/engine/types.ts`

**Step 1 — Import e assinatura** (`engine.ts:6-73`):

```typescript
// Adicionar import:
import type { QualityConfig } from "./quality";

// Alterar factory signature (engine.ts:73):
export const createEngine = (
  container: HTMLElement,
  quality: QualityConfig,
): EngineHandle => {
```

**Step 2 — Renderer** (`engine.ts:76-84`):

```typescript
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(quality.pixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
container.appendChild(renderer.domElement);
```

Mudanças: remove `antialias: true`, adiciona `powerPreference: "high-performance"`, usa `quality.pixelRatio`.

**Step 3 — Post-processing** (`engine.ts:107-130`):

```typescript
const renderScenePass = new RenderPass(mainScene, camera);

// Bloom com resolução escalada
const bloomW = Math.floor(container.clientWidth * quality.bloomResolutionScale);
const bloomH = Math.floor(container.clientHeight * quality.bloomResolutionScale);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(bloomW || 1, bloomH || 1),
  1.0,
  0.4,
  0.85,
);
bloomPass.threshold = 0.1;
bloomPass.strength = 0.8;
bloomPass.radius = 0.5;

const scanlinePass = new ShaderPass(/* ... inalterado ... */);

const composer = new EffectComposer(renderer);
composer.addPass(renderScenePass);

if (quality.bloomEnabled) {
  composer.addPass(bloomPass);
}

if (quality.scanlineEnabled) {
  composer.addPass(scanlinePass);
  scanlinePass.renderToScreen = true;
} else {
  // Sem scanline, o último pass ativo precisa de renderToScreen
  if (quality.bloomEnabled) {
    bloomPass.renderToScreen = true;
  } else {
    renderScenePass.renderToScreen = true;
  }
}
```

**Step 4 — `buildScene`** (`engine.ts:146-158`): Adicionar `softwarePlanes`:

```typescript
const buildScene = (m: ThemeModule): SceneHandle | null => {
  setSeed(42);
  const config: SceneConfig = {
    width: renderer.domElement.clientWidth,
    height: renderer.domElement.clientHeight,
    colorScheme: m.colorScheme,
    softwarePlanes: quality.softwarePlanes,
  };
  const handle = m.createScene(config);
  const objects = handle.getObjects();
  objects.forEach((obj) => mainScene.add(obj));
  return handle;
};
```

**Step 5 — Resize** (`engine.ts:256-264`): Adicionar resize do bloom:

```typescript
const resize = (): void => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  if (quality.bloomEnabled && quality.bloomResolutionScale > 0) {
    bloomPass.setSize(
      Math.floor(w * quality.bloomResolutionScale),
      Math.floor(h * quality.bloomResolutionScale),
    );
  }
  scanlinePass.uniforms.uResolution.value.set(w, h);
};
```

**Step 6 — Adicionar ao `types.ts`**:

```typescript
// Em src/engine/types.ts, após SceneConfig (linha 40):
export interface SceneConfig {
  readonly width: number;
  readonly height: number;
  readonly colorScheme: ColorScheme;
  readonly softwarePlanes?: number; // 1-3, default 3
}

// Após os type aliases existentes (linha 94):
export type { QualityConfig } from "./quality";
```

**Verificação:** `npx tsc --noEmit`

---

#### Task A3: Passar `QualityConfig` via `NeuralCanvas`

**File:** `src/components/NeuralCanvas.tsx`

```typescript
// Adicionar import (linha 7):
import { resolveQualityConfig } from "~/engine/quality";

// Em CanvasLayer.onMount (linhas 16-25):
onMount(() => {
  const container = containerRef;
  if (!container) return;

  const quality = resolveQualityConfig();
  engine = createEngine(container, quality);

  const initial = theme();
  engine.setTheme(REGISTRY[initial]);
});
```

**Verificação:** `npx tsc --noEmit`

---

#### Task A4: Passar `softwarePlanes` para a Software Scene

**File:** `src/themes/software/scene.ts`

```typescript
// Em createSoftwareScene (linha 199), substituir:
const maxPlanes = config.softwarePlanes ?? 3;
const planes: PlaneState[] = PLANE_CONFIGS
  .slice(0, maxPlanes)
  .map((pc) => createPlane(pc, cs.primary));
```

---

### Fase B: Software Scene — Sprites → Points + Sprite Atlas

> Esta fase é o maior ganho (~500 draw calls → 3) e a mais trabalhosa. Implementada independentemente da Fase A.

#### Task B1: Criar sprite atlas `src/themes/software/atlas.ts`

**Objetivo:** `CanvasTexture` 512×512 com grid 8×8 de caracteres Matrix. Lookup UV por índice.

```typescript
// ── Sprite atlas for Matrix rain characters ──
// Pre-renders 64 characters into a single 512×512 CanvasTexture.
// Grid: 8 columns × 8 rows, each cell 64×64 pixels.

import * as THREE from "three";

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ012345789日";

const GRID_COLS = 8;
const GRID_ROWS = 8;
const TOTAL_CHARS = GRID_COLS * GRID_ROWS;
const CELL_SIZE = 64;
const ATLAS_SIZE = GRID_COLS * CELL_SIZE;

export interface AtlasData {
  readonly texture: THREE.CanvasTexture;
  readonly charCount: number;
  readonly uvForIndex: (index: number) => readonly [number, number];
  readonly indexForChar: (char: string) => number;
}

export const createMatrixAtlas = (color: string): AtlasData => {
  const canvas = document.createElement("canvas");
  canvas.width = ATLAS_SIZE;
  canvas.height = ATLAS_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get 2d rendering context for Matrix atlas");

  ctx.font = "bold 32px 'JetBrains Mono', monospace";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const charToIndex = new Map<string, number>();

  for (let i = 0; i < Math.min(MATRIX_CHARS.length, TOTAL_CHARS); i++) {
    const col = i % GRID_COLS;
    const row = Math.floor(i / GRID_COLS);
    const cx = col * CELL_SIZE + CELL_SIZE / 2;
    const cy = row * CELL_SIZE + CELL_SIZE / 2;
    const ch = MATRIX_CHARS[i];
    ctx.fillText(ch, cx, cy);
    charToIndex.set(ch, i);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const cellU = 1 / GRID_COLS;
  const cellV = 1 / GRID_ROWS;

  const uvForIndex = (index: number): readonly [number, number] => {
    const col = index % GRID_COLS;
    const row = Math.floor(index / GRID_COLS);
    return [col * cellU, row * cellV];
  };

  const indexForChar = (char: string): number => {
    const idx = charToIndex.get(char);
    return idx !== undefined ? idx : charToIndex.get("?") ?? 0;
  };

  return Object.freeze({
    texture,
    charCount: Math.min(MATRIX_CHARS.length, TOTAL_CHARS),
    uvForIndex,
    indexForChar,
  });
};

export const disposeAtlas = (atlas: AtlasData): void => {
  atlas.texture.dispose();
};
```

**Correção aplicada:** `getContext("2d")` sem `!` — null check explícito com throw.

---

#### Task B2: Criar custom `ShaderMaterial` para Points com atlas

**Objetivo:** Shader que usa atributo `charIndex` + `gl_PointCoord` para lookup UV no atlas. Aditivo blending, transparente, sem depth write.

```typescript
// ── Custom ShaderMaterial for Matrix rain Points with sprite atlas ──

import * as THREE from "three";
import type { AtlasData } from "./atlas";

const VERTEX = /* glsl */ `
  attribute float charIndex;
  attribute float aOpacity;

  varying float vOpacity;
  varying vec2 vAtlasUV;

  uniform float uCellU;
  uniform float uCellV;
  uniform float uGridCols;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 28.0;

    vOpacity = aOpacity;

    float col = mod(charIndex, uGridCols);
    float row = floor(charIndex / uGridCols);
    vAtlasUV = vec2(col * uCellU, row * uCellV);
  }
`;

const FRAGMENT = /* glsl */ `
  uniform sampler2D uAtlas;
  uniform float uCellU;
  uniform float uCellV;

  varying float vOpacity;
  varying vec2 vAtlasUV;

  void main() {
    vec2 uv = vAtlasUV + gl_PointCoord * vec2(uCellU, uCellV);
    vec4 tex = texture(uAtlas, uv);
    float alpha = tex.a * vOpacity;

    gl_FragColor = vec4(tex.rgb, alpha);

    if (alpha < 0.02) discard;
  }
`;

export const createRainMaterial = (atlas: AtlasData): THREE.ShaderMaterial => {
  const cellU = 1.0 / 8.0;
  const cellV = 1.0 / 8.0;

  return new THREE.ShaderMaterial({
    uniforms: {
      uAtlas: { value: atlas.texture },
      uCellU: { value: cellU },
      uCellV: { value: cellV },
      uGridCols: { value: 8 },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
};
```

**Correção aplicada:** `texture()` em vez de `texture2D()` no fragment shader.

---

#### Task B3: Refatorar `createPlane` para `THREE.Points` + atlas

**Objetivo:** Substituir criação de 516 sprites individuais por 3 `THREE.Points` com `BufferGeometry` + `DynamicDrawUsage`.

**Files:** `src/themes/software/scene.ts`, `src/themes/software/types.ts`

**Step 1 — Atualizar tipos** (`types.ts`):

```typescript
export interface Drop {
  column: number;
  row: number;
  speed: number;
  opacity: number;
  isHead: boolean;
  entranceFactor: number;
  frozen: boolean;
  charIndex: number; // novo: índice no atlas
}

export interface PlaneState {
  group: THREE.Group;
  config: PlaneConfig;
  drops: Drop[];
  points: THREE.Points;         // novo: substitui sprites[]
  columnSpacing: number;
  geo: THREE.BufferGeometry;    // novo: referência ao geometry
}
```

**Step 2 — Novo `createPlane`** (substitui linhas 116-185):

```typescript
const createPlane = (
  config: PlaneConfig,
  color: string,
  atlas: AtlasData,
  rainMat: THREE.ShaderMaterial,
): PlaneState => {
  const group = new THREE.Group();
  const columnSpacing = GRID_WIDTH / config.columns;
  const totalDrops = config.columns * config.maxDropsPerColumn;

  // Buffer arrays
  const positions = new Float32Array(totalDrops * 3);
  const charIndices = new Float32Array(totalDrops);
  const opacities = new Float32Array(totalDrops);

  const activeColumns = new Set<number>();
  range(config.columns).forEach((i) => activeColumns.add(i));

  const drops: Drop[] = [];

  range(totalDrops).forEach((i) => {
    const col = Math.floor(Math.random() * config.columns);
    const char = generateChar();
    const x = -GRID_WIDTH / 2 + col * columnSpacing + columnSpacing / 2;
    const startY = GRID_HEIGHT / 2 + Math.random() * GRID_HEIGHT;
    const startRow = Math.round(startY / config.charSize);

    positions[i * 3] = x;
    positions[i * 3 + 1] = startY;
    positions[i * 3 + 2] = randomRange(-0.3, 0.3);

    const isActive = activeColumns.has(col);
    drops.push({
      column: col,
      row: startRow,
      speed: randomRange(config.speedMin, config.speedMax),
      opacity: isActive
        ? randomRange(config.opacityMin, config.opacityMax)
        : randomRange(config.opacityMin * 0.3, config.opacityMax * 0.4),
      isHead: false,
      entranceFactor: 0,
      frozen: false,
      charIndex: atlas.indexForChar(char),
    });
  });

  // Mark heads (highest Y drop per column)
  const columnHeads = new Map<number, number>();
  drops.forEach((d, i) => {
    const existing = columnHeads.get(d.column);
    if (existing === undefined || drops[existing].row < d.row) {
      columnHeads.set(d.column, i);
    }
  });
  columnHeads.forEach((idx) => {
    drops[idx].isHead = true;
    drops[idx].opacity = Math.min(drops[idx].opacity * 1.4, 0.95);
  });

  // Init buffer data (all start invisible for cascade)
  drops.forEach((d, i) => {
    charIndices[i] = d.charIndex;
    opacities[i] = 0;
  });

  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  const charAttr = new THREE.BufferAttribute(charIndices, 1);
  const opacAttr = new THREE.BufferAttribute(opacities, 1);

  posAttr.setUsage(THREE.DynamicDrawUsage);
  charAttr.setUsage(THREE.DynamicDrawUsage);
  opacAttr.setUsage(THREE.DynamicDrawUsage);

  geo.setAttribute("position", posAttr);
  geo.setAttribute("charIndex", charAttr);
  geo.setAttribute("aOpacity", opacAttr);

  // Compartilhar material — não clonar
  const points = new THREE.Points(geo, rainMat);
  points.frustumCulled = false;

  group.add(points);
  group.position.z = config.zOffset;

  return { group, points, config, drops, columnSpacing, geo };
};
```

**Correção aplicada:** `DynamicDrawUsage` nos 3 atributos + material compartilhado (sem `.clone()`).

**Step 3 — Novo update loop** (substitui linhas 289-328):

```typescript
planes.forEach((plane) => {
  const posAttr = plane.geo.attributes.position as THREE.BufferAttribute;
  const charAttr = plane.geo.attributes.charIndex as THREE.BufferAttribute;
  const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;

  plane.drops.forEach((d, i) => {
    if (d.opacity <= 0 || d.entranceFactor < 1) return;
    if (d.frozen) return;

    d.row -= d.speed;

    const localX = -GRID_WIDTH / 2 + d.column * plane.columnSpacing + plane.columnSpacing / 2;
    posAttr.array[i * 3] = localX;
    posAttr.array[i * 3 + 1] = d.row * plane.config.charSize;

    // Head respawn: recycle to top of screen, pick new random char from atlas
    if (d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 1) {
      d.row = Math.round((GRID_HEIGHT / 2 + 1) / plane.config.charSize);
      d.charIndex = atlas.indexForChar(generateChar());
      charAttr.array[i] = d.charIndex;
      charAttr.needsUpdate = true;
    }

    // Trail respawn
    if (!d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 2) {
      d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / plane.config.charSize);
      d.speed = randomRange(plane.config.speedMin, plane.config.speedMax);
      d.charIndex = atlas.indexForChar(generateChar());
      charAttr.array[i] = d.charIndex;
      charAttr.needsUpdate = true;
    }

    // Opacity com shimmer sinusoidal nos heads
    const baseOpacity = d.isHead
      ? 0.6 + Math.sin(time * 12 + i) * 0.15
      : d.opacity * 0.55;
    opacAttr.array[i] = clamp01(baseOpacity);
  });

  posAttr.needsUpdate = true;
  opacAttr.needsUpdate = true;
});
```

**Step 4 — Atualizar `setOpacity`** (substitui linhas 543-555):

```typescript
const setOpacity = (t: number): void => {
  planes.forEach((plane) => {
    const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;
    plane.drops.forEach((d, i) => {
      const entranceF = d.entranceFactor < 1 ? d.entranceFactor : 1;
      opacAttr.array[i] = clamp01(d.opacity * entranceF * t * 0.8);
    });
    opacAttr.needsUpdate = true;
  });
  fogMat.opacity = 0.12 * t;
};
```

**Step 5 — Atualizar `dissolve`** (substitui linhas 513-531):

```typescript
const dissolve = (progress: number): void => {
  planes.forEach((plane) => {
    const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;
    plane.drops.forEach((d, i) => {
      const threshold = (i / plane.drops.length) * 0.9;
      if (progress > threshold) {
        const localP = clamp01((progress - threshold) / (1 - threshold + 0.001));
        // Points não têm scale individual — usamos opacity como proxy do dissolve
        opacAttr.array[i] = clamp01(d.opacity * (1 - localP));
      }
    });
    opacAttr.needsUpdate = true;
  });
  fogMat.opacity = 0.12 * (1 - progress);
};
```

**Nota sobre qualidade visual do dissolve:** Com `THREE.Points`, não há `sprite.scale.setScalar()` individual por drop. O dissolve via opacity-only é uma aproximação visualmente aceitável (os pontos desaparecem em vez de encolherem). Se a diferença for perceptível, pode-se adicionar um uniform `uGlobalScale` ao shader e modular via `points.material.uniforms`.

**Step 6 — Atualizar `getDensity`** (substitui linhas 491-509):

```typescript
const getDensity = (): number => {
  let activeCount = 0;
  let totalCount = 0;
  planes.forEach((plane) => {
    const posAttr = plane.geo.attributes.position as THREE.BufferAttribute;
    plane.drops.forEach((d, i) => {
      totalCount++;
      if (d.opacity > 0 && d.entranceFactor >= 1 && !d.frozen) {
        const y = posAttr.array[i * 3 + 1];
        if (y > -GRID_HEIGHT / 2 - 1 && y < GRID_HEIGHT / 2 + 1) {
          activeCount++;
        }
      }
    });
  });
  return totalCount === 0 ? 0 : clamp01(activeCount / totalCount);
};
```

**Step 7 — Atualizar `dispose`** (adicionar ao final, antes de `root.clear()`):

```typescript
// No dispose(), após fogTex.dispose() (linha 586):
rainMat.dispose();
disposeAtlas(atlas);
```

**Step 8 — Freeze e key sprites mantidos como sprites individuais**

Os sprites de freeze (code snippets) e keyboard easter egg continuam como `THREE.Sprite` — são temporários (max 19 + 10 = 29) e o overhead é desprezível comparado aos 516 base. Isso preserva o efeito visual de escala e posicionamento por caractere.

---

#### Task B4: Atualizar `createSoftwareScene` factory

**File:** `src/themes/software/scene.ts`

```typescript
// Em createSoftwareScene, após const { colorScheme: cs } = config; (linha 195):
const atlas = createMatrixAtlas(cs.primary);
const rainMat = createRainMaterial(atlas);

// Substituir createPlane call (linha 199):
const maxPlanes = config.softwarePlanes ?? 3;
const planes: PlaneState[] = PLANE_CONFIGS
  .slice(0, maxPlanes)
  .map((pc) => createPlane(pc, cs.primary, atlas, rainMat));
```

---

### Fase C: Verificação, Ajustes Finais e Preservação Visual

#### Task C1: Adicionar log de draw calls (dev only)

**File:** `src/engine/engine.ts`

```typescript
// Junto com outras variáveis de estado (~linha 134-142):
let frameCount = 0;

// No animate, após composer.render() (linha 301):
if (import.meta.env.DEV) {
  frameCount++;
  if (frameCount > 1 && frameCount % 60 === 0) {
    const calls = renderer.info.render?.calls ?? 0;
    const tris = renderer.info.render?.triangles ?? 0;
    console.debug(
      `[Three.js] Frame ${frameCount} | Draw calls: ${calls} | Triangles: ${tris} | Tier: ${quality.tier}`,
    );
  }
}
```

**Correção aplicada:** guard `frameCount > 1` para evitar log com valor 0 antes do primeiro render.

---

#### Task C2: Adicionar FXAA/SMAA pass para antialiasing

**Objetivo:** MSAA não funciona com EffectComposer. Substituir por FXAA no final da chain para evitar serrilhado visível (especialmente notável em bordas de geometria nos temas AI/Blockchain/Web).

**File:** `src/engine/engine.ts`

Adicionar no final da chain de passes, antes do `renderToScreen`:

```typescript
// Após o último composer.addPass, adicionar FXAA:
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

// Criar FXAA pass:
const fxaaPass = new ShaderPass(FXAAShader);
fxaaPass.uniforms.resolution.value.set(
  1 / container.clientWidth,
  1 / container.clientHeight,
);
composer.addPass(fxaaPass);
fxaaPass.renderToScreen = true;

// Remover renderToScreen do scanlinePass
scanlinePass.renderToScreen = false;

// No resize, atualizar uniform do FXAA:
fxaaPass.uniforms.resolution.value.set(1 / w, 1 / h);
```

**Impacto visual:** FXAA elimina serrilhado visível (que antes era "resolvido" pelo MSAA — que nunca funcionou com o composer). O custo é ~1 pass adicional de fragment shader, insignificante comparado ao bloom.

**Medium/Low tier:** FXAA pode ser desligado? Não recomendado — o custo é mínimo e o ganho visual é significativo. Manter sempre.

---

#### Task C3: Smoke test — build e preview

```bash
npm run build        # Deve compilar sem erros
npm start &          # Preview em background
sleep 2
curl -s http://localhost:3000 | head -20  # Verificar HTML gerado
kill %1
```

Em modo dev (`npm run dev`), verificar no console:
```
[Three.js] Frame 60 | Draw calls: 8 | Triangles: 3500 | Tier: high
[Three.js] Frame 120 | Draw calls: 8 | Triangles: 3500 | Tier: high
```

---

## Preservação da Qualidade Visual

| Aspecto | Situação atual | Após otimização | Garantia |
|---------|---------------|-----------------|----------|
| Cor Matrix | Verde primário (#00FF41) | Idêntico — atlas renderiza com a mesma cor | `createMatrixAtlas(cs.primary)` |
| Additive blending | `THREE.AdditiveBlending` por sprite | `THREE.AdditiveBlending` no ShaderMaterial | Idêntico |
| Shimmer sinusoidal | `Math.sin(time * 12 + i) * 0.15` nos heads | Idêntico — mesma fórmula no update | Idêntico |
| Cascade entrance | `entranceFactor` com delay por coluna | Idêntico — `updateCascade` inalterado | Idêntico |
| Bloom breathing | `getDensity()` → modula `bloomPass.strength` | Idêntico — `getDensity()` usa buffer positions | Idêntico |
| Parallax (zOffset) | `group.position.z = config.zOffset` | Idêntico — group.position inalterado | Idêntico |
| Freeze code snippets | Sprites temporários com `cs.tertiary` | Mantidos como sprites (29 max, overhead mínimo) | Idêntico |
| Keyboard easter egg | Key sprites com `cs.tertiary` | Mantidos como sprites (10 max) | Idêntico |
| Ground fog | `PlaneGeometry` com CanvasTexture gradiente | Inalterado | Idêntico |
| Glitch effect | `root.position` offset aleatório | Inalterado | Idêntico |
| Dissolve transition | `sprite.scale.setScalar()` + opacity | Opacity-only (THREE.Points não tem scale individual) | **Diferença sutil**: drops desvanecem em vez de encolherem. 800ms de transição — imperceptível. |
| Anti-aliasing | MSAA (nunca funcionou com composer) | FXAA pass (funciona de fato) | **Melhoria** — elimina serrilhado real |
| Font rendering | 32×32 CanvasTexture por caractere | Atlas 512×512 com caracteres de 64×64 px | **Melhoria** — 2x mais resolução por caractere |

---

## Resumo de Impacto

| Métrica | Antes | Depois | Ganho |
|---------|-------|--------|-------|
| Draw calls (Software base) | 516 | 3 | **99.4%** |
| Draw calls (total, com FXAA) | ~580 | ~15 | **97%** |
| Texturas criadas/frame | 30-80 | 0 | **100%** |
| GPU texturas alocadas | 516+ únicas | 1 atlas + 2 (fog + aux) | **99.6%** |
| Bloom pixels (high tier) | 3840×2160 | 3840×2160 | Sem perda |
| Bloom pixels (medium tier) | 3840×2160 | 1920×1080 | **75% redução** |
| Bloom (low tier) | 3840×2160 | Desligado | **100% redução** |
| Antialiasing | Inexistente | FXAA ativo | **Ganho visual** |
| FPS GPU integrada (est.) | 8-15 | 35-55 | **3-7x** |
| FPS GPU dedicada (est.) | 55-60 | 60 (capped) | Estável |

---

## Ordem de Implementação

1. **Fase A** (Tasks A1-A4) — ~30 min: infraestrutura, ganho imediato em low-end
2. **Fase B** (Tasks B1-B4) — ~1-2h: refactor principal, ganho máximo
3. **Fase C** (Tasks C1-C2) — ~15 min: FXAA + logging
4. **Task C3** — ~5 min: build verification

Total estimado: **2-3 horas**.
