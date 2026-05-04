import { createSignal, Show, For } from "solid-js";
import { Dialog } from "@kobalte/core/dialog";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-solid";
import { useI18n } from "~/stores/i18nStore";
import type { Project } from "~/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal(props: ProjectModalProps) {
  const { messages } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = createSignal(0);

  const modalMsgs = () => messages()?.projects_modal;

  const hasMultipleImages = () =>
    (props.project?.images?.length ?? 0) > 1;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentImageIndex(0);
    }
    props.onOpenChange(open);
  };

  const prevImage = () => {
    const len = props.project?.images?.length ?? 0;
    if (len <= 1) return;
    setCurrentImageIndex((i) => (i === 0 ? len - 1 : i - 1));
  };

  const nextImage = () => {
    const len = props.project?.images?.length ?? 0;
    if (len <= 1) return;
    setCurrentImageIndex((i) => (i === len - 1 ? 0 : i + 1));
  };

  return (
    <Show when={props.project}>
      {(project) => (
        <Dialog open={props.open} onOpenChange={handleOpenChange} modal>
          <Dialog.Portal>
            <Dialog.Overlay class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[expanded]:animate-in data-[expanded]:fade-in duration-200" />
            <Dialog.Content class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl data-[expanded]:animate-in data-[expanded]:fade-in data-[expanded]:zoom-in-95 duration-200">
              <Dialog.CloseButton class="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-elevated border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors">
                <X size={20} />
              </Dialog.CloseButton>

              <div class="p-6 md:p-8">
                <Dialog.Title class="sr-only">
                  {project().title}
                </Dialog.Title>
                <Dialog.Description class="sr-only">
                  {project().description}
                </Dialog.Description>

                {/* Image Gallery */}
                <div class="relative aspect-video rounded-xl overflow-hidden mb-6 bg-surface-elevated">
                  <img
                    src={`/${project().images?.[currentImageIndex()]}`}
                    alt={project().title}
                    class="w-full h-full object-cover"
                  />
                  <Show when={hasMultipleImages()}>
                    <button
                      onClick={prevImage}
                      class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      <For each={project().images}>
                        {(_, i) => (
                          <button
                            onClick={() => setCurrentImageIndex(i())}
                            class={`w-2 h-2 rounded-full transition-all ${
                              i() === currentImageIndex()
                                ? "bg-accent-cyan w-4"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Imagem ${i() + 1}`}
                          />
                        )}
                      </For>
                    </div>
                  </Show>
                </div>

                {/* Title */}
                <h2 class="text-2xl font-bold font-display text-text mb-2">
                  {project().title}
                </h2>

                {/* Period */}
                <Show when={modalMsgs()}>
                  <p class="text-sm text-text-muted font-mono mb-4">
                    <span class="text-accent-green">
                      {modalMsgs()?.period}:
                    </span>{" "}
                    {project().startDate}
                    {project().endDate ? ` - ${project().endDate}` : ""}
                  </p>
                </Show>

                {/* Description */}
                <p class="text-text-secondary leading-relaxed mb-6">
                  {project().description}
                </p>

                {/* Technologies */}
                <Show when={(project().technologies?.length ?? 0) > 0}>
                  <div class="mb-6">
                    <h3 class="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                      {modalMsgs()?.technologies}
                    </h3>
                    <div class="flex flex-wrap gap-3">
                      <For each={project().technologies}>
                        {(tech) => (
                          <span
                            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-sm text-text-secondary"
                            title={tech.name}
                          >
                            <i class={`${tech.class} text-base`} />
                            {tech.name}
                          </span>
                        )}
                      </For>
                    </div>
                  </div>
                </Show>

                {/* View Project Link */}
                <Show when={project().url}>
                  <a
                    href={project().url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-green text-white font-medium text-sm hover:bg-accent-green/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    {modalMsgs()?.view_project ?? "Ver projeto"}
                  </a>
                </Show>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      )}
    </Show>
  );
}
