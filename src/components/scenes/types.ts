// ── Enums ──

export enum SceneKind {
  AI = "ai",
  Blockchain = "blockchain",
  Software = "software",
  Web = "web",
}

export enum ParticleState {
  Traveling,
  Arrived,
  Waiting,
}

export enum NodeRole {
  Chain,
  Wallet,
  Validator,
}

// ── Interfaces ──

export interface Vec2 {
  readonly x: number;
  readonly y: number;
}

export interface Node3D {
  readonly id: number;
  readonly position: Readonly<{ x: number; y: number; z: number }>;
  readonly velocity: Readonly<{ x: number; y: number; z: number }>;
  readonly radius: number;
  readonly role: NodeRole;
  readonly layer: number;
}

export interface Edge3D {
  readonly from: number;
  readonly to: number;
  readonly weight: number;
}

export interface TravelingParticle {
  readonly fromNode: number;
  readonly toNode: number;
  readonly progress: number;
  readonly speed: number;
  readonly state: ParticleState;
  readonly color: Readonly<{ r: number; g: number; b: number }>;
}

export interface ColorScheme {
  readonly primary: string;
  readonly secondary: string;
  readonly tertiary: string;
  readonly background: string;
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
}

export interface AnimHandle {
  readonly update: (time: number, delta: number, mouse: Vec2 | null) => void;
  readonly dispose: () => void;
}

// ── Type aliases ──

export type SceneFactory = (config: SceneConfig) => SceneHandle;
export type NodeArray = readonly Node3D[];
export type EdgeArray = readonly Edge3D[];
export type ParticleArray = readonly TravelingParticle[];

export interface SceneConfig {
  readonly width: number;
  readonly height: number;
  readonly colorScheme: ColorScheme;
}

// ── Three.js imports (tree-shake friendly) ──

import type * as THREE from "three";

export type ThreeScene = THREE.Scene;
export type ThreeCamera = THREE.PerspectiveCamera;
export type ThreeRenderer = THREE.WebGLRenderer;
