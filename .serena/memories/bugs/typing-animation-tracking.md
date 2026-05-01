# Bug: Typing animation só avança 1 caractere

**Arquivo**: `src/components/Hero.tsx` (linhas 18-43)

**Causa raiz**: No `createEffect`, `displayText()` só é lido dentro do callback do `setTimeout`, portanto NÃO é uma dependência rastreada (tracked) do efeito reativo do SolidJS. O efeito só re-executa quando `titles()`, `titleIndex()` ou `isDeleting()` mudam. Como `setDisplayText()` atualiza `displayText()` mas este não é tracked, o efeito não re-executa após cada caractere digitado.

**Sintoma**: O typewriter anima apenas 1 caractere e para. No HTML pré-renderizado, o conteúdo aparece vazio (`<!--$--><!--/-->`).

**Solução**: Mover `const currentText = displayText()` para a parte síncrona do `createEffect`, ANTES do `setTimeout`, para que SolidJS rastreie a dependência e o efeito re-execute a cada atualização de `displayText()`.

**Verificação**: `grep` no HTML buildado confirma que `displayText` não aparece no output pré-renderizado — a animação nunca inicia.
