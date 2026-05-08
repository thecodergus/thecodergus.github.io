---
description: Deploy manual do build para GitHub Pages
mode: primary
globs:
  - "**/*"
---

# /deploy

Executa o build e faz deploy manual para GitHub Pages.

**Workflow:**
1. `npm run build` — gera `.output/public/`
2. `touch .output/public/.nojekyll` — previne processamento Jekyll
3. Commit e push do diretório para branch `gh-pages`

**CI:** O deploy automático acontece via `.github/workflows/deploy.yml`
em push para `main`. Use este comando apenas para deploys manuais
de emergência.

**Verificação:** Acesse `https://thecodergus.github.io` após 1-2 minutos
e confirme com hard refresh (Ctrl+Shift+R).
