# Projeto Atual: Portfolio Pessoal (SolidStart)

## Stack
- SolidJS 1.9 + SolidStart 1.0.11 + Vinxi 0.5
- TypeScript strict
- Tailwind CSS v4 com `@theme` tokens e `data-theme` scoping
- Three.js ^0.184.0 raw API (engine puro funcional em `src/engine/`)
- Post-processing: ShaderPass (scanline, vignette, chromatic aberration) + UnrealBloomPass (bloom)
- Kobalte Core, Lucide Solid para UI
- Deploy: GitHub Pages via static preset

## Estrutura
- `src/app.tsx` — Entry: MetaProvider, ThemeProvider, I18nProvider, SSR flash script
- `src/routes/` — `/` (home) e `/doom` (DOS games)
- `src/engine/` — Motor 3D puro funcional (engine.ts, transition.ts, math.ts, types.ts)
- `src/themes/` — 4 temas modulares (ai, blockchain, software, web), cada um com index.ts, scene.ts, types.ts, theme.css
- `src/themes/registry.ts` — Mapa congelado ThemeId → ThemeModule
- `src/components/NeuralCanvas.tsx` — Wrapper SolidJS que lê signal theme() e chama engine.setTheme()
- `src/stores/` — themeStore, i18nStore
- `src/providers/` — ThemeProvider, I18nProvider
- `src/app.css` — Tokens base + @import estático dos theme.css por tema

## Comandos
- `npm run dev` — dev server
- `npm run build` — build estático (`.output/public`)
- `npm start` — preview de produção

## Quirks
- GLSL 3.0 ES: NUNCA incluir `#version 300 es` no source do `ShaderMaterial` — Three.js hardcoded no topo. Usar `material.glslVersion = THREE.GLSL3` e declarar `out vec4 fragColor;` explicitamente.
- `quality.ts`: `getParameter(UNMASKED_RENDERER_WEBGL)` retorna `null` no Firefox/Safari — usar `(getParameter(...) ?? "").toLowerCase()`.
- Keydown handler global em `engine.ts` pula eventos de elementos editáveis (INPUT, TEXTAREA, SELECT, contentEditable).
- TransitionManager recebe callback `onDispose` — garante que `mainScene.remove(obj)` sempre emparelha com `handle.dispose()`
- `disposeScene` callback must be defined before `createTransitionManager(disposeScene)` in engine.ts for closure capture
- `--color-accent-red: #FE4450` é universal (não temático) — usado para elementos semânticos (heart icon, status dots)
- SSR flash prevenido por script inline bloqueante no `<head>` que lê localStorage e seta data-theme antes do primeiro paint
- Fonts loaded at different weights in entry-server.tsx (JetBrains Mono `400;500`) vs app.tsx (`400;500;600;700`)
