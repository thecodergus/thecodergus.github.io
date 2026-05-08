// ── Engine: Three.js orchestrator — pure, scene-agnostic ──
//
// Manages: renderer, scene, camera, post-processing, animation loop,
// camera orbit, keyboard routing, resize, transitions.
// Receives ThemeModule objects to load/scene switch.

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

import type { SceneHandle, SceneConfig, CameraPreset, PostProcessPreset, QualityConfig } from "./types";
import type { ThemeModule } from "./types";
import { createTransitionManager } from "./transition";
import { setSeed } from "./math";

// ── Scanline shader with per-theme uniform controls ──

const SCANLINE_SHADER = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uScanlineIntensity: { value: 0.15 },
    uVignetteStrength: { value: 0.35 },
    uChromaticStrength: { value: 0.003 },
  },
  vertexShader: `varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  fragmentShader: `varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform vec2 uResolution;
uniform float uScanlineIntensity;
uniform float uVignetteStrength;
uniform float uChromaticStrength;

void main() {
  vec4 tex = texture2D(tDiffuse, vUv);

  // Scanlines
  float scanlineY = gl_FragCoord.y - uTime * 30.0;
  float scanline = sin(scanlineY * 1.0) * uScanlineIntensity + (1.0 - uScanlineIntensity);

  // Vignette
  vec2 uvCenter = vUv - 0.5;
  float vignette = 1.0 - length(uvCenter) * uVignetteStrength;

  // Chromatic aberration at edges
  float edgeDist = length(uvCenter) * 2.0;
  float chromaShift = edgeDist * uChromaticStrength;
  float r = texture2D(tDiffuse, vUv + vec2(chromaShift, 0.0)).r;

  vec3 result = vec3(r, tex.g, tex.b) * scanline * vignette;
  gl_FragColor = vec4(result, tex.a);
}`,
};

// ── Engine handle (public API) ──

export interface EngineHandle {
  readonly setTheme: (m: ThemeModule) => void;
  readonly dispose: () => void;
  readonly resize: () => void;
}

// ── Engine factory ──

export const createEngine = (
  container: HTMLElement,
  quality: QualityConfig,
): EngineHandle => {
  // ── Renderer ──

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(quality.pixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // ── Scene ──

  const mainScene = new THREE.Scene();
  mainScene.background = null; // transparent

  // ── Camera ──

  const camera = new THREE.PerspectiveCamera(
    55,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 12);
  camera.lookAt(0, 0, 0);

  // ── Post-processing ──

  const renderScenePass = new RenderPass(mainScene, camera);

  const bloomW = Math.floor(container.clientWidth * quality.bloomResolutionScale) || 1;
  const bloomH = Math.floor(container.clientHeight * quality.bloomResolutionScale) || 1;
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(bloomW, bloomH),
    1.0,
    0.4,
    0.85,
  );
  bloomPass.threshold = 0.1;
  bloomPass.strength = 0.8;
  bloomPass.radius = 0.5;

  // type hack for ShaderPass constructor compatibility
  const scanlinePass = new ShaderPass(
    SCANLINE_SHADER as unknown as {
      uniforms: Record<string, THREE.IUniform>;
      vertexShader: string;
      fragmentShader: string;
    },
  );
  scanlinePass.renderToScreen = false;

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScenePass);

  if (quality.bloomEnabled) {
    composer.addPass(bloomPass);
  }

  if (quality.scanlineEnabled) {
    composer.addPass(scanlinePass);
  }

  // FXAA — replaces non-functional MSAA; cheap, high visual quality
  const fxaaPass = new ShaderPass(
    FXAAShader as unknown as {
      uniforms: Record<string, THREE.IUniform>;
      vertexShader: string;
      fragmentShader: string;
    },
  );
  fxaaPass.uniforms.resolution.value.set(
    1 / (container.clientWidth * renderer.getPixelRatio()),
    1 / (container.clientHeight * renderer.getPixelRatio()),
  );
  composer.addPass(fxaaPass);
  fxaaPass.renderToScreen = true;

  // ── State ──

  let animationId = 0;
  let lastTime = 0;
  let disposed = false;
  let frameCount = 0;

  let activePreset: CameraPreset | null = null;

  let orbitAngle = 0;

  const bloomTarget = { value: 0.8 };

  // ── Scene helpers ──

  const buildScene = (m: ThemeModule): SceneHandle | null => {
    setSeed(42);
    const config: SceneConfig = {
      width: renderer.domElement.clientWidth,
      height: renderer.domElement.clientHeight,
      colorScheme: m.colorScheme,
      softwarePlanes: quality.softwarePlanes,
    };

    const handle = m.createScene(config);
    const objects = handle.getObjects();
    objects.forEach((obj) => mainScene.add(obj));
    return handle;
  };

  const disposeScene = (handle: SceneHandle): void => {
    handle.getObjects().forEach((obj) => mainScene.remove(obj));
    handle.dispose();
  };

  const transitionManager = createTransitionManager(disposeScene);

  // ── Apply post-processing preset ──

  const applyPostPreset = (preset: PostProcessPreset): void => {
    bloomPass.strength = preset.bloomStrength;
    bloomPass.radius = preset.bloomRadius;
    bloomPass.threshold = preset.bloomThreshold;
    bloomTarget.value = preset.bloomStrength;

    scanlinePass.uniforms.uScanlineIntensity.value = preset.scanlineIntensity;
    scanlinePass.uniforms.uVignetteStrength.value = preset.vignetteStrength;
    scanlinePass.uniforms.uChromaticStrength.value = preset.chromaticStrength;
  };

  // ── Public: setTheme ──

  let currentModule: ThemeModule | null = null;

  const setTheme = (m: ThemeModule): void => {
    if (disposed) return;

    if (currentModule?.sceneKind === m.sceneKind) return;

    currentModule = m;

    // Update camera preset and reset orbit angle
    activePreset = m.cameraPreset;
    orbitAngle = m.cameraPreset.initialAngle;

    // Update post-processing
    applyPostPreset(m.postPreset);

    // Update camera FOV
    if (camera) {
      camera.fov = m.cameraPreset.fov;
      camera.updateProjectionMatrix();
    }

    // Build new scene
    const newScene = buildScene(m);
    if (!newScene) return;

    const active = transitionManager.getActive();
    transitionManager.transition(active, newScene);
  };

  // ── Camera orbit ──

  const updateCamera = (delta: number): void => {
    if (!activePreset) return;

    const activeScene = transitionManager.getActive();
    const camState = activeScene?.getCameraState?.();

    if (camState) {
      const lf = Math.min(camState.lerpFactor * delta * 0.06, 1);
      camera.position.lerp(camState.position, lf);
      camera.lookAt(camState.lookAt);
      return;
    }

    const p = activePreset;

    if (p.autoRotate) {
      orbitAngle += p.orbitSpeed * delta * 0.001;
    }

    const orbitH = Math.sin(orbitAngle * p.heightFrequency) * p.heightAmplitude;

    const cx = Math.sin(orbitAngle) * p.orbitRadius;
    const cz = Math.cos(orbitAngle) * p.orbitRadius;

    camera.position.lerp(new THREE.Vector3(cx, orbitH, cz), 0.03);
    camera.lookAt(0, 0, 0);
  };

  // ── Keyboard routing (generic: routes to active scene) ──

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key.length !== 1) return;
    const active = transitionManager.getActive();
    if (active?.onKeyPress) {
      active.onKeyPress(e.key);
    }
  };

  window.addEventListener("keydown", onKeyDown);

  // ── Resize ──

  const resize = (): void => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    if (quality.bloomEnabled && quality.bloomResolutionScale > 0) {
      bloomPass.setSize(
        Math.floor(w * quality.bloomResolutionScale),
        Math.floor(h * quality.bloomResolutionScale),
      );
    }
    scanlinePass.uniforms.uResolution.value.set(w, h);
    fxaaPass.uniforms.resolution.value.set(
      1 / (w * renderer.getPixelRatio()),
      1 / (h * renderer.getPixelRatio()),
    );
  };

  window.addEventListener("resize", resize);

  // ── Animation loop ──

  const animate = (time: number): void => {
    animationId = requestAnimationFrame(animate);

    const delta = lastTime === 0 ? 16 : Math.min(time - lastTime, 50);
    lastTime = time;

    // Camera orbit
    updateCamera(delta);

    // Transition update
    transitionManager.update(delta);

    // Scene update
    const active = transitionManager.getActive();
    if (active) {
      active.update(time * 0.001, delta * 0.001, null);

      // Bloom breathing from scene density
      if (active.getDensity) {
        const density = active.getDensity();
        const baseStrength = currentModule?.postPreset.bloomStrength ?? 0.8;
        const targetStrength = baseStrength * 0.5 + density * baseStrength;
        bloomTarget.value += (targetStrength - bloomTarget.value) * 0.03;
        bloomPass.strength = bloomTarget.value;
      }
    }

    // Scanline time
    scanlinePass.uniforms.uTime.value = time * 0.001;

    // Render
    composer.render();

    // Dev logging: draw call statistics every 60 frames
    if (import.meta.env.DEV) {
      frameCount++;
      if (frameCount > 1 && frameCount % 60 === 0) {
        const calls = renderer.info.render?.calls ?? 0;
        const points = renderer.info.render?.points ?? 0;
        console.debug(
          `[Three.js] Frame ${frameCount} | Draw calls: ${calls} | Points: ${points} | Tier: ${quality.tier}`,
        );
      }
    }
  };

  animationId = requestAnimationFrame(animate);

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    cancelAnimationFrame(animationId);

    const active = transitionManager.getActive();
    if (active) disposeScene(active);

    window.removeEventListener("resize", resize);
    window.removeEventListener("keydown", onKeyDown);

    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };

  return Object.freeze({ setTheme, dispose, resize });
};
