# AGENTS

## Project
Personal portfolio site built with SolidStart (SolidJS) and Vinxi.

## Tech stack
- **Framework**: SolidJS 1.9.12 + SolidStart 1.3.2
- **Bundler**: Vite 8.0.10 + Vinxi 0.5.11
- **Styling**: Tailwind CSS v4 with `@theme` tokens, `data-theme` scoping
- **UI**: Kobalte Core, Lucide Solid
- **3D Engine**: Three.js ^0.184.0 (raw API — no R3F since SolidJS doesn't have fiber equivalent)
- **Post-processing**: ShaderPass (scanline, vignette, chromatic aberration) + UnrealBloomPass (bloom/glow)
- **Node**: >=20
- **TypeScript**: 6.0.3 | **Tailwind CSS**: ^4.2.4
- **Package manager**: npm

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Static build (output: `.output/public`)
- `npm start` — Preview production build
- CI uses `npm ci` (not `npm install`); local development uses `npm install`

## Tooling (via `.opencode/opencode.json`)
- **LSP**: vtsls (TypeScript), eslint-language-server, ganko-lsp
- **MCP**: eslint, vitest testing, shadcn/ui components, radix primitives
- No configured pre-commit hooks, formatter, or test runner in the project itself.

## Architecture

### Routing
- **Entry**: `src/app.tsx` wraps router with MetaProvider (Meta, Title, Link, Script), ThemeProvider, I18nProvider.
- **File-based routing** in `src/routes/`. Active routes: `/`, `/doom`.
- **Prerender**: Configured in `app.config.ts` for `/` and `/doom`. Crawls links.
- **Aliases**: `~/` resolves to `./src/` (configured in `tsconfig.json` and `vite.config.ts`).

### I18n (`src/stores/i18nStore.tsx`, `src/providers/I18nProvider.tsx`)
- Context-based via `createContext<I18nContextValue>()`.
- Languages: `Language.PtBr = "pt-br"`, `Language.En = "en"` (default `PtBr`).
- localStorage key: `"portfolio-language"`.
- Data: `/data/languages/${lang}.json` (messages) + `/data/portfolio_shared_data.json` (shared).
- `t(key)` helper uses nested dot-notation lookup (e.g., `t("navbar.home")`).
- `<I18nProvider>` wraps entire app in `app.tsx`.
- Preconnects in `entry-server.tsx`: `fonts.googleapis.com`, `fonts.gstatic.com`.

### Async Data Pattern
`sharedData` and `messages` are loaded asynchronously via `fetch` inside `I18nProvider.onMount` — they are NOT available during SSR. Components consuming these values **must** guard with `<Show when={data()}>` to prevent rendering with `undefined` values. Example: `<Show when={name()}><TypewriterText text={name()} /></Show>`.

### 3D Engine (`src/engine/`)
Pure functional engine, zero SolidJS imports. No classes — all state in closures via factory functions.
- **`engine.ts`** — Orchestrator: creates scene/camera/renderer/composer, manages disposal and theme switching. Entry point via `createEngine()` factory.
- **`transition.ts`** — Crossfade manager: receives `onDispose: (SceneHandle) => void` callback. Handles FadeOut (old scene dissolve) → FadeIn (new scene entrance). `FADE_DURATION = 800ms`, `TransitionPhase` enum (Idle, FadingOut, FadingIn). Import `easeInOutCubic` from `math.ts`.
- **`math.ts`** — Pure easing functions: `easeInOutCubic`, `clamp01`, etc.
- **`types.ts`** — Shared interfaces: `SceneHandle`, `SceneConfig`, `ThemeModule`, `ColorScheme`, `CameraPreset`, `PostProcessPreset`. `SceneKind` enum.

### Theme System (`src/themes/`)
Modular plug-in architecture. Each theme is a self-contained directory:
```
src/themes/
├── registry.ts        — frozen `REGISTRY: Readonly<Record<ThemeId, ThemeModule>>`
├── ai/
│   ├── index.ts       — exports ThemeModule (sceneKind, colorScheme, createScene, cameraPreset, postPreset)
│   ├── scene.ts       — Three.js scene factory (3D neural network)
│   ├── types.ts       — theme-specific types
│   └── theme.css      — `[data-theme="ai"]` CSS custom properties
├── blockchain/
│   ├── index.ts       — force-directed graph (chain nodes, wallet nodes, transaction particles)
│   ├── scene.ts
│   ├── types.ts
│   └── theme.css
├── software/
│   ├── index.ts       — data pipeline (processing stages, Bezier curves, data flow)
│   ├── scene.ts
│   ├── types.ts
│   └── theme.css
└── web/
    ├── index.ts       — network topology (hub, satellites, request/response packets)
    ├── scene.ts
    ├── types.ts
    └── theme.css
```

**ThemeModule contract** (defined in `src/engine/types.ts`):
```ts
interface ThemeModule {
  readonly sceneKind: SceneKind;      // ai | blockchain | software | web
  readonly colorScheme: ColorScheme;
  readonly createScene: (config: SceneConfig) => SceneHandle;
  readonly cameraPreset: CameraPreset;
  readonly postPreset: PostProcessPreset;
}
```

**CSS Architecture**: `app.css` has single `@theme {}` block with base tokens (defaults to AI theme). Each theme's `.css` file uses `[data-theme="x"]` scope to override colors and post-processing intensities. All theme CSS files are static `@import` in `app.css`.

### SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` `<head>` reads `localStorage.getItem('portfolio-theme')` and sets `document.documentElement.setAttribute('data-theme', t)` before first paint. The `<html>` tag in `entry-server.tsx` has `data-theme="ai"` as the SSR fallback.

### SolidJS ↔ Engine Bridge
- **`src/components/NeuralCanvas.tsx`** — Thin SolidJS wrapper. Reads `theme()` signal, calls `engine.setTheme()` on changes. Creates `requestAnimationFrame` loop via `onMount` / `onCleanup`. Owns the `<canvas>` element.

### ThemeStore (`src/stores/themeStore.ts`)
- `ThemeId = "ai" | "blockchain" | "software" | "web"`
- `getInitialTheme()` always returns `"ai"` — all visitors start on AI theme.
- localStorage key: `"portfolio-theme"`.

### Camera Frustum Math
Three.js `PerspectiveCamera` uses **vertical FOV**. With FOV=55°, aspect=16:9: **visibleWidth ≈ 1.85 × orbitRadius** at z=0. Use `camera.getViewSize(distance, new THREE.Vector2())` for programmatic lookups.

**Camera Presets** (all FOV=55, heightFrequency=0.5, autoRotate=true): `AI(orbit=14,spd=0.02,h=5,θ=π/2) Blockchain(12,0.02,3,π/4) Software(10,0.015,2,0) Web(11,0.015,1.5,0)`

**Post-process Presets** (bloom=bloomStrength, s=scanlineIntensity, v=vignetteStrength, c=chromaticStrength): `AI(bloom=0.4,s=0.15,v=0.35,c=0.003) Blockchain(bloom=0.5,s=0.08,v=0.35,c=0.003) Software(bloom=1.0,s=0.18,v=0.4,c=0.004) Web(bloom=0.5,s=0.05,v=0.15,c=0.003)`

**Theme Color Schemes** (primary, secondary, tertiary, background): `AI(#00E5FF,#10A37F,#8B5CF6,#080012) Blockchain(#F7931A,#00BFA5,#627EEA,#0D1117) Software(#00FF41,#006622,#FFFFFF,#000000) Web(#0000EE,#551A8B,#CC0000,#F8F9FA)`

### Post-Processing Notes
- **`antialias: true` on WebGLRenderer has NO effect with EffectComposer.** MSAA only works when rendering directly to the default framebuffer. If antialiasing is needed, use an FXAA or SMAA pass at the end of the chain.
- `pixelRatio` capped at `Math.min(devicePixelRatio, 2)`.
- Bloom breathing: modulates `bloomStrength` by `baseStrength * (0.5 + density)` where `baseStrength` comes from the theme's `postPreset.bloomStrength`. Only works for scenes that export `getDensity()` — **AI** and **Software** have it; **Blockchain** and **Web** do NOT.
- Resize order should be: `camera.aspect = w/h` → `camera.updateProjectionMatrix()` → `renderer.setSize(w, h)` → `composer.setSize(w, h)`. Current code sets renderer size before camera update.

## Build & Deploy
- Static preset (`server: { preset: "static" }`).
- CI deploys to GitHub Pages on push/PR to `main` (`.github/workflows/deploy.yml`).
- Build artifact uploaded from `.output/public`.

## Conventions
- JSX import source is `solid-js`.
- Strict TypeScript, no emit, bundler module resolution.
- No configured test runner, linter, or formatter.

### TypeScript strictness
- **NEVER use `any`.** Prefer `unknown` and narrow with type guards. If a type is truly dynamic, use `Record<string, unknown>`.
- **ALWAYS use `enum` for categorization.** Any set of discrete variants (phases, states, modes, themes, categories) MUST be an `enum`, never string unions or magic constants. `enum` provides a single source of truth and compiler-verified exhaustiveness.
- Function parameters and return types must be explicitly typed — avoid implicit inference for public APIs.

### Functional programming conventions
- **Pure functions**: all computation returns new values, never mutates inputs.
- **Immutability**: `Object.freeze`, `Readonly<>`, spread operators on arrays, `readonly T[]`.
- **enum for all discrete states**: `SceneKind`, `TransitionPhase`.
- **No classes**: all state encapsulated in closures via factory functions.

### SolidJS Reactivity Conventions
- **Typewriter/interval animations MUST use `onMount` + `setInterval`/`setTimeout`, never `createEffect`.**
  SolidJS effects only track signals read **synchronously** within the effect callback body. Signals read inside async callbacks (`setTimeout`, `setInterval`, event handlers) are invisible to the reactivity system — the effect will run once and never re-trigger. This is intentional SolidJS behavior (same in Vue and MobX).
  See `TypewriterText.tsx` and `RotatingTypewriter.tsx` for the canonical pattern: `onMount(() => { const timer = setInterval(() => { ... }); onCleanup(() => clearInterval(timer)); })`.
- **If you MUST use `createEffect` with async (e.g., RotatingTypewriter delete cycle), read the signal synchronously BEFORE the timer:**
  `createEffect(() => { const val = displayText(); setTimeout(() => { /* use val */ }); })`. The synchronous read makes `displayText` a tracked dependency so the effect re-fires on each character. Omitting this causes the bug where only 1 character advances.
- `setInterval`/`setTimeout` at component top-level (outside `onMount`) creates intervals during SSR, which is a memory leak. Always wrap in `onMount` + `onCleanup`.
- **Hero animation assignment**: Name → `TypewriterText` (type-once, cursor vanishes after). Titles → `RotatingTypewriter` (cycle with delete). Do NOT use `GlitchText` for the name — GlitchText is for decorative scramble effects only.

### 3D Scene Conventions
- Each scene is a pure factory function (`SceneConfig → SceneHandle`).
- `SceneHandle.getObjects()` returns `readonly THREE.Object3D[]` — engine adds/removes from main scene.
- `SceneHandle.setOpacity(t: number)` — used by transition manager during crossfade.
- `SceneHandle.dispose()` — tears down GPU resources (geometries, materials, textures).
- All rendering uses `UnrealBloomPass` for cinematic glow effect.
- Materials that need absolute opacity overrides (e.g. blockchain) must snapshot base via `userData._baseOpacity` to avoid multiplicative drift.

## Gotchas
- `engine.setTheme()` has a same-theme guard at the top: `if (currentModule?.sceneKind === m.sceneKind) return;` — clicking the same theme pill should never rebuild the scene.
- `TransitionManager` receives `onDispose` as a callback parameter — ensures `mainScene.remove(obj)` always pairs with `handle.dispose()`. Same callback fires on abort (rapid theme switch) to prevent orphan GPU objects.
- `camera.lookAt(0, 0, 0)` called every frame in the render loop. If you change the lookAt target, update in `engine.ts`.
- `body { overflow-x: hidden }` in `app.css` — full-bleed elements need explicit width handling.
- AI scene's `onKeyPress` method exists in source but is **not exported** from `createAIScene` — keyboard routing only works for Software theme.
- `renderer.toneMapping = ACESFilmicToneMapping`, `toneMappingExposure = 1.2` — global, affects all themes.
- Transition kills pending scene on rapid theme switching — may cause visual glitch.
- `--color-accent-red: #FE4450` is universal (not theme-specific) — used for semantic elements like heart icon, status dots.
- Lehmer PRNG in `math.ts` has a module-level mutable seed (initially 42) shared across all scenes — re-instantiating scenes doesn't reset it.
- Font weights differ between `entry-server.tsx` (JetBrains Mono `400;500`) and `app.tsx` (JetBrains Mono `400;500;600;700`). If font rendering looks inconsistent, align these.
- `disposeScene` callback must be defined before `createTransitionManager(disposeScene)` in `engine.ts` — order matters due to closure capture in the transition manager.
