---
globs:
  - "src/**/*.css"
  - "src/**/*.tsx"
keywords:
  - "tailwind"
  - "css"
  - "theme"
  - "style"
match: any
---

# Tailwind CSS v4 Rules

## Regra 1: @theme para design tokens, data-theme para scoping

Tokens base são definidos no bloco `@theme {}` do `app.css` (defaults
do tema AI). Cada tema tem seu próprio `[data-theme="x"]` scope que
sobrescreve cores e intensidades de post-processing.

**Arquitetura:**
```
app.css
  @theme { ... }           ← tokens base (AI theme defaults)
  @import "./themes/ai/theme.css"       ← [data-theme="ai"] overrides
  @import "./themes/blockchain/theme.css"
  @import "./themes/software/theme.css"
  @import "./themes/web/theme.css"
```

## Regra 2: NUNCA usar @apply

Tailwind v4 não recomenda `@apply`. Use classes diretamente no JSX.

**✅ Correto:**
```tsx
<div class="flex items-center gap-4 p-6 bg-background text-primary">
```

**❌ Errado:**
```css
.card {
  @apply flex items-center gap-4;
}
```

## Regra 3: Cores usam tokens do tema, NÃO valores hardcoded

**✅ Correto:** `class="text-primary bg-background"`
**❌ Errado:** `class="text-[#00E5FF] bg-[#080012]"`

Exceção: `--color-accent-red: #FE4450` é universal (coração, status dots).

## Regra 4: body overflow-x hidden

`body { overflow-x: hidden }` está definido no `app.css`. Elementos
full-bleed precisam de width handling explícito.
