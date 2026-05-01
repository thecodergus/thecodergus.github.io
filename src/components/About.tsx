import { createSignal, createEffect } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { Code, Terminal, Database, Container, Cpu } from "lucide-solid";

export default function About() {
  const { messages, sharedData } = useI18n();
  const [isVisible, setIsVisible] = createSignal(false);

  let sectionRef: HTMLDivElement | undefined;

  createEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });

  const profilePic = () => {
    const img = sharedData()?.basic_info?.image;
    return img ? `/images/${img}` : "";
  };

  const aboutData = () => messages()?.basic_info;
  const heading = () => aboutData()?.section_name?.about || "About Me";

  return (
    <section
      id="about"
      ref={sectionRef}
      class="py-section bg-bg relative"
    >
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text">
          <span class="text-accent-green">&gt;</span> {heading()}
        </h2>

        <div class="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Photo */}
          <div class="flex justify-center md:justify-start">
            <div
              class="bg-surface p-3 rounded-2xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-border"
              style={{
                opacity: isVisible() ? 1 : 0,
                transform: isVisible() ? "translateY(0) rotate(-2deg)" : "translateY(30px) rotate(-2deg)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <img
                src={profilePic()}
                alt="Gustavo Michels de Camargo"
                class="w-64 h-64 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <div class="flex justify-center gap-4 text-accent-green">
                <Code size={28} />
                <Terminal size={28} />
                <Database size={28} />
                <Cpu size={28} />
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div
            class="bg-surface rounded-2xl overflow-hidden shadow-xl border border-border"
            style={{
              opacity: isVisible() ? 1 : 0,
              transform: isVisible() ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            <div class="flex gap-2 px-5 py-4 bg-black/40 border-b border-border">
              <span class="w-3 h-3 rounded-full bg-accent-red" />
              <span class="w-3 h-3 rounded-full bg-accent-yellow" />
              <span class="w-3 h-3 rounded-full bg-accent-green" />
              <span class="ml-3 font-mono text-xs text-text-muted">gustavo@portfolio ~ neofetch</span>
            </div>
            <div class="p-6 md:p-8">
              <p class="font-mono text-lg font-semibold text-accent-green mb-4">
                {aboutData()?.description_header} :)
              </p>
              <p class="text-text-secondary leading-relaxed text-sm md:text-base whitespace-pre-line">
                {aboutData()?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
