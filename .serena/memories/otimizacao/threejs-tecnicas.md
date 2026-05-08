# Técnicas de Otimização Three.js

## Fonte primária: discoverthreejs.com/tips-and-tricks/ (via parallel_web_fetch)

### InstancedMesh

- Usar quando há muitos objetos com mesma geometria/material — reduz draw calls para 1
- `setMatrixAt()` e `setColorAt()` escrevem em buffer GPU interno — custo real
- Pular `setMatrixAt()` para instâncias que não mudaram posição/rotação/scale
- Matriz de identidade + translação pode ser escrita manualmente nos elementos em vez de `updateMatrix()` + `setMatrixAt()`
- `instanceMatrix.needsUpdate` e `instanceColor.needsUpdate` são flags independentes — setar só o que mudou

### BufferGeometry / BufferAttribute

- Buffers NÃO podem ser redimensionados — pre-alocar tamanho máximo
- `needsUpdate = true` força upload à GPU — só chamar quando dados mudaram
- Para atributos que mudam todo frame: `setAttribute(..., new THREE.BufferAttribute(..., 3))` — setar `usage: DynamicDrawUsage` ou equivalente
- `drawRange` permite renderizar subconjunto do buffer sem realocar
- TypedArray `.array` (ex: `Float32Array`) pode ser acessado diretamente para escrita zero-overhead
- Vertex colors via `Float32Array` são mais rápidos que `new THREE.Color()` no loop

### Materials

- "Only update your uniforms when they change, not every frame" — mesmo princípio aplica-se a vertex colors
- Transparent objects são lentos — `AdditiveBlending` + `depthWrite: false` é mais leve que alpha blending padrão
- `MeshBasicMaterial` é o material mais barato (sem lighting calculation)
- `LineBasicMaterial` com `vertexColors: true` + `transparent: true` — custo moderado
- Evitar `MeshStandardMaterial`/`MeshPhongMaterial` a menos que precise de iluminação

### Object3D / Transformações

- `matrixAutoUpdate = false` para objetos estáticos — evita recomputação de matrix por frame
- `object.updateMatrix()` faz `matrix.compose(position, quaternion, scale)` — custo de 4×4 matrix compose
- `Matrix4.compose()` é mais barato que `Object3D.updateMatrix()` (sem overhead de propriedades)
- Para InstancedMesh: `dummy.updateMatrix()` é o gargalo, não `setMatrixAt()` em si
- `object.position.set(x,y,z)` é mais rápido que 3 atribuições individuais (`.position.x =`, etc.)

### Scene / Culling

- Frustum culling é automático no Three.js, mas verificar manualmente evita iteração CPU de objetos invisíveis
- `Frustum.containsPoint()` é barato (teste de 6 planos) — chamar 1× por frame, não por objeto
- `object.visible = false` é mais barato que `scene.remove()`/`scene.add()` (evita recompilação de shader para lights)

### Câmara

- Fazer frustum o menor possível — `camera.far` menor = melhor performance
- `camera.updateProjectionMatrix()` só quando fov/aspect/near/far mudam

### Garbage Collection

- Nunca criar `new THREE.Vector3()`, `new THREE.Color()`, `new THREE.Matrix4()` no render loop
- Alocar objetos utilitários uma vez no escopo da factory function
- Usar `.set()`, `.copy()`, `.identity()` para reutilizar objetos

### Color / RGB manipulation

- `new THREE.Color(hexString)` faz parsing de string toda chamada — caro em hot loops
- Alternativa: pre-compute `[r, g, b]` tuples via `new THREE.Color("#HEX")` uma vez na factory
- Acesso direto `cluster.r`/`.g`/`.b` em vez de `nColor.set(cluster.color)` + leitura de propriedades
- `parseInt(hex.slice(1,3), 16) / 255` é o pior caso — 3× `slice()` + 3× `parseInt()` por iteração

### Mesh / Line / Points position patterns

- `mesh.getWorldPosition(vec3)` faz matrix traversal recursivo — usar posição local quando hierarquia é plana
- `group.position.z + localOffset.z` é suficiente para posição world quando não há rotação intermediária
- `position.clone()` aloca novo Vector3 — usar `.copy()` em vetor pre-alocado (`_fromVec.copy(source)`)
- `dummy.position.copy(pos)` + `dummy.updateMatrix()` é o gargalo em InstancedMesh, não `setMatrixAt()`

### Remove/splice patterns

- `arr.splice(i, 1)` dentro de loop reverso (`for i = len-1; i >= 0; i--`) é correto e não aloca
- Evitar `const toRemove = []; arr.forEach(...toRemove.push(i)); toRemove.reverse().forEach(i => arr.splice(i,1))` — aloca array temporário
- `arr.length = 0` para drain rápido (ex: `bwdParticles.length = 0`)

### Post-Processing

- Cada pass de post-processing renderiza a cena inteira de novo
- Combinar passes em um único shader quando possível
- MSAA nativo NÃO funciona com EffectComposer — usar FXAA/SMAA pass
- `pixelRatio` cap em `Math.min(devicePixelRatio, 2)` para dispositivos mobile high-DPI
