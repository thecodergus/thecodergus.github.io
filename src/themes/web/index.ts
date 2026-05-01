// ── Web Theme Module ──

import type { ThemeModule } from "../../engine/types";
import { SceneKind } from "../../engine/types";
import { createWebScene } from "./scene";

const webModule: ThemeModule = Object.freeze({
  sceneKind: SceneKind.Web,
  colorScheme: Object.freeze({
    primary: "#F7DF1E",
    secondary: "#58C4DC",
    tertiary: "#8B5CF6",
    background: "#0F1117",
  }),
  createScene: createWebScene,
  cameraPreset: Object.freeze({
    orbitRadius: 18,
    orbitSpeed: 0.02,
    heightAmplitude: 5,
    heightFrequency: 0.5,
    pauseOnHover: true,
    autoRotate: true,
    fov: 55,
  }),
  postPreset: Object.freeze({
    bloomStrength: 1.0,
    bloomRadius: 0.5,
    bloomThreshold: 0.15,
    scanlineIntensity: 0.12,
    vignetteStrength: 0.35,
    chromaticStrength: 0.003,
  }),
});

export default webModule;
