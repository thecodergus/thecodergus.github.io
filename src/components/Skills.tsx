import { createSignal, createEffect, For } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import type { Skill } from "~/types";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default function Skills() {
  const { sharedData, messages } = useI18n();
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

  const skills = () => sharedData()?.skills?.icons || [];
  const sectionName = () => messages()?.basic_info?.section_name?.skills || "";
  const catNames = () => messages()?.skills_categories;

  const categories = (): SkillCategory[] => [
    {
      name: catNames()?.languages || "Languages",
      skills: skills().filter((s) =>
        ["Python", "C++", "Rust", "TypeScript", "JavaScript", "Haskell", "Java", "C", "Bash"].includes(s.name)
      ),
    },
    {
      name: catNames()?.frameworks || "Frameworks & Tools",
      skills: skills().filter((s) =>
        ["React", "FastAPI", "Angular", "Git", "Docker", "Linux", "TensorFlow", "OpenCV", "LangGraph", "LangChain", "RabbitMQ"].includes(s.name)
      ),
    },
    {
      name: catNames()?.data || "Data & Databases",
      skills: skills().filter((s) =>
        ["PostgreSQL", "MongoDB", "MySQL"].includes(s.name)
      ),
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      class="py-section bg-bg relative"
    >
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text">
          <span class="text-accent-purple">&gt;</span> {sectionName()}
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <For each={categories()}>
            {(category, catIndex) => (
              <div
                class="bg-surface rounded-2xl p-6 border border-border"
                style={{
                  opacity: isVisible() ? 1 : 0,
                  transform: isVisible() ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease-out ${catIndex() * 0.15}s, transform 0.6s ease-out ${catIndex() * 0.15}s`,
                }}
              >
                <h3 class="text-accent-cyan font-mono text-sm uppercase tracking-wider mb-6">
                  {category.name}
                </h3>
                <div class="space-y-4">
                  <For each={category.skills}>
                    {(skill, skillIndex) => (
                      <div
                        style={{
                          opacity: isVisible() ? 1 : 0,
                          transform: isVisible() ? "translateX(0)" : "translateX(-10px)",
                          transition: `opacity 0.4s ease-out ${(catIndex() * 0.15) + (skillIndex() * 0.05)}s, transform 0.4s ease-out ${(catIndex() * 0.15) + (skillIndex() * 0.05)}s`,
                        }}
                      >
                        <div class="flex items-center justify-between mb-1">
                          <div class="flex items-center gap-3">
                            <i class={`${skill.class} text-lg text-text-secondary`} />
                            <span class="text-sm font-medium text-text">{skill.name}</span>
                          </div>
                          <span class="text-xs font-mono text-text-muted">{skill.level}%</span>
                        </div>
                        <div class="h-2 bg-surface-elevated rounded-full overflow-hidden">
                          <div
                            class="h-full rounded-full bg-accent-green transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible() ? `${skill.level}%` : "0%",
                              "transition-delay": `${(catIndex() * 0.15) + (skillIndex() * 0.05)}s`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
