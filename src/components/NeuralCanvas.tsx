// ── NeuralCanvas — thin SolidJS wrapper around the scene-agnostic engine ──

import { onMount, onCleanup, createEffect, createSignal, Show, ErrorBoundary, createResource } from "solid-js";

import { createEngine } from "~/engine/engine";
import type { EngineHandle } from "~/engine/engine";
import { resolveQualityConfig } from "~/engine/quality";

import { theme } from "~/stores/themeStore";

import { loadTheme } from "~/themes/registry";

// ── Inner canvas component — only mounts after client hydration ──

function CanvasInner() {
  let containerRef: HTMLDivElement | undefined;
  let engine: EngineHandle | undefined;

  const [themeModule] = createResource(
    () => theme(),
    async (t) => loadTheme(t),
  );

  onMount(() => {
    const container = containerRef;
    if (!container) return;

    const quality = resolveQualityConfig();
    engine = createEngine(container, quality);
  });

  createEffect(() => {
    const m = themeModule();
    if (m && engine) {
      engine.setTheme(m);
    }
  });

  onCleanup(() => {
    engine?.dispose();
    engine = undefined;
  });

  return (
    <div
      ref={containerRef}
      class="absolute inset-0 w-full h-full overflow-hidden"
      style={{ position: "absolute", top: "0", left: "0", "z-index": "1" }}
    />
  );
}

// ── Guard layer — prevents SSR/early-hydration rendering ──

function CanvasLayer() {
  const [isClient, setIsClient] = createSignal(false);
  onMount(() => setIsClient(true));

  return (
    <Show when={isClient()}>
      <CanvasInner />
    </Show>
  );
}

export default function NeuralCanvas() {
  return (
    <ErrorBoundary fallback={() => null}>
      <CanvasLayer />
    </ErrorBoundary>
  );
}
