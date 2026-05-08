import { Show } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { theme, setTheme, THEMES, type ThemeId } from "~/stores/themeStore";
import NeuralCanvas from "~/components/NeuralCanvas";
import TypewriterText from "~/components/TypewriterText";
import RotatingTypewriter from "~/components/RotatingTypewriter";
import { Brain, Blocks, Terminal, Globe, Palette, Check, ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-solid";

export default function Hero() {
  const { sharedData, messages, t } = useI18n();
  const name = () => sharedData()?.basic_info?.name || "";
  const titles = () => messages()?.hero?.titles || sharedData()?.basic_info?.titles || [];
  const subtitle = () => t("hero.subtitle", "");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleThemeKeyDown = (e: KeyboardEvent, themeId: ThemeId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTheme(themeId);
    }
  };

  const socialIcons: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    gmail: Mail,
  };

  const socials = () => sharedData()?.basic_info?.social || [];

  return (
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      <NeuralCanvas />

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto bg-bg/25 backdrop-blur-[2px] rounded-2xl py-8">
        <div class="mb-6 inline-block">
          <span class="font-mono text-xs text-accent-primary border border-accent-primary/30 px-3 py-1 rounded-full bg-accent-primary/5">
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
              class="font-mono text-lg md:text-2xl text-accent-secondary"
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
              <span>{t("hero.themes_label", "Explorar temas")}</span>
            </p>
          </Show>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {THEMES.map((th) => {
              const isActive = () => theme() === th.id;
              return (
                <button
                  onClick={() => setTheme(th.id)}
                  onKeyDown={(e) => handleThemeKeyDown(e, th.id)}
                  class="relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 active:scale-95"
                  classList={{
                    "text-accent-primary bg-accent-primary/10 border-2 border-accent-primary/50 shadow-[var(--shadow-glow-primary)] scale-105":
                      isActive(),
                    "text-text-secondary bg-surface/30 border border-border hover:border-accent-primary/40 hover:bg-surface/50 hover:scale-[1.02]":
                      !isActive(),
                  }}
                  aria-pressed={isActive()}
                  aria-label={`${th.label} — ${t(`hero.themes_${th.id}`, "")}`}
                >
                  <Show when={isActive()}>
                    <span class="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent-primary flex items-center justify-center">
                      <Check size={10} class="text-bg" />
                    </span>
                  </Show>
                  {th.id === "ai" ? <Brain size={24} /> :
                   th.id === "blockchain" ? <Blocks size={24} /> :
                   th.id === "software" ? <Terminal size={24} /> :
                   <Globe size={24} />}
                  <span class="text-xs font-mono font-bold">
                    {th.label}
                  </span>
                  <div class="flex items-center gap-1">
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": th.primary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": th.secondary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": th.tertiary}} />
                    <span class="w-2.5 h-2.5 rounded-full border border-text-muted/20" style={{"background-color": th.background}} />
                  </div>
                  <Show when={t(`hero.themes_${th.id}`, "")}>
                    {(label) => <span class="text-[10px] leading-tight text-text-muted">{label()}</span>}
                  </Show>
                </button>
              );
            })}
          </div>
        </div>

        <div class="flex items-center justify-center gap-6 mb-12">
          {socials().map((s) => {
            const Icon = socialIcons[s.name] || ExternalLink;
            const isEmail = s.url.startsWith("mailto:");
            return (
              <a
                href={s.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                class="p-3 rounded-full border border-border hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-primary transition-all"
                aria-label={s.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <button
          onClick={scrollToAbout}
          class="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
