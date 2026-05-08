# Princípios Gerais de Otimização

## Fontes

Estes princípios foram extraídos de:
- MCP search: Parallel Web Search (múltiplas queries sobre Three.js performance)
- discoverthreejs.com/tips-and-tricks/ (via parallel_web_fetch)
- threejs.org/manual/en/how-to-update-things.html (via parallel_web_fetch)
- threejs-journey.com/lessons/performance-tips
- Prince Jain blog: Three.js Performance Best Practices (Oct 2025)
- 57Blocks blog: BufferGeometry performance improvements (Dec 2025)

## Regra de Ouro

"Não assuma que você sabe o que é mais rápido. Motores JavaScript mudam frequentemente. Sempre meça." — discoverthreejs.com

## Princípios fundamentais

1. **Zero alocação no hot path**: Não criar objetos (`new`, `{}`, `[]`, closures `() => {}`) dentro do render loop. Criar objetos uma vez fora do loop e reutilizar via `.set()`, `.copy()` ou mutação direta de elementos.

2. **Dirty flags**: Se dados não mudam a cada frame, não os envie à GPU. Use flags booleanas para rastrear quando dados foram modificados e só chame `.needsUpdate = true` quando necessário.

3. **Trabalho condicional**: Se 85% dos itens não mudam de estado, pule-os. Track state anterior e só faça trabalho para os que mudaram.

4. **`for` loops > `forEach`**: Elimina alocação de closure function por iteração. V8 otimiza `forEach` mas ainda há overhead de call + contexto. Para hot paths, `for` é sempre preferível.

5. **CPU vs GPU**: Descubra qual é o gargalo primeiro. Substitua todos os materiais por `MeshBasicMaterial` via `scene.overrideMaterial`. Se FPS sobe = GPU-bound, se não = CPU-bound.

6. **Pré-compute o imutável**: Valores que nunca mudam (posições fixas, cores base, arrays de referência) devem ser computados uma vez na criação e congelados (`Object.freeze`, `Readonly<>`).

7. **Tipagem e estruturas de dados**: `Float32Array` é mais rápido que `number[]` para manipulação buffer. `TypedArray` acesso direto é mais rápido que `Color.set()` + leitura de propriedades.

8. **Object pooling**: Para partículas/sprites que são criados/destruídos frequentemente, use pool de objetos reutilizáveis em vez de `new` + garbage collection.

## Técnicas aprendidas em sessões reais

### Dirty flags (padrão mais impactante)
Quando dados mudam com frequência muito menor que o frame rate, evite recomputar todo frame:
- `neuronsDirty`/`edgeColorsDirty` no tema AI: só atualiza quando forward pass (0.6s) ou dropout (3s) rodam
- Redução: 44 neurons + 198 edges → zero trabalho em ~83% dos frames

### Pre-compute tudo que é imutável
- Tema Software: `_vec3`, `_projScreen`, `_frustum` alocados 1× na factory, reutilizados todo frame
- Tema AI: `dissolveObjects` array pre-construído, `manifoldClusters` RGB tuples pre-computados, `nPositions: Vector3[]` pre-alocado
- Tema Blockchain: `primaryRGB`/`secondaryRGB` tuples pre-computados do colorScheme (#F7931A → [0.969, 0.576, 0.102])

### Evitar APIs que alocam ou fazem trabalho extra
- `getWorldPosition()` → substituir por cálculo direto de posição local + offset quando hierarquia é plana
- `position.clone()` → `.copy()` em vetor pre-alocado
- `Color.set(hexString)` → parser de string todo frame; usar `[r,g,b]` pre-computado
- `parseInt(hex.slice(1,3), 16) / 255` → pior dos casos; usar tuple RGB direto
- `group.traverse()` → array pre-construído de objetos

### Structuring hot loops
- `forEach` → `for` com variável de índice local (elimina closure por iteração)
- `for (let i = arr.length - 1; i >= 0; i--)` para loops que fazem splice (evita alocação de array `toRemove`)
- `continue` em vez de `return` para early exit em `for` loops
- Caching de `.length`, `.config`, `.sprites` fora do inner loop

### GPU buffer uploads são caros
- `needsUpdate = true` em BufferAttribute força upload GPU — só chamar quando dados mudaram
- `setMatrixAt()` + `setColorAt()` em InstancedMesh — ambos custo real, não são "grátis"
- Separar `instanceMatrix.needsUpdate` de `instanceColor.needsUpdate` — setar só o que mudou

## Anti-padrões comuns

- `object.matrixAutoUpdate = true` para objetos estáticos (a matrix é recomputada todo frame desnecessariamente)
- `forEach`/`map` dentro do render loop com funções arrow (alocação de closure)
- `needsUpdate = true` todo frame quando os dados não mudaram
- `traverse()` recursivo repetido (faz cópia de array interno toda vez)
- Criar `new THREE.Color(string)` ou `new THREE.Vector3()` no hot path
- Não dar dispose de geometrias/materiais/texturas ao remover objetos
