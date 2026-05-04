import { onMount, onCleanup } from "solid-js";

export default function ScrollProgress() {
  let barRef: HTMLDivElement | undefined;

  onMount(() => {
    const bar = barRef;
    if (!bar) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", updateProgress);
    onCleanup(() => window.removeEventListener("scroll", updateProgress));
  });

  return (
    <div class="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
      <div
        ref={barRef}
        class="h-full bg-accent-primary origin-left shadow-glow-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
