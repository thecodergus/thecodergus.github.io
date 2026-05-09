import { createHandler, StartServer } from "@solidjs/start/server";

interface StructuredData {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  jobTitle: string;
  sameAs: readonly string[];
  knowsAbout: readonly string[];
}

const structuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gustavo M Camargo",
  url: "https://thecodergus.github.io",
  jobTitle: "AI & Software Engineer",
  sameAs: [
    "https://github.com/thecodergus",
    "https://www.linkedin.com/in/thecodergus",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "LangGraph",
    "Python",
    "C++",
    "Rust",
    "React",
    "TypeScript",
    "Full-Stack Development",
  ],
};

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="pt-br" data-theme="ai">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#080012" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://thecodergus.github.io" />
          {/* hreflang alternates intentionally absent — language is client-side via localStorage */}
          {assets}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </head>
        <body>
          <a href="#main" class="skip-link">
            <span lang="pt-br">Pular para o conteúdo</span>
            <span lang="en" class="skip-link-alt">Skip to content</span>
          </a>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
