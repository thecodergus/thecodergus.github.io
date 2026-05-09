# thecodergus.github.io — Portfolio Site

## Tech Stack (exact versions)
- **Framework**: SolidJS 1.9.12 + SolidStart 1.0.11
- **Bundler**: Vite 7.3.2 + Vinxi 0.5.11
- **Styling**: Tailwind CSS v4.2.4 with `@theme` tokens, `data-theme` scoping
- **UI**: Kobalte Core 0.13.11, Lucide Solid 0.562.0, devicon 2.16.0
- **3D**: Three.js ^0.184.0 (raw API, no R3F), ShaderPass (scanline/vignette/chromatic) + UnrealBloomPass (bloom)
- **Language**: TypeScript 6.0.3, Node >=20, npm

## Architecture

### Routing
- Entry: `src/app.tsx` wraps with MetaProvider → I18nProvider → FileRoutes
- Routes: `/` (index.tsx), `/doom` (doom.tsx)
- Prerender: `app.config.ts` with `crawlLinks: true`, static preset → `.output/public`
- Alias: `~/` → `./src/`

### I18n
- Context-based, `Language.PtBr` (default), `Language.En`
- localStorage key: `"portfolio-language"`
- Data: `/data/languages/${lang}.json` + `/data/portfolio_shared_data.json`
- `t(key, defaultValue?)` helper with dot-notation: `t("navbar.home")`
- `I18nErrorBanner` component reads `fetchError` signal, dismissible alert

### Stores
- `themeStore.ts`: uses `SceneKind` enum from `types.ts`, localStorage `"portfolio-theme"`, initial always `SceneKind.AI`
- `i18nStore.tsx`: language context with async `fetch` in `I18nProvider.onMount`, `t()` helper at 38 call sites

### Hooks (`src/hooks/`)
- `createVisibilityObserver.ts`: Reusable IntersectionObserver (threshold 0.15), used by 6 section components
- `socialIcons.ts`: Shared SOCIAL_ICON_MAP + resolveSocialIcon(imgAlt), used by Hero and Contact

### Components (17 .tsx files)
- ErrorBoundary wraps all 7 section components in `routes/index.tsx` — graceful degradation
- DOOM page: JS-DOS lazy-loaded on button click (~4MB download deferred)
- `I18nErrorBanner.tsx`: fetchError alert, shown in index, doom, NotFoundPage

### Test Architecture (163 tests, 8 files)
- `math.test.ts` (93), `transition.test.ts` (18 — includes forceScene), `quality.test.ts` (10), `themeStore.test.ts` (3), `i18nStore.test.tsx` (19), `socialIcons.test.tsx` (11), `createVisibilityObserver.test.tsx` (6), `I18nErrorBanner.test.tsx` (4)

### 3D Engine (`src/engine/`)
- Pure functional, no classes, closures with factory functions
- `engine.ts`: scene/camera/renderer/composer, orbit logic, bloom breathing
  - Renderer: `WebGLRenderer({ antialias: true, alpha: true })`, `pixelRatio ≤ 2`, toneMapping `ACESFilmic`, exposure `1.2`
  - Camera: `PerspectiveCamera(55, aspect, 0.1, 100)`, orbits with `lookAt(0,0,0)` every frame
  - Orbit: angle += `orbitSpeed * delta * 0.001`, height `sin(angle * freq) * amplitude`, lerp `0.03`
  - Bloom breathing: `baseStrength * (0.5 + density)` — only for scenes with `getDensity()` (AI, Software)
- `transition.ts`: FadeOut/FadeIn, `FADE_DURATION=800ms`, `easeInOutCubic`, kills pending if new transition starts
- `math.ts`: easing functions, clamp, vec3/vec2 utilities, Lehmer PRNG (global seed=42)

### Theme System (`src/themes/`)
Registry frozen at `src/themes/registry.ts`. Each theme: `index.ts` (ThemeModule), `scene.ts` (Three.js factory), `theme.css` (CSS vars scoped to `[data-theme]`).

**ThemeModule**: `{ sceneKind, colorScheme, createScene, cameraPreset, postPreset }`

## Camera Frustum Math
From Three.js: `visibleHeight = 2 × tan(FOV_rad / 2) × distance`, `visibleWidth = visibleHeight × aspect`
With FOV=55°, aspect=16:9: **visibleWidth ≈ 1.85 × orbitRadius** at z=0.

## Camera Presets (all FOV=55, heightFrequency=0.5, autoRotate=true)

| Theme      | orbitRadius | orbitSpeed | heightAmplitude | initialAngle |
|------------|-------------|------------|-----------------|--------------|
| AI         | 14          | 0.02       | 5               | π/2          |
| Blockchain | 12          | 0.02       | 3               | π/4          |
| Software   | 10          | 0.015      | 2               | 0            |
| Web        | 11          | 0.015      | 1.5             | 0            |

## Post-Process Presets

