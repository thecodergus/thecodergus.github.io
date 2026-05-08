import { createHandler, StartServer } from "@solidjs/start/server";

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
          {assets}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gustavo M Camargo",
              "url": "https://thecodergus.github.io",
              "jobTitle": "AI & Software Engineer",
              "sameAs": [
                "https://github.com/thecodergus",
                "https://www.linkedin.com/in/thecodergus"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "LangGraph",
                "Python",
                "C++",
                "Rust",
                "React",
                "TypeScript",
                "Full-Stack Development"
              ]
            })}
          </script>
        </head>
        <body>
          <a href="#main" class="skip-link" data-i18n-skip>Pular para o conteúdo</a>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
