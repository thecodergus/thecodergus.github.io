// ── Engine: Three.js orchestrator — pure, scene-agnostic ──
//
// Manages: renderer, scene, camera, post-processing, animation loop,
// camera orbit, mouse tracking, keyboard routing, resize, transitions.
// Receives ThemeModule objects to load/scene switch.

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

import type { SceneHandle, SceneConfig, Vec2, CameraPreset, PostProcessPreset } from "./types";
import type { ThemeModule } from "./types";
import { createTransitionManager } from "./transition";

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

export const createEngine = (container: HTMLElement): EngineHandle => {
  // ── Renderer ──

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth, container.clientHeight),
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
  scanlinePass.renderToScreen = true;

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScenePass);
  composer.addPass(bloomPass);
  composer.addPass(scanlinePass);

  // ── State ──

  let animationId = 0;
  let lastTime = 0;
  let disposed = false;

  let activePreset: CameraPreset | null = null;

  let orbitAngle = 0;
  let mouseOverCanvas = false;

  const bloomTarget = { value: 0.8 };
  const mixTarget = { x: 0, y: 0 };
  let mousePos: Vec2 | null = null;

  const transitionManager = createTransitionManager();

  // ── Scene helpers ──

  const buildScene = (m: ThemeModule): SceneHandle | null => {
    const config: SceneConfig = {
      width: renderer.domElement.clientWidth,
      height: renderer.domElement.clientHeight,
      colorScheme: m.colorScheme,
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

    // Avoid redundant switch to same kind while transitioning
    if (
      currentModule?.sceneKind === m.sceneKind &&
      transitionManager.isTransitioning()
    ) {
      return;
    }

    currentModule = m;

    // Update camera preset
    activePreset = m.cameraPreset;

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

    const p = activePreset;

    const shouldPause = p.pauseOnHover && mouseOverCanvas;
    if (p.autoRotate && !shouldPause) {
      orbitAngle += p.orbitSpeed * delta * 0.001;
    }

    const orbitMouseOffset = mousePos ? mousePos.x * 0.26 : 0;
    const orbitH = Math.sin(orbitAngle * p.heightFrequency) * p.heightAmplitude;
    const camAngle = orbitAngle + orbitMouseOffset;

    const cx = Math.sin(camAngle) * p.orbitRadius;
    const cz = Math.cos(camAngle) * p.orbitRadius;

    camera.position.lerp(new THREE.Vector3(cx, orbitH, cz), 0.03);
    camera.lookAt(0, 0, 0);
  };

  // ── Mouse tracking ──

  const onMouseMove = (e: MouseEvent): void => {
    const rect = container.getBoundingClientRect();
    mixTarget.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mixTarget.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseOverCanvas = true;
  };

  const onMouseEnter = (): void => {
    mouseOverCanvas = true;
  };

  const onMouseLeave = (): void => {
    mixTarget.x = 0;
    mixTarget.y = 0;
    mouseOverCanvas = false;
  };

  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseenter", onMouseEnter);
  container.addEventListener("mouseleave", onMouseLeave);

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
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    composer.setSize(w, h);
    scanlinePass.uniforms.uResolution.value.set(w, h);
  };

  window.addEventListener("resize", resize);

  // ── Animation loop ──

  const animate = (time: number): void => {
    animationId = requestAnimationFrame(animate);

    const delta = lastTime === 0 ? 16 : Math.min(time - lastTime, 50);
    lastTime = time;

    // Smooth mouse interpolation
    mousePos = {
      x: mousePos ? mousePos.x + (mixTarget.x - mousePos.x) * 0.05 : mixTarget.x,
      y: mousePos ? mousePos.y + (mixTarget.y - mousePos.y) * 0.05 : mixTarget.y,
    };

    // Camera orbit
    updateCamera(delta);

    // Transition update
    transitionManager.update(delta);

    // Scene update
    const active = transitionManager.getActive();
    if (active) {
      active.update(time * 0.001, delta * 0.001, mousePos);

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
    container.removeEventListener("mousemove", onMouseMove);
    container.removeEventListener("mouseenter", onMouseEnter);
    container.removeEventListener("mouseleave", onMouseLeave);

    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };

  return Object.freeze({ setTheme, dispose, resize });
};
