import { createSignal, onMount, onCleanup } from "solid-js";
import { setLanguage, useI18n } from "~/stores/i18nStore";
import { Language } from "~/types";
import { Menu, X } from "lucide-solid";

const LangSwitcher = (props: {
  language: () => Language;
  label: () => string;
  mobile?: boolean;
}) => {
  const active = "bg-accent-cyan text-bg border-accent-cyan";
  const inactive = "bg-transparent text-text-muted border-border hover:border-accent-cyan hover:text-accent-cyan";

  return (
    <div class={`flex items-center gap-2 ${props.mobile ? "pt-2 border-t border-border" : ""}`}>
      <span class="text-xs text-text-muted font-mono">{props.label()}</span>
      <div class="flex items-center rounded-lg border border-border overflow-hidden">
        <button
          onClick={() => setLanguage(Language.PtBr)}
          class={`px-3 py-1.5 text-sm font-medium transition-colors border-r border-border ${
            props.language() === Language.PtBr ? active : inactive
          }`}
          aria-label="Português (Brasil)"
        >
          🇧🇷 PT
        </button>
        <button
          onClick={() => setLanguage(Language.En)}
          class={`px-3 py-1.5 text-sm font-medium transition-colors ${
            props.language() === Language.En ? active : inactive
          }`}
          aria-label="English"
        >
          🇺🇸 EN
        </button>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { language, messages } = useI18n();
  const [scrolled, setScrolled] = createSignal(false);
  const [mobileOpen, setMobileOpen] = createSignal(false);

  const navLinks = () => {
    const nav = messages()?.navbar;
    return [
      { href: "#about", label: nav?.about || "Sobre" },
      { href: "#skills", label: nav?.skills || "Habilidades" },
      { href: "#experience", label: nav?.experience || "Experiência" },
      { href: "#projects", label: nav?.projects || "Projetos" },
      { href: "#contact", label: nav?.contact || "Contato" },
    ];
  };

  const langLabel = () => messages()?.navbar?.language || "Idioma";

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  const handleNavClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      classList={{
        "bg-bg/80 backdrop-blur-md border-b border-border": scrolled(),
        "bg-transparent": !scrolled(),
      }}
    >
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="font-mono text-accent-green font-bold text-lg tracking-wider">
          &lt;thecodergus/&gt;
        </a>

        {/* Desktop */}
        <div class="hidden md:flex items-center gap-8">
          {navLinks().map((link) => (
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              class="text-sm font-medium text-text-secondary hover:text-accent-cyan transition-colors relative group"
            >
              {link.label}
              <span class="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan transition-all group-hover:w-full" />
            </a>
          ))}
          <LangSwitcher language={language} label={langLabel} />
        </div>

        {/* Mobile toggle */}
        <button
          class="md:hidden text-text-secondary hover:text-accent-cyan"
          onClick={() => setMobileOpen(!mobileOpen())}
          aria-label="Abrir menu"
        >
          {mobileOpen() ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen() && (
        <div class="md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks().map((link) => (
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              class="text-sm font-medium text-text-secondary hover:text-accent-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LangSwitcher language={language} label={langLabel} mobile />
        </div>
      )}
    </nav>
  );
}
