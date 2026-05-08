---
description: Build de produção (static preset) para deploy
mode: primary
globs:
  - "**/*"
---

# /build

Executa o build de produção do SolidStart com preset static.

```bash
npm run build
```

O output vai para `.output/public/`. O CI faz o deploy automático desse
diretório para GitHub Pages (branch `gh-pages`).

**Verificação:**
1. `ls .output/public/` — deve conter `index.html`, assets JS/CSS
2. `npm start` para preview local do build
