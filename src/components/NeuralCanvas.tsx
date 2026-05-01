// ── NeuralCanvas — Three.js 3D background with 4 theme-aware scenes ──

import { onMount, onCleanup } from "solid-js";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import { theme } from "~/stores/themeStore";
import type { ThemeId } from "~/stores/themeStore";
import type { SceneHandle, SceneConfig, ColorScheme, Vec2 } from "./scenes/types";
import { SceneKind } from "./scenes/types";
import { createAIScene } from "./scenes/ai-scene";
import { createBlockchainScene } from "./scenes/blockchain-scene";
import { createSoftwareScene } from "./scenes/software-scene";
import { createWebScene } from "./scenes/web-scene";
import { createTransitionManager } from "./scenes/transition";

// ── Color schemes per theme (from app.css) ──

const COLOR_SCHEMES: Readonly<Record<ThemeId, ColorScheme>> = Object.freeze({
  ai: Object.freeze({
    primary: "#00E5FF",
    secondary: "#10A37F",
    tertiary: "#8B5CF6",
    background: "#080012",
  }),
  blockchain: Object.freeze({
    primary: "#F7931A",
    secondary: "#00BFA5",
    tertiary: "#627EEA",
    background: "#0D1117",
  }),
  software: Object.freeze({
    primary: "#569CD6",
    secondary: "#00FF41",
    tertiary: "#C586C0",
    background: "#0A0A0A",
  }),
  web: Object.freeze({
    primary: "#F7DF1E",
    secondary: "#58C4DC",
    tertiary: "#8B5CF6",
    background: "#0F1117",
  }),
});

// ── Scene factory map ──

type SceneCreator = (config: SceneConfig) => SceneHandle;

const SCENE_CREATORS: Readonly<Record<SceneKind, SceneCreator>> = Object.freeze({
  [SceneKind.AI]: createAIScene as SceneCreator,
  [SceneKind.Blockchain]: createBlockchainScene as SceneCreator,
  [SceneKind.Software]: createSoftwareScene as SceneCreator,
  [SceneKind.Web]: createWebScene as SceneCreator,
});

// ── ThemeId → SceneKind mapping ──

const themeToSceneKind = (t: ThemeId): SceneKind => {
  switch (t) {
    case "ai": return SceneKind.AI;
    case "blockchain": return SceneKind.Blockchain;
    case "software": return SceneKind.Software;
    case "web": return SceneKind.Web;
  }
};

// ── Component ──

export default function NeuralCanvas() {
  let containerRef: HTMLDivElement | undefined;
  let renderer: THREE.WebGLRenderer | undefined;
  let mainScene: THREE.Scene | undefined;
  let camera: THREE.PerspectiveCamera | undefined;
  let composer: EffectComposer | undefined;
  let bloomPass: UnrealBloomPass | undefined;
  let animationId = 0;
  let lastTime = 0;
  let currentKind: SceneKind | null = null;
  let mousePos: Vec2 | null = null;

  const mixTarget = { x: 0, y: 0 };

  const transitionManager = createTransitionManager();

  // ── Create scene for a given kind ──

  const buildScene = (kind: SceneKind): SceneHandle | null => {
    if (!mainScene || !composer || !renderer) return null;

    const colorScheme = COLOR_SCHEMES[kind as unknown as ThemeId] ?? COLOR_SCHEMES.ai;
    const config: SceneConfig = {
      width: renderer.domElement.clientWidth,
      height: renderer.domElement.clientHeight,
      colorScheme,
    };

    const creator = SCENE_CREATORS[kind];
    if (!creator) return null;

    const handle = creator(config);
    const objects = handle.getObjects();

    // Add objects to scene
    objects.forEach((obj: THREE.Object3D) => mainScene!.add(obj));

    return handle;
  };

  // ── Dispose current scene ──

  const disposeScene = (handle: SceneHandle): void => {
    if (!mainScene) return;
    const scene = mainScene;
    handle.getObjects().forEach((obj) => scene.remove(obj));
    handle.dispose();
  };

  // ── Initialize Three.js ──

  onMount(() => {
    const container = containerRef;
    if (!container) return;

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Scene
    mainScene = new THREE.Scene();
    mainScene.background = null; // transparent, CSS background shows through

    // Camera
    camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    // Post-processing
    const renderScene = new RenderPass(mainScene, camera);

    bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      1.0,
      0.4,
      0.85,
    );
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.8;
    bloomPass.radius = 0.5;

    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Start with current theme
    const initialKind = themeToSceneKind(theme());
    const initialScene = buildScene(initialKind);
    if (initialScene) {
      transitionManager.transition(null, initialScene);
    }
    currentKind = initialKind;

    // Mouse tracking
    const onMouseMove = (e: MouseEvent): void => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mixTarget.x = x;
      mixTarget.y = y;
    };

    const onMouseLeave = (): void => {
      mixTarget.x = 0;
      mixTarget.y = 0;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    // Resize handler
    const onResize = (): void => {
      if (!renderer || !camera || !composer || !bloomPass) return;

      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      composer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // Animation loop
    const animate = (time: number): void => {
      animationId = requestAnimationFrame(animate);

      const delta = lastTime === 0 ? 16 : Math.min(time - lastTime, 50);
      lastTime = time;

      // Smooth mouse interpolation
      mousePos = {
        x: mousePos ? mousePos.x + (mixTarget.x - mousePos.x) * 0.05 : mixTarget.x,
        y: mousePos ? mousePos.y + (mixTarget.y - mousePos.y) * 0.05 : mixTarget.y,
      };

      // Theme change detection
      const newKind = themeToSceneKind(theme());
      if (newKind !== currentKind && !transitionManager.isTransitioning()) {
        const newScene = buildScene(newKind);
        if (newScene) {
          const active = transitionManager.getActive();
          transitionManager.transition(active, newScene);
          currentKind = newKind;
        }
      }

      // Transition update
      transitionManager.update(delta);

      // Scene update
      const active = transitionManager.getActive();
      if (active) {
        active.update(time * 0.001, delta * 0.001, mousePos);
      }

      // Render
      if (composer && renderer) {
        composer.render();
      }
    };

    animationId = requestAnimationFrame(animate);

    onCleanup(() => {
      cancelAnimationFrame(animationId);

      const active = transitionManager.getActive();
      if (active) disposeScene(active);

      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
    });
  });

  return (
    <div
      ref={containerRef}
      class="absolute inset-0 w-full h-full overflow-hidden"
      style={{ position: "absolute", top: "0", left: "0", "z-index": "1" }}
    />
  );
}
