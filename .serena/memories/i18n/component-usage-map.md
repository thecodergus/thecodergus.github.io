# I18n Component Map — Which Destructures What

All 11 components that touch i18n. `t()` is available in context but NEVER destructured.

| File | Destructured from `useI18n()` |
|---|---|
| `routes/index.tsx:15` | `{ sharedData }` |
| `components/Navbar.tsx:42` | `{ language, messages }` |
| `components/Hero.tsx:10` | `{ sharedData, messages }` |
| `components/About.tsx:6` | `{ messages, sharedData }` |
| `components/Stats.tsx:11` | `{ messages }` |
| `components/Skills.tsx:11` | `{ sharedData, messages }` |
| `components/Experience.tsx:6` | `{ messages }` |
| `components/Projects.tsx:7` | `{ messages, language }` |
| `components/Contact.tsx:6` | `{ messages, sharedData }` |
| `components/Footer.tsx:5` | `{ sharedData, messages }` |
| `components/ProjectModal.tsx:14` | `{ messages }` |

## Unique usage notes

- **Navbar.tsx**: The ONLY component that uses `language()` — for the PT/EN button active state. Also imports `setLanguage` directly from module (not context) for button onClick.
- **Projects.tsx**: Uses `language()` inside `createEffect` to reset modal state on language change: `createEffect(() => { void language(); setSelectedProject(null); setModalOpen(false); })`.
- **Doom route** (`routes/doom.tsx`): Does NOT consume i18n at all. Has hardcoded Portuguese text.
- **`getInitialLanguage()`**: Module-private function, called exactly once (signal init). Only in `i18nStore.tsx`.

## Fallback strings per file

| File | Count | Examples |
|---|---|---|
| Navbar.tsx | 6 | `"Sobre"`, `"Habilidades"`, `"Experiência"`, `"Projetos"`, `"Contato"`, `"Abrir menu"` |
| Hero.tsx | 2 | `"Explorar temas"`, `""` (theme labels) |
| About.tsx | 1 | `"Sobre Mim"` |
| Stats.tsx | 4 | `"Projetos"`, `"Anos Exp."`, `"Linguagens"`, `"Deploys"` |
| Skills.tsx | 3 | `"Linguagens"`, `"Frameworks & Ferramentas"`, `"Dados & Bancos"` |
| Experience.tsx | 1 | `""` (empty string) |
| Projects.tsx | 2 | `"Todos"`, `"Ver projeto"` |
| Contact.tsx | 2 | `""` (empty strings) |
| Footer.tsx | 2 | `""`, `"por"` |

**Total: 21 fallbacks** — all now in Portuguese (converted from originally mostly English).
