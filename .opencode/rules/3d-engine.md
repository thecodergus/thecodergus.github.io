---
globs:
  - "src/engine/**/*.ts"
  - "src/themes/**/*.ts"
keywords:
  - "three.js"
  - "scene"
  - "dispose"
  - "transition"
  - "bloom"
  - "camera"
match: any
---

# 3D Engine Rules (Three.js)

## Regra 1: Factory functions, nunca classes

Toda estado é encapsulado em closures via factory functions.
Zero classes no engine.

```ts
// ✅ Correto
function createEngine(canvas: HTMLCanvasElement): EngineHandle {
  const scene = new THREE.Scene();
  return { setTheme, dispose, getRenderer };
}

// ❌ Errado
class Engine { ... }
```

## Regra 2: SceneHandle.dispose() SEMPRE libera GPU resources

Todo `SceneHandle` deve implementar `dispose()` que libera geometrias,
materiais e texturas. O TransitionManager chama dispose via callback
`onDispose` durante crossfade.

**Garantia:** `mainScene.remove(obj)` sempre emparelha com `handle.dispose()`.

## Regra 3: Cuidado com module-level mutable state

Lehmer PRNG em `math.ts` tem seed mutável (inicialmente 42) compartilhada
entre todas as cenas. Re-instanciação de cenas não reseta o seed.

Se precisar de PRNG determinístico por cena, instancie localmente.

## Regra 4: antialias:true no WebGLRenderer NÃO funciona com EffectComposer

MSAA só funciona renderizando direto no framebuffer padrão. Com
EffectComposer + post-processing, use FXAA ou SMAA pass no fim da chain.

## Regra 5: Ordem de resize

Sempre nesta ordem:
1. `camera.aspect = w / h`
2. `camera.updateProjectionMatrix()`
3. `renderer.setSize(w, h)`
4. `composer.setSize(w, h)`

## Regra 6: engine.setTheme() tem guard de mesmo tema

```ts
if (currentModule?.sceneKind === m.sceneKind) return;
```

Clique no mesmo pill NUNCA reconstrói a cena. Se precisar forçar
reconstrução, mude o tema e volte.

## Regra 7: Transições

- `FADE_DURATION = 800ms`
- TransitionPhase enum: Idle → FadingOut → FadingIn
- `easeInOutCubic` para interpolação
- `onDispose` callback garante cleanup mesmo em abort (troca rápida)

## Regra 8: Bloom breathing

Funciona apenas para cenas que exportam `getDensity()`: **AI** e
**Software**. Blockchain e Web NÃO têm `getDensity()`.
`bloomStrength` = `baseStrength * (0.5 + density)`.

## Regra 9: pixelRatio cap

```ts
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
```

## Regra 10: camera.lookAt(0, 0, 0)

Chamado todo frame no render loop. Se mudar o target, atualize em
`engine.ts`.
