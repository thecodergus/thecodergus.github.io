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
- `i18nStore.tsx`: language context with async `fetch` in `I18nProvider.onMount`

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
- GLSL 3.0 ES: NEVER include `#version 300 es` in `ShaderMaterial` source. Three.js hardcodes it at the top. Set `material.glslVersion = THREE.GLSL3`, declare `out vec4 fragColor;` explicitly.
- `quality.ts`: `getParameter(UNMASKED_RENDERER_WEBGL)` returns `null` in Firefox/Safari — use `(getParameter(...) ?? "").toLowerCase()`.
- Global keydown handler in `engine.ts` skips events from editable elements (INPUT, TEXTAREA, SELECT, contentEditable).
- `camera.lookAt(0,0,0)` every frame in render loop — if moving lookAt, update engine.ts
- `body { overflow-x: hidden }` — full-bleed elements need explicit width
- AI scene `onKeyPress` exists but NOT exported — keyboard routing only works for Software
- `createEngine()` forces `camera.lookAt(0, 0, 0)` each frame
- Fonts loaded at different weights in entry-server.tsx (JetBrains Mono `400;500`) vs app.tsx (`400;500;600;700`)
- `antialias: true` has NO effect with EffectComposer — MSAA only works on default framebuffer
- Resize sequence: camera.aspect → updateProjectionMatrix → renderer.setSize → composer.setSize (correct order, already followed in code)
- Transition kills pending scene on rapid theme switching
- `--color-accent-red: #FE4450` universal, not theme-scoped
- Lehmer PRNG global seed (42) shared across all scenes, not reset on re-instantiation
- Bloom breathing only for AI and Software (themes with `getDensity()`)

## Build & Deploy
- CI: `.github/workflows/deploy.yml` — push/PR to main, Node 20, `npm ci`, `npm run build`
- Artifact: `.output/public` → `actions/deploy-pages@v4`

## SSR Flash Prevention
Blocking inline `<script>` in `app.tsx` reads `localStorage.getItem('portfolio-theme')` and sets `document.documentElement.setAttribute('data-theme', t)` before first paint.
`<html>` tag in `entry-server.tsx` has `data-theme="ai"` as SSR fallback.