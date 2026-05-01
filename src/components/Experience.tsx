import { createSignal, createEffect, For, Show } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import type { Experience as ExperienceType, Messages } from "~/types";

export default function Experience() {
  const { messages } = useI18n();
  const [isVisible, setIsVisible] = createSignal(false);

  let sectionRef: HTMLDivElement | undefined;

  createEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });

  const experiences = () => messages()?.experience || [];
  const sectionName = () => messages()?.basic_info?.section_name?.experience || "";

  return (
    <section
      id="experience"
      ref={sectionRef}
      class="py-section bg-surface relative"
    >
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text">
          <span class="text-accent-cyan">&gt;</span> {sectionName()}
        </h2>

        <div class="relative">
          {/* Timeline line */}
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <For each={experiences()}>
            {(exp, index) => (
              <div
                class={`relative flex items-start gap-6 mb-12 ${
                  index() % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  opacity: isVisible() ? 1 : 0,
                  transform: isVisible() ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index() * 0.12}s, transform 0.5s ease-out ${index() * 0.12}s`,
                }}
              >
                {/* Dot */}
                <div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-green border-2 border-bg -translate-x-1/2 mt-2 shadow-glow-green" />

                {/* Content */}
                <div class={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index() % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}>
                  <div class="bg-bg rounded-xl p-6 border border-border hover:border-accent-green/50 transition-colors">
                    <div class="flex items-center gap-3 mb-2 md:justify-start">
                      <i class={`${exp.icon} text-2xl text-accent-green`} />
                      <div>
                        <h3 class="font-semibold text-text">{exp.title}</h3>
                        <p class="text-accent-cyan text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <p class="text-xs font-mono text-text-muted mb-3">{exp.years}</p>
                    <Show when={exp.highlights}>
                      <ul class="mb-3 space-y-1">
                        <For each={exp.highlights}>
                          {(item) => (
                            <li class="text-xs text-text-secondary leading-relaxed flex items-start gap-1.5">
                              <span class="text-accent-green mt-0.5 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          )}
                        </For>
                      </ul>
                    </Show>
                    <div class="flex flex-wrap gap-2">
                      <For each={exp.mainTech}>
                        {(tech) => (
                          <span class="px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green text-xs font-medium">
                            {tech}
                          </span>
                        )}
                      </For>
                      <For each={exp.technologies}>
                        {(tech) => (
                          <span class="px-2 py-0.5 rounded-full bg-surface-elevated text-text-muted text-xs">
                            {tech}
                          </span>
                        )}
                      </For>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
