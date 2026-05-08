// ── Blockchain Theme Module ──

import { SceneKind } from "../../engine/types";
import { createBlockchainScene } from "./scene";
import { createThemeModule } from "../create-theme-module";

export default createThemeModule({
  sceneKind: SceneKind.Blockchain,
  colorScheme: {
    primary: "#F7931A",
    secondary: "#00BFA5",
    tertiary: "#627EEA",
    background: "#0D1117",
  },
  createScene: createBlockchainScene,
  cameraPreset: {
    orbitRadius: 12,
    orbitSpeed: 0.02,
    heightAmplitude: 3,
    heightFrequency: 0.5,
    initialAngle: Math.PI / 4,
    pauseOnHover: false,
    autoRotate: true,
    fov: 55,
  },
  postPreset: {
    bloomStrength: 0.5,
    bloomRadius: 0.5,
    bloomThreshold: 0.2,
    scanlineIntensity: 0.08,
    vignetteStrength: 0.35,
    chromaticStrength: 0.003,
  },
});
