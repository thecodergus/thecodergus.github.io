// ── Web theme: hyperlink spiderweb types ──

export interface CardNode {
  readonly group: THREE.Group;
  readonly planeMat: THREE.MeshBasicMaterial;
  readonly edgeMat: THREE.LineBasicMaterial;
  readonly position: THREE.Vector3;
  readonly spokeIndex: number;
  readonly ringIndex: number;
}

export interface Thread {
  readonly line: THREE.Line;
  readonly mat: THREE.LineBasicMaterial;
  readonly baseOpacity: number;
  readonly kind: "spoke" | "ring";
}

export interface Traveler {
  readonly sprite: THREE.Sprite;
  spokeIndex: number;
  progress: number;
  speed: number;
}

export interface FloatingSprite {
  readonly sprite: THREE.Sprite;
  readonly mat: THREE.SpriteMaterial;
  readonly baseY: number;
  readonly phase: number;
  readonly speed: number;
}

import type * as THREE from "three";
