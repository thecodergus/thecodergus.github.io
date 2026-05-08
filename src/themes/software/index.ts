// ── Software Theme Module ──

import { SceneKind } from "../../engine/types";
import { createSoftwareScene } from "./scene";
import { createThemeModule } from "../create-theme-module";

export default createThemeModule({
  sceneKind: SceneKind.Software,
  colorScheme: {
    primary: "#00FF41",
    secondary: "#006622",
    tertiary: "#FFFFFF",
    background: "#000000",
  },
  createScene: createSoftwareScene,
  cameraPreset: {
    orbitRadius: 10,
    orbitSpeed: 0.015,
    heightAmplitude: 2,
    heightFrequency: 0.5,
    initialAngle: 0,
    pauseOnHover: false,
    autoRotate: true,
    fov: 55,
  },
  postPreset: {
    bloomStrength: 1.0,
    bloomRadius: 0.5,
    bloomThreshold: 0.2,
    scanlineIntensity: 0.18,
    vignetteStrength: 0.4,
    chromaticStrength: 0.004,
  },
});
