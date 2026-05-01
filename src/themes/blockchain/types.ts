// ── Blockchain theme: internal types ──

export enum ChainPhase {
  Orbiting = 0,
  Checking = 1,
  Waiting = 2,
  AddingBlock = 3,
}

export interface BlockData {
  readonly mesh: THREE.Group;
  readonly fillMaterial: THREE.MeshBasicMaterial;
  readonly edgeMaterial: THREE.LineBasicMaterial;
  readonly position: THREE.Vector3;
  readonly index: number;
}

export interface ChainLink {
  readonly line: THREE.Line;
  readonly material: THREE.LineBasicMaterial;
  readonly fromIdx: number;
  readonly toIdx: number;
}

export interface HashParticle {
  readonly from: THREE.Vector3;
  readonly to: THREE.Vector3;
  progress: number;
  readonly speed: number;
}

import type * as THREE from "three";
