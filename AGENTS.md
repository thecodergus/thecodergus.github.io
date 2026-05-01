# AGENTS

## Project
Personal portfolio site built with SolidStart (SolidJS) and Vinxi.

## Tech stack
- **Framework**: SolidJS 1.9 + SolidStart 1.3
- **Bundler**: Vite 8 + Vinxi 0.5
- **UI**: Kobalte Core, Lucide Solid
- **Animation**: GSAP
- **Node**: >=20
- **Package manager**: npm

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Static build (output: `.output/public`)
- `npm start` — Preview production build

## Architecture
- **Entry**: `src/app.tsx` wraps router with ThemeProvider, I18nProvider, MetaProvider.
- **Routing**: File-based in `src/routes/`. Active routes: `/`, `/doom`.
- **Prerender**: Configured in `app.config.ts` for `/` and `/doom`. Crawls links.
- **Aliases**: `~/` resolves to `./src/` (configured in `tsconfig.json` and `vite.config.ts`).

## Build & Deploy
- Static preset (`server: { preset: "static" }`).
- CI deploys to GitHub Pages on push/PR to `main`.
- Build artifact uploaded from `.output/public`.

## Conventions
- JSX import source is `solid-js`.
- Strict TypeScript, no emit, bundler module resolution.
- No configured test runner, linter, or formatter.

## Gotchas
- `vite.config.ts` explicitly externalizes `react` and `react-dom` in Rollup options. Do not remove unless intentional.
