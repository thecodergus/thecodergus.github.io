// ── Engine contract types — all theme modules implement this ──

import type * as THREE from "three";

// ── Enums ──

export enum SceneKind {
  AI = "ai",
  Blockchain = "blockchain",
  Software = "software",
  Web = "web",
}

// ── Primitives ──

export interface Vec2 {
  readonly x: number;
  readonly y: number;
}

export interface ColorScheme {
  readonly primary: string;
  readonly secondary: string;
  readonly tertiary: string;
  readonly background: string;
}

// ── Scene contract (every theme factory returns this) ──

export interface CameraState {
  readonly position: THREE.Vector3;
  readonly lookAt: THREE.Vector3;
  readonly lerpFactor: number;
}

export interface SceneConfig {
  readonly width: number;
  readonly height: number;
  readonly colorScheme: ColorScheme;
  readonly softwarePlanes?: number;
  readonly camera: THREE.PerspectiveCamera;
}

export interface SceneHandle {
  readonly update: (time: number, delta: number, mouse: Vec2 | null) => void;
  readonly dispose: () => void;
  readonly setOpacity: (t: number) => void;
  readonly getObjects: () => readonly THREE.Object3D[];
  readonly onKeyPress?: (key: string) => void;
  readonly getDensity?: () => number;
  readonly dissolve?: (progress: number) => void;
  readonly entrance?: (elapsed: number) => void;
  readonly getCameraState?: () => CameraState | null;
}

// ── Camera preset (per theme) ──

export interface CameraPreset {
  readonly orbitRadius: number;
  readonly orbitSpeed: number;
  readonly heightAmplitude: number;
  readonly heightFrequency: number;
  readonly initialAngle: number;
  readonly pauseOnHover: boolean;
  readonly autoRotate: boolean;
  readonly fov: number;
}

// ── Post-processing preset (per theme) ──

export interface PostProcessPreset {
  readonly bloomStrength: number;
  readonly bloomRadius: number;
  readonly bloomThreshold: number;
  readonly scanlineIntensity: number;
  readonly vignetteStrength: number;
  readonly chromaticStrength: number;
}

// ── Theme module (the plug-in contract) ──

export interface ThemeModule {
  readonly sceneKind: SceneKind;
  readonly colorScheme: ColorScheme;
  readonly createScene: (config: SceneConfig) => SceneHandle;
  readonly cameraPreset: CameraPreset;
  readonly postPreset: PostProcessPreset;
}

// ── Three.js type aliases (tree-shake friendly) ──

export type ThreeScene = THREE.Scene;
export type ThreeCamera = THREE.PerspectiveCamera;
export type ThreeRenderer = THREE.WebGLRenderer;

export type SceneFactory = (config: SceneConfig) => SceneHandle;

export type { QualityConfig } from "./quality";
