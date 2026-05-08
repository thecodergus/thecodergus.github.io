# Sessões de Otimização Realizadas

## Sessão 1: Tema Software (Matrix rain)

### Técnicas aplicadas (todas validadas: tsc 0 erros, eslint clean, vitest 3/3, build ok):

1. **Pre-alocação zero-GC**: `_vec3: THREE.Vector3`, `_projScreen: THREE.Matrix4`, `_frustum: THREE.Frustum` — reutilizados no update loop
2. **Frustum culling manual**: `_frustum.setFromProjectionMatrix(_projScreen)`, 1× por frame. World-pos barato via `_vec3.set(localX, localY, groupZ)` sem `getWorldPosition()`. Sprites fora de visão: `sprite.visible = false`
3. **`forEach` → `for`** em TODOS os loops: update rain, update freeze, update cascade, dissolve, setOpacity, getDensity, createPlane init, dispose cleanup
4. **`camera` adicionado ao `SceneConfig`**: `engine/types.ts` + propagado em `engine.ts buildScene`
5. **`range()` removido dos imports** de `software/scene.ts` (não mais usado)

### Arquivos modificados:
- `src/engine/types.ts` — `camera?: THREE.PerspectiveCamera` no SceneConfig
- `src/engine/engine.ts` — `buildScene` passa camera
- `src/themes/software/scene.ts` — todas as otimizações acima

## Sessão 2: Tema AI (rede neural 3D)

### Técnicas aplicadas (todas validadas: tsc 0 erros, eslint 0/0, vitest 3/3, build ok):

1. **Dirty flags**: `neuronsDirty` + `edgeColorsDirty` — setados em `runForwardPass()` (0.6s) e `applyDropout()` (3s). 44 neurons + 198 edges pulados em ~83% dos frames.
2. **`forEach` → `for`**: ripples (3), arcLines (5), spikeRings (20), setOpacity, dispose, entrance.
3. **`dissolveObjects` pre-construído**: array plano de 36 objetos, substitui `group.traverse()` por acesso O(1).
4. **Data manifold RGB pre-compute**: `manifoldClusters` ganhou `.r/.g/.b`, eliminando `Color.set(string)` 60×/frame.
5. **Bugs pré-existentes corrigidos**: removidos `rangeBetween`, `easeInOutCubic`, `easeOutQuad` (unused imports), `backpropTimer` (unused var), `attnHalf` (unused var), `config` → `_config`.

### Arquivo modificado:
- `src/themes/ai/scene.ts` — todas as otimizações acima

## Sessão 3: Tema Blockchain (force-directed graph)

### Técnicas aplicadas (todas validadas: tsc 0 erros, eslint 0/0, vitest 3/3, build ok):

1. **RGB pre-compute (#1 pior gargalo)**: `primaryRGB` / `secondaryRGB` tuples do `colorScheme`. Substitui `parseInt(hex.slice(1,3),16)/255` × 150/frame por acesso indexado direto.
2. **`forEach` → `for`**: chain wobble, validators orbit, hash particles main loop, hash spawner (6 locais).
3. **Eliminado `toRemove[]` array**: reverse `for` loop com inline splice em vez de collect→reverse→splice.
4. **`position.clone()` → `.copy()`**: `_fromVec`/`_toVec` pre-alocados na factory scope.
5. **`getWorldPosition` → direct set**: `glowSprite.position.set(0, block.mesh.position.y, block.position.z + 0.1)` em vez de matrix traversal.
6. **`setOpacity` forEach → for**: blocks, validators, chainLinks.
7. **Init `range().forEach` → for**: createMerkleTree (4 locais), initial blocks, validators, particles. Removido `range` do import.

### Arquivo modificado:
- `src/themes/blockchain/scene.ts` — todas as otimizações acima

## Sessão 4: Code review — Bugs, Code Quality, Global Optimization

### Bugs corrigidos (5):
1. **Skills.tsx**: IntersectionObserver desconectado via `onCleanup` (vazamento)
2. **Stats.tsx**: Dois blocos `onMount` unificados, sem polling rAF
3. **registry.ts**: Cache de Promise (não valor resolvido) — race condition em loadTheme
4. **engine.ts**: `_orbitTarget` pré-alocado, reusado com `.set()`
5. **blockchain/scene.ts**: `getCameraState()` reusa vectors — zero alocações/frame

### Code Quality (13):
- transition.ts: removido campo morto `transitionStart`
- ai/scene.ts: `ENTRANCE_RAMP_MS = 300`, removido `attnCellValues` morto
- software/scene.ts: glitch/freeze thresholds em `nextGlitch`/`nextFreeze`, removido `idx` morto
- blockchain/scene.ts: `Math.random()` → `randomRange()` (PRNG)
- web/scene.ts: `MAX_RADIUS`/`MAX_Z` como constantes de módulo
- 9 non-null assertions removidas em 7 arquivos
- 4 componentes: `createEffect` → `onMount` + `onCleanup`
- blockchain/theme.css: primary alinhado com engine config

### Otimizações (6):
- O7: devicon movido para devDependencies
- A7: npm audit fix → 0 vulnerabilidades
- O1: Navbar scroll com rAF debounce + passive
- O2: ScrollProgress + engine resize com passive
- O3: ai/scene hot-path Math.random → PRNG
- O6: HashParticle Vector3 → tuplas [x,y,z]

### Arquitetura (5):
- A1: Hero t() chamado 1x via callback do Show
- A4: CI cache .vinxi
- A5: Fontes self-hosted (16 woff2, 352KB)
- A6: PWA icons 192x192 + 512x512
- Google Fonts referências removidas (PWA + app.tsx)

### Auditoria follow-up (8):
- Lucide deep imports em 6 arquivos
- WebGL context lost/restored no engine.ts
- Error handling no loadTheme
- Theme index.ts factory (create-theme-module.ts)
- Diretórios vazios removidos
- ESLint solid/reactivity corrigido (i18nStore)
- @vitest/coverage-v8 + script test:coverage
- lerpColor JSDoc limitação

### Verificação final:
typecheck 0 erros, lint 0 warnings, test 121/121 passed.
