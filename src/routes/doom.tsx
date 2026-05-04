import { onMount } from "solid-js";
import { ArrowLeft } from "lucide-solid";

export default function DoomPage() {
  let containerRef: HTMLDivElement | undefined;

  onMount(() => {
    if (containerRef && typeof (window as unknown as { Dos?: (el: HTMLDivElement) => { run: (path: string) => void } }).Dos !== "undefined") {
      const win = window as unknown as { Dos: (el: HTMLDivElement) => { run: (path: string) => void } };
      win.Dos(containerRef!).run("dos/files/doom.jsdos");
    }
  });

  return (
    <main class="min-h-screen bg-bg">
      <nav class="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div class="max-w-7xl mx-auto px-6 h-14 flex items-center">
          <a
            href="/"
            class="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao Portfolio
          </a>
        </div>
      </nav>
      <div class="pt-14 h-screen flex items-center justify-center p-4">
        <div
          ref={containerRef}
          class="w-full max-w-5xl aspect-[4/3] bg-black rounded-lg border border-border overflow-hidden"
        />
      </div>
    </main>
  );
}