| Theme      | bloomStrength | bloomRadius | bloomThreshold | scanlineIntensity | vignetteStrength | chromaticStrength |
|------------|---------------|-------------|----------------|-------------------|------------------|-------------------|
| AI         | 0.4           | 0.4         | 0.1            | 0.15              | 0.35             | 0.003             |
| Blockchain | 0.5           | 0.5         | 0.2            | 0.08              | 0.35             | 0.003             |
| Software   | 1.0           | 0.5         | 0.2            | 0.18              | 0.4              | 0.004             |
| Web        | 0.5           | 0.4         | 0.15           | 0.05              | 0.15             | 0.003             |

## Color Schemes

| Theme      | primary | secondary | tertiary | background |
|------------|---------|-----------|----------|------------|
| AI         | #00E5FF | #10A37F   | #8B5CF6  | #080012    |
| Blockchain | #F7931A | #00BFA5   | #627EEA  | #0D1117    |
| Software   | #00FF41 | #006622   | #FFFFFF  | #000000    |
| Web        | #0000EE | #551A8B   | #CC0000  | #F8F9FA    |

## Gotchas
- GLSL 3.0 ES: NEVER include `#version 300 es` in `ShaderMaterial` source. Set `material.glslVersion = THREE.GLSL3`, declare `out vec4 fragColor;` explicitly.
- `quality.ts`: `getParameter(UNMASKED_RENDERER_WEBGL)` returns `null` in Firefox/Safari — use `(getParameter(...) ?? "").toLowerCase()`.
- Global keydown handler skips editable elements (INPUT, TEXTAREA, SELECT, contentEditable).
- `camera.lookAt(0,0,0)` every frame — if moving lookAt, update engine.ts
- `body { overflow-x: hidden }` — full-bleed elements need explicit width
- `antialias: true` has NO effect with EffectComposer — MSAA only on default framebuffer
- Transition kills pending scene on rapid theme switching
- `--color-accent-red: #FE4450` universal, not theme-scoped
- Lehmer PRNG global seed (42) shared, not reset on re-instantiation
- Bloom breathing only for AI and Software (themes with `getDensity()`)
- **Fonts self-hosted**: 16 `.woff2` in `public/fonts/` via `fonts.css`, zero external requests
- **Lucide Solid**: deep imports only (`lucide-solid/icons/icon-name`), never barrel import
- **CSS theme colors vs TypeScript colorScheme**: separate systems — UI vs 3D
- **WebGL context loss**: handlers on canvas. Context lost → render loop skips. Context restore → rebuilds entire scene via `transitionManager.forceScene()`
- **canvasTexture.ts**: shared factory used by blockchain, software, web themes. Uses distinct `MinificationTextureFilter`/`MagnificationTextureFilter` types — cast `LinearFilter` with `as`
- **AI scene colorScheme**: LAYERS, neurons, edges, ripple rings, manifolds all derive from `config.colorScheme`. Only attention yellow (`#F5C842`) is scene-internal constant.
- **lerpColor()**: only 6-char hex (`#RRGGBB`), not short hex
- **i18n ESLint reactivity**: read signal synchronously before fetch chain: `const lang = language();` then `fetch(...).then(...)`
- **Vitest**: needs `resolve.conditions: ["browser"]` + `plugins: [solid()]` + `transformMode: { web: [/.[jt]sx?$/] }` for component tests
- **vitest.setup.ts**: needs `(globalThis as Record<string, unknown>).React = {}` for SolidJS dev build
- **vi.mock() for lucide-solid**: icon modules trigger SSR detection in jsdom — always mock
- **ESLint**: config is `eslint.config.js` (not `.ts`), includes `solid/reactivity: warn`, `solid/no-destructure: error`
- **Images**: all WebP in `public/images/`, i18n JSON references `.webp` extensions, convert with `node scripts/convert-to-webp.mjs` (sharp, quality 82)
- **text-muted contrast**: WCAG AA requires checking `--color-text-muted` in all 4 theme CSS + app.css @theme block when changing color schemes
- **Module-level createSignal**: MUST NOT read localStorage during init — SSR/client hydration mismatch
- **DOOM page**: JS-DOS NOT loaded at page load — dynamic script element injected on button click

## Build & Deploy
- CI: `.github/workflows/deploy.yml` — push/PR to main, Node 20, `npm ci`, `npm run build`
- Artifact: `.output/public` → `actions/deploy-pages@v4`

## Image Pipeline
- All `public/images/` are WebP (quality 82, ~79% smaller than PNG/JPG)
- Convert: `node scripts/convert-to-webp.mjs` (uses `sharp` dev dependency)
- i18n JSON files reference `.webp` extensions

## SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` reads `localStorage.getItem('portfolio-theme')` and sets `document.documentElement.setAttribute('data-theme', t)` before first paint.
`<html>` tag in `entry-server.tsx` has `data-theme="ai"` as SSR fallback.
