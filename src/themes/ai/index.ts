// ── AI Theme Module ──

import { SceneKind } from "../../engine/types";
import { createAIScene } from "./scene";
import { createThemeModule } from "../create-theme-module";

export default createThemeModule({
  sceneKind: SceneKind.AI,
  colorScheme: {
    primary: "#00E5FF",
    secondary: "#10A37F",
    tertiary: "#8B5CF6",
    background: "#080012",
  },
  createScene: createAIScene,
  cameraPreset: {
    orbitRadius: 14,
    orbitSpeed: 0.02,
    heightAmplitude: 5,
    heightFrequency: 0.5,
    initialAngle: Math.PI / 2,
    pauseOnHover: false,
    autoRotate: true,
    fov: 55,
  },
  postPreset: {
    bloomStrength: 0.4,
    bloomRadius: 0.4,
    bloomThreshold: 0.1,
    scanlineIntensity: 0.15,
    vignetteStrength: 0.35,
    chromaticStrength: 0.003,
  },
});
