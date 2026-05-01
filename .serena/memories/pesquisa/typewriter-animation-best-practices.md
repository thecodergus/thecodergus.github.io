# State of the Art: Typewriter Animation em SolidJS

## Padrão canônico para typewriter em SolidJS
**`onMount` + `setInterval` + `createSignal`** — NÃO usar `createEffect` para animações de digitação.

Por quê:
1. `createEffect` rastreia sinais lidos **sincronamente** no corpo do efeito. Sinais lidos dentro de `setTimeout`/`setInterval` NÃO são rastreados.
2. `onMount` + `setInterval` é o padrão correto: cada tick do interval atualiza o signal, e o SolidJS atualiza eficientemente apenas o nó DOM afetado (fine-grained reactivity).
3. Evitar código assíncrono dentro de `createEffect` — princípio documentado na Marmelab (2025) e ThisDot (2024).

## Motion+ Typewriter (referência premium)
- 1.3KB, React, pago (Motion+)
- Features: typing speed variance (human-like), cursor blink speed, ARIA labels, dynamic content com backspace inteligente
- Padrão de API: `<Typewriter>texto</Typewriter>` — children como string
- Cursor: customizável via props

## Charmbracelet Crush typing aesthetic (referência terminal)
- Texto aparece caractere por caractere, estilo terminal
- Cursor piscante `|` padrão terminal
- Sem efeitos visuais extras, puro character reveal
- Inspiração: minimalista, monospace feel, clean

## Abordagens JS vs CSS
- **JS (recomendado)**: Mais controle, backspace/retype, conteúdo dinâmico, velocidade variável. Complexidade moderada.
- **CSS puro**: `@keyframes` + `steps()` + `overflow:hidden` + `width`. Simples mas menos flexível. Não suporta delete cycle ou conteúdo dinâmico.
- **Conclusão**: JS é necessário para os requisitos (name type-once + titles rotate com delete).

## Timing issue em SolidJS com dados assíncronos
- `sharedData` é carregado via `onMount` no `I18nProvider`
- `onMount` do pai roda antes do filho, mas o fetch é async
- Solução: envolver TypewriterText em `<Show when={name()}>` para garantir que o componente só monte quando o texto estiver disponível
