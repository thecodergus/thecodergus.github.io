# SSR/Client Hydration Mismatch with Module-Level createSignal + localStorage

## The bug

In `src/stores/i18nStore.tsx`, the `language` signal is created at module level:

```ts
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return Language.PtBr;
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && Object.values(Language).includes(stored)) return stored;
  return Language.PtBr;
}

const [language, setLanguageSignal] = createSignal<Language>(getInitialLanguage());
```

**SSR (build/prerender):** `typeof window === "undefined"` → always returns `Language.PtBr` → HTML renders with Portuguese fallbacks.

**Client hydration:** The JS bundle re-imports the module in the browser. `typeof window !== "undefined"` → reads `localStorage.getItem("portfolio-language")`. If the user previously clicked the EN button in the language switcher, returns `Language.En`.

**Result:** The `language` signal initializes to `En` on the client while the SSR HTML shows Portuguese. Then `I18nProvider.onMount` calls `fetchMessages(language())` → fetches `en.json` → entire page flips to English, even though the user expected Portuguese.

## The fix (in `src/stores/i18nStore.tsx`)

1. `getInitialLanguage()` always returns `PtBr` — never reads localStorage:

```ts
function getInitialLanguage(): Language {
  return Language.PtBr;
}
```

2. In `I18nProvider.onMount`, sync the signal with localStorage BEFORE fetching:

```ts
onMount(() => {
  fetchSharedData()...
  
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && Object.values(Language).includes(stored) && stored !== language()) {
      setLanguageSignal(stored);
    }
  }
  
  fetchMessages(language())... // now uses correct language
});
```

This ensures SSR and client signals start with the same value (PtBr), avoiding any hydration mismatch. The stored preference is respected before the fetch, so returning visitors who chose English still see English — but SSR always renders Portuguese initially (no flash to English for first-time visitors).

## Same pattern in themeStore.ts

`themeStore.ts` already handles this correctly: `getInitialTheme()` always returns `"ai"`, with no localStorage read. The onMount in ThemeProvider handles the override if needed.

## Key principle

**Module-level `createSignal` initial values must be deterministic and independent of client-only state (localStorage, window, document, etc.).** Any client-state-dependent initialization must happen in `onMount` or a provider wrapper, after the signal is created with a safe default.
