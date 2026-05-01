# AGENTS

## Project
Personal portfolio site built with SolidStart (SolidJS) and Vinxi.

## Tech stack
- **Framework**: SolidJS 1.9 + SolidStart 1.3
- **Bundler**: Vite 8 + Vinxi 0.5
- **UI**: Kobalte Core, Lucide Solid
- **Animation**: GSAP
- **3D Engine**: Three.js 0.170+ (raw API — no R3F since SolidJS doesn't have fiber equivalent)
- **Post-processing**: EffectComposer + UnrealBloomPass (bloom/glow)
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

### TypeScript strictness
- **NEVER use `any`.** Prefer `unknown` and narrow with type guards. If a type is truly dynamic, use `Record<string, unknown>`.
- **ALWAYS use `enum` for categorization.** Any set of discrete variants (phases, states, modes, themes, categories) MUST be an `enum`, never string unions or magic constants. `enum` provides a single source of truth and compiler-verified exhaustiveness.
- Function parameters and return types must be explicitly typed — avoid implicit inference for public APIs.
- Prefer `interface` for object shapes that may be extended; use `type` for unions, intersections, and primitives.

## Gotchas
- `vite.config.ts` explicitly externalizes `react` and `react-dom` in Rollup options. Do not remove unless intentional.

## Background animations
- **`src/components/NeuralCanvas.tsx`**: Three.js-based background, reads `theme()` signal, reacts to theme changes with crossfade transitions.
- **Scene modules** in `src/components/scenes/`:
  - `ai-scene.ts` — 3D neural network (layered neurons, activation wave particles, synaptic connections)
  - `blockchain-scene.ts` — 3D force-directed graph (chain nodes + wallet nodes, transaction particles, consensus flash)
  - `software-scene.ts` — 3D data pipeline (processing stages, Bezier curve connections, data flow particles)
  - `web-scene.ts` — 3D network topology (central hub, orbiting satellites, request/response packets)
- **Transition system** (`transition.ts`): crossfade manager with easing, manages overlay of old/new scene opacity.
- Each scene is a pure factory function (`SceneConfig → SceneHandle`).
- All rendering uses `UnrealBloomPass` for cinematic glow effect.
- Color schemes per theme match the `data-theme` CSS variables in `app.css`.

### Functional programming conventions
- **Pure functions**: all computation returns new values, never mutates inputs.
- **Immutability**: `Object.freeze`, `Readonly<>`, spread operators on arrays, `readonly T[]`.
- **enum for all discrete states**: `SceneKind`, `ParticleState`, `NodeRole`, `TransitionPhase`.
- **No classes**: all state encapsulated in closures via factory functions.
- **Array operations**: prefer `Array.from`, `.map()`, `.filter()`, `.reduce()` over imperative loops.
- **Anonymous functions**: arrow functions for all callbacks and transformations.
