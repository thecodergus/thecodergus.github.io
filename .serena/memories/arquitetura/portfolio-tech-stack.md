## Tech Stack & Architecture

- Framework: SolidJS 1.9 + SolidStart 1.0.11
- Bundler: Vite 7.3.2 + Vinxi 0.5
- Styling: Tailwind CSS v4 with custom theme tokens
- UI: Kobalte Core, Lucide Solid (icons)
- Animation: Pure CSS + requestAnimationFrame (no GSAP due to SSR issues)
- Node: >=20
- Package manager: npm

Key configuration:
- Static preset (`server: { preset: "static" }`)
- Aliases: `~/` → `./src/`
- vite.config.ts externalizes react/react-dom
- Prerender: `/` and `/doom`

State management:
- Language: enum `Language { PtBr = "pt-br", En = "en" }` stored in localStorage
- i18n: JSON files loaded from `/data/languages/{lang}.json` and `/data/portfolio_shared_data.json`
- Theme: theme-id signal persists to localStorage key `portfolio-theme`. SSR flash prevented by blocking inline script in `<head>`.

### 3D Engine (`src/engine/`)
Pure functional engine, zero SolidJS imports:
- `engine.ts` — Orchestrator: scene/camera/renderer/composer, disposal, theme switching (`createEngine()`)
- `transition.ts` — Crossfade: FadeOut → FadeIn with `easeInOutCubic`. Receives `onDispose` callback.
- `math.ts` — Pure easing: `easeInOutCubic`, `clamp01`
- `types.ts` — `SceneHandle`, `SceneConfig`, `ThemeModule`, `ColorScheme`, `CameraPreset`, `PostProcessPreset`

### Theme System (`src/themes/`)
4 self-contained theme dirs (ai, blockchain, software, web), each with `index.ts`, `scene.ts`, `types.ts`, `theme.css`. Frozen `registry.ts` maps ThemeId → ThemeModule.

TypeScript strict mode, no emit, bundler module resolution.