# Three.js Performance Optimization — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Reduzir draw calls de ~580 para <30, eliminar garbage collection de GPU por frame, e adicionar adaptive quality tiers para rodar a 30+ FPS em GPUs integradas (Intel HD/UHD, Mali, Adreno).

**Architecture:** Três frentes independentes: (1) `src/engine/` ganha detecção de GPU e tiers de qualidade, (2) `src/themes/software/scene.ts` é refatorado de 516 sprites individuais para 3 `THREE.Points` com sprite atlas, (3) post-processing tem resolução reduzida e pode ser desligado condicionalmente.

**Tech Stack:** Three.js ^0.184.0, TypeScript 6.0.3, SolidJS/SolidStart (não afetado), WebGL2 com fallback para WebGL.

**Fontes da pesquisa:** UnrealBloomPass docs oficiais, Discourse Three.js (HiDPI #87114, InstancedMesh+Sprite #68091, Texture Atlas #72613, Safari+Intel bloom #42606), IGC Performance Guide 2024, Codrops 2025, Utsubo 100 Tips 2026.

---

## Fase A: Infraestrutura — GPU Detection + Quality Tiers

### Task A1: Criar módulo `src/engine/quality.ts`

**Objective:** Módulo puro que detecta capacidade da GPU e retorna tier de qualidade.

**Files:**
- Create: `src/engine/quality.ts`

**Step 1: Escrever o módulo**

```typescript
// ── Quality tier detection — pure, zero side effects ──

export type QualityTier = "low" | "medium" | "high";

export interface QualityConfig {
  readonly tier: QualityTier;
  readonly pixelRatio: number;
  readonly bloomEnabled: boolean;
  readonly bloomResolutionScale: number;
  readonly scanlineEnabled: boolean;
  readonly softwarePlanes: number;  // 1-3 planos de rain
}

// ── GPU detection (called ONCE at startup) ──

const detectGPU = (): {
  readonly isIntegrated: boolean;
  readonly isSafari: boolean;
  readonly renderer: string;
} => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2");
  canvas.remove();

  if (!gl) {
    // WebGL2 indisponível — assume pior caso
    return { isIntegrated: true, isSafari: false, renderer: "unknown" };
  }

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()
    : "";

  // GPUs integradas comuns em PCs antigos e mobile
  const isIntegrated = /intel.*(hd|uhd|iris|gma)|mali|adreno|powervr|apple m[1-3]/i.test(renderer);

  // Safari + Intel = bug conhecido com UnrealBloomPass (Discourse #42606)
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return Object.freeze({ isIntegrated, isSafari, renderer });
};

// ── Memory heuristic ──

const hasLowMemory = (): boolean => {
  // navigator.deviceMemory disponível em Chrome 63+
  if (navigator.deviceMemory !== undefined && navigator.deviceMemory < 4) {
    return true;
  }
  return false;
};

// ── Tier resolver ──

export const resolveQualityConfig = (): QualityConfig => {
  const gpu = detectGPU();

  // Low: GPU integrada + pouca RAM, ou Safari+Intel
  if (
    (gpu.isIntegrated && hasLowMemory()) ||
    (gpu.isSafari && /intel/i.test(gpu.renderer))
  ) {
    return Object.freeze({
      tier: "low",
      pixelRatio: 1,
      bloomEnabled: false,
      bloomResolutionScale: 0,    // desligado
      scanlineEnabled: false,
      softwarePlanes: 1,          // só o plano frontal
    });
  }

  // Medium: GPU integrada mas RAM suficiente
  if (gpu.isIntegrated || gpu.isSafari) {
    return Object.freeze({
      tier: "medium",
      pixelRatio: 1.5,
      bloomEnabled: true,
      bloomResolutionScale: 0.5,  // metade da resolução
      scanlineEnabled: true,
      softwarePlanes: 2,          // 2 planos
    });
  }

  // High: GPU dedicada
  return Object.freeze({
    tier: "high",
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    bloomEnabled: true,
    bloomResolutionScale: 1,      // resolução cheia
    scanlineEnabled: true,
    softwarePlanes: 3,            // todos os planos
  });
};
```

**Step 2: Verificar que compila**

Run: `npx tsc --noEmit src/engine/quality.ts`
Expected: no errors.

**Step 3: Commit**

```bash
git add src/engine/quality.ts
git commit -m "feat(engine): add GPU detection and quality tier resolver"
```

---

### Task A2: Integrar `QualityConfig` no `createEngine`

**Objective:** Engine recebe `QualityConfig` e ajusta renderer + post-processing no construtor.

**Files:**
- Modify: `src/engine/engine.ts:1-12` (imports)
- Modify: `src/engine/engine.ts:73-86` (renderer creation)
- Modify: `src/engine/engine.ts:103-131` (post-processing setup)
- Modify: `src/engine/types.ts:88-94` (export types)

**Step 1: Atualizar assinatura de `createEngine`**

No `engine.ts`, alterar:

```typescript
// Import (linha 13 — adicionar ao import existente)
import type { SceneHandle, SceneConfig, CameraPreset, PostProcessPreset, QualityConfig } from "./types";

// Factory signature (linha 73)
export const createEngine = (
  container: HTMLElement,
  quality: QualityConfig,
): EngineHandle => {
```

**Step 2: Renderer — usar `quality.pixelRatio`**

Substituir linha 80:
```typescript
// Antes:
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Depois:
renderer.setPixelRatio(quality.pixelRatio);
```

**Step 3: Post-processing — reduzir resolução do bloom**

Substituir linhas 107-112:
```typescript
// Antes:
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(container.clientWidth, container.clientHeight),
  1.0,
  0.4,
  0.85,
);

// Depois:
const bloomW = Math.floor(container.clientWidth * quality.bloomResolutionScale);
const bloomH = Math.floor(container.clientHeight * quality.bloomResolutionScale);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(bloomW, bloomH),
  1.0,
  0.4,
  0.85,
);
```

**Step 4: Post-processing — condicionar passes**

No `composer.addPass`, condicionar:
```typescript
// Linha 128-130 — substituir:
composer.addPass(renderScenePass);
if (quality.bloomEnabled) {
  composer.addPass(bloomPass);
}
if (quality.scanlineEnabled) {
  composer.addPass(scanlinePass);
} else {
  // Sem scanline, o bloom (ou renderScene) precisa renderToScreen
  if (quality.bloomEnabled) {
    bloomPass.renderToScreen = true;
  } else {
    renderScenePass.renderToScreen = true;
  }
}
```

**Step 5: Resize — usar scale de resolução do bloom**

No `resize()` (linha 262), substituir:
```typescript
// Antes:
composer.setSize(w, h);

// Depois:
composer.setSize(w, h);
if (quality.bloomEnabled) {
  bloomPass.setSize(
    Math.floor(w * quality.bloomResolutionScale),
    Math.floor(h * quality.bloomResolutionScale),
  );
}
```

**Step 6: Adicionar `QualityConfig` ao `types.ts`**

```typescript
// Em src/engine/types.ts, após os exports existentes:
export type { QualityConfig } from "./quality";
```

**Step 7: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 8: Commit**

```bash
git add src/engine/engine.ts src/engine/types.ts
git commit -m "feat(engine): integrate QualityConfig for adaptive pixelRatio, bloom resolution, and conditional passes"
```

---

### Task A3: Passar `QualityConfig` pelo `NeuralCanvas`

**Objective:** O componente SolidJS resolve `QualityConfig` uma vez e passa ao engine.

**Files:**
- Modify: `src/components/NeuralCanvas.tsx`

**Step 1: Atualizar `NeuralCanvas.tsx`**

```typescript
// Adicionar import (linha 7)
import { resolveQualityConfig } from "~/engine/quality";

// Em CanvasLayer.onMount (linha 16-25), alterar:
onMount(() => {
  const container = containerRef;
  if (!container) return;

  const quality = resolveQualityConfig(); // ← uma vez, antes do engine
  engine = createEngine(container, quality);

  const initial = theme();
  engine.setTheme(REGISTRY[initial]);
});
```

**Step 2: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 3: Commit**

```bash
git add src/components/NeuralCanvas.tsx
git commit -m "feat(NeuralCanvas): resolve quality tier once and pass to engine"
```

---

### Task A4: Passar `softwarePlanes` para a Software Scene

**Objective:** A cena Software respeita `quality.softwarePlanes` para limitar planos de rain.

**Files:**
- Modify: `src/themes/software/scene.ts:195-200` (criação dos planos)
- Modify: `src/themes/software/types.ts` (adicionar campo)

**Step 1: Adicionar `softwarePlanes` ao `SceneConfig`**

Em `src/engine/types.ts`, estender `SceneConfig`:
```typescript
export interface SceneConfig {
  readonly width: number;
  readonly height: number;
  readonly colorScheme: ColorScheme;
  readonly softwarePlanes?: number; // 1-3, default 3
}
```

**Step 2: Passar `quality.softwarePlanes` do engine**

Em `engine.ts`, `buildScene` (linha 146-158), adicionar:
```typescript
const config: SceneConfig = {
  width: renderer.domElement.clientWidth,
  height: renderer.domElement.clientHeight,
  colorScheme: m.colorScheme,
  softwarePlanes: quality.softwarePlanes, // ← novo
};
```

**Step 3: Limitar planos na Software scene**

Em `src/themes/software/scene.ts`, linha 199:
```typescript
// Antes:
const planes: PlaneState[] = PLANE_CONFIGS.map((pc) => createPlane(pc, cs.primary));

// Depois:
const maxPlanes = config.softwarePlanes ?? 3;
const planes: PlaneState[] = PLANE_CONFIGS
  .slice(0, maxPlanes)
  .map((pc) => createPlane(pc, cs.primary));
```

**Step 4: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 5: Commit**

```bash
git add src/engine/types.ts src/engine/engine.ts src/themes/software/scene.ts
git commit -m "feat(software): respect quality.softwarePlanes to limit rain planes on low-end"
```

---

## Fase B: Software Scene — Sprites → Points + Sprite Atlas

> **Nota:** Esta fase é o maior ganho de performance (~500 draw calls → 3) mas também a mais trabalhosa. Pode ser implementada independentemente da Fase A.

### Task B1: Criar sprite atlas `src/themes/software/atlas.ts`

**Objective:** Gerar uma `CanvasTexture` com grid de caracteres Matrix, exportando função de lookup UV por índice.

**Files:**
- Create: `src/themes/software/atlas.ts`

**Step 1: Escrever o módulo de atlas**

```typescript
// ── Sprite atlas for Matrix rain characters ──
// Pre-renders all characters into a single CanvasTexture.
// Each character occupies a cell in an 8×8 grid (64 chars total).

import * as THREE from "three";

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ012345789日";

const GRID_COLS = 8;
const GRID_ROWS = 8;
const TOTAL_CHARS = GRID_COLS * GRID_ROWS; // 64
const CELL_SIZE = 64; // pixels por célula
const ATLAS_SIZE = GRID_COLS * CELL_SIZE; // 512

export interface AtlasData {
  readonly texture: THREE.CanvasTexture;
  /** Número de caracteres no atlas */
  readonly charCount: number;
  /** Retorna UV offset (x, y) para o caractere no índice dado */
  readonly uvForIndex: (index: number) => readonly [number, number];
  /** Retorna índice válido para um caractere (fallback ao mais próximo se não existir) */
  readonly indexForChar: (char: string) => number;
}

export const createMatrixAtlas = (color: string): AtlasData => {
  const canvas = document.createElement("canvas");
  canvas.width = ATLAS_SIZE;
  canvas.height = ATLAS_SIZE;
  const ctx = canvas.getContext("2d")!;

  ctx.font = "bold 32px 'JetBrains Mono', monospace";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Mapa de char → índice
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
    return charToIndex.get(char) ?? charToIndex.get("?") ?? 0;
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

**Step 2: Verificar compilação**

Run: `npx tsc --noEmit src/themes/software/atlas.ts`
Expected: no errors.

**Step 3: Commit**

```bash
git add src/themes/software/atlas.ts
git commit -m "feat(software): add Matrix sprite atlas generator (64 chars in 512x512)"
```

---

### Task B2: Criar custom `ShaderMaterial` para Points com atlas

**Objective:** Shader que usa atributo `charIndex` no vertex shader para calcular UV de lookup no atlas, aplicado via `gl_PointCoord` no fragment shader.

**Files:**
- Create: `src/themes/software/rain-shader.ts`

**Step 1: Escrever o shader material**

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
  uniform float uGridRows;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 28.0; // será ajustado por cena via uniform se necessário

    vOpacity = aOpacity;

    // Calcular UV da célula no atlas baseado no charIndex
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
    // gl_PointCoord varia de (0,0) a (1,1) dentro do ponto
    vec2 uv = vAtlasUV + gl_PointCoord * vec2(uCellU, uCellV);
    vec4 tex = texture2D(uAtlas, uv);
    float alpha = tex.a * vOpacity;

    // Brilho verde Matrix (o atlas já tem a cor base)
    gl_FragColor = vec4(tex.rgb, alpha);

    if (alpha < 0.02) discard;
  }
`;

export const createRainMaterial = (atlas: AtlasData): THREE.ShaderMaterial => {
  const cellU = 1.0 / 8.0; // GRID_COLS
  const cellV = 1.0 / 8.0; // GRID_ROWS

  return new THREE.ShaderMaterial({
    uniforms: {
      uAtlas: { value: atlas.texture },
      uCellU: { value: cellU },
      uCellV: { value: cellV },
      uGridCols: { value: 8 },
      uGridRows: { value: 8 },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
};
```

**Step 2: Verificar compilação**

Run: `npx tsc --noEmit src/themes/software/rain-shader.ts`
Expected: no errors.

**Step 3: Commit**

```bash
git add src/themes/software/rain-shader.ts
git commit -m "feat(software): add custom ShaderMaterial for Points-based rain with atlas lookup"
```

---

### Task B3: Refatorar `createPlane` para usar `THREE.Points` + atlas

**Objective:** Substituir a criação de sprites individuais por um único `THREE.Points` com `BufferGeometry` contendo todos os drops.

**Files:**
- Modify: `src/themes/software/scene.ts` — refatorar `createPlane` e `update`
- Modify: `src/themes/software/types.ts` — atualizar `PlaneState` e `Drop`

> **⚠️ Complexidade:** Esta é a tarefa mais complexa do plano. O refactor substitui ~200 linhas de criação/update de sprites por ~80 linhas de buffer geometry.

**Step 1: Atualizar tipos em `types.ts`**

```typescript
// Em src/themes/software/types.ts, atualizar Drop e PlaneState:

export interface Drop {
  column: number;
  row: number;
  speed: number;
  opacity: number;
  isHead: boolean;
  entranceFactor: number;
  frozen: boolean;
  charIndex: number; // ← novo: índice no atlas
}

export interface PlaneState {
  readonly group: THREE.Group;
  readonly points: THREE.Points;        // ← novo: substitui sprites[]
  readonly config: PlaneConfig;
  readonly drops: Drop[];
  readonly columnSpacing: number;
  readonly geo: THREE.BufferGeometry;   // ← novo: referência ao geometry
}
```

**Step 2: Refatorar `createPlane`**

A função `createPlane` atual (linhas 116-185) deve ser reescrita para:

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

  // ── Buffer geometry ──
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

  // Marcar heads
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

  // Inicializar buffers
  drops.forEach((d, i) => {
    charIndices[i] = d.charIndex;
    opacities[i] = 0; // começa invisível (cascade)
  });

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("charIndex", new THREE.BufferAttribute(charIndices, 1));
  geo.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));

  const points = new THREE.Points(geo, rainMat.clone());
  points.frustumCulled = false;

  group.add(points);
  group.position.z = config.zOffset;

  return { group, points, config, drops, columnSpacing, geo };
};
```

**Step 3: Atualizar o update loop para modificar buffers**

No `update()`, substituir o bloco "Per-plane rain update" (linhas 289-328) por:

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
    // z permanece

    // Head respawn
    if (d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 1) {
      d.row = Math.round((GRID_HEIGHT / 2 + 1) / plane.config.charSize);
      const newChar = generateChar();
      d.charIndex = atlas.indexForChar(newChar);
      charAttr.array[i] = d.charIndex;
      charAttr.needsUpdate = true;
    }

    // Trail respawn
    if (!d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 2) {
      d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / plane.config.charSize);
      d.speed = randomRange(plane.config.speedMin, plane.config.speedMax);
      const newChar = generateChar();
      d.charIndex = atlas.indexForChar(newChar);
      charAttr.array[i] = d.charIndex;
      charAttr.needsUpdate = true;
    }

    // Opacity
    const baseOpacity = d.isHead
      ? 0.6 + Math.sin(time * 12 + i) * 0.15
      : d.opacity * 0.55;
    opacAttr.array[i] = clamp01(baseOpacity);
  });

  posAttr.needsUpdate = true;
  opacAttr.needsUpdate = true;
});
```

**Step 4: Atualizar `setOpacity`, `dissolve`, `dispose`**

As funções `setOpacity` e `dissolve` agora operam nos atributos do buffer em vez de `sprite.material.opacity`:

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

No `dispose`, adicionar:
```typescript
rainMat.dispose(); // o material compartilhado
atlas.texture.dispose(); // o atlas
```

**Step 5: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 6: Teste visual**

Run: `npm run dev`
Navegar para o site e verificar que a cena "Software" mostra a chuva Matrix. Esperado: visual similar mas com performance significativamente melhor.

**Step 7: Commit**

```bash
git add src/themes/software/scene.ts src/themes/software/types.ts
git commit -m "perf(software): replace 516 individual sprites with 3 Points + sprite atlas (~500 fewer draw calls)"
```

---

### Task B4: Atualizar `createSoftwareScene` para usar o atlas

**Objective:** A factory da cena Software cria o atlas uma vez e passa para `createPlane`.

**Files:**
- Modify: `src/themes/software/scene.ts` — factory function

**Step 1: Criar atlas no início da factory**

Em `createSoftwareScene` (linha 189), após `const { colorScheme: cs } = config;`:

```typescript
const atlas = createMatrixAtlas(cs.primary);
const rainMat = createRainMaterial(atlas);
```

**Step 2: Passar `atlas` e `rainMat` para `createPlane`**

```typescript
const planes: PlaneState[] = PLANE_CONFIGS
  .slice(0, maxPlanes)
  .map((pc) => createPlane(pc, cs.primary, atlas, rainMat));
