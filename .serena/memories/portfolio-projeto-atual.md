# Projeto Atual: Portfolio Pessoal

## Stack Atual
- React 19.1.0 (Create React App)
- JavaScript (JSX)
- SCSS + Bootstrap 5
- Axios para fetch de dados
- state-pool para gerenciamento de estado
- react-typical, react-awesome-slider, react-vertical-timeline-component
- devicon, @iconify/react para ícones
- gh-pages para deploy no GitHub Pages
- js-dos para página de jogos DOS standalone

## Estrutura de Dados
- Dados em JSON em `public/data/`
  - `portfolio_shared_data.json`: dados compartilhados
  - `languages/en.json` e `languages/pt-br.json`: dados localizados
- Idioma default: pt-br
- Theme: light/dark via `data-theme` attribute no body

## Componentes Principais
- Header, About, Projects, Skills, Experience, Contact, Footer, Flags
- ProjectDetailsModal para detalhes dos projetos
- App.jsx como entry point

## Deploy
- `npm run build` cria pasta `build/`
- `npm run deploy` usa gh-pages para publicar no GitHub Pages
- Homepage: `https://thelostgus.github.io` (nome do pacote)

## Quirks Importantes
- Script `test` no package.json na verdade faz build e serve (não roda testes)
- App.test.js está quebrado (importa ReactDOM sem import)
- Não existe AGENTS.md ainda
- Página `dos.html` é standalone, não parte do React app