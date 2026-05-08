import { createSignal, onMount, onCleanup, For } from "solid-js";
import { useI18n } from "~/stores/i18nStore";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export default function Stats() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = createSignal(false);
  const [counts, setCounts] = createSignal<number[]>([0, 0, 0, 0]);

  let sectionRef: HTMLDivElement | undefined;

  const STATS = (): Stat[] => [
    { label: t("stats.projects", "Projetos"), value: 10, suffix: "+" },
    { label: t("stats.years", "Anos Exp."), value: 5, suffix: "" },
    { label: t("stats.languages", "Linguagens"), value: 8, suffix: "" },
    { label: t("stats.deploys", "Deploys"), value: 50, suffix: "+" },
  ];

  onMount(() => {
    const stats = STATS();
    const duration = 2000;
    let rafId = 0;

    const animate = (now: number, startTime: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((s) => Math.floor(s.value * eased)));

      if (progress < 1) {
        rafId = requestAnimationFrame((n) => animate(n, startTime));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          const startTime = performance.now();
          rafId = requestAnimationFrame((n) => animate(n, startTime));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef) observer.observe(sectionRef);

    onCleanup(() => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    });
  });

  return (
    <section
      id="stats"
      ref={sectionRef}
      class="py-16 bg-surface border-y border-border"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <For each={STATS()}>
            {(stat, index) => (
              <div
                class="text-center"
                style={{
                  opacity: isVisible() ? 1 : 0,
                  transform: isVisible() ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index() * 0.1}s, transform 0.5s ease-out ${index() * 0.1}s`,
                }}
              >
                <div class="text-4xl md:text-5xl font-bold font-display text-accent-primary mb-2">
                  {counts()[index()]}{stat.suffix}
                </div>
                <div class="text-sm text-text-muted font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
