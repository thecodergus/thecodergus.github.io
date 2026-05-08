// ── Theme Registry — lazy-loaded theme modules via dynamic import ──

import type { ThemeId } from "~/stores/themeStore";
import type { ThemeModule } from "~/engine/types";

type ThemeLoader = () => Promise<ThemeModule>;

export const REGISTRY: Readonly<Record<ThemeId, ThemeLoader>> = Object.freeze({
  ai: () => import("./ai").then((m) => m.default),
  blockchain: () => import("./blockchain").then((m) => m.default),
  software: () => import("./software").then((m) => m.default),
  web: () => import("./web").then((m) => m.default),
});

const moduleCache = new Map<ThemeId, Promise<ThemeModule | null>>();

export async function loadTheme(id: ThemeId): Promise<ThemeModule | null> {
  const cached = moduleCache.get(id);
  if (cached) return cached;

  const loader = REGISTRY[id];
  if (!loader) return null;

  const promise: Promise<ThemeModule | null> = loader().catch((err) => {
    moduleCache.delete(id);
    console.error(`[theme] Failed to load theme "${id}":`, err);
    return null;
  });
  moduleCache.set(id, promise);
  return promise;
}
