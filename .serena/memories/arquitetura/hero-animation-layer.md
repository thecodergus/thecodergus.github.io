# Estrutura de animação do Hero

**Componentes visuais no Hero (ordem vertical):**
1. Badge `<AI_Engineer />` — estático, monospaced, borda verde
2. Nome (h1) — **DEVE** ser typewriter animado, não GlitchText
3. Títulos/subtítulos (h12-16) — **DEVE** ser typewriter rotativo com delete cycle
4. Subtítulo descritivo (p) — estático, i18n
5. Theme pills — interativo
6. Social links (GitHub, LinkedIn, Email) — estáticos
7. Scroll-down chevron — animação bounce

**Comportamento desejado da animação:**
- Nome: digita uma vez ao carregar, cursor pisca durante digitação, some ao final
- Títulos: ciclo contínuo de digitar → pausa → apagar → próximo título → repetir
- Cursor: `|` com `animate-pulse` durante digitação ativa

**Dados**: Name vem de `sharedData()?.basic_info?.name` ("Gustavo Michels de Camargo"). Titles vêm de `sharedData()?.basic_info?.titles` (array de 5 strings em português).

**Referência de estilo**: Charmbracelet Crush — terminal typing effect: caracteres aparecem um por um, suave, com cursor piscante.
