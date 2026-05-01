# Modular Theme System

## Architecture
Each theme is a self-contained directory under `src/themes/`:
```
src/themes/<name>/
├── index.ts       — Module entry: exports ThemeModule
├── scene.ts       — Three.js scene factory (SceneConfig → SceneHandle)
├── types.ts       — Theme-specific types/enums
└── theme.css      — [data-theme="<name>"] CSS custom properties
```

## ThemeModule Contract (src/engine/types.ts)
```ts
interface ThemeModule {
  readonly sceneKind: SceneKind;
  readonly colorScheme: ColorScheme;
  readonly createScene: (config: SceneConfig) => SceneHandle;
  readonly cameraPreset: CameraPreset;
  readonly postPreset: PostProcessPreset;
}
```

## Registry (src/themes/registry.ts)
```ts
export const REGISTRY: Readonly<Record<ThemeId, ThemeModule>> = Object.freeze({
  ai: aiModule,
  blockchain: blockchainModule,
  software: softwareModule,
  web: webModule,
});
```
Used in `engine.setTheme()`: looks up module by theme id, builds scene via `createScene()`.

## CSS Architecture
- `app.css` has single `@theme {}` block with base tokens (defaults to AI theme)
- Each theme `.css` uses `[data-theme="x"]` scope to override colors
- All theme CSS files are static `@import` in `app.css` (lines 2-5)
- `--color-accent-red: #FE4450` is universal (not theme-specific) — used for semantic elements (heart, status dots)
- Other accents (green, purple, cyan, yellow) switch per theme via `data-theme` overrides

## Camera & Post-Processing
- Each theme declares `cameraPreset` (position, target, FOV) and `postPreset` (bloom/scanline/vignette/chromatic intensities)
- `engine.ts` applies presets when switching themes

## SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` `<head>`:
```js
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
```
Sets `data-theme` before first paint to prevent flash of wrong theme colors.

## Bridge: NeuralCanvas.tsx
Thin SolidJS wrapper component. Reads `theme()` signal, calls `engine.setTheme(REGISTRY[id])` on changes. Creates `requestAnimationFrame` loop. Owns `<canvas>` element.
