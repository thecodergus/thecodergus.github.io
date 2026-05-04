import { Show } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { theme, setTheme, THEMES } from "~/stores/themeStore";
import NeuralCanvas from "~/components/NeuralCanvas";
import TypewriterText from "~/components/TypewriterText";
import RotatingTypewriter from "~/components/RotatingTypewriter";
import { Brain, Blocks, Terminal, Globe, Palette, Check, ChevronDown, Github, Linkedin, Mail } from "lucide-solid";

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

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto bg-bg/25 backdrop-blur-[2px] rounded-2xl py-8">
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

        {/* Theme cards */}
        <div class="mb-10">
          <Show when={messages()}>
            <p class="text-text-muted text-xs font-mono mb-3 flex items-center justify-center gap-2">
              <Palette size={14} />
              <span>{messages()?.hero?.themes_label || "Explorar temas"}</span>
            </p>
          </Show>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {THEMES.map((t) => {
              const isActive = () => theme() === t.id;
              return (
                <button
                  onClick={() => setTheme(t.id)}
                  class="relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/50 active:scale-95"
                  classList={{
                    "text-accent-green bg-accent-green/10 border-2 border-accent-green/50 shadow-[var(--shadow-glow-green)] scale-105":
                      isActive(),
                    "text-text-secondary bg-surface/30 border border-border hover:border-accent-green/40 hover:bg-surface/50 hover:scale-[1.02]":
                      !isActive(),
                  }}
                  aria-pressed={isActive()}
                  aria-label={`${t.label} — ${messages()?.hero?.[`themes_${t.id}`] || ""}`}
                >
                  <Show when={isActive()}>
                    <span class="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent-green flex items-center justify-center">
                      <Check size={10} class="text-bg" />
                    </span>
                  </Show>
                  {t.id === "ai" ? <Brain size={24} /> :
                   t.id === "blockchain" ? <Blocks size={24} /> :
                   t.id === "software" ? <Terminal size={24} /> :
                   <Globe size={24} />}
                  <span class="text-xs font-mono font-bold">
                    {t.label}
                  </span>
                  <div class="flex items-center gap-1">
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": t.primary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": t.secondary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": t.tertiary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": t.background}} />
                  </div>
                  <Show when={messages()?.hero?.[`themes_${t.id}`]}>
                    {(desc) => (
                      <span class="text-[10px] leading-tight text-text-muted">{desc()}</span>
                    )}
                  </Show>
                </button>
              );
            })}
          </div>
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
