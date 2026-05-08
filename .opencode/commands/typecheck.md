---
description: Verificação de tipos TypeScript sem emitir arquivos
mode: primary
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# /typecheck

Executa verificação de tipos TypeScript em todo o projeto.

```bash
npm run typecheck
```

Equivalente a `tsc --noEmit`. Usa as configurações do `tsconfig.json`:
strict mode, bundler module resolution, JSX preserve com SolidJS.

**Critérios de sucesso:** Zero erros. Qualquer erro de tipo deve ser
corrigido antes do merge.
