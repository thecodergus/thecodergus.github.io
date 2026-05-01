import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { ThemeProvider } from "./providers/ThemeProvider";
import { I18nProvider } from "./providers/I18nProvider";
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
          <Title>Gustavo M Camargo | AI & Systems Engineer</Title>
          <script innerHTML={THEME_SCRIPT} />
          <script innerHTML={LANG_SCRIPT} />
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <ThemeProvider>
            <I18nProvider>
              <Suspense>{props.children}</Suspense>
            </I18nProvider>
          </ThemeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