```

**Step 3: Dispose do atlas no `dispose`**

No `dispose()` (linha 559), adicionar antes do `root.clear()`:
```typescript
rainMat.dispose();
disposeAtlas(atlas);
```

**Step 4: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 5: Commit**

```bash
git add src/themes/software/scene.ts
git commit -m "feat(software): integrate sprite atlas into scene factory"
```

---

## Fase C: Verificação e Ajustes Finais

### Task C1: Adicionar log de draw calls no engine

**Objective:** Facilitar debugging de performance expondo `renderer.info.render.calls` no console em modo dev.

**Files:**
- Modify: `src/engine/engine.ts:300-302` (animate loop)

**Step 1: Adicionar log condicional**

Após `composer.render()` (linha 301):
```typescript
// ── Dev: log draw calls a cada 60 frames ──
if (import.meta.env.DEV) {
  let frameCount = 0;
  const logInterval = 60;
  // (mover frameCount para fora do closure, junto com outras variáveis de estado)
}
```

Na prática, adicionar ao estado do closure:
```typescript
// Junto com outras variáveis de estado (linha 132-142)
let frameCount = 0;

// No animate, após composer.render():
if (import.meta.env.DEV) {
  frameCount++;
  if (frameCount % 60 === 0) {
    console.debug(
      `[Three.js] Draw calls: ${renderer.info.render.calls} | ` +
      `Triangles: ${renderer.info.render.triangles} | ` +
      `Tier: ${quality.tier}`,
    );
  }
}
```

**Step 2: Verificar compilação**

Run: `npx tsc --noEmit`
Expected: no errors.

**Step 3: Commit**

```bash
git add src/engine/engine.ts
git commit -m "feat(engine): log draw calls and triangles every 60 frames in dev mode"
```

---

### Task C2: Remover `antialias: true` (não tem efeito com EffectComposer)

**Objective:** Limpeza — MSAA não funciona com pós-processamento (documentado no AGENTS.md).

**Files:**
- Modify: `src/engine/engine.ts:77`

**Step 1: Remover antialias**

```typescript
// Linha 76-79 — remover antialias: true
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  powerPreference: "high-performance", // ← adicionar (dica da comunidade)
});
```

**Step 2: Commit**

```bash
git add src/engine/engine.ts
git commit -m "chore(engine): remove antialias:true (no effect with EffectComposer), add powerPreference"
```

---

### Task C3: Smoke test — build e preview

**Objective:** Garantir que o build de produção funciona.

**Files:** Nenhum (verificação apenas)

**Step 1: Build**

Run: `npm run build`
Expected: build succeeds, output in `.output/public`.

**Step 2: Preview**

Run: `npm start` (background)
Abrir no Chrome DevTools com throttling "Intel HD Graphics" via `chrome://flags` ou usar dispositivo real.
Esperado: 30+ FPS na cena Software, 50+ FPS nas demais cenas.

**Step 3: Parar preview**

Run: `kill %1` (ou Ctrl+C)

**Step 4: Commit final**

```bash
git add -A
git commit -m "chore: final verification — build passes, draw calls reduced"
```

---

## Resumo de Impacto Esperado

| Métrica | Antes | Depois | Ganho |
|---------|-------|--------|-------|
| Draw calls (Software) | ~516 | ~3 | **99.4%** |
| Draw calls (total max) | ~580 | ~50 | **91%** |
| Bloom pixels processados | 3840×2160 | 1920×1080 (med) / 0 (low) | **75-100%** |
| GPU textures criadas/frame | ~30 | 0 | **100%** |
| FPS GPU integrada (estimado) | 8-15 | 35-55 | **3-7x** |

## Ordem de Implementação Recomendada

1. **Fase A** (Tasks A1-A4) — ~30 min, ganho imediato em low-end
2. **Fase C** (Tasks C1-C3) — ~10 min, verificação
3. **Fase B** (Tasks B1-B4) — ~1-2h, ganho máximo (pode ser feito depois)
