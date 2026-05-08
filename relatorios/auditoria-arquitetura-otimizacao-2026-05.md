# Relatório de Auditoria: Arquitetura e Otimização

**Projeto:** `thecodergus.github.io` — Portfólio pessoal com SolidStart + Three.js
**Data:** 8 de maio de 2026
**Versão do build analisado:** `v2.0.0` (branch `main`, commit do build em `.output/public`)
**Escopo:** Qualidade arquitetural, bundle sizing, renderização 3D, padrões de código

---

## 1. Metodologia

1. Inspeção direta do código fonte (`src/`) — 33 arquivos TypeScript/TSX/CSS
2. Análise dos artefatos de build em `.output/public/_build/assets/`
3. Contagem de linhas por arquivo e identificação de hotspots
4. Pesquisa online para validação de hipóteses:
   - Vite `manualChunks` com meta-frameworks (SolidStart/Vinxi)
   - Tree-shaking de `lucide-solid`
   - Padrões de otimização Three.js (IntersectionObserver, InstancedMesh, dispose)
   - Arquitetura de cenas 3D modulares

---

## 2. Estrutura do Projeto

```
src/
├── app.tsx                          (63 linhas — entry point)
├── app.css                          (120 linhas — Tailwind v4 + theme tokens)
├── types.ts                         (164 linhas — interfaces de dados)
├── components/
│   ├── NeuralCanvas.tsx              (72 linhas — bridge SolidJS ↔ Three.js)
│   ├── Hero.tsx                      (147 linhas — seção principal + theme picker)
│   ├── Projects.tsx                  (159 linhas — grid + filtros + modal trigger)
│   ├── ProjectModal.tsx              (164 linhas — carrossel de imagens)
│   ├── Navbar.tsx, About.tsx, Skills.tsx,
│   │   Experience.tsx, Stats.tsx,
│   │   Contact.tsx, Footer.tsx,
│   │   ScrollProgress.tsx,
│   │   NotFoundPage.tsx,
│   │   TypewriterText.tsx,
│   │   RotatingTypewriter.tsx
├── engine/
│   ├── engine.ts                     (405 linhas — orquestrador Three.js)
│   ├── types.ts                      (98 linhas — contratos)
│   ├── transition.ts                 (127 linhas — crossfade manager)
│   ├── quality.ts                    (110 linhas — GPU tier detection)
│   ├── math.ts                       (157 linhas — utilitários puros)
│   ├── math.test.ts                  (600 linhas — 93 testes)
│   ├── quality.test.ts, transition.test.ts
├── themes/
│   ├── registry.ts                   (25 linhas — lazy-load de temas)
│   ├── ai/scene.ts                   (1075 linhas — ★ maior arquivo)
│   ├── software/scene.ts             (722 linhas)
│   ├── blockchain/scene.ts           (610 linhas)
│   ├── web/scene.ts                  (467 linhas)
│   └── [cada tema]/index.ts, types.ts, theme.css
├── stores/
│   ├── i18nStore.tsx, themeStore.ts
├── routes/
│   ├── index.tsx, doom.tsx
```

---

## 3. Análise de Bundle (Build de Produção)

### 3.1 Tamanhos dos chunks

| Arquivo | Tamanho | Gzip |
|---|---|---|
| **index-BzbvkZIV.js** | **591 KB** | 154 KB |
| **Footer-CV_Rz88Q.js** | **38 KB** | 15 KB |
| client-XgL5BClu.js | 25 KB | 10 KB |
| index-BVORSzSB.js | 14 KB | 5 KB |
| client-NjtOsW42.css | 41 KB | 8 KB |
| Demais chunks | < 10 KB cada | — |

**Total JS:** ~690 KB (minificado) | **CSS:** 41 KB

### 3.2 Chunks Three.js ausentes

O `vite.config.ts` define `manualChunks` para separar `three`, `three-examples` e `vendor`:

```ts
manualChunks(id) {
  if (!id.includes("node_modules")) return;
  if (id.includes("three/examples/jsm")) return "three-examples";
  if (id.includes("three")) return "three";
  return "vendor";
}
```

