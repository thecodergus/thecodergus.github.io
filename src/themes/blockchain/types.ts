// ── Blockchain theme: internal types ──

export interface BlockData {
  readonly mesh: THREE.Group;
  readonly position: THREE.Vector3;
  readonly index: number;
}

export interface MerkleNode {
  readonly mesh: THREE.Mesh;
  readonly parent: number;
  readonly level: number;
}

export interface HashParticle {
  readonly from: THREE.Vector3;
  readonly to: THREE.Vector3;
  progress: number;
  readonly speed: number;
}

import type * as THREE from "three";
