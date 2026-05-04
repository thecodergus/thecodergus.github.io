# I18n Initialization Flow — Correct Pattern

## Architecture

```
SSR/Build:
  getInitialLanguage() → PtBr (always)
  createSignal(PtBr)
  messages() = undefined → components use hardcoded Portuguese fallbacks ("Sobre", "Habilidades", etc.)
  entry-server.tsx: <html lang="pt-br">

Client page load:
  1. LANG_SCRIPT (app.tsx inline) runs — sets document.documentElement.lang from localStorage
     (cosmetic only, does NOT affect SolidJS state)
  2. SolidJS module initializes:
     - getInitialLanguage() → PtBr (always, no localStorage read)
     - createSignal(PtBr) — matches SSR value, no hydration mismatch
  3. Hydration: components render with SSR DOM, messages() still undefined
  4. I18nProvider.onMount fires:
     a. fetchSharedData() → setSharedData()
     b. Check localStorage for stored preference; if found and differs from PtBr,
        update language signal via setLanguageSignal()
     c. fetchMessages(language()) → setMessages()
     d. Components re-render with fetched content
```

## Language switching (user clicks PT/EN button)

`setLanguage(lang)` in `src/stores/i18nStore.tsx`:
1. `setLanguageSignal(lang)` — updates reactive signal
2. `localStorage.setItem(STORAGE_KEY, lang)` — persists preference
3. `setFetchError(null)`
4. `fetchMessages(lang)` → on success: `setMessages(data)` → UI re-renders
5. On failure: `setFetchError(...)`, old messages remain

## Fallback strategy

Components use `messages()?.path.to.key || "Fallback em português"`:
- 21 fallback strings across 9 component files, all in Portuguese
- 2 were already Portuguese ("Idioma", "por")
- 19 were converted from English during i18n bug fix

## Data files

- `public/data/languages/pt-br.json` — Portuguese messages (237 lines)
- `public/data/languages/en.json` — English messages (237 lines)
- `public/data/portfolio_shared_data.json` — Language-independent data (name, titles, skills, social links)

## t() function status

`t(key)` is defined in `src/stores/i18nStore.tsx` and wired into `I18nContextValue`, but **no component uses it**. All components destructure `messages` from `useI18n()` and use manual property access. The `t()` function exists as dead code.
