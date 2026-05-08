---
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
keywords:
  - "typescript"
  - "type"
  - "interface"
  - "enum"
match: any
---

# TypeScript Strictness Rules

## Regra 1: NUNCA usar `any`

Prefira `unknown` e faça narrowing com type guards. Se o tipo é
verdadeiramente dinâmico (ex: JSON de API externa), use
`Record<string, unknown>`.

**✅ Correto:**
```ts
function parseApiResponse(data: unknown): ParsedData {
  if (typeof data === "object" && data !== null && "id" in data) {
    // ...
  }
  throw new Error("Invalid response shape");
}
```

**❌ Errado:**
```ts
function parseApiResponse(data: any): ParsedData { ... }
```

## Regra 2: SEMPRE usar `enum` para categorização

Qualquer conjunto de variantes discretas (phases, states, modes, themes,
categories) DEVE ser um `enum`, nunca string unions ou magic constants.

**✅ Correto:**
```ts
enum SceneKind { AI = "ai", Blockchain = "blockchain" }
```

**❌ Errado:**
```ts
type SceneKind = "ai" | "blockchain";
```

`enum` fornece single source of truth e exhaustiveness checking do compilador.

## Regra 3: Parâmetros e retornos explicitamente tipados

Funções públicas DEVEM ter parâmetros e tipo de retorno explícitos.
Evite inferência implícita para APIs públicas.

```ts
// ✅ Correto
function createEngine(canvas: HTMLCanvasElement): EngineHandle { ... }

// ❌ Errado — tipo de retorno implícito
function createEngine(canvas: HTMLCanvasElement) { ... }
```

## Regra 4: Non-null assertions (`!`) proibidas

Use narrowing ou optional chaining. `!` mascara bugs.

**✅ Correto:**
```ts
const el = document.getElementById("canvas");
if (!el) throw new Error("Canvas not found");
const ctx = el.getContext("2d");
```

**❌ Errado:**
```ts
const ctx = document.getElementById("canvas")!.getContext("2d");
```
