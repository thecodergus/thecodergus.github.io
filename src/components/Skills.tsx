import { For } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { createVisibilityObserver } from "~/hooks/createVisibilityObserver";
import type { Skill } from "~/types";

interface SkillCategory {
  key: string;
  name: string;
  skills: Skill[];
}

const CATEGORY_ORDER: Record<string, number> = {
  languages: 0,
  frameworks: 1,
  data: 2,
};

export default function Skills() {
  const { sharedData, messages, t } = useI18n();

  let sectionRef: HTMLDivElement | undefined;
  const isVisible = createVisibilityObserver(() => sectionRef, 0.1);

  const skills = () => sharedData()?.skills?.icons || [];
  const sectionName = () => t("basic_info.section_name.skills", "");
  const catNames = () => messages()?.skills_categories;

  const categories = (): SkillCategory[] => {
    const icons = skills();
    const grouped = new Map<string, Skill[]>();

    for (const s of icons) {
      const cat = s.category || "other";
      if (!grouped.has(cat)) grouped.set(cat, []);
      const catSkills = grouped.get(cat);
      if (catSkills) catSkills.push(s);
    }

    const result: SkillCategory[] = [];
    for (const [key, items] of grouped) {
      result.push({
        key,
        name: (catNames() as Record<string, string> | undefined)?.[key] || key,
        skills: items,
      });
    }

    result.sort((a, b) => (CATEGORY_ORDER[a.key] ?? 99) - (CATEGORY_ORDER[b.key] ?? 99));
    return result;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      class="py-section bg-bg relative"
    >
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text">
          <span class="text-accent-tertiary">&gt;</span> {sectionName()}
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
                <h3 class="text-accent-secondary font-mono text-sm uppercase tracking-wider mb-6">
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
                            <i class={`${skill.class} text-lg text-text-secondary`} aria-hidden="true" />
                            <span class="text-sm font-medium text-text">{skill.name}</span>
                          </div>
                          <span class="text-xs font-mono text-text-muted">{skill.level}%</span>
                        </div>
                        <div
                          class="h-2 bg-surface-elevated rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name}: ${skill.level}%`}
                        >
                          <div
                            class="h-full rounded-full bg-accent-primary transition-all duration-1000 ease-out"
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
