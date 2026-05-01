// ── Software Theme Module ──

import type { ThemeModule } from "../../engine/types";
import { SceneKind } from "../../engine/types";
import { createSoftwareScene } from "./scene";

const softwareModule: ThemeModule = Object.freeze({
  sceneKind: SceneKind.Software,
  colorScheme: Object.freeze({
    primary: "#00FF41",
    secondary: "#006622",
    tertiary: "#FFFFFF",
    background: "#000000",
  }),
  createScene: createSoftwareScene,
  cameraPreset: Object.freeze({
    orbitRadius: 10,
    orbitSpeed: 0.015,
    heightAmplitude: 2,
    heightFrequency: 0.5,
    initialAngle: 0,
    pauseOnHover: false,
    autoRotate: true,
    fov: 55,
  }),
  postPreset: Object.freeze({
    bloomStrength: 1.0,
    bloomRadius: 0.5,
    bloomThreshold: 0.2,
    scanlineIntensity: 0.18,
    vignetteStrength: 0.4,
    chromaticStrength: 0.004,
  }),
});

export default softwareModule;
