// ── AI theme: internal types ──

export interface LayerDef {
  readonly count: number;
  readonly z: number;
  readonly radius: number;
  readonly color: string;
  readonly hasRipple: boolean;
}

export interface FlowParticle {
  fromLayer: number;
  fromNeuron: number;
  toLayer: number;
  toNeuron: number;
  progress: number;
  speed: number;
}

export interface SpikeRing {
  mesh: THREE.Mesh;
  active: boolean;
  timer: number;
  maxTime: number;
}

export interface DropoutState {
  dropped: Set<number>;
  epochTimer: number;
  epochDuration: number;
}

import type * as THREE from "three";
