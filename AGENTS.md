# AGENTS

## Project
Personal portfolio site built with SolidStart (SolidJS) and Vinxi.

## Tech stack
- **Framework**: SolidJS 1.9.12 + SolidStart 1.0.11
- **Bundler**: Vite 7.3.2 + Vinxi 0.5.11
- **Styling**: Tailwind CSS v4 with `@theme` tokens, `data-theme` scoping
- **UI**: Kobalte Core, Lucide Solid
- **3D Engine**: Three.js ^0.184.0 (raw API — no R3F since SolidJS doesn't have fiber equivalent)
- **Post-processing**: ShaderPass (scanline, vignette, chromatic aberration) + UnrealBloomPass (bloom/glow)
- **Node**: >=20
- **TypeScript**: 6.0.3 | **Tailwind CSS**: ^4.2.4
- **Package manager**: npm

## Commands
- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Static build (output: `.output/public`)
- `npm start` — Preview production build
- `npm run test:coverage` — Coverage report via `@vitest/coverage-v8`
- CI uses `npm ci` (not `npm install`); local development uses `npm install`

## Tooling
- **Lint**: ESLint 9 + `typescript-eslint` + `eslint-plugin-solid`. Key rules: `solid/no-destructure: error`, `solid/reactivity: warn`, `solid/jsx-no-undef: error`. Run: `npm run lint` / `npm run lint:fix`.
- **Test**: Vitest 4, jsdom environment, globals mode. Test pattern: `src/**/*.test.{ts,tsx}`. Setup file: `vitest.setup.ts`. Run: `npm run test` / `npm run test:watch`.
- **Typecheck**: `tsc --noEmit`. Run: `npm run typecheck`.
- **Verification order** (matches CI): `typecheck → lint → test`. Fastest failure first.
- No pre-commit hooks configured.
- **LSP** (via `.opencode/opencode.json`): vtsls, eslint-language-server, ganko-lsp, tailwindcss-language-server, json
- **MCP** (via `.opencode/opencode.json`): eslint, vitest testing, shadcn/ui, radix primitives, lighthouse, perf-tools
- **TypeScript 6.0.3**: `baseUrl` is deprecated — use `paths` with explicit patterns. `vinxi/types/client` (not `vinxi/client` — the latter doesn't exist, SolidStart issue #1454). Include `"vitest/globals"` in `types` for test globals.

### Test Architecture (163 tests across 8 files)
- **`src/engine/math.test.ts`** — 93 tests: Vec3 construction, arithmetic, normalization, dot/length/dist, lerp, easings, PRNG determinism.
- **`src/engine/transition.test.ts`** — 18 tests: state machine (Idle→FadingOut→FadingIn→Idle), opacity/dissolve/entrance callbacks, abort handling, timing (800ms total), `forceScene` method.
- **`src/engine/quality.test.ts`** — 10 tests: GPU tier detection, pixelRatio cap, config freezing.
- **`src/stores/themeStore.test.ts`** — 3 tests: initial theme signal (always SceneKind.AI), THEMES array, REGISTRY keys.
- **`src/stores/i18nStore.test.tsx`** — 19 tests: module-level signal defaults, `t()` nested key resolution/fallbacks, `setLanguage` signal+localStorage, fetchError handling.
- **`src/hooks/socialIcons.test.tsx`** — 11 tests: SOCIAL_ICON_MAP structure, resolveSocialIcon matching.
- **`src/hooks/createVisibilityObserver.test.tsx`** — 6 tests: observer creation, threshold defaults, intersection detection, cleanup.
- **`src/components/I18nErrorBanner.test.tsx`** — 4 tests: null state, error display, dismissal, signal reactivity.
- Test mocking: `localStorage` via closure mock; `HTMLCanvasElement.prototype.getContext` and `navigator.deviceMemory` in quality test; `globalThis.fetch` in i18n tests.
- **`vi.mock()` required for lucide-solid imports in tests** — lucide-solid triggers "Client-only API" SSR detection during module evaluation. Always mock icon components: `vi.mock("lucide-solid/icons/x", () => ({ default: () => {} }))`.

## Architecture

### Routing
- **Entry**: `src/app.tsx` wraps router with MetaProvider, I18nProvider.
- **File-based routing** in `src/routes/`. Active routes: `/`, `/doom`.
- **Prerender**: Configured in `app.config.ts` for `/` and `/doom`. Crawls links.
- **Aliases**: `~/` → `./src/` (tsconfig + vite.config).

### I18n (`src/stores/i18nStore.tsx`)
- Context-based via `createContext<I18nContextValue>()`.
- Languages: `Language.PtBr = "pt-br"`, `Language.En = "en"` (default `PtBr`).
- localStorage key: `"portfolio-language"`.
- Data: `/data/languages/${lang}.json` (messages) + `/data/portfolio_shared_data.json` (shared).
- **`t(key, defaultValue?)`** helper — nested dot-notation lookup. Used by ALL components (38 call sites in 10 files). Falls back to `defaultValue` when messages aren't loaded or key missing.
- `<I18nProvider>` wraps entire app in `app.tsx`. `onMount` fetches sharedData + messages, syncs language signal from localStorage before fetching.
- **`setLanguage(lang)`** — exported from module (also in context). Updates signal, persists to localStorage, re-fetches messages.
- **`fetchError` signal** — null on success, error message string on failure.
- **Fallback strings**: ~21 hardcoded fallbacks across components — all in Portuguese (default language).
- `entry-server.tsx` has `<html lang="pt-br">` hardcoded. LANG_SCRIPT in `app.tsx` corrects `document.documentElement.lang` and skip link text from localStorage on client.
- **Structured data**: `entry-server.tsx` exports `StructuredData` interface for typed JSON-LD.

### Async Data Pattern
`sharedData` and `messages` are loaded asynchronously via `fetch` in `I18nProvider.onMount` — NOT available during SSR. Components consuming these **must** guard with `<Show when={data()}>`.

### 3D Engine (`src/engine/`)
Pure functional engine, zero SolidJS imports. No classes — all state in closures via factory functions.

| File | Role |
|------|------|
| `engine.ts` | Orchestrator: renderer, scene, camera, composer, animation loop, camera orbit, keyboard routing, theme switching, resize. Entry: `createEngine()` |
| `transition.ts` | Crossfade manager: FadeOut→FadeIn, 800ms total. `TransitionPhase` enum. `forceScene()` for context restore. |
| `math.ts` | Pure easing functions, Lehmer PRNG (shared mutable seed=42) |
| `quality.ts` | GPU tier detection: low/medium/high. On `low` tier, EffectComposer disabled. |
| `canvasTexture.ts` | Shared `createCanvasTexture(options, draw)` factory. Used by blockchain, software, web themes. |
| `types.ts` | `SceneHandle`, `SceneConfig`, `ThemeModule`, `ColorScheme`, `CameraPreset`, `PostProcessPreset`, `SceneKind` enum |

### Theme System (`src/themes/`)
Modular plug-in architecture. Each theme is a self-contained directory:
```
src/themes/
├── registry.ts                  — frozen REGISTRY; loadTheme() with Promise cache
├── create-theme-module.ts       — factory: ThemeConfig → ThemeModule
├── ai/          — 3D neural network (forward/backward pass, attention, manifolds)
├── blockchain/  — force-directed graph (chain nodes, wallet nodes, transaction particles)
├── software/    — data pipeline (processing stages, Bezier curves, falling text)
└── web/         — network topology (hub, satellites, request/response packets)
```

Each has `index.ts` (pure data, ~33 lines), `scene.ts` (Three.js factory), `types.ts`, `theme.css`. All use `createThemeModule()` from `src/themes/create-theme-module.ts`. `Object.freeze` handled by factory.

`loadTheme(id)` returns `Promise<ThemeModule | null>` — caches the promise, errors clear cache.

**CSS Architecture**: `app.css` has `@theme {}` block with base tokens (defaults to AI theme — values intentionally duplicated from `ai/theme.css`). Each theme's `.css` uses `[data-theme="x"]` scope. All theme CSS files are static `@import` in `app.css`.

### ThemeStore (`src/stores/themeStore.ts`)
- Uses `SceneKind` enum from `src/engine/types.ts` (not string union).
- `getInitialTheme()` always returns `SceneKind.AI` — all visitors start on AI theme.
- localStorage key: `"portfolio-theme"`.

### SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` `<head>` reads `localStorage.getItem('portfolio-theme')` and sets `data-theme` before first paint. SSR fallback: `<html data-theme="ai">` in `entry-server.tsx`.

### SolidJS ↔ Engine Bridge
- **`src/components/NeuralCanvas.tsx`** — Reads `theme()` signal, calls `engine.setTheme()` on changes. Owns `<canvas>`, runs `requestAnimationFrame` loop via `onMount`/`onCleanup`.

### Shared Hooks (`src/hooks/`)
- **`createVisibilityObserver.ts`** — Reusable `IntersectionObserver` via `onMount`/`onCleanup`. Accepts `threshold` (default 0.15), returns `isVisible` signal. Used by About, Contact, Projects, Experience, Skills, Stats.
- **`socialIcons.ts`** — Shared `SOCIAL_ICON_MAP` (Record of platform → icon component) and `resolveSocialIcon(imgAlt)` helper. Used by Hero and Contact.

### Component Patterns
- **`I18nErrorBanner.tsx`** — Dismissible alert banner. Reads `fetchError` signal from i18n context. Renders in `routes/index.tsx`, `doom.tsx`, `NotFoundPage.tsx` inside `<Show when={fetchError()}>`.
- **ErrorBoundary** — All 7 section components in `routes/index.tsx` are wrapped in `<ErrorBoundary fallback={() => null}>`. Graceful degradation — section silently removed on error.
- **DOOM page** (`routes/doom.tsx`) — JS-DOS **NOT loaded at page load**. User clicks "Launch DOOM" button → dynamic `<script>` element injected to fetch the ~4MB JS-DOS bundle. Loading spinner shown during fetch.

### Image Pipeline
- All images in `public/images/` are **WebP** (quality 82, ~79% smaller than PNG/JPG).
- Conversion script: `scripts/convert-to-webp.mjs` (uses `sharp` dev dependency).
- **i18n JSON references MUST use `.webp` extension** — `pt-br.json`, `en.json`, and `portfolio_shared_data.json` all reference `.webp` paths.

### Vitest Configuration Gotchas
- `vitest.config.ts` requires **both** `resolve.conditions: ["browser"]` and `plugins: [solid()]` with `transformMode: { web: [/.[jt]sx?$/] }` for component tests to work.
- `vitest.setup.ts` needs `(globalThis as Record<string, unknown>).React = {}` — SolidJS dev build expects a global React object for devtools compatibility.
- **`vi.mock()` for lucide-solid**: icon modules trigger "Client-only API" SSR detection during module evaluation in jsdom. Always mock: `vi.mock("lucide-solid/icons/x", () => ({ default: () => {} }))`.

### Camera / Post-process / Color data
See `.opencode/references/project-conventions.md` for full preset tables (camera, post-process, color schemes). Key facts:

### Post-Processing Notes
- **`antialias: true` on WebGLRenderer has NO effect with EffectComposer.** MSAA only works rendering to default framebuffer. Use FXAA (already in engine).
- `pixelRatio` capped at `Math.min(devicePixelRatio, 2)`.
- Bloom breathing: only for scenes with `getDensity()` — **AI** and **Software**.
- Resize order: `camera.aspect = w/h` → `camera.updateProjectionMatrix()` → `renderer.setSize(w, h)` → `composer.setSize(w, h)`.

## Build & Deploy
- Static preset. CI: `typecheck → lint → test` → `build → gh-pages`.
- PWA via `vite-plugin-pwa`. Three.js bundles excluded from precaching.
- Build from `.output/public`; `_server` cleaned; `.nojekyll` added.
- Three.js split into `three`, `three-examples`, `vendor` manual chunks in `vite.config.ts`.

## Conventions
- **Lucide Solid**: deep imports only (`lucide-solid/icons/component-name`). Barrel imports pull ~400KB.
- JSX import source is `solid-js`. Strict TypeScript, no emit, bundler resolution.

### TypeScript
- **NEVER `any`.** Prefer `unknown` → narrowing.
- **ALWAYS use `enum` for categorization.** Any set of discrete variants MUST be an `enum`, never string unions. `SceneKind`, `TransitionPhase`, `Language` all follow this.
- Explicit types on public APIs. **Non-null assertions (`!`) prohibited.**

### Functional Programming
- Pure functions, immutability (`Object.freeze`, `Readonly<>`, `readonly T[]`), no classes (closures only).

### SolidJS Reactivity
- **Animations MUST use `onMount` + `setInterval`/`setTimeout`, never `createEffect`.** Signals inside async callbacks are invisible to the reactivity tracker.
- If `createEffect` + async is unavoidable, read the signal synchronously BEFORE the timer: `const val = displayText(); setTimeout(() => { /* use val */ })`.
- `setInterval`/`setTimeout` outside `onMount` creates SSR memory leaks. Always wrap in `onMount` + `onCleanup`.
- **Hero**: Name → `TypewriterText` (type-once). Titles → `RotatingTypewriter` (cycle+delete). Do NOT use `GlitchText` for name.

### 3D Scene Conventions
- Factory function `SceneConfig → SceneHandle`. `getObjects()` returns `readonly THREE.Object3D[]`.
- `dispose()` tears down ALL GPU resources (geometries, materials, textures, canvas textures).
- Materials needing absolute opacity must snapshot base via `userData._baseOpacity`.

## Gotchas
- **GLSL 3.0 ES**: NEVER include `#version 300 es` in ShaderMaterial source. Three.js 0.184 hardcodes it. Set `material.glslVersion = THREE.GLSL3` and declare `out vec4 fragColor;`.
- `engine.setTheme()` has same-theme guard: `if (currentModule?.sceneKind === m.sceneKind) return;`.
- `camera.lookAt(0, 0, 0)` every frame. Change target → update `engine.ts`.
- `body { overflow-x: hidden }` → full-bleed elements need explicit width.
- Only Software theme exports `onKeyPress` for keyboard easter egg.
- `quality.ts`: use `(getParameter(UNMASKED_RENDERER_WEBGL) ?? "").toLowerCase()`, never `?.toLowerCase()` (Firefox/Safari).
- Global keydown handler skips INPUT/TEXTAREA/SELECT/contentEditable.
- `toneMapping = ACESFilmicToneMapping`, `toneMappingExposure = 1.2` — global.
- `--color-accent-red: #FE4450` is universal (heart, status dots).
- Lehmer PRNG seed (42) is shared across all scenes; re-instantiating scenes doesn't reset it.
- **Fonts self-hosted**: 16 `.woff2` in `public/fonts/`, `@font-face` in `public/fonts/fonts.css`. No external requests.
- `disposeScene` must be defined before `createTransitionManager(disposeScene)` — order matters for closure capture.
- **Module-level `createSignal` MUST NOT read `localStorage` during init** — causes SSR/client hydration mismatch. `getInitialLanguage()` and `getInitialTheme()` both always return their default; `onMount` syncs with localStorage.
- **WebGL context loss**: handlers on `canvas`. Context lost → render loop skips. **Context restore → rebuilds entire scene via `transitionManager.forceScene()`** (not just flag reset).
- **CSS theme colors ≠ TypeScript colorScheme**: separate systems. CSS controls UI, TypeScript controls 3D scene elements.
- **`lerpColor()`** only supports 6-char hex (`#RRGGBB`).
- **ESLint `solid/reactivity` in i18nStore**: read signal synchronously before `.then()` chains.
- **`canvasTexture.ts` filter types**: Three.js uses distinct `MinificationTextureFilter`/`MagnificationTextureFilter` types. Cast with `as` when assigning `LinearFilter` defaults.
- **`@theme` block in `app.css`** intentionally duplicates `ai/theme.css` values — it's Tailwind v4 token registration. Other themes override via `[data-theme="..."]` selectors.
- **AI scene now respects `config.colorScheme`** — LAYERS, neurons, edges, ripple rings, manifolds all derive colors from the passed scheme. Only attention yellow (`#F5C842`) is a scene-internal constant.
- **ESLint config is `eslint.config.js`** (CommonJS-like `export default` syntax), not `.ts`. Includes `solid/reactivity: warn`, `solid/no-destructure: error`.
- **WCAG AA `text-muted`**: changing a theme's color scheme may require updating `--color-text-muted` in all 4 theme CSS files (`src/themes/{ai,blockchain,software,web}/theme.css`) plus base `@theme` block in `app.css`.
- **Images are WebP**: `public/images/` contains only `.webp` files. i18n JSON (`pt-br.json`, `en.json`, `portfolio_shared_data.json`) references `.webp` extensions. Use `sharp` + `scripts/convert-to-webp.mjs` to convert new images.
