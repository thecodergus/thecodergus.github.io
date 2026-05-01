import { useI18n } from "~/stores/i18nStore";
import { Github, Heart } from "lucide-solid";

export default function Footer() {
  const { sharedData, messages } = useI18n();
  const name = () => sharedData()?.basic_info?.name || "";
  const madeWith = () => messages()?.footer?.made_with || "";

  return (
    <footer class="py-8 bg-bg border-t border-border">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-sm text-text-muted">
          <span>{madeWith()}</span>
          <Heart size={14} class="text-accent-red fill-accent-red" />
          <span>{messages()?.footer?.by || "por"} {name()}</span>
        </div>

        <div class="flex items-center gap-6">
          <a
            href="https://github.com/thecodergus"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-accent-green transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="/doom"
            class="text-xs font-mono text-text-muted hover:text-accent-green transition-colors border border-border px-3 py-1 rounded hover:border-accent-green"
          >
            /doom
          </a>
        </div>

        <p class="text-xs text-text-muted font-mono">
          &copy; {new Date().getFullYear()} {name()}
        </p>
      </div>
    </footer>
  );
}
