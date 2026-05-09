import { onMount, onCleanup } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import I18nErrorBanner from "~/components/I18nErrorBanner";

export default function NotFoundPage() {
  const { messages } = useI18n();
  const t = () => messages()?.not_found;

  onMount(() => {
    const prevTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "doom");

    onCleanup(() => {
      if (prevTheme) {
        document.documentElement.setAttribute("data-theme", prevTheme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    });
  });

  return (
    <>
      <Navbar standalone />

      <main id="main" class="min-h-screen bg-bg pt-16 flex flex-col items-center justify-center text-center">
        <div class="px-6 py-16 max-w-2xl">

          {/* HUD status bar */}
          <div class="inline-flex items-center gap-4 px-6 py-2 bg-surface rounded border border-border text-sm font-mono uppercase tracking-wider shadow-glow-primary mb-8">
            <span class="text-text-muted">{t()?.status || "404"}</span>
            <span class="text-border">|</span>
            <span class="text-text-muted">HEALTH</span>
            <span class="text-accent-primary font-bold">0%</span>
            <span class="text-border">|</span>
            <span class="text-text-muted">ARMOR</span>
            <span class="text-accent-primary font-bold">0%</span>
          </div>

          {/* Glitch 404 */}
          <div class="text-[10rem] md:text-[14rem] font-black text-accent-primary leading-none relative select-none" aria-hidden="true">
            404
          </div>

          {/* Doomguy face */}
              <pre class="text-[10px] leading-none text-accent-primary inline-block my-6 select-none opacity-80" aria-hidden="true">
            {`   .---.
  | RIP |
  |     |
  |O   O|
  ||   ||
  | \\ // |
  |  V  |
  |-----|
   \\ //
    V V`}
          </pre>

          {/* Messages */}
          <h2 class="text-2xl md:text-3xl font-bold text-accent-primary mb-4">
            {t()?.heading || "Você entrou no inferno errado."}
          </h2>

          <p class="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
            {t()?.description || "Esta página foi perdida nas profundezas. O caminho que você busca não existe mais — ou nunca existiu."}
          </p>

          <a
            href="/"
            class="inline-block px-8 py-3 border border-accent-primary text-accent-primary font-semibold font-mono uppercase tracking-wider text-sm hover:bg-accent-primary hover:text-bg hover:shadow-glow-primary transition-all"
          >
            {t()?.back_home || "Voltar ao Mundo dos Vivos"}
          </a>

          <p class="mt-6 text-sm text-text-muted">
            {t()?.subtext || "Este não é o caminho que você procura."}
          </p>
        </div>
      </main>

      <Footer hideDoomLink />
      <I18nErrorBanner />
    </>
  );
}
