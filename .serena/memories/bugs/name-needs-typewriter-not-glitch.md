# Bug: Nome usa GlitchText (scramble) em vez de typewriter

**Arquivo**: `src/components/Hero.tsx` (linha 64)

**Problema**: O nome "Gustavo M Camargo" é renderizado com `<GlitchText>` que faz efeito de scrambling aleatório (Matrix-style), não animação de digitação (typewriter).

**Desejado**: Animação de digitação caractere-por-caractere estilo Charmbracelet Crush (terminal typing effect). O nome deve ser digitado uma vez ao carregar a página, com cursor piscante durante a digitação, e permanecer visível depois.

**Abordagem**: Criar um componente `<TypewriterText>` separado, ou adaptar a lógica existente do typewriter dos títulos (que também precisa ser consertada). O nome digita uma vez e o cursor some após completar.
