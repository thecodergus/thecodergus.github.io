# thecodergus.github.io

Portfolio pessoal de Gustavo M Camargo — Especialista em Automação com IA, LangGraph & AI Agents.

## Stack

| Camada  | Tecnologia                              |
| ------- | --------------------------------------- |
| Runtime | Node.js >=20                            |
| UI      | SolidJS 1.9.12 + SolidStart 1.0.11          |
| Bundler | Vite 7.3.2 + Vinxi 0.5.11                 |
| Estilo  | Tailwind CSS v4 + data-theme scoping       |
| 3D      | Three.js ^0.184.0 (raw API, sem R3F)      |
| PostP   | ShaderPass (scanline, vignette, chromatic) + UnrealBloomPass |
| Icons   | Lucide Solid (deep imports)             |
| A11y    | Kobalte Core                            |

## Scripts

```bash
npm install         # Instalar dependências
npm run dev         # Servidor de desenvolvimento (http://localhost:3000)
npm run build       # Build estático → .output/public
npm start           # Preview do build
npm run typecheck   # Verificação de tipos (tsc --noEmit)
npm run lint        # ESLint
npm run lint:fix    # ESLint com correção automática
npm run test         # Vitest (5 arquivos, 143 testes)
npm run test:watch   # Vitest em modo watch
npm run test:coverage # Relatório de cobertura (@vitest/coverage-v8)
```

## Arquitetura

```
src/
├── app.tsx                 # Entry: Router, MetaProvider, I18nProvider
├── entry-server.tsx        # SSR: HTML shell, skip link, JSON-LD (StructuredData interface)
├── entry-client.tsx        # Client: mount + CSS imports
├── routes/
│   ├── index.tsx           # Home — todas as seções do portfolio
│   └── doom.tsx            # DOOM via JS-DOS (rota lazy-load)
├── components/             # 15 componentes SolidJS
├── engine/                 # Engine Three.js puro (zero SolidJS)
│   ├── engine.ts           # Orquestrador: renderer, câmera, post-process
│   ├── transition.ts       # Crossfade manager (800ms) + forceScene
│   ├── math.ts             # Vec3, easing, Lehmer PRNG
│   ├── quality.ts          # GPU tier detection (low/medium/high)
│   ├── canvasTexture.ts    # Shared CanvasTexture factory
│   ├── types.ts            # SceneHandle, ThemeModule, SceneKind enum
│   ├── math.test.ts        # 93 testes — Vec3, easings, PRNG
│   ├── transition.test.ts  # 18 testes — máquina de estados + forceScene
│   └── quality.test.ts     # 10 testes — detecção de GPU
├── themes/                 # Sistema de temas plug-in
│   ├── registry.ts         # REGISTRY + loadTheme() com cache de Promise
│   ├── create-theme-module.ts # Factory createThemeModule(config) => ThemeModule
│   ├── ai/                 # Rede neural 3D (9 camadas, 44 neurônios)
│   ├── blockchain/         # Grafo force-directed (chain + carteiras)
│   ├── software/           # Matrix digital rain + glitch
│   └── web/                # Topologia hyperlink spiderweb
├── stores/
│   ├── themeStore.ts       # Sinal theme + localStorage (AI sempre inicial, SceneKind enum)
│   ├── themeStore.test.ts  # 3 testes — signal inicial, THEMES, REGISTRY
│   ├── i18nStore.tsx       # pt-br/en, fetch JSON, context, t() helper
│   └── i18nStore.test.tsx  # 19 testes — signals, t(), setLanguage, fetchError
└── types.ts                # Interfaces compartilhadas (Language enum, Messages)
```

## Temas visuais

Cada tema é um diretório com **4 arquivos**:

- `index.ts` — `ThemeModule` (colorScheme, cameraPreset, postPreset)
- `scene.ts` — Factory Three.js (`SceneConfig → SceneHandle`)
- `theme.css` — `[data-theme="x"]` CSS custom properties
- `types.ts` — Tipos específicos do tema

Troca de tema usa **crossfade de 800ms** (400ms fade out + 400ms fade in).

## Testes

Vitest 4 com jsdom environment e globals mode. 5 arquivos, 143 testes:

| Arquivo                  | Testes | Foco                                            |
| ------------------------ | ------ | ----------------------------------------------- |
| `math.test.ts`           | 93     | Vec3, easings, PRNG, array utilities            |
| `transition.test.ts`     | 18     | Máquina de estados, timing, abort, forceScene   |
| `quality.test.ts`        | 10     | GPU tier detection, pixelRatio cap               |
| `themeStore.test.ts`     | 3      | Signal inicial, THEMES, REGISTRY                |
| `i18nStore.test.tsx`     | 19     | Signals, t() helper, setLanguage, fetchError     |

CI: `typecheck → lint → test` (ordem de falha mais rápida primeiro).

## Post-processing

Shaders personalizados aplicados via `EffectComposer` (GLSL 3.0 ES):

- **Scanlines** — linhas horizontais animadas por `uTime`
- **Vignette** — escurecimento radial nas bordas
- **Chromatic aberration** — shift do canal R nas bordas
- **Bloom** — `UnrealBloomPass` com breathing baseado em densidade da cena

## i18n

- **pt-br** (padrão) e **en** disponíveis
- JSON em `public/data/languages/`
- Persistência via `localStorage` (`portfolio-language`)
- SSR sempre renderiza pt-br; cliente corrige se necessário
- `t(key, defaultValue?)` helper com dot-notation usado em todos os componentes (38 call sites)
- `StructuredData` interface tipada para JSON-LD

## Conventions

- `enum` para todos os estados discretos (SceneKind, Language, TransitionPhase)
- TypeScript strict, nunca `any`, nunca `!` assertions
- Funções puras, imutabilidade (`Object.freeze`, `Readonly<>`), zero classes (factory closures)
- Animações: `onMount` + `setInterval`/`setTimeout`, nunca `createEffect`
- Lucide Solid: deep imports (`lucide-solid/icons/icon-name`), nunca barrel import
- `vinxi/types/client` (não `vinxi/client` — não existe)

## Gotchas

- **GLSL 3.0 ES**: NUNCA inclua `#version 300 es` — Three.js 0.184 injeta no topo. Use `material.glslVersion = THREE.GLSL3`.
- **`quality.ts`**: `getParameter` retorna `null` no Firefox/Safari — use `(getParameter(...) ?? "").toLowerCase()`.
- **Fontes self-hosted**: 16 `.woff2` em `public/fonts/` — zero requisições externas.
- **CSS colors vs TypeScript colorScheme**: sistemas independentes — CSS controla UI, TypeScript controla cores 3D.
- **`lerpColor()`** só aceita hex 6 caracteres (`#RRGGBB`), não short hex (`#RGB`).
- **`canvasTexture.ts`**: Three.js usa tipos distintos de filter — cast com `as` ao atribuir `LinearFilter`.
- **WebGL context restore**: reconstrói toda a cena via `transitionManager.forceScene()`.
- **Blook breathing** só funciona em AI e Software (temas com `getDensity()`).
- **`camera.lookAt(0,0,0)`** chamado todo frame. Se mudar o target, atualize `engine.ts`.
- **`@theme` block** em `app.css` duplica `ai/theme.css` intencionalmente — é registro de tokens Tailwind v4.
- **`t()` helper** usado em 10 componentes (38 call sites) — `messages()?.path` direto também funciona.

## Deploy

CI via GitHub Actions: push na `main` → quality (typecheck + lint + test) → build → GitHub Pages.
Config em `.github/workflows/deploy.yml`.

## Licença

MIT
