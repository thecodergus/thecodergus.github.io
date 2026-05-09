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
- `src/app.tsx` — Entry: MetaProvider, I18nProvider, SSR flash script
- `src/routes/` — `/` (home) e `/doom` (DOS games — JS-DOS lazy-load via botão)
- `src/engine/` — Motor 3D puro funcional (engine.ts, transition.ts, math.ts, canvasTexture.ts, quality.ts, types.ts)
- `src/themes/` — 4 temas modulares (ai, blockchain, software, web), cada um com index.ts, scene.ts, types.ts, theme.css
- `src/themes/registry.ts` — Mapa congelado SceneKind → ThemeModule; loadTheme() com cache de Promise
- `src/hooks/` — Hooks compartilhados: createVisibilityObserver.ts (IntersectionObserver reutilizável, 6 consumers), socialIcons.ts (SOCIAL_ICON_MAP + resolveSocialIcon)
- `src/components/NeuralCanvas.tsx` — Wrapper SolidJS que lê signal theme() e chama engine.setTheme()
- `src/components/I18nErrorBanner.tsx` — Banner de erro dismissível exibindo fetchError do i18n
- `src/stores/` — themeStore (SceneKind enum), i18nStore (t() helper, 38 call sites)
- `src/app.css` — @theme block (duplica ai/theme.css para registro Tailwind v4) + @import estático
- Testes: 8 arquivos, 163 testes (math 93, transition 18, quality 10, themeStore 3, i18nStore 19, socialIcons 11, createVisibilityObserver 6, I18nErrorBanner 4)
- Imagens: todas WebP em `public/images/`, converter com `node scripts/convert-to-webp.mjs` (sharp, quality 82)

## Padrões Arquiteturais
- ErrorBoundary: todas as 7 sections em `routes/index.tsx` envolvidas em `<ErrorBoundary fallback={() => null}>` — degradação graciosa
- DOOM: JS-DOS NÃO carregado no page load. Botão "Launch DOOM" injeta script dinâmico + loading spinner
- Vitest config precisa de `resolve.conditions: ["browser"]` + `plugins: [solid()]` + `transformMode: { web: [/.[jt]sx?$/] }`
- `vitest.setup.ts` precisa de `(globalThis as Record<string, unknown>).React = {}` para dev build do SolidJS
- `vi.mock()` obrigatório para lucide-solid em testes (evita SSR detection error)

## Comandos
- `npm run dev` — dev server
- `npm run build` — build estático (`.output/public`)
- `npm start` — preview de produção
- `npm run typecheck` — tsc --noEmit
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run test` / `npm run test:watch` / `npm run test:coverage` — Vitest

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
- `--color-text-muted`: se mudar color scheme de um tema, atualizar em todos os 4 theme.css + app.css @theme block para manter WCAG AA
- ESLint config é `eslint.config.js` (não `.ts`)
