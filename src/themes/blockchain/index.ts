// ── Blockchain Theme Module ──

import type { ThemeModule } from "../../engine/types";
import { SceneKind } from "../../engine/types";
import { createBlockchainScene } from "./scene";

const blockchainModule: ThemeModule = Object.freeze({
  sceneKind: SceneKind.Blockchain,
  colorScheme: Object.freeze({
    primary: "#F7931A",
    secondary: "#00BFA5",
    tertiary: "#627EEA",
    background: "#0D1117",
  }),
  createScene: createBlockchainScene,
  cameraPreset: Object.freeze({
    orbitRadius: 12,
    orbitSpeed: 0.02,
    heightAmplitude: 3,
    heightFrequency: 0.5,
    initialAngle: 0,
    pauseOnHover: false,
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

export default blockchainModule;
