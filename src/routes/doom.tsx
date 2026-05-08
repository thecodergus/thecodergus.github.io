import { onMount, onCleanup } from "solid-js";
import { Link } from "@solidjs/meta";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default function DoomPage() {
  let containerRef: HTMLDivElement | undefined;

  onMount(() => {
    const prevTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "doom");

    if (containerRef && "Dos" in window) {
      const win = window as unknown as { Dos: (el: HTMLDivElement) => { run: (path: string) => void } };
      if (containerRef) {
        win.Dos(containerRef).run("dos/files/doom.jsdos");
      }
    }

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
      <Link rel="stylesheet" href="/dos/js-dos/js-dos.css" />
      <script src="/dos/js-dos/js-dos.js"></script>
      <script>emulators.pathPrefix = "dos/js-dos/";</script>

      <Navbar standalone />

      <main id="main" class="min-h-screen bg-bg pt-16 flex flex-col">
        <div class="flex-1 flex items-center justify-center p-4">
          <div
            ref={containerRef}
            class="w-full max-w-5xl aspect-[4/3] bg-black rounded-lg border border-border overflow-hidden"
          />
        </div>
      </main>

      <Footer hideDoomLink />
    </>
  );
}
