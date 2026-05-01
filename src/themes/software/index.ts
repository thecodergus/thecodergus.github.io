// ── Software Theme Module ──

import type { ThemeModule } from "../../engine/types";
import { SceneKind } from "../../engine/types";
import { createSoftwareScene } from "./scene";

const softwareModule: ThemeModule = Object.freeze({
  sceneKind: SceneKind.Software,
  colorScheme: Object.freeze({
    primary: "#569CD6",
    secondary: "#00FF41",
    tertiary: "#C586C0",
    background: "#0A0A0A",
  }),
  createScene: createSoftwareScene,
  cameraPreset: Object.freeze({
    orbitRadius: 14,
    orbitSpeed: 0.015,
    heightAmplitude: 3,
    heightFrequency: 0.5,
    pauseOnHover: true,
    autoRotate: true,
    fov: 55,
  }),
  postPreset: Object.freeze({
    bloomStrength: 0.6,
    bloomRadius: 0.5,
    bloomThreshold: 0.2,
    scanlineIntensity: 0.18,
    vignetteStrength: 0.4,
    chromaticStrength: 0.004,
  }),
});

export default softwareModule;
