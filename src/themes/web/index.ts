// ── Web Theme Module ──

import { SceneKind } from "../../engine/types";
import { createWebScene } from "./scene";
import { createThemeModule } from "../create-theme-module";

export default createThemeModule({
  sceneKind: SceneKind.Web,
  colorScheme: {
    primary: "#0000EE",
    secondary: "#551A8B",
    tertiary: "#CC0000",
    background: "#F8F9FA",
  },
  createScene: createWebScene,
  cameraPreset: {
    orbitRadius: 11,
    orbitSpeed: 0.015,
    heightAmplitude: 1.5,
    heightFrequency: 0.5,
    initialAngle: 0,
    pauseOnHover: false,
    autoRotate: true,
    fov: 55,
  },
  postPreset: {
    bloomStrength: 0.5,
    bloomRadius: 0.4,
    bloomThreshold: 0.15,
    scanlineIntensity: 0.05,
    vignetteStrength: 0.15,
    chromaticStrength: 0.003,
  },
});
