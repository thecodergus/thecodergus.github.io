import { createSignal, onMount, onCleanup } from "solid-js";
import { setLanguage, useI18n } from "~/stores/i18nStore";
import { Language } from "~/types";
import { Menu, X } from "lucide-solid";

export default function Navbar() {
  const { language, messages } = useI18n();
  const [scrolled, setScrolled] = createSignal(false);
  const [mobileOpen, setMobileOpen] = createSignal(false);

  const navLinks = () => {
    const nav = messages()?.navbar;
    return [
      { href: "#about", label: nav?.about || "About" },
      { href: "#skills", label: nav?.skills || "Skills" },
      { href: "#experience", label: nav?.experience || "Experience" },
      { href: "#projects", label: nav?.projects || "Projects" },
      { href: "#contact", label: nav?.contact || "Contact" },
    ];
  };

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  const toggleLang = () => {
    const next = language() === Language.PtBr ? Language.En : Language.PtBr;
    setLanguage(next);
  };

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
          <button
            onClick={toggleLang}
            class="text-xs font-mono px-3 py-1 rounded border border-border hover:border-accent-green hover:text-accent-green transition-colors"
          >
            {language() === Language.PtBr ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          class="md:hidden text-text-secondary hover:text-accent-cyan"
          onClick={() => setMobileOpen(!mobileOpen())}
          aria-label="Toggle menu"
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
          <button
            onClick={toggleLang}
            class="text-xs font-mono px-3 py-1 rounded border border-border hover:border-accent-green hover:text-accent-green transition-colors self-start"
          >
            {language() === Language.PtBr ? "EN" : "PT"}
          </button>
        </div>
      )}
    </nav>
  );
}
