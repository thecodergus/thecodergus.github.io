import { createSignal, onMount, onCleanup, Show } from "solid-js";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import I18nErrorBanner from "~/components/I18nErrorBanner";
import Loader from "lucide-solid/icons/loader";
import Play from "lucide-solid/icons/play";

export default function DoomPage() {
  let containerRef: HTMLDivElement | undefined;
  const [loading, setLoading] = createSignal(true);
  const [dosReady, setDosReady] = createSignal(false);

  onMount(() => {
    const prevTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "doom");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/dos/js-dos/js-dos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "/dos/js-dos/js-dos.js";
    script.onload = () => {
      if (typeof window !== "undefined") {
        const win = window as unknown as { emulators?: { pathPrefix: string }; Dos?: (el: HTMLDivElement) => { run: (path: string) => void } };
        if (win.emulators) {
          win.emulators.pathPrefix = "dos/js-dos/";
          setDosReady(true);
        }
      }
    };
    document.body.appendChild(script);

    onCleanup(() => {
      if (prevTheme) {
        document.documentElement.setAttribute("data-theme", prevTheme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    });
  });

  const launchGame = () => {
    if (!containerRef) return;
    const win = window as unknown as { Dos: (el: HTMLDivElement) => { run: (path: string) => void } };
    if ("Dos" in win) {
      setLoading(false);
      win.Dos(containerRef).run("dos/files/doom.jsdos");
    }
  };

  return (
    <>
      <Navbar standalone />

      <main id="main" class="min-h-screen bg-bg pt-16 flex flex-col">
        <div class="flex-1 flex items-center justify-center p-4">
          <div class="w-full max-w-5xl aspect-[4/3] bg-black rounded-lg border border-border overflow-hidden relative">
            <Show when={loading()}>
              <div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/90">
                <Show
                  when={dosReady()}
                  fallback={
                    <>
                      <Loader size={48} class="text-accent-primary animate-spin" />
                      <p class="text-text-muted font-mono text-sm">Loading JS-DOS engine...</p>
                    </>
                  }
                >
                  <button
                    onClick={launchGame}
                    class="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-primary text-bg font-bold font-mono text-lg hover:bg-accent-primary/90 transition-colors shadow-glow-primary"
                  >
                    <Play size={24} />
                    Launch DOOM
                  </button>
                  <p class="text-text-muted font-mono text-xs">~4 MB download</p>
                </Show>
              </div>
            </Show>
            <div
              ref={containerRef}
              class="w-full h-full"
            />
          </div>
        </div>
      </main>

      <Footer hideDoomLink />
      <I18nErrorBanner />
    </>
  );
}
