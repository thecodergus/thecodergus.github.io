import { createSignal, For } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { createVisibilityObserver } from "~/hooks/createVisibilityObserver";
import type { Project } from "~/types";
import ProjectModal from "~/components/ProjectModal";

export default function Projects() {
  const { messages, t } = useI18n();
  const [activeFilter, setActiveFilter] = createSignal<string>("all");
  const [selectedProject, setSelectedProject] = createSignal<Project | null>(null);
  const [modalOpen, setModalOpen] = createSignal(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  let sectionRef: HTMLDivElement | undefined;
  const isVisible = createVisibilityObserver(() => sectionRef, 0.1);

  const projects = () => messages()?.projects || [];
  const sectionName = () => t("basic_info.section_name.projects", "");
  const filterAll = () => t("projects_filter.all", "Todos");
  const viewProject = () => t("projects_filter.view_project", "Ver projeto");

  const allTechnologies = () => {
    const techs = new Set<string>();
    projects().forEach((p) => {
      p.technologies?.forEach((t) => techs.add(t.name));
    });
    return Array.from(techs).sort();
  };

  const filteredProjects = () => {
    if (activeFilter() === "all") return projects();
    return projects().filter((p) =>
      p.technologies?.some((t) => t.name === activeFilter())
    );
  };

  return (
    <>
    <section
      id="projects"
      ref={sectionRef}
      class="py-section bg-bg relative"
    >
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-text">
          <span class="text-accent-quaternary">&gt;</span> {sectionName()}
        </h2>

        {/* Filters */}
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter() === "all"
                ? "bg-accent-primary text-bg"
                : "bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            {filterAll()}
          </button>
          <For each={allTechnologies()}>
            {(tech) => (
              <button
                class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter() === tech
                    ? "bg-accent-primary text-bg"
                    : "bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"
                }`}
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </button>
            )}
          </For>
        </div>

        {/* Grid */}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={filteredProjects()}>
            {(project, index) => (
              <article
                class="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent-secondary/50 transition-all hover:-translate-y-1 hover:shadow-glow-secondary/10 cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => openProjectModal(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProjectModal(project);
                  }
                }}
                aria-label={`${viewProject()}: ${project.title}`}
                style={{
                  opacity: isVisible() ? 1 : 0,
                  transform: isVisible() ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index() * 0.08}s, transform 0.5s ease-out ${index() * 0.08}s`,
                }}
              >
                <div class="relative aspect-video overflow-hidden bg-surface-elevated">
                  <img
                    src={project.images?.[0]}
                    alt={project.title}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span class="px-4 py-2 rounded-full border border-white text-white text-sm font-medium">
                      {viewProject()}
                    </span>
                  </div>
                </div>
                <div class="p-5">
                  <h3 class="font-semibold text-text mb-1 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p class="text-xs text-text-muted font-mono mb-3">
                    {project.startDate}
                    {project.endDate ? ` - ${project.endDate}` : ""}
                  </p>
                  <p class="text-sm text-text-secondary line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <For each={project.technologies?.slice(0, 4)}>
                      {(tech) => (
                        <span class="text-lg" title={tech.name}>
                          <i class={tech.class} aria-hidden="true" />
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>

    <ProjectModal
      project={selectedProject()}
      open={modalOpen()}
      onOpenChange={setModalOpen}
    />
    </>
  );
}
