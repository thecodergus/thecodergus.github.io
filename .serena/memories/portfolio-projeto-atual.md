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
- `src/engine/` — Motor 3D puro funcional (engine.ts, transition.ts, math.ts, canvasTexture.ts, quality.ts, types.ts)
- `src/themes/` — 4 temas modulares (ai, blockchain, software, web), cada um com index.ts, scene.ts, types.ts, theme.css
- `src/themes/registry.ts` — Mapa congelado SceneKind → ThemeModule; loadTheme() com cache de Promise
- `src/components/NeuralCanvas.tsx` — Wrapper SolidJS que lê signal theme() e chama engine.setTheme()
- `src/stores/` — themeStore (SceneKind enum), i18nStore (t() helper, 38 call sites)
- `src/app.css` — @theme block (duplica ai/theme.css para registro Tailwind v4) + @import estático
- Testes: 5 arquivos, 143 testes (math 93, transition 18, quality 10, themeStore 3, i18nStore 19)

## Comandos
- `npm run dev` — dev server
- `npm run build` — build estático (`.output/public`)
- `npm start` — preview de produção

## Quirks
- GLSL 3.0 ES: NUNCA incluir `#version 300 es` — Three.js 0.184 injeta no topo. Use `material.glslVersion = THREE.GLSL3`.
- `quality.ts`: `(getParameter(...) ?? "").toLowerCase()` — null-safe para Firefox/Safari
- `canvasTexture.ts`: usa `MinificationTextureFilter`/`MagnificationTextureFilter` com cast `as`
- Keydown handler global em `engine.ts` pula eventos de elementos editáveis
- TransitionManager.onDispose garante `mainScene.remove(obj)` + `handle.dispose()` sempre emparelhados
- `disposeScene` deve ser definida ANTES de `createTransitionManager(disposeScene)` — closure capture
- `forceScene`: aborta transição pendente, descarta cena atual, instala nova com opacidade total
- WebGL context restore reconstrói cena via `transitionManager.forceScene()`
- AI scene respeita `config.colorScheme` — apenas `#F5C842` (attention yellow) é constante interna
- SSR flash: script inline bloqueante no `<head>` lê localStorage e seta data-theme antes do primeiro paint
- `@theme` block em `app.css` duplica `ai/theme.css` intencionalmente (registro de tokens Tailwind v4)
- Fonts: JetBrains Mono `400;500` em entry-server.tsx, `400;500;600;700` em app.tsx
