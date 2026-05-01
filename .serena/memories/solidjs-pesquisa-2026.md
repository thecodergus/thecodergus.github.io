# SolidJS - Pesquisa Abril 2026

## Versão e Setup
- SolidJS: última versão estável (1.x series)
- SolidStart: v1.3.2 (fev/2026) - meta-framework
- Setup recomendado: `npm init solid@latest` ou templates via `npx degit solidjs/templates`
- Suporte TypeScript nativo
- Scaffolding com Vite (via Vinxi)

## Paradigma Diferente do React
- Sem Virtual DOM
- Componentes executam APENAS UMA VEZ
- Reatividade via Signals: `createSignal` (getter/setter)
- Sem re-renders automáticos
- JSX usa `{count()}` (chamada de função) ao invés de `{count}`

## Mapeamento React -> SolidJS
- `useState` -> `createSignal`
- `useEffect` -> `createEffect`
- `useMemo` -> `createMemo`
- `useEffect(() => {}, [])` -> `onMount`
- Cleanup em useEffect -> `onCleanup`
- `useContext` -> `createContext`/`useContext`
- `useRef` -> `let ref` (variável normal) ou callback ref

## Ecosystem UI
- Kobalte: componentes acessíveis não estilizados (equivalente ao Radix UI)
- Solid Primitives: utilitários reativos da comunidade
- SolidBase: SSG para SolidStart
- Tailwind CSS v4: integração via PostCSS, suportado oficialmente
- NÃO existe shadcn/ui para SolidJS (apenas React)

## Deploy SSG para GitHub Pages
- SolidStart suporta SSG via configuração:
  ```ts
  server: {
    preset: 'static',
    prerender: { crawlLinks: true }
  }
  ```
- Output vai para `.output/public/`
- Pode usar adaptador estático

## Animações
- SolidJS não tem Framer Motion (React-only)
- Opções: GSAP (framework agnostic), Motion One, Web Animations API, CSS animations
- Tailwind CSS animations para micro-interações

## Routing
- SolidStart usa file-based routing em `routes/`
- `<FileRoutes />` gera rotas automaticamente
- Suporta nested routes, layouts, route groups com ()
- Para SPA simples, pode usar `@solidjs/router`