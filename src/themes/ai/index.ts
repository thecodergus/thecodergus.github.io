// ── AI Theme Module ──

import type { ThemeModule } from "../../engine/types";
import { SceneKind } from "../../engine/types";
import { createAIScene } from "./scene";

const aiModule: ThemeModule = Object.freeze({
  sceneKind: SceneKind.AI,
  colorScheme: Object.freeze({
    primary: "#00E5FF",
    secondary: "#10A37F",
    tertiary: "#8B5CF6",
    background: "#080012",
  }),
  createScene: createAIScene,
  cameraPreset: Object.freeze({
    orbitRadius: 24,
    orbitSpeed: 0.02,
    heightAmplitude: 8,
    heightFrequency: 0.5,
    pauseOnHover: true,
    autoRotate: true,
    fov: 55,
  }),
  postPreset: Object.freeze({
    bloomStrength: 1.2,
    bloomRadius: 0.4,
    bloomThreshold: 0.1,
    scanlineIntensity: 0.15,
    vignetteStrength: 0.35,
    chromaticStrength: 0.003,
  }),
});

export default aiModule;
