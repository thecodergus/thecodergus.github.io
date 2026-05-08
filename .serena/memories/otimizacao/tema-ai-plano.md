# Plano de Otimização — Tema AI (rede neural 3D)

## Contexto

- 44 neurons (InstancedMesh, 1 draw call) — 9 camadas em layout cônico 3D
- 198 edges (LineSegments com vertex colors, 1 draw call) — all-to-all entre camadas adjacentes
- 125 forward particles (Points), 40 backward particles (Points), 60 manifold points (Points)
- 20 spike rings (Mesh pool), 3 ripples (Torus Mesh), 5 arcs (Line), 1 loss chart (Line)
- Draw calls totais: ~10

## Plano (priorizado por impacto)

### 1. Selective InstancedMesh matrix updates [Prioridade: HIGH]

**Problema**: 44 × `dummy.updateMatrix()` + `setMatrixAt()` todo frame, mas neurons nunca mudam posição. Só scale muda (1.0 → 0.05) para neurons droppados (~15%).

**Solução**:
- Guardar `previousDropped: Set<number>` do frame anterior
- No update: comparar com `dropout.dropped` atual
- Só chamar `updateMatrix()` + `setMatrixAt()` para neurons que ENTRARAM ou SAÍRAM do dropout
- Para estáveis (85%): pular completamente — matriz foi setada no init
- `instanceMatrix.needsUpdate` só se houve transição de estado

**Arquivos**: `src/themes/ai/scene.ts` linhas 742-770

### 2. Edge vertex colors com dirty flag [Prioridade: HIGH]

**Problema**: 198 edges × 6 floats = 1188 writes + `needsUpdate = true` todo frame, mas activations só mudam a cada 0.6s (forward pass).

**Solução**:
- `edgeColorDirty: boolean`, setado em `runForwardPass()` e `applyDropout()`
- No update: pular bloco 773-800 se não dirty
- Resetar flag após recomputação

**Arquivos**: `src/themes/ai/scene.ts` linhas 773-801

### 3. Neuron color update só quando activations mudam [Prioridade: HIGH]

**Problema**: 44 × `setColorAt()` todo frame, mas activations mudam a cada 0.6s.

**Solução**:
- `neuronColorDirty: boolean`, mesma lógica do edge dirty flag
- Combinar com o tracking de dropout do item 1
- `instanceColor.needsUpdate` só se dirty

**Arquivos**: `src/themes/ai/scene.ts` linhas 742-770

### 4. `forEach` → `for` em hot paths [Prioridade: MEDIUM]

Converter todos os `forEach` restantes:
- `ripples.forEach` (line 804, 3 itens)
- `spikeRings.forEach` (line 867, 20 itens, maioria inativos)
- `arcLines.forEach` (line 843, 5 itens)
- `setOpacity()` (lines 983, 985 — ripples, arcLines)
- `dispose()` (lines 941, 950, 958 — ripples, arcLines, spikeRings)

### 5. `dissolve()` — pre-build flat object array [Prioridade: MEDIUM]

**Problema**: `group.traverse()` + `Array.push()` + `forEach` a cada chamada de dissolve.

**Solução**: Construir `readonly THREE.Object3D[]` uma vez na factory, reusar.

### 6. Data manifold — pre-compute RGB tuples [Prioridade: LOW]

**Problema**: `nColor.set(cluster.color)` faz string parsing 60× por frame.

**Solução**: `manifoldClusters` de `{ centerX, centerY, color: string }` para `{ centerX, centerY, r, g, b }`.

## Status: IMPLEMENTADO ✅

Todos os 6 itens implementados em `src/themes/ai/scene.ts`. Validado: tsc 0 erros, eslint 0/0, vitest 3/3, build ok.

### Detalhes da implementação

**Dirty flags**: `neuronsDirty` + `edgeColorsDirty` declarados após `FORWARD_PASS_INTERVAL`. Setados em `runForwardPass()` (0.6s) e `applyDropout()` (3s). Neuron update e edge color update gateados com `if (neuronsDirty)` / `if (edgeColorsDirty)`.

**forEach → for**: ripples (3 itens), arcLines (5), spikeRings (20), setOpacity, dispose, entrance — todos convertidos.

**Dissolve**: `dissolveObjects: readonly THREE.Object3D[]` construído uma vez antes do update, contendo todos os 36 objetos renderizáveis. Dissolve usa `for` loop sobre `dissolveObjects`. Inner `mats.forEach` também convertido para `for`.

### Bugs corrigidos (pré-existentes)
- `rangeBetween`, `easeInOutCubic`, `easeOutQuad` removidos do import (unused)
- `backpropTimer` removido (declarado mas nunca usado)
- `attnHalf` removido (atribuído mas nunca usado)
- `config` → `_config` no parâmetro de `createAIScene`

## Restrições

- ZERO `!` assertions
- ZERO `any` types
- Visual output idêntico ao original
- Sem alterar interface de outros temas
- `enum` para estados discretos
