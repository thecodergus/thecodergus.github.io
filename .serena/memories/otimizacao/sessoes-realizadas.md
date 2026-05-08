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
