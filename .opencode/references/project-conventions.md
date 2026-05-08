# Project Conventions — thecodergus.github.io

> Referência canônica de convenções do projeto. Carregada automaticamente
> pelo OpenCode via `instructions` no `.opencode/opencode.json`.
> Complementa o `AGENTS.md` com detalhes de implementação.

## Stack

| Layer | Tecnologia | Versão |
|-------|-----------|--------|
| Framework | SolidJS + SolidStart | 1.9.12 / 1.0.11 |
| Bundler | Vite + Vinxi | 7.3.2 / 0.5.11 |
| Styling | Tailwind CSS v4 | ^4.2.4 |
| UI | Kobalte Core, Lucide Solid | 0.13.11 / 0.562.0 |
| 3D | Three.js (raw API) | ^0.184.0 |
| Post-process | ShaderPass + UnrealBloomPass | — |
| Node | >=20 | — |
| TypeScript | 6.0.3 | strict |
| Package manager | npm | — |

## Comandos

```bash
npm run dev        # Dev server (http://localhost:3000)
npm run build      # Build estático → .output/public/
npm start          # Preview build
npm run typecheck  # tsc --noEmit
```

CI: `npm ci` (não `npm install`).

## Arquitetura

### Roteamento
- File-based em `src/routes/`. Rotas ativas: `/`, `/doom`.
- Prerender configurado em `app.config.ts` para `/` e `/doom`.
- Alias `~/` → `./src/` (tsconfig + vite.config).

### i18n (`src/stores/i18nStore.tsx`)
- Context-based, idiomas: `pt-br` (default), `en`.
- localStorage key: `"portfolio-language"`.
- Dados: `/data/languages/${lang}.json` + `/data/portfolio_shared_data.json`.
- `t(key)` helper existe mas NÃO é usado. Componentes acessam `messages()?.navbar?.about` diretamente.
- Fallbacks: 21 hardcoded, todos em português.
- Cuidado SSR: `getInitialLanguage()` sempre retorna `pt-br`; `onMount` sincroniza.

### 3D Engine (`src/engine/`)
- Factory functions, zero classes, zero SolidJS imports.
- `engine.ts` → orquestrador.
- `transition.ts` → crossfade: FadeOut → FadeIn, 800ms.
- `math.ts` → easing functions + Lehmer PRNG (seed 42 compartilhado).
- `types.ts` → interfaces + SceneKind enum.

### Temas (`src/themes/`)
- Registro congelado: `REGISTRY: Readonly<Record<ThemeId, ThemeModule>>`
- Cada tema é um diretório com `index.ts`, `scene.ts`, `types.ts`, `theme.css`
- 4 temas: ai, blockchain, software, web

### Theme System Data

**Camera Presets** (FOV=55, heightFrequency=0.5, autoRotate=true):
| Theme | orbitRadius | speed | height | theta |
|-------|------------|-------|--------|-------|
| AI | 14 | 0.02 | 5 | π/2 |
| Blockchain | 12 | 0.02 | 3 | π/4 |
| Software | 10 | 0.015 | 2 | 0 |
| Web | 11 | 0.015 | 1.5 | 0 |

**Post-process Presets** (bloom=bloomStrength, s=scanline, v=vignette, c=chromatic):
| Theme | bloom | scanline | vignette | chromatic |
|-------|-------|----------|----------|-----------|
| AI | 0.4 | 0.15 | 0.35 | 0.003 |
| Blockchain | 0.5 | 0.08 | 0.35 | 0.003 |
| Software | 1.0 | 0.18 | 0.40 | 0.004 |
| Web | 0.5 | 0.05 | 0.15 | 0.003 |

**Color Schemes** (primary, secondary, tertiary, background):
| Theme | Primary | Secondary | Tertiary | Background |
|-------|---------|-----------|----------|------------|
| AI | #00E5FF | #10A37F | #8B5CF6 | #080012 |
| Blockchain | #F7931A | #00BFA5 | #627EEA | #0D1117 |
| Software | #00FF41 | #006622 | #FFFFFF | #000000 |
| Web | #0000EE | #551A8B | #CC0000 | #F8F9FA |

## Gotchas

1. **SSR flash:** `data-theme="ai"` é o fallback. Script inline em `<head>` previne flash.
2. **Font weights:** `entry-server.tsx` tem 400;500, `app.tsx` tem 400;500;600;700. Alinhar se houver inconsistência.
3. **camera.lookAt(0,0,0):** chamado todo frame. Mudar target → atualizar `engine.ts`.
4. **body overflow-x hidden:** full-bleed elements precisam de width explícito.
5. **mesmo tema clicado:** `engine.setTheme()` retorna imediatamente — guard no topo.
6. **Transition abort:** troca rápida de tema → callback `onDispose` garante cleanup.
7. **AI scene onKeyPress:** existe mas não é exportado de `createAIScene`. Só Software tem keyboard routing.
8. **toneMapping:** `ACESFilmicToneMapping`, exposure=1.2 — global, todos os temas.

## Convenções de Código

### SolidJS
- Animações: `onMount` + `setInterval`/`setTimeout`, nunca `createEffect`.
- Async data: guard com `<Show when={data()}>`.
- Hero: Name → TypewriterText, Titles → RotatingTypewriter.

### TypeScript
- Nunca `any`. Prefira `unknown` → narrowing.
- Sempre `enum` para variantes discretas.
- Tipos explícitos em APIs públicas.
- `!` assertions proibidas.

### 3D
- Factory functions (closures), nunca classes.
- `Object.freeze`, `Readonly<>`, `readonly T[]`.
- `SceneHandle.dispose()` libera GPU resources.
- `getOpacity(t)` / `setOpacity(t)` para crossfade.
- Materiais com opacity override: snapshot base em `userData._baseOpacity`.
