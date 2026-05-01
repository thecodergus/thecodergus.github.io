// ── Web theme: internal types ──

export interface Endpoint {
  readonly mesh: THREE.Group;
  readonly position: THREE.Vector3;
  readonly kind: "browser" | "dns" | "cdn" | "server";
}

export interface Packet {
  readonly from: THREE.Vector3;
  readonly to: THREE.Vector3;
  progress: number;
  readonly speed: number;
  readonly kind: "request" | "response" | "dns_query" | "dns_response" | "websocket";
  readonly phase: number;
}

import type * as THREE from "three";
