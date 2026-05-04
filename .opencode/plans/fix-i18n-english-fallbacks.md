# Plano: Corrigir bug de fallbacks em inglês no i18n

## Diagnóstico

**Raiz do bug**: O site exibe todos os textos em inglês na carga inicial apesar do idioma padrão ser português. Duas causas:

1. **`entry-server.tsx:6`** — `<html lang="en">` hardcoded (deveria ser `pt-br`)
2. **17 dos 21 fallbacks** nos componentes são strings em inglês. Quando `messages()` é `undefined` (durante SSR/prerender), todos os textos caem para os fallbacks em inglês

Fluxo: SSR renderiza com `messages=undefined` → fallbacks em inglês → HTML estático em inglês → cliente hidrata → `onMount` carrega `pt-br.json` → textos atualizam para português. Mas se o fetch falhar (silenciosamente, `.catch(console.error)`), a página fica em inglês permanentemente.

## Mudanças necessárias

### 1. `src/entry-server.tsx`
- Linha 6: `lang="en"` → `lang="pt-br"`
- Linha 21: `"Skip to main content"` → `"Pular para o conteúdo"`

### 2. `src/components/Navbar.tsx`
- Linhas 49-53: `"About"/"Skills"/"Experience"/"Projects"/"Contact"` → `"Sobre"/"Habilidades"/"Experiência"/"Projetos"/"Contato"`
- Linha 108: `"Toggle menu"` → `"Abrir menu"`

### 3. `src/components/About.tsx`
- Linha 29: `"About Me"` → `"Sobre Mim"`

### 4. `src/components/Stats.tsx`
- Linhas 19-22: `"Projects"/"Years Exp."/"Languages"/"Deploys"` → `"Projetos"/"Anos Exp."/"Linguagens"/"Deploys"`

### 5. `src/components/Skills.tsx`
- Linhas 34/40/46: `"Languages"/"Frameworks & Tools"/"Data & Databases"` → `"Linguagens"/"Frameworks & Ferramentas"/"Dados & Bancos"`

### 6. `src/components/Hero.tsx`
- Linha 57: `"Explore themes"` → `"Explorar temas"`

### 7. `src/components/Projects.tsx`
- Linha 40: `"All"` → `"Todos"`
- Linha 41: `"View project"` → `"Ver projeto"`

### 8. `src/components/ProjectModal.tsx`
- Linha 71: `"Previous image"` → `"Imagem anterior"`
- Linha 79: `"Next image"` → `"Próxima imagem"`
- Linha 92: `` `Image ${i() + 1}` `` → `` `Imagem ${i() + 1}` ``
- Linha 153: `"View project"` → `"Ver projeto"`

### 9. `src/stores/i18nStore.tsx`
- Adicionar `createSignal` para estado de erro
- Melhorar o handler de `.catch()` para setar um sinal visível de erro em vez de só `console.error`
