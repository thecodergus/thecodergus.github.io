import { createSignal, onMount, onCleanup } from "solid-js";

export function createVisibilityObserver(
  ref: () => HTMLElement | undefined,
  threshold?: number,
) {
  const [isVisible, setIsVisible] = createSignal(false);

  onMount(() => {
    const el = ref();
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: threshold ?? 0.1 },
    );

    observer.observe(el);

    onCleanup(() => observer.disconnect());
  });

  return isVisible;
}
