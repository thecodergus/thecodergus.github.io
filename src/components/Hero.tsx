import { Show } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { theme, setTheme, THEMES, type ThemeId } from "~/stores/themeStore";
import NeuralCanvas from "~/components/NeuralCanvas";
import TypewriterText from "~/components/TypewriterText";
import RotatingTypewriter from "~/components/RotatingTypewriter";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-solid";

export default function Hero() {
  const { sharedData, messages } = useI18n();
  const name = () => sharedData()?.basic_info?.name || "";
  const titles = () => sharedData()?.basic_info?.titles || [];
  const subtitle = () => messages()?.hero?.subtitle || "";

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      <NeuralCanvas />

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div class="mb-6 inline-block">
          <span class="font-mono text-xs text-accent-green border border-accent-green/30 px-3 py-1 rounded-full bg-accent-green/5">
            &lt;AI_Engineer /&gt;
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 tracking-tight">
          <Show when={name()}>
            <TypewriterText text={name()} class="text-text" />
          </Show>
        </h1>

        <div class="h-12 md:h-16 flex items-center justify-center mb-8">
          <Show when={titles().length > 0}>
            <RotatingTypewriter
              titles={titles()}
              class="font-mono text-lg md:text-2xl text-accent-cyan"
            />
          </Show>
        </div>

        <p class="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle()}
        </p>

        {/* Theme pills */}
        <div class="flex items-center justify-center gap-2 mb-10">
          {THEMES.map((t) => {
            const isActive = () => theme() === t.id;
            return (
              <button
                onClick={() => setTheme(t.id as ThemeId)}
                class="px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300"
                classList={{
                  "bg-accent-green/15 text-accent-green border border-accent-green/30 shadow-glow-green/20":
                    isActive(),
                  "bg-surface text-text-muted border border-border hover:border-accent-green/40 hover:text-text-secondary":
                    !isActive(),
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div class="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/thecodergus"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full border border-border hover:border-accent-green hover:text-accent-green hover:shadow-glow-green transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/thecodergus"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full border border-border hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow-cyan transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gustavo.michels.de.camargo@gmail.com"
            class="p-3 rounded-full border border-border hover:border-accent-yellow hover:text-accent-yellow transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          class="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-green transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
