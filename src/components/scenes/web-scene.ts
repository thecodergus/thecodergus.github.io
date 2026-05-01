// ── Web Scene: 3D Network Topology — Hub + Satellites Mesh ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig, Vec2 } from "./types";
import { range, randomRange, clamp01 } from "./math";

const rangeBetween = (start: number, end: number): readonly number[] =>
  Array.from({ length: end - start }, (_, i) => start + i);

// ── Configuration ──

const SATELLITE_COUNT = 70;
const RING_COUNT = 4;
const HUB_RADIUS = 0.6;
const SATELLITE_RADIUS = 0.1;
const MAX_RING_RADIUS = 6.0;
const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 3.5;

// ── Internal types ──

interface Satellite {
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  ring: number;
  angle: number;
  speed: number;
  radius: number;
  height: number;
}

interface NetworkPacket {
  origin: number;
  target: number;
  progress: number;
  speed: number;
  isResponse: boolean;
}

// ── Factory ──

export const createWebScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ── Central hub ──

  const hubGeo = new THREE.SphereGeometry(HUB_RADIUS, 32, 32);
  const hubMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.95,
    depthWrite: true,
  });
  const hubMesh = new THREE.Mesh(hubGeo, hubMat);
  group.add(hubMesh);

  // Hub ring
  const ringGeo = new THREE.TorusGeometry(HUB_RADIUS + 0.2, 0.03, 16, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2;
  group.add(ringMesh);

  // ── Satellites distributed across concentric rings ──

  const satGeo = new THREE.SphereGeometry(SATELLITE_RADIUS, 12, 12);
  const satBaseMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.6,
    depthWrite: true,
  });

  const satellites: Satellite[] = [];

  range(SATELLITE_COUNT).forEach((i) => {
    const ring = Math.floor(randomRange(0, RING_COUNT));
    const ringRadius = ((ring + 1) / RING_COUNT) * MAX_RING_RADIUS + randomRange(-0.5, 0.5);
    const angle = (i / SATELLITE_COUNT) * Math.PI * 2 + randomRange(-0.3, 0.3);
    const height = randomRange(-2.0, 2.0) * (RING_COUNT - ring) / RING_COUNT;

    const pos = new THREE.Vector3(
      Math.cos(angle) * ringRadius,
      height,
      Math.sin(angle) * ringRadius,
    );

    const mesh = new THREE.Mesh(satGeo, satBaseMat.clone());
    mesh.position.copy(pos);
    group.add(mesh);

    satellites.push({
      mesh,
      pos,
      ring,
      angle,
      speed: randomRange(0.0003, 0.001) * (RING_COUNT - ring),
      radius: ringRadius,
      height,
    });
  });

  // ── Connections between satellites ──

  const connectionPairs: readonly (readonly [number, number])[] = (() => {
    const pairs: [number, number][] = [];

    // Hub to all satellites
    range(SATELLITE_COUNT).forEach((i) => {
      pairs.push([-1, i]); // -1 = hub
    });

    // Satellite to satellite within proximity
    range(SATELLITE_COUNT).forEach((i) => {
      rangeBetween(i + 1, SATELLITE_COUNT).forEach((j) => {
        const dx = satellites[i].pos.x - satellites[j].pos.x;
        const dy = satellites[i].pos.y - satellites[j].pos.y;
        const dz = satellites[i].pos.z - satellites[j].pos.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DIST) {
          pairs.push([i, j]);
        }
      });
    });

    return pairs;
  })();

  // ── Edge lines ──

  const edgeGeom = new THREE.BufferGeometry();
  const edgePositions = new Float32Array(connectionPairs.length * 6);
  edgeGeom.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));

  const updateEdgeGeometry = (): void => {
    connectionPairs.forEach(([from, to], i) => {
      const fromPos = from === -1 ? new THREE.Vector3(0, 0, 0) : satellites[from].pos;
      const toPos = satellites[to].pos;

      edgePositions[i * 6] = fromPos.x;
      edgePositions[i * 6 + 1] = fromPos.y;
      edgePositions[i * 6 + 2] = fromPos.z;
      edgePositions[i * 6 + 3] = toPos.x;
      edgePositions[i * 6 + 4] = toPos.y;
      edgePositions[i * 6 + 5] = toPos.z;
    });
  };

  updateEdgeGeometry();
  edgeGeom.attributes.position.needsUpdate = true;

  const edgeMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.15,
    depthWrite: false,
  });

  const edgeLines = new THREE.LineSegments(edgeGeom, edgeMat);
  group.add(edgeLines);

  // ── Data packets ──

  const packetGeom = new THREE.BufferGeometry();
  const packetPositions = new Float32Array(PARTICLE_COUNT * 3);
  const packetColors = new Float32Array(PARTICLE_COUNT * 3);
  packetGeom.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));
  packetGeom.setAttribute("color", new THREE.BufferAttribute(packetColors, 3));

  range(PARTICLE_COUNT).forEach((i) => {
    packetPositions[i * 3 + 1] = -999;
  });

  const packetMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });

  const packetPoints = new THREE.Points(packetGeom, packetMat);
  group.add(packetPoints);

  const packets: NetworkPacket[] = [];

  const spawnPacket = (): void => {
    if (disposed || satellites.length === 0) return;
    const origin = Math.floor(Math.random() * satellites.length);
    const target = Math.floor(Math.random() * satellites.length);

    if (origin === target) return;

    packets.push({
      origin,
      target,
      progress: 0,
      speed: randomRange(0.006, 0.016),
      isResponse: Math.random() < 0.4,
    });
  };

  // ── Update ──

  const update = (_time: number, _delta: number, _mouse: Vec2 | null): void => {
    if (disposed) return;

    // Animate satellites orbiting
    satellites.forEach((sat) => {
      sat.angle += sat.speed;
      sat.pos.x = Math.cos(sat.angle) * sat.radius;
      sat.pos.z = Math.sin(sat.angle) * sat.radius;
      sat.pos.y = sat.height + Math.sin(_time * 0.5 + sat.angle) * 0.3;
      sat.mesh.position.copy(sat.pos);
    });

    // Update edge geometry
    updateEdgeGeometry();
    edgeGeom.attributes.position.needsUpdate = true;

    // Hub pulse
    const hubPulse = 1 + Math.sin(_time * 2) * 0.08;
    hubMesh.scale.setScalar(hubPulse);
    hubMat.opacity = 0.85 + Math.sin(_time * 3) * 0.1;

    ringMesh.scale.setScalar(hubPulse);
    ringMesh.rotation.z += 0.003;

    // Spawn packets
    if (Math.random() < 0.25) {
      spawnPacket();
    }

    // Update packets
    const toRemove: number[] = [];

    packets.forEach((p, idx) => {
      p.progress += p.speed;
      if (p.progress >= 1) toRemove.push(idx);
    });

    toRemove.reverse().forEach((idx) => packets.splice(idx, 1));

    while (packets.length > PARTICLE_COUNT) {
      packets.shift();
    }

    // Update packet positions
    range(PARTICLE_COUNT).forEach((i) => {
      if (i < packets.length) {
        const p = packets[i];
        const from = satellites[p.origin]?.pos;
        const to = satellites[p.target]?.pos;

        if (!from || !to) {
          packetPositions[i * 3 + 1] = -999;
          return;
        }

        const t = p.progress;
        // Route through hub for request
        if (!p.isResponse && t < 0.5) {
          // Sat → Hub
          const localT = t * 2;
          packetPositions[i * 3] = from.x * (1 - localT);
          packetPositions[i * 3 + 1] = from.y * (1 - localT);
          packetPositions[i * 3 + 2] = from.z * (1 - localT);
        } else if (!p.isResponse) {
          // Hub → Sat
          const localT = (t - 0.5) * 2;
          packetPositions[i * 3] = to.x * localT;
          packetPositions[i * 3 + 1] = to.y * localT;
          packetPositions[i * 3 + 2] = to.z * localT;
        } else {
          // Direct sat-to-sat (response)
          packetPositions[i * 3] = from.x + (to.x - from.x) * t;
          packetPositions[i * 3 + 1] = from.y + (to.y - from.y) * t;
          packetPositions[i * 3 + 2] = from.z + (to.z - from.z) * t;
        }

        const opacity = Math.sin(t * Math.PI);
        const colorHex = p.isResponse ? config.colorScheme.secondary : config.colorScheme.primary;
        const cr = parseInt(colorHex.slice(1, 3), 16) / 255;
        const cg = parseInt(colorHex.slice(3, 5), 16) / 255;
        const cb = parseInt(colorHex.slice(5, 7), 16) / 255;

        packetColors[i * 3] = cr * opacity;
        packetColors[i * 3 + 1] = cg * opacity;
        packetColors[i * 3 + 2] = cb * opacity;
      } else {
        packetPositions[i * 3 + 1] = -999;
      }
    });

    packetGeom.attributes.position.needsUpdate = true;
    packetGeom.attributes.color.needsUpdate = true;

    void _mouse;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    hubGeo.dispose();
    hubMat.dispose();
    ringGeo.dispose();
    ringMat.dispose();
    satGeo.dispose();
    satBaseMat.dispose();
    satellites.forEach((s) => (s.mesh.material as THREE.Material).dispose());
    edgeGeom.dispose();
    edgeMat.dispose();
    packetGeom.dispose();
    packetMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    hubMat.opacity = 0.95 * t;
    ringMat.opacity = 0.4 * t;
    satellites.forEach((s) => {
      (s.mesh.material as THREE.MeshBasicMaterial).opacity = 0.6 * t;
    });
    edgeMat.opacity = 0.15 * t;
    packetMat.opacity = 0.9 * t;
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
  };
};
