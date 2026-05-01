## Tech Stack & Architecture

- Framework: SolidJS 1.9 + SolidStart 1.3
- Bundler: Vite 8 + Vinxi 0.5
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
- Theme: light/dark signal (currently mostly dark-only)

TypeScript strict mode, no emit, bundler module resolution.