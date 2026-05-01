// ── Web Scene: HTTP Request/Response Cycle — Browser → DNS → CDN → Server ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, randomRange, clamp01 } from "./math";

// ── Configuration ──

const PARTICLE_COUNT = 70;
const BROWSER_X = -6;
const DNS_X = -2;
const CDN_X = 2;
const SERVER_X = 6;

// ── Internal types ──

interface Endpoint {
  readonly mesh: THREE.Group;
  readonly position: THREE.Vector3;
  readonly kind: "browser" | "dns" | "cdn" | "server";
}

interface Packet {
  readonly from: THREE.Vector3;
  readonly to: THREE.Vector3;
  progress: number;
  readonly speed: number;
  readonly kind: "request" | "response" | "dns_query" | "dns_response" | "websocket";
  readonly phase: number;
}

// ── Create endpoint node ──

const createEndpoint = (
  x: number,
  y: number,
  z: number,
  size: number,
  primaryColor: string,
  tertiaryColor: string,
): THREE.Group => {
  const g = new THREE.Group();
  const geo = new THREE.SphereGeometry(size, 20, 20);
  const mat = new THREE.MeshBasicMaterial({
    color: primaryColor,
    transparent: true,
    opacity: 0.8,
    depthWrite: true,
  });
  const sphere = new THREE.Mesh(geo, mat);
  g.add(sphere);

  // Ring
  const ringGeo = new THREE.TorusGeometry(size + 0.15, 0.04, 8, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: tertiaryColor,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  g.add(ring);

  g.position.set(x, y, z);
  return g;
};

// ── Factory ──

export const createWebScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ── Endpoints ──

  const endpoints: Endpoint[] = [
    {
      mesh: createEndpoint(BROWSER_X, 0, 0, 0.5, config.colorScheme.primary, config.colorScheme.tertiary),
      position: new THREE.Vector3(BROWSER_X, 0, 0),
      kind: "browser",
    },
    {
      mesh: createEndpoint(DNS_X, 1.5, 0, 0.35, config.colorScheme.tertiary, config.colorScheme.secondary),
      position: new THREE.Vector3(DNS_X, 1.5, 0),
      kind: "dns",
    },
    {
      mesh: createEndpoint(CDN_X, 0, 0, 0.4, config.colorScheme.secondary, config.colorScheme.primary),
      position: new THREE.Vector3(CDN_X, 0, 0),
      kind: "cdn",
    },
    {
      mesh: createEndpoint(SERVER_X, 0, 0, 0.55, config.colorScheme.secondary, config.colorScheme.primary),
      position: new THREE.Vector3(SERVER_X, 0, 0),
      kind: "server",
    },
  ];

  endpoints.forEach((e) => group.add(e.mesh));

  // ── API Gateway nodes (smaller, near server) ──

  const gatewayGeo = new THREE.IcosahedronGeometry(0.15, 1);
  const gatewayMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.5,
    depthWrite: true,
  });

  const gateways: THREE.Mesh[] = [];
  range(4).forEach((i) => {
    const gw = new THREE.Mesh(gatewayGeo, gatewayMat.clone());
    gw.position.set(
      SERVER_X - 0.4,
      (i - 1.5) * 0.3,
      0,
    );
    group.add(gw);
    gateways.push(gw);
  });

  // ── Connection lines (infrastructure) ──

  const infraMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });

  const connect = (a: THREE.Vector3, b: THREE.Vector3, opacity: number): void => {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const mat = new THREE.LineBasicMaterial({
      color: config.colorScheme.primary,
      transparent: true,
      opacity,
      depthWrite: false,
    });
    group.add(new THREE.Line(geo, mat));
  };

  // Browser → DNS
  connect(endpoints[0].position, endpoints[1].position, 0.15);
  // DNS → CDN
  connect(endpoints[1].position, endpoints[2].position, 0.1);
  // CDN → Server
  connect(endpoints[2].position, endpoints[3].position, 0.12);
  // Browser → CDN (direct)
  connect(endpoints[0].position, endpoints[2].position, 0.08);
  // Server ←→ Gateways
  gateways.forEach((gw) => {
    const gwPos = gw.position.clone();
    connect(endpoints[3].position, gwPos, 0.08);
  });

  // WebSocket animation line (pulsing, bidirectional)
  const wsGeo = new THREE.BufferGeometry().setFromPoints([
    endpoints[0].position,
    new THREE.Vector3(SERVER_X, -1.5, 0),
    endpoints[3].position,
  ]);
  const wsLine = new THREE.Line(
    wsGeo,
    new THREE.LineBasicMaterial({
      color: config.colorScheme.secondary,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
    }),
  );
  group.add(wsLine);

  // ── Data packets ──

  const pGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(PARTICLE_COUNT * 3);
  const pColors = new Float32Array(PARTICLE_COUNT * 3);
  pGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
  pGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

  range(PARTICLE_COUNT).forEach((i) => {
    pPositions[i * 3 + 1] = -999;
  });

  const pMat = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 1,
  });

  const pPoints = new THREE.Points(pGeom, pMat);
  group.add(pPoints);

  const packets: Packet[] = [];

  const spawnPacket = (): void => {
    if (disposed) return;

    const r = Math.random();

    if (r < 0.15) {
      // DNS query: browser → DNS → back
      packets.push({
        from: endpoints[0].position,
        to: endpoints[1].position,
        progress: 0,
        speed: randomRange(0.008, 0.018),
        kind: "dns_query",
        phase: 0,
      });
    } else if (r < 0.4) {
      // Request: browser → CDN → server
      packets.push({
        from: endpoints[0].position,
        to: endpoints[2].position,
        progress: 0,
        speed: randomRange(0.008, 0.02),
        kind: "request",
        phase: 0,
      });
    } else if (r < 0.55) {
      // Response: server → browser
      packets.push({
        from: endpoints[3].position,
        to: endpoints[0].position,
        progress: 0,
        speed: randomRange(0.01, 0.025),
        kind: "response",
        phase: 0,
      });
    } else if (r < 0.7) {
      // WebSocket
      packets.push({
        from: endpoints[0].position,
        to: endpoints[3].position,
        progress: 0,
        speed: randomRange(0.005, 0.012),
        kind: "websocket",
        phase: 0,
      });
    } else {
      // CDN → server
      packets.push({
        from: endpoints[2].position,
        to: endpoints[3].position,
        progress: 0,
        speed: randomRange(0.006, 0.015),
        kind: "request",
        phase: 0,
      });
    }
  };

  // ── Update ──

  const update = (time: number, _delta: number, _mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    // Pulse endpoints
    endpoints.forEach((e, i) => {
      const s = 1 + Math.sin(time * 2 + i) * 0.05;
      e.mesh.scale.setScalar(s);
    });

    // Pulse gateways
    gateways.forEach((gw, i) => {
      const s = 1 + Math.sin(time * 3 + i * 1.3) * 0.06;
      gw.scale.setScalar(s);
    });

    // WebSocket line pulse
    wsLine.material.opacity = 0.08 + Math.sin(time * 2) * 0.05;

    // Spawn packets
    if (Math.random() < 0.3) spawnPacket();

    // Update packets
    const toRemove: number[] = [];
    packets.forEach((p, idx) => {
      p.progress += p.speed;
      if (p.progress >= 1) toRemove.push(idx);
    });
    toRemove.reverse().forEach((idx) => packets.splice(idx, 1));
    while (packets.length > PARTICLE_COUNT) packets.shift();

    // Update particle buffer
    range(PARTICLE_COUNT).forEach((i) => {
      if (i < packets.length) {
        const p = packets[i];
        const t = p.progress;
        const arcHeight = Math.sin(t * Math.PI) * 0.8;

        pPositions[i * 3] = p.from.x + (p.to.x - p.from.x) * t;
        pPositions[i * 3 + 1] = p.from.y + (p.to.y - p.from.y) * t + arcHeight;
        pPositions[i * 3 + 2] = p.from.z + (p.to.z - p.from.z) * t;

        const opacity = Math.sin(t * Math.PI);
        const hex = p.kind === "request" || p.kind === "dns_query"
          ? config.colorScheme.primary
          : p.kind === "response" || p.kind === "dns_response"
            ? config.colorScheme.secondary
            : config.colorScheme.tertiary;

        pColors[i * 3] = (parseInt(hex.slice(1, 3), 16) / 255) * opacity;
        pColors[i * 3 + 1] = (parseInt(hex.slice(3, 5), 16) / 255) * opacity;
        pColors[i * 3 + 2] = (parseInt(hex.slice(5, 7), 16) / 255) * opacity;
      } else {
        pPositions[i * 3 + 1] = -999;
      }
    });

    pGeom.attributes.position.needsUpdate = true;
    pGeom.attributes.color.needsUpdate = true;

    void time;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      } else if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    gatewayGeo.dispose();
    gatewayMat.dispose();
    infraMat.dispose();
    pGeom.dispose();
    pMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    endpoints.forEach((e) => {
      e.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          (child.material as THREE.MeshBasicMaterial).opacity = 0.6 * t;
        }
      });
    });
    gateways.forEach((gw) => {
      (gw.material as THREE.MeshBasicMaterial).opacity = 0.5 * t;
    });
    pMat.opacity = t;
  };

  const dissolve = (progress: number): void => {
    const objs: THREE.Object3D[] = [];
    group.traverse((child) => {
      if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
        objs.push(child);
      }
    });
    objs.forEach((obj, i) => {
      const seed = i / (objs.length - 1 + 0.001);
      if (progress > seed) {
        const localP = clamp01((progress - seed) / (1 - seed + 0.001));
        obj.scale.setScalar(1 - localP);
        const applyFade = (mat: THREE.Material): void => {
          mat.transparent = true;
          mat.depthWrite = false;
          (mat as THREE.MeshBasicMaterial).opacity = 1 - localP;
        };
        if (obj instanceof THREE.Mesh) {
          const mats = obj.material;
          if (Array.isArray(mats)) mats.forEach(applyFade);
          else applyFade(mats);
        } else {
          const mats = (obj as THREE.Line | THREE.Points).material;
          if (Array.isArray(mats)) mats.forEach(applyFade);
          else applyFade(mats);
        }
      }
    });
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
    dissolve,
  };
};
