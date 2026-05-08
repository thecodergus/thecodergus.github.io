// ── Theme Module Factory — centralized Object.freeze wrapping ──

import type { ThemeModule } from "~/engine/types";
import type { ThemeConfig } from "~/engine/types";

export function createThemeModule(config: ThemeConfig): ThemeModule {
  return Object.freeze({
    sceneKind: config.sceneKind,
    colorScheme: Object.freeze(config.colorScheme),
    createScene: config.createScene,
    cameraPreset: Object.freeze(config.cameraPreset),
    postPreset: Object.freeze(config.postPreset),
  });
}
