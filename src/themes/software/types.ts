// ── Software theme: internal types ──

export interface PlaneConfig {
  readonly columns: number;
  readonly maxDropsPerColumn: number;
  readonly charSize: number;
  readonly speedMin: number;
  readonly speedMax: number;
  readonly opacityMin: number;
  readonly opacityMax: number;
  readonly zOffset: number;
  readonly parallaxFactor: number;
}

export interface Drop {
  column: number;
  row: number;
  speed: number;
  opacity: number;
  isHead: boolean;
  entranceFactor: number;
  frozen: boolean;
}

export interface PlaneState {
  group: THREE.Group;
  config: PlaneConfig;
  drops: Drop[];
  sprites: THREE.Sprite[];
  columnSpacing: number;
}

export interface GlitchState {
  active: boolean;
  framesRemaining: number;
  intensity: number;
}

export interface FreezeState {
  column: number;
  plane: number;
  timer: number;
  active: boolean;
}

export interface KeySprite {
  sprite: THREE.Sprite;
  timer: number;
  baseScale: number;
  startY: number;
  speedY: number;
}

import type * as THREE from "three";