Nenhum desses chunks aparece no output. O `index-BzbvkZIV.js` contém TODO o Three.js inline:
UnrealBloomPass, EffectComposer, ShaderPass, FXAAShader, RenderPass — tudo minificado dentro
dele. Verificação feita com `strings` + grep no binário do chunk.

---

## 4. Achados por Severidade

### 4.1 CRÍTICO #1 — Three.js monolítico (591 KB)

**Problema:** O `manualChunks` do Vite não está splitando Three.js em chunks separados.

**Causa raiz:** Meta-frameworks como SolidStart/Vinxi podem não propagar `rollupOptions.output.manualChunks` corretamente para o Rollup interno. O bug [SvelteKit #1571](https://github.com/sveltejs/kit/issues/1571) documenta o mesmo comportamento: o framework wrappa o Vite e `rollupOptions.output` não é spread no build final.

**Impacto:**
- Sem cache separado para Three.js, qualquer mudança em código de aplicação (ex: CSS, componente) força re-download de 591 KB
- Usuários em 3G/4G experienciam ~3-5 segundos extras de download
- O Service Worker (PWA) ignora `three*.js` no `globIgnores`, mas como esses chunks não existem, a regra é inócua

**Validação online:** [soledadpenades.com](https://soledadpenades.com/posts/2025/use-manual-chunks-with-vite-to-facilitate-dependency-caching/) (2025) e [Mykola Aleksandrov](https://mykolaaleksandrov.dev/posts/2025/11/taming-large-chunks-vite-react/) (2025) confirmam que `manualChunks` baseado no nome do pacote npm é a abordagem recomendada, mas requer que o meta-framework não interfira.

**Solução proposta:**
1. Instalar `rollup-plugin-visualizer` e gerar `stats.html` para confirmar a árvore de módulos
2. Verificar se a config do Vinxi está override do `vite.build.rollupOptions`
3. Alternativa: split por função em vez de string matching:

```ts
manualChunks(id, { getModuleInfo }) {
  if (id.includes("node_modules/three/examples/jsm")) return "three-examples";
  if (id.includes("node_modules/three")) return "three";
  if (id.includes("node_modules/lucide-solid")) return "lucide";
  if (id.includes("node_modules")) return "vendor";
}
```

---

### 4.2 CRÍTICO #2 — Lucide icons: barrel import puxa ~1600 ícones

**Problema:** 6 componentes importam ícones via barrel:

| Componente | Ícones importados |
|---|---|
| Hero.tsx | Brain, Blocks, Terminal, Globe, Palette, Check, ChevronDown, Github, Linkedin, Mail, ExternalLink (11) |
| Footer.tsx | Github, Heart (2) |
| Navbar.tsx | Menu, X (2) |
| About.tsx | Code, Terminal, Database, Cpu (4) |
| Contact.tsx | Github, Mail, ExternalLink, Linkedin (4) |
| ProjectModal.tsx | X, ExternalLink, ChevronLeft, ChevronRight (4) |
| **Total** | **~27 importações via barrel** |

**Forma atual:**
```ts
import { Github, Heart } from "lucide-solid";
```

**Causa:** O barrel export do `lucide-solid` re-exporta todos os ~1600 ícones. Embora a documentação oficial afirme tree-shaking, a comunidade reporta que o Rollup pode incluir TODOS os ícones no bundle.

**Validação online:**
- [Tree shaking lucide-react icons with Vite and Vitest](https://javascript.plainenglish.io/tree-shaking-lucide-react-icons-with-vite-and-vitest-57bf4cfe6032): 1637 módulos transformados → 35 após deep imports
- [Christopher Katoyi Kaba](https://christopher.engineering/en/blog/lucide-icons-with-vite-dev-server): 30 segundos de load em dev com barrel import do lucide-solid

**Evidência no projeto:** O Footer tem 44 linhas de JSX mas gera chunk de **38 KB**. Um componente desse tamanho deveria gerar ~2-3 KB. A diferença (~35 KB) é consistente com a inclusão de centenas de ícones não utilizados.

**Solução proposta:** Substituir todos os barrel imports por deep imports:

```ts
// Antes
import { Github, Heart } from "lucide-solid";

// Depois
import Github from "lucide-solid/icons/github";
import Heart from "lucide-solid/icons/heart";
```

**Estimativa de redução:** ~30-35 KB por chunk que importa lucide, potencialmente ~50-70 KB no total.

---

### 4.3 ALTO #3 — Cena AI monolítica (1075 linhas)

**Problema:** `themes/ai/scene.ts` implementa 12 efeitos visuais em uma única factory function de 1075 linhas. O método `update()` tem ~330 linhas com lógica entrelaçada de:

1. Forward pass particles (~80 linhas)
2. Backpropagation particles (~80 linhas)
3. Dropout cycle + neuron glow (~50 linhas)
4. Normalization ripples (~10 linhas)
5. Attention matrix shimmer (~30 linhas)
6. Activation function arcs (~10 linhas)
7. Training loss chart (~20 linhas)
8. Neuron spike rings (~15 linhas)
9. Gradient norm bar (~10 linhas)
10. Data manifold drift (~20 linhas)
11. Entrance cascade (~15 linhas)

**Violações:**
- Princípio de responsabilidade única: 1 arquivo = 11 responsabilidades
- Função `update` com 330 linhas (limite funcional: 20-30)
- Dificuldade de teste: impossível testar um efeito isoladamente
- Dificuldade de manutenção: mudar um efeito requer navegar 1075 linhas

**Validação online:** [Tympanus/Codrops 2025](https://tympanus.net/codrops/2025/02/11/building-efficient-three-js-scenes-optimize-performance-while-maintaining-quality/) recomenda arquitetura `Scene → Effects` para Three.js vanilla.

**Solução proposta:** Extrair cada efeito para módulo próprio com interface comum:

```ts
interface Effect {
  update(time: number, delta: number): void;
  dispose(): void;
}
```

A cena AI comporia 11 effects. Cada effect teria 40-80 linhas. O arquivo principal reduziria para ~200 linhas.

---

### 4.4 ALTO #4 — Código duplicado entre 4 temas (~40%)

**Problema:** Cada tema (AI, Blockchain, Software, Web) implementa seu próprio `setOpacity`, `dissolve` e `entrance` com loops quase idênticos sobre arrays de materiais.

**Exemplo — `setOpacity` na cena AI (11 linhas de loop manual):**
```ts
const setOpacity = (t: number): void => {
  neuronMat.opacity = 0.92 * t;
  edgeMat.opacity = 0.8 * t;
  fwdMat.opacity = 0.9 * t;
  bwdMat.opacity = 0.8 * t;
  lossMat.opacity = 0.5 * t;
  manMat.opacity = 0.5 * t;
  for (let ri = 0; ri < ripples.length; ri++) { ripples[ri].material.opacity = 0.4 * t; }
  attnMat.opacity = 0.7 * t;
  for (let ai = 0; ai < arcLines.length; ai++) { (arcLines[ai].material as THREE.LineBasicMaterial).opacity = 0.25 * t; }
  gradBarMat.opacity = 0.6 * t;
};
```

**Padrão idêntico nas outras 3 cenas,** variando apenas nomes de materiais e fatores de opacidade.

**Solução proposta:** Criar utility no engine:

```ts
// src/engine/opacityController.ts
interface OpacityBinding {
  readonly target: { opacity: number };
  readonly baseOpacity: number;
}

export const createOpacityController = (bindings: OpacityBinding[]) => ({
  setOpacity: (t: number) => bindings.forEach(b => b.target.opacity = b.baseOpacity * t),
  dissolve: (progress: number, objects: readonly THREE.Object3D[]) => { /* ... */ },
  entrance: (elapsed: number) => { /* ... */ },
});
```

Cada cena registraria seus bindings na criação.

**Estimativa de redução:** ~150-200 linhas duplicadas eliminadas.

---

### 4.5 ALTO #5 — `dissolve()` muta materiais permanentemente

**Problema:** Em todas as 4 cenas, o método `dissolve()` faz:

```ts
mat.transparent = true;
mat.depthWrite = false;
```

Essas propriedades **nunca são restauradas.** Se uma transição for abortada (usuário clica rapidamente em outro tema), a cena fica com `transparent: true` e `depthWrite: false` em TODOS os materiais.

**Consequências:**
- Z-fighting em objetos que deveriam ser opacos
- Comportamento visual incorreto se o tema for re-carregado sem rebuild completo
- Matter-of-fact: o `moduleCache` no `registry.ts` mantém a factory em cache, mas cada `createScene()` cria novas instâncias de material — então o bug só se manifesta durante transições abortadas, não em recriações

**Solução proposta:** Snapshot dos valores originais no `userData` de cada material durante a criação:

```ts
mat.userData._baseTransparent = mat.transparent;
mat.userData._baseDepthWrite = mat.depthWrite;
```

Restaurar no cleanup do dissolve ou no `setOpacity(1)`.

---

### 4.6 MÉDIO #6 — Animation loop sem IntersectionObserver

**Problema:** `engine.ts` usa `requestAnimationFrame(animate)` que roda 60 FPS continuamente, mesmo quando:
- A tab está em background
- O canvas está fora da viewport (usuário scrollou para baixo)
- O dispositivo está em battery saver

Com UnrealBloomPass (5 mip levels × blur separable) + ShaderPass + FXAA, o custo de GPU é significativo.

**Validação online:**
- [dev.to — Optimizing Three.js: 4 Key Techniques](https://dev.to/didof/optimizing-threejs-4-key-techniques-4lad): "Don't load a scene if it's not visible. The best tool for this is IntersectionObserver."
- [Reddit r/threejs](https://www.reddit.com/r/threejs/comments/1h2mrh5/4_key_techniques_to_optimize_multiple_threejs/): Top 4 técnicas incluem "Pause scenes out of view"
- [Three.js #7670](https://github.com/mrdoob/three.js/issues/7670): rAF loop causa 100% CPU mesmo com cena estática

**Solução proposta:** Adicionar `IntersectionObserver` no `NeuralCanvas`:

```ts
onMount(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) engine.resume();
    else engine.pause();
  }, { threshold: 0.1 });
  observer.observe(container);
  onCleanup(() => observer.disconnect());
});
```

O engine exporia `pause()`/`resume()` que cancelam/reativam o `requestAnimationFrame`.

**Economia estimada:** ~90% de GPU em idle (usuário lendo seções abaixo do Hero).

---

### 4.7 MÉDIO #7 — `import * as THREE` impede tree-shaking

**Problema:** 9 arquivos usam `import * as THREE from "three"`:

| Arquivo | Tipo |
|---|---|
| engine/engine.ts | Runtime |
| engine/types.ts | Type-only (correto: `import type *`) |
| themes/ai/scene.ts | Runtime |
| themes/ai/types.ts | Type-only |
| themes/blockchain/scene.ts | Runtime |
| themes/blockchain/types.ts | Type-only |
| themes/software/scene.ts | Runtime |
| themes/software/types.ts | Type-only |
| themes/web/scene.ts | Runtime |
| themes/web/types.ts | Type-only |

Os 5 imports `type *` são inofensivos (eliminados em compilação). Os 4 imports runtime (`engine.ts` + 3 temas em uso) importam o namespace inteiro (~600 KB antes de minificação).

**Validação online:** [Babylon.js forum](https://forum.babylonjs.com/t/vite-rollup-chuncking/39106) confirma que `import * as` impede tree-shaking e recomenda named imports com paths específicos.

**Solução proposta:** Substituir por named imports:

```ts
// engine.ts — antes
import * as THREE from "three";
// engine.ts — depois
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Vector2, Vector3,
  Color, Object3D, Texture, IUniform, ACESFilmicToneMapping, SRGBColorSpace
} from "three";
```

**Nota:** Este problema é mitigado pelo fato de o Three.js já estar inteiro no bundle monolítico (Crítico #1). Corrigir o chunk splitting primeiro tornará esta otimização mais relevante.

---

### 4.8 MÉDIO #8 — Resize sem debounce

**Problema:** `window.addEventListener("resize", resize)` dispara a cada pixel de redimensionamento. O handler recalcula:
- `camera.aspect` + `updateProjectionMatrix()`
- `renderer.setSize()`
- `composer.setSize()`
- `bloomPass.setSize()` (com `Math.floor`)
- `fxaaPass.uniforms.resolution`
- `scanlinePass.uniforms.uResolution`

Tudo isso pode disparar 30-60 vezes por segundo durante um resize de janela.

**Solução proposta:** Debounce de 150ms ou `ResizeObserver` no container:

```ts
let resizeTimer: ReturnType<typeof setTimeout>;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resize, 150);
});
```

---

### 4.9 MÉDIO #9 — Dissolve itera objetos já dissolvidos

**Problema:** O método `dissolve()` percorre `dissolveObjects` inteiro a cada frame, sem early-exit:

```ts
const dissolve = (progress: number): void => {
  const len = dissolveObjects.length;
  for (let i = 0; i < len; i++) {
    const seed = i / (len - 1 + 0.001);
    if (progress > seed) {
      const localP = clamp01((progress - seed) / (1 - seed + 0.001));
      obj.scale.setScalar(1 - localP);
      // ... fade materials
    }
  }
};
```

Após `progress` ultrapassar 1.0 (fim da transição), a condição `progress > seed` é true para TODOS os objetos, e cada um tem `localP = 1` (scale = 0). O loop continua inutilmente.

**Solução proposta:** Adicionar flag `_dissolved = true` via `userData` e pular objetos já dissolvidos:

```ts
if (obj.userData._dissolved) continue;
if (localP >= 1) obj.userData._dissolved = true;
```

---

### 4.10 BAIXO #10 — `seed` mutável em nível de módulo

**Problema:** `math.ts` linha 105: `let seed = 42` — estado global mutável compartilhado entre todas as cenas.

**Impacto real:** Baixo. O engine chama `setSeed(42)` antes de cada `buildScene()`, resetando o seed. Porém, duas cenas criadas em rápida sucessão compartilhariam a sequência PRNG. O `transitionManager` garante que apenas uma transição ocorre por vez, e o `moduleCache` evita recriação da mesma cena.

**Solução proposta:** Factory function retornando gerador isolado:

```ts
export const createRng = (seed: number) => ({
  random: () => { /* Lehmer isolado */ },
  randomRange: (min: number, max: number) => { /* ... */ },
});
```

---

### 4.11 BAIXO #11 — `InstancedMesh.count` dinâmico não utilizado

**Problema:** Durante o dissolve, os objetos têm `scale.setScalar(0)`, mas os InstancedMesh ainda renderizam todas as instâncias (draw calls mantidas). O `instancedMesh.count` poderia ser reduzido progressivamente.

**Validação online:** [VR Me Up devlog](https://vrmeup.com/devlog/devlog_10_threejs_instancedmesh_performance_optimizations.html) e [Three.js forum](https://discourse.threejs.org/t/is-it-possible-to-optimize-instances-add-remove-instance-dynamically/44594) documentam `instancedMesh.count` como forma de reduzir draw calls sem reconstruir geometria.

**Impacto:** Moderado. A cena AI já tem draw calls baixas (~4-5 com InstancedMesh), então o ganho é marginal. Mais relevante se o número de instâncias crescer.

---

### 4.12 BAIXO #12 — Hot path alocações por frame

**Problema:** `engine.ts` linha 276:

```ts
camera.position.lerp(new THREE.Vector3(cx, orbitH, cz), 0.03);
```

Aloca um novo `Vector3` a cada frame (60/s). GC pressure é insignificante para 1 alocação/frame, mas contrário ao princípio funcional.

**Solução proposta:** Reusar um Vector3 pré-alocado:

```ts
const orbitTarget = new THREE.Vector3();
// no update:
orbitTarget.set(cx, orbitH, cz);
camera.position.lerp(orbitTarget, 0.03);
```

---

## 5. Pontos Positivos (Boas Práticas Identificadas)

1. **InstancedMesh para neurônios e attention matrix** — 44 neurônios = 1 draw call. Excelente.
2. **BufferGeometry com vertex colors para edges** — 198 conexões = 1 draw call. Excelente.
3. **Dynamic import para temas** — `registry.ts` faz lazy-load, evitando carregar 4 cenas no bundle inicial.
4. **GPU tier detection** — `quality.ts` adapta pixelRatio, bloom e scanlines para low/medium/high. Robusto.
5. **EffectComposer com FXAA** — `antialias: true` inútil com composer, FXAA é alternativa correta.
6. **Debug logging de draw calls** — `renderer.info.render.calls` a cada 60 frames em dev.
7. **Cleanup completo** — `dispose()` libera geometrias, materiais, render targets e event listeners.
8. **Transição abortável** — `transitionManager` lida com rapid theme switch corretamente.
9. **`prefers-reduced-motion`** — Desabilita animações para acessibilidade.
10. **PWA com cache seletivo** — `globIgnores` para Three.js (quando os chunks existirem).

---

## 6. Plano de Ação Recomendado

### Fase 1 — Correções de Alto Impacto (estimativa: 2-4 horas)

| # | Ação | Redução estimada |
|---|---|---|
| 1 | Instalar `rollup-plugin-visualizer`, gerar `stats.html`, diagnosticar `manualChunks` | — (diagnóstico) |
| 2 | Corrigir `manualChunks` para splitar Three.js em chunks separados | 591 KB → ~10 KB (app) + chunks cacheados |
| 3 | Substituir barrel imports do lucide-solid por deep imports | ~50-70 KB total |
| 4 | Verificar bundle após correções, re-rodar build | — |

### Fase 2 — Qualidade Arquitetural (estimativa: 4-8 horas)

| # | Ação |
|---|---|
| 5 | Extrair `OpacityController` utility no engine |
| 6 | Refatorar 4 cenas para usar `OpacityController` |
| 7 | Snapshot e restaurar `transparent`/`depthWrite` no dissolve |
| 8 | Extrair efeitos da cena AI para módulos `effects/` |

### Fase 3 — Otimizações de Runtime (estimativa: 2-3 horas)

| # | Ação |
|---|---|
| 9 | Adicionar `IntersectionObserver` no NeuralCanvas |
| 10 | Debounce no resize handler |
| 11 | Early-exit no dissolve loop |
| 12 | Substituir `import * as THREE` por named imports |

---

## 7. Referências

- SvelteKit #1571 — `manualChunks` not propagated by meta-framework. https://github.com/sveltejs/kit/issues/1571
- Soledad Penadés — Use manual chunks with Vite. https://soledadpenades.com/posts/2025/use-manual-chunks-with-vite-to-facilitate-dependency-caching/
- Mykola Aleksandrov — Taming Large Chunks in Vite + React. https://mykolaaleksandrov.dev/posts/2025/11/taming-large-chunks-vite-react/
- Tree shaking lucide-react icons with Vite and Vitest. https://javascript.plainenglish.io/tree-shaking-lucide-react-icons-with-vite-and-vitest-57bf4cfe6032
- Christopher Katoyi Kaba — Tree shaking for Lucide-icons using Vite dev server. https://christopher.engineering/en/blog/lucide-icons-with-vite-dev-server
- dev.to — Optimizing Three.js: 4 Key Techniques. https://dev.to/didof/optimizing-threejs-4-key-techniques-4lad
- Tympanus/Codrops — Building Efficient Three.js Scenes. https://tympanus.net/codrops/2025/02/11/building-efficient-three-js-scenes-optimize-performance-while-maintaining-quality/
- VR Me Up — Three.js InstancedMesh Performance Optimizations. https://vrmeup.com/devlog/devlog_10_threejs_instancedmesh_performance_optimizations.html
- Three.js docs — WebGLRenderer.info. https://threejs.org/docs/#api/en/renderers/WebGLRenderer.info
- SolidJS docs — lazy. https://docs.solidjs.com/reference/component-apis/lazy
- Lucide docs — Getting started with Solid. https://lucide.dev/guide/solid
