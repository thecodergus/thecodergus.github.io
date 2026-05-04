// ── NeuralCanvas — thin SolidJS wrapper around the scene-agnostic engine ──

import { onMount, onCleanup, createEffect, ErrorBoundary } from "solid-js";

import { createEngine } from "~/engine/engine";
import type { EngineHandle } from "~/engine/engine";

import { theme } from "~/stores/themeStore";

import { REGISTRY } from "~/themes/registry";

function CanvasLayer() {
  let containerRef: HTMLDivElement | undefined;
  let engine: EngineHandle | undefined;

  onMount(() => {
    const container = containerRef;
    if (!container) return;

    engine = createEngine(container);

    // Load initial theme
    const initial = theme();
    engine.setTheme(REGISTRY[initial]);
  });

  // React to theme changes
  createEffect(() => {
    const t = theme();
    engine?.setTheme(REGISTRY[t]);
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

export default function NeuralCanvas() {
  return (
    <ErrorBoundary fallback={() => null}>
      <CanvasLayer />
    </ErrorBoundary>
  );
}
