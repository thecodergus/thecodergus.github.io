# thecodergus.github.io

Portfolio pessoal de Gustavo M Camargo — Especialista em Automação com IA, LangGraph & AI Agents.

## Stack

| Camada  | Tecnologia                              |
| ------- | --------------------------------------- |
| Runtime | Node.js >=20                            |
| UI      | SolidJS 1.9 + SolidStart 1.0 + Vite 7   |
| Estilo  | Tailwind CSS v4 + data-theme scoping     |
| 3D      | Three.js 0.184 (raw API, sem R3F)       |
| Icons   | Lucide Solid + Devicon                  |
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
npm run test        # Vitest
npm run test:watch  # Vitest em modo watch
```

## Arquitetura

```
src/
├── app.tsx                 # Entry: Router, MetaProvider, I18nProvider
├── entry-server.tsx        # SSR: HTML shell, skip link, JSON-LD
├── entry-client.tsx        # Client: mount + CSS imports
├── routes/
│   ├── index.tsx           # Home — todas as seções do portfolio
│   └── doom.tsx            # DOOM via JS-DOS (rota lazy-load)
├── components/             # 15 componentes SolidJS
├── engine/                 # Engine Three.js puro (zero SolidJS)
│   ├── engine.ts           # Orquestrador: renderer, câmera, post-process
│   ├── transition.ts       # Crossfade manager (800ms)
│   ├── math.ts             # Vec3, easing, Lehmer PRNG
│   └── types.ts            # SceneHandle, ThemeModule, SceneKind enum
├── themes/                 # Sistema de temas plug-in
│   ├── registry.ts         # REGISTRY: Record<ThemeId, ThemeModule>
│   ├── ai/                 # Rede neural 3D (9 camadas, 44 neurônios)
│   ├── blockchain/         # Grafo force-directed (chain + carteiras)
│   ├── software/           # Matrix digital rain + glitch
│   └── web/                # Topologia hyperlink spiderweb
├── stores/
│   ├── themeStore.ts       # Sinal theme + localStorage (AI sempre inicial)
│   └── i18nStore.tsx       # pt-br/en, fetch JSON, context, t() helper
└── types.ts                # Interfaces compartilhadas (Language enum, Messages)
```

## Temas visuais

Cada tema é um diretório com **4 arquivos**:

- `index.ts` — `ThemeModule` (colorScheme, cameraPreset, postPreset)
- `scene.ts` — Factory Three.js (`SceneConfig → SceneHandle`)
- `theme.css` — `[data-theme="x"]` CSS custom properties
- `types.ts` — Tipos específicos do tema

Troca de tema usa **crossfade de 800ms** (400ms fade out + 400ms fade in).

## Post-processing

Shaders personalizados aplicados via `EffectComposer`:

- **Scanlines** — linhas horizontais animadas por `uTime`
- **Vignette** — escurecimento radial nas bordas
- **Chromatic aberration** — shift do canal R nas bordas
- **Bloom** — `UnrealBloomPass` com breathing baseado em densidade da cena

## i18n

- **pt-br** (padrão) e **en** disponíveis
- JSON em `public/data/languages/`
- Persistência via `localStorage` (`portfolio-language`)
- SSR sempre renderiza pt-br; cliente corrige se necessário
- Componentes usam `messages()?.path` com fallback em português

## Convenções

- `enum` para todos os estados discretos (SceneKind, Phase, Language, TransitionPhase)
- Funções puras, imutabilidade (`Object.freeze`, `Readonly<>`)
- Zero classes — estado em closures (factory functions)
- Animações usam `onMount` + `setInterval`, nunca `createEffect`
- TypeScript strict, nunca `any`

## Deploy

CI via GitHub Actions: push na `main` → quality (typecheck + lint + test) → build → GitHub Pages.
Config em `.github/workflows/deploy.yml`.

## Licença

MIT
