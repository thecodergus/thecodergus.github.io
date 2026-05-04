import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { I18nProvider } from "~/stores/i18nStore";
import NotFoundPage from "~/components/NotFoundPage";
import "./app.css";

const THEME_SCRIPT = `
(function() {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`.trim();

const LANG_SCRIPT = `
(function() {
  try {
    var l = localStorage.getItem('portfolio-language');
    if (l === 'pt-br' || l === 'en') document.documentElement.lang = l;
  } catch(e) {}
})();
`.trim();

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Gustavo M Camargo | AI & Software Engineer</Title>
          <Meta name="description" content="Portfolio de Gustavo M Camargo — Especialista em Automação com IA, LangGraph & AI Agents. Python, C++, Rust, React. Experiência em agentes inteligentes e sistemas full-stack." />
          <Meta name="keywords" content="AI engineer, LangGraph, Python, C++, Rust, React, automação, software engineer, portfolio, Gustavo Camargo" />
          <Meta name="author" content="Gustavo M Camargo" />
          <Meta name="robots" content="index, follow" />
          <Meta name="theme-color" content="#080012" />
          <Meta property="og:title" content="Gustavo M Camargo | AI & Software Engineer" />
          <Meta property="og:description" content="Especialista em Automação com IA, LangGraph & AI Agents. Python, C++, Rust, React." />
          <Meta property="og:type" content="website" />
          <Meta property="og:url" content="https://thecodergus.github.io" />
          <Meta property="og:image" content="https://thecodergus.github.io/images/myProfile.jpg" />
          <Meta property="og:locale" content="pt_BR" />
          <Meta name="twitter:card" content="summary" />
          <Meta name="twitter:title" content="Gustavo M Camargo | AI & Software Engineer" />
          <Meta name="twitter:description" content="Especialista em Automação com IA, LangGraph & AI Agents." />
          <Meta name="twitter:image" content="https://thecodergus.github.io/images/myProfile.jpg" />
          <script innerHTML={THEME_SCRIPT} />
          <script innerHTML={LANG_SCRIPT} />
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <I18nProvider>
            <Suspense>{props.children}</Suspense>
          </I18nProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
      <Route path="*" component={NotFoundPage} />
    </Router>
  );
}
