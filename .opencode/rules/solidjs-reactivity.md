---
globs:
  - "src/**/*.tsx"
  - "src/**/*.ts"
keywords:
  - "solidjs"
  - "createEffect"
  - "onMount"
  - "createSignal"
  - "reactive"
match: any
---

# SolidJS Reactivity Rules

## Regra 1: Animações e intervalos usam onMount, nunca createEffect

Typewriter, intervalos, e animações baseadas em timer DEVEM usar
`onMount` + `setInterval`/`setTimeout`, nunca `createEffect`.

**Motivo:** Signals lidos dentro de callbacks assíncronos (setTimeout,
setInterval, event handlers) são invisíveis ao sistema de reatividade.
O efeito executa uma vez e nunca re-dispara.

**✅ Correto:**
```tsx
onMount(() => {
  const timer = setInterval(() => {
    setDisplayText(prev => computeNext(prev));
  }, INTERVAL_MS);
  onCleanup(() => clearInterval(timer));
});
```

**❌ Errado:**
```tsx
createEffect(() => {
  // Nunca re-dispara porque o signal é lido dentro do timeout
  setTimeout(() => setDisplayText(someSignal()), 100);
});
```

## Regra 2: Se PRECISAR de createEffect com async, leia o signal antes

Se não houver alternativa ao `createEffect` com async (ex: RotatingTypewriter
delete cycle), leia o signal SINCRONAMENTE antes do timer:

```tsx
createEffect(() => {
  const val = displayText(); // ← leitura síncrona = dependência rastreada
  setTimeout(() => {
    // usa `val` aqui
  }, DELETE_DELAY);
});
```

## Regra 3: Module-level createSignal NUNCA lê localStorage durante init

SSR não tem `window`. Se `getInitialValue()` usa `localStorage`, o valor
inicial do SSR será diferente do client, causando flash de conteúdo.

**✅ Correto:** A função `getInitial*()` sempre retorna um default fixo.
O provider sincroniza com localStorage no `onMount` antes de fazer fetch.

**Pattern estabelecido:** `getInitialTheme()` sempre retorna `"ai"`;
`getInitialLanguage()` sempre retorna `Language.PtBr`.

## Regra 4: Guards com `<Show when={data()}>` para dados assíncronos

`sharedData` e `messages` são carregados via `fetch` no `onMount` do
I18nProvider — NÃO estão disponíveis durante SSR. Componentes que
consomem esses valores PRECISAM de guard:

```tsx
<Show when={name()}>
  <TypewriterText text={name()} />
</Show>
```
