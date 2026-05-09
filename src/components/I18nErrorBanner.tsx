import { Show } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import TriangleAlert from "lucide-solid/icons/triangle-alert";
import X from "lucide-solid/icons/x";
import { createSignal } from "solid-js";

export default function I18nErrorBanner() {
  const { fetchError } = useI18n();
  const [dismissed, setDismissed] = createSignal(false);

  return (
    <Show when={fetchError() && !dismissed()}>
      <div
        role="alert"
        class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[70] bg-accent-red/10 border border-accent-red/30 rounded-xl p-4 flex items-start gap-3 backdrop-blur-md shadow-lg"
      >
        <TriangleAlert size={20} class="text-accent-red shrink-0 mt-0.5" />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-accent-red">{fetchError()}</p>
          <p class="text-xs text-text-muted mt-1">
            Using fallback content. Try reloading the page.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          class="p-1 rounded-full text-text-muted hover:text-text shrink-0"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </Show>
  );
}
