// ── Theme Registry — lazy-loaded theme modules via dynamic import ──

import { SceneKind } from "~/engine/types";
import type { ThemeModule } from "~/engine/types";

type ThemeLoader = () => Promise<ThemeModule>;

export const REGISTRY: Readonly<Record<SceneKind, ThemeLoader>> = Object.freeze({
  [SceneKind.AI]:          () => import("./ai").then((m) => m.default),
  [SceneKind.Blockchain]:  () => import("./blockchain").then((m) => m.default),
  [SceneKind.Software]:    () => import("./software").then((m) => m.default),
  [SceneKind.Web]:         () => import("./web").then((m) => m.default),
});

const moduleCache = new Map<SceneKind, Promise<ThemeModule | null>>();

export async function loadTheme(id: SceneKind): Promise<ThemeModule | null> {
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
