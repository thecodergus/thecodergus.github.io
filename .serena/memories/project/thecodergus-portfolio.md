# thecodergus.github.io — Portfolio Site

## Tech Stack (exact versions)
- **Framework**: SolidJS 1.9.12 + SolidStart 1.3.2
- **Bundler**: Vite 8.0.10 + Vinxi 0.5.11
- **Styling**: Tailwind CSS v4.2.4 with `@theme` tokens, `data-theme` scoping
- **UI**: Kobalte Core 0.13.11, Lucide Solid 0.562.0, devicon 2.16.0
- **3D**: Three.js ^0.184.0 (raw API, no R3F), ShaderPass (scanline/vignette/chromatic) + UnrealBloomPass (bloom)
- **Language**: TypeScript 6.0.3, Node >=20, npm

## Architecture

### Routing
- Entry: `src/app.tsx` wraps with MetaProvider → ThemeProvider → I18nProvider → FileRoutes
- Routes: `/` (index.tsx), `/doom` (doom.tsx)
- Prerender: `app.config.ts` with `crawlLinks: true`, static preset → `.output/public`
- Alias: `~/` → `./src/`

### I18n
- Context-based, `Language.PtBr` (default), `Language.En`
- localStorage key: `"portfolio-language"`
- Data: `/data/languages/${lang}.json` + `/data/portfolio_shared_data.json`
- `t(key)` helper with dot-notation: `t("navbar.home")`

### Stores
- `themeStore.ts`: `ThemeId = "ai" | "blockchain" | "software" | "web"`, localStorage `"portfolio-theme"`
- `i18nStore.tsx`: language context with `createEffect` sync

### 3D Engine (`src/engine/`)
- Pure functional, no classes, closures with factory functions
- `engine.ts`: scene/camera/renderer/composer, orbit logic, bloom breathing
  - Renderer: `WebGLRenderer({ antialias: true, alpha: true })`, `pixelRatio ≤ 2`, toneMapping `ACESFilmic`, exposure `1.2`
  - Camera: `PerspectiveCamera(55, aspect, 0.1, 100)`, orbits with `lookAt(0,0,0)` every frame
  - Orbit: angle += `orbitSpeed * delta * 0.001`, mouse offset `* 0.26`, height `sin(angle * freq) * amplitude`, lerp `0.03`
  - Bloom breathing: `0.5 + density * 1.0` — only for scenes with `getDensity()` (AI, Software)
- `transition.ts`: FadeOut/FadeIn, `FADE_DURATION=800ms`, `easeInOutCubic`, kills pending if new transition starts
- `math.ts`: easing functions, clamp, vec3/vec2 utilities, seeded PRNG (global seed=42)

### Theme System (`src/themes/`)
Registry frozen at `src/themes/registry.ts`. Each theme: `index.ts` (ThemeModule), `scene.ts` (Three.js factory), `theme.css` (CSS vars scoped to `[data-theme]`).

**ThemeModule**: `{ sceneKind, colorScheme, createScene, cameraPreset, postPreset }`

## Camera Frustum Math
From Three.js source (`PerspectiveCamera.js:299-302`):
```
visibleHeight = 2 × tan(FOV_rad / 2) × distance / zoom
visibleWidth  = visibleHeight × aspect
```
With FOV=55°, aspect=16:9: **visibleWidth ≈ 1.85 × orbitRadius** at z=0.
Use `camera.getViewSize(distance, new THREE.Vector2())` for robust calculations.

## Current Camera Presets (FOV=55, heightFreq=0.5, pauseOnHover=true, autoRotate=true)

| Theme      | orbitRadius | orbitSpeed | heightAmplitude |
|------------|-------------|------------|-----------------|
| AI         | 14          | 0.02       | 5               |
| Blockchain | 12          | 0.02       | 3               |
| Software   | 10          | 0.015      | 2               |
| Web        | 12          | 0.02       | 3               |

## Post-Process Presets

| Theme      | bloomStrength | bloomRadius | bloomThreshold | scanline | vignette | chromatic |
|------------|---------------|-------------|----------------|----------|----------|-----------|
| AI         | 1.2           | 0.4         | 0.1            | 0.15     | 0.35     | 0.003     |
| Blockchain | 1.0           | 0.5         | 0.15           | 0.12     | 0.35     | 0.003     |
| Software   | 0.6           | 0.5         | 0.2            | 0.18     | 0.4      | 0.004     |
| Web        | 1.0           | 0.5         | 0.15           | 0.12     | 0.35     | 0.003     |

## Color Schemes

| Theme      | primary | secondary | tertiary | background |
|------------|---------|-----------|----------|------------|
| AI         | #00E5FF | #10A37F   | #8B5CF6  | #080012    |
| Blockchain | #F7931A | #00BFA5   | #627EEA  | #0D1117    |
| Software   | #569CD6 | #00FF41   | #C586C0  | #0A0A0A    |
| Web        | #F7DF1E | #58C4DC   | #8B5CF6  | #0F1117    |

## Gotchas
- `vite.config.ts` externalizes `react`/`react-dom` — DO NOT remove
- `gsap` in package.json but never imported — dead dependency
- `camera.lookAt(0,0,0)` every frame in render loop — if moving lookAt, update engine.ts:232
- `body { overflow-x: hidden }` — full-bleed elements need explicit width
- AI scene `onKeyPress` exists but NOT exported — keyboard routing only works for Software
- First-visit forces AI theme via `localStorage` key `"portfolio-v3"`
- Fonts loaded twice (entry-server.tsx + app.tsx) with different weight specs
- Resize sequence: camera.aspect → updateProjectionMatrix → renderer.setSize → composer.setSize
- Transition kills pending scene on rapid theme switching
- `--color-accent-red: #FE4450` universal, not theme-scoped
- PRNG global seed (42) not reset on scene re-instantiation
- `antialias: true` suboptimal with post-processing pipeline
- Bloom breathing only for AI and Software (themes with `getDensity()`)

## Build & Deploy
- CI: `.github/workflows/deploy.yml` — push/PR to main, Node 20, `npm ci`, `npm run build`
- Artifact: `.output/public` → `actions/deploy-pages@v4`
- CSS: `app.css` — single `@theme` block (AI defaults), theme CSS files `@import`-ed

## SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` reads `localStorage.getItem('portfolio-theme')` and sets `document.documentElement.setAttribute('data-theme', t)` before first paint.
