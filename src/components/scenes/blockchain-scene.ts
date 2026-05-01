// ── Blockchain Scene: 3D Force-directed graph with transaction particles ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig, Vec2 } from "./types";
import { range, randomRange, clamp01 } from "./math";

const rangeBetween = (start: number, end: number): readonly number[] =>
  Array.from({ length: end - start }, (_, i) => start + i);

// ── Configuration ──

const NODE_COUNT = 80;
const CHAIN_COUNT = 12;
const CONNECTION_DIST = 5.0;
const PARTICLE_COUNT = 60;
const REPULSION_STRENGTH = 0.02;
const ATTRACTION_STRENGTH = 0.005;
const DAMPING = 0.98;
const SPREAD = 5.0;

// ── Internal state type ──

interface GraphNode {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  isChain: boolean;
}

interface FlowParticle {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

// ── Factory ──

export const createBlockchainScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;
  let frameCount = 0;

  // ── Generate nodes ──

  const nodes: GraphNode[] = [];

  // Chain nodes (form a golden backbone)
  range(CHAIN_COUNT).forEach((i) => {
    const angle = (i / CHAIN_COUNT) * Math.PI * 2;
    const radius = SPREAD * 0.4;
    nodes.push({
      pos: new THREE.Vector3(
        Math.cos(angle) * radius + randomRange(-0.5, 0.5),
        Math.sin(angle * 3) * 1.5 + randomRange(-0.3, 0.3),
        Math.sin(angle) * radius + randomRange(-0.5, 0.5),
      ),
      vel: new THREE.Vector3(randomRange(-0.1, 0.1), randomRange(-0.1, 0.1), randomRange(-0.1, 0.1)),
      isChain: true,
    });
  });

  // Wallet nodes (scattered in 3D space)
  range(NODE_COUNT - CHAIN_COUNT).forEach(() => {
    nodes.push({
      pos: new THREE.Vector3(
        randomRange(-SPREAD, SPREAD),
        randomRange(-SPREAD * 0.7, SPREAD * 0.7),
        randomRange(-SPREAD, SPREAD),
      ),
      vel: new THREE.Vector3(randomRange(-0.1, 0.1), randomRange(-0.1, 0.1), randomRange(-0.1, 0.1)),
      isChain: false,
    });
  });

  // ── Build edges: each node connects to nearest neighbors ──

  const edges: readonly (readonly [number, number])[] = (() => {
    const pairs: [number, number][] = [];

    // Chain nodes form a ring (blockchain backbone)
    range(CHAIN_COUNT).forEach((i) => {
      const next = (i + 1) % CHAIN_COUNT;
      // Chain connections have weight/double-length for visual clarity
      pairs.push([i, next]);
      // Cross connections every 3 blocks
      if (i % 3 === 0) {
        pairs.push([i, (i + 3) % CHAIN_COUNT]);
      }
    });

    // Wallet nodes connect to nearest chain nodes
    rangeBetween(CHAIN_COUNT, NODE_COUNT).forEach((walletIdx) => {
      const wallet = nodes[walletIdx];

      // Find 2-3 nearest chain nodes
      const sorted = range(CHAIN_COUNT)
        .map((chainIdx) => ({ chainIdx, dist: wallet.pos.distanceTo(nodes[chainIdx].pos) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, Math.floor(randomRange(2, 4)));

      sorted.forEach(({ chainIdx }) => {
        pairs.push([walletIdx, chainIdx]);
      });
    });

    // Wallet-to-wallet connections based on proximity
    rangeBetween(CHAIN_COUNT, NODE_COUNT).forEach((i) => {
      rangeBetween(i + 1, NODE_COUNT).forEach((j) => {
        if (nodes[i].pos.distanceTo(nodes[j].pos) < CONNECTION_DIST * 0.6) {
          if (Math.random() < 0.3) {
            pairs.push([i, j]);
          }
        }
      });
    });

    return pairs;
  })();

  // ── Three.js meshes ──

  const chainNodeGeo = new THREE.SphereGeometry(0.25, 16, 16);
  const walletNodeGeo = new THREE.SphereGeometry(0.12, 12, 12);

  const chainNodeMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.9,
    depthWrite: true,
  });

  const walletNodeMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.5,
    depthWrite: true,
  });

  const nodeMeshes = nodes.map((node) => {
    const geo = node.isChain ? chainNodeGeo : walletNodeGeo;
    const mat = (node.isChain ? chainNodeMat : walletNodeMat).clone();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(node.pos);
    group.add(mesh);
    return mesh;
  });

  // ── Edge lines ──

  const edgeLines: THREE.LineSegments[] = [];
  const edgeGeom = new THREE.BufferGeometry();
  const edgePositionsArr = new Float32Array(edges.length * 6);
  edgeGeom.setAttribute("position", new THREE.BufferAttribute(edgePositionsArr, 3));

  const edgeMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.secondary,
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
  });

  const edgeMesh = new THREE.LineSegments(edgeGeom, edgeMat);
  group.add(edgeMesh);

  // ── Transaction particles ──

  const particleCount = PARTICLE_COUNT;
  const particleGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(particleCount * 3);
  const pColors = new Float32Array(particleCount * 3);
  particleGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
  particleGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

  range(particleCount).forEach((i) => {
    pPositions[i * 3 + 1] = -999;
  });

  const particleMat = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });

  const particlePoints = new THREE.Points(particleGeom, particleMat);
  group.add(particlePoints);

  const flowParticles: FlowParticle[] = [];

  const spawnParticle = (): void => {
    if (disposed || edges.length === 0) return;
    const edge = edges[Math.floor(Math.random() * edges.length)];
    flowParticles.push({
      fromIdx: edge[0],
      toIdx: edge[1],
      progress: 0,
      speed: randomRange(0.006, 0.015),
    });
  };

  // Consensus flash
  let consensusTimer = 0;
  let consensusFlashing = false;

  // ── Update ──

  const update = (_time: number, _delta: number, mouse: Vec2 | null): void => {
    if (disposed) return;
    frameCount++;

    // Force simulation
    range(NODE_COUNT).forEach((i) => {
      rangeBetween(i + 1, NODE_COUNT).forEach((j) => {
        const a = nodes[i].pos;
        const b = nodes[j].pos;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const distSq = dx * dx + dy * dy + dz * dz + 0.01;
        const force = REPULSION_STRENGTH / distSq;

        nodes[i].vel.x += dx * force;
        nodes[i].vel.y += dy * force;
        nodes[i].vel.z += dz * force;
        nodes[j].vel.x -= dx * force;
        nodes[j].vel.y -= dy * force;
        nodes[j].vel.z -= dz * force;
      });
    });

    // Edge attraction
    edges.forEach(([from, to]) => {
      const a = nodes[from].pos;
      const b = nodes[to].pos;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dz = b.z - a.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance > 0.01) {
        const idealDist = nodes[from].isChain && nodes[to].isChain ? 1.5 : 2.0;
        const force = (distance - idealDist) * ATTRACTION_STRENGTH;

        nodes[from].vel.x += dx * force / distance;
        nodes[from].vel.y += dy * force / distance;
        nodes[from].vel.z += dz * force / distance;
        nodes[to].vel.x -= dx * force / distance;
        nodes[to].vel.y -= dy * force / distance;
        nodes[to].vel.z -= dz * force / distance;
      }
    });

    // Damping + boundary
    nodes.forEach((node) => {
      node.vel.multiplyScalar(DAMPING);
      node.pos.add(node.vel);

      // Soft boundary
      if (node.pos.length() > SPREAD * 1.5) {
        node.vel.sub(node.pos.clone().normalize().multiplyScalar(0.05));
      }
    });

    // Update meshes
    nodeMeshes.forEach((mesh, i) => {
      mesh.position.copy(nodes[i].pos);
    });

    // Update edge geometry
    edges.forEach(([from, to], i) => {
      const a = nodes[from].pos;
      const b = nodes[to].pos;
      edgePositionsArr[i * 6] = a.x;
      edgePositionsArr[i * 6 + 1] = a.y;
      edgePositionsArr[i * 6 + 2] = a.z;
      edgePositionsArr[i * 6 + 3] = b.x;
      edgePositionsArr[i * 6 + 4] = b.y;
      edgePositionsArr[i * 6 + 5] = b.z;
    });
    edgeGeom.attributes.position.needsUpdate = true;

    // Spawn particles
    if (frameCount % 4 === 0) {
      spawnParticle();
    }
    while (flowParticles.length > particleCount) {
      flowParticles.shift();
    }

    // Update flow particles
    const toRemove: number[] = [];

    flowParticles.forEach((p, idx) => {
      p.progress += p.speed;
      if (p.progress >= 1) toRemove.push(idx);
    });

    toRemove.reverse().forEach((idx) => flowParticles.splice(idx, 1));

    // Update particle positions
    range(particleCount).forEach((i) => {
      if (i < flowParticles.length) {
        const p = flowParticles[i];
        const from = nodes[p.fromIdx].pos;
        const to = nodes[p.toIdx].pos;

        pPositions[i * 3] = from.x + (to.x - from.x) * p.progress;
        pPositions[i * 3 + 1] = from.y + (to.y - from.y) * p.progress;
        pPositions[i * 3 + 2] = from.z + (to.z - from.z) * p.progress;

        const opacity = Math.sin(p.progress * Math.PI);
        const pr = parseInt(config.colorScheme.secondary.slice(1, 3), 16) / 255;
        const pg = parseInt(config.colorScheme.secondary.slice(3, 5), 16) / 255;
        const pb = parseInt(config.colorScheme.secondary.slice(5, 7), 16) / 255;

        pColors[i * 3] = pr * opacity;
        pColors[i * 3 + 1] = pg * opacity;
        pColors[i * 3 + 2] = pb * opacity;
      } else {
        pPositions[i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    // Consensus flash every ~180 frames
    consensusTimer++;
    if (consensusTimer > 180) {
      consensusTimer = 0;
      consensusFlashing = true;
    }

    if (consensusFlashing) {
      consensusTimer++;
      const flashT = Math.sin(consensusTimer * 0.3) * clamp01((10 - consensusTimer) / 10);
      nodeMeshes.forEach((mesh, i) => {
        if (nodes[i].isChain) {
          (mesh.material as THREE.MeshBasicMaterial).opacity = 0.9 + flashT * 0.1;
        }
      });
      if (consensusTimer > 10) {
        consensusFlashing = false;
        consensusTimer = 0;
        nodeMeshes.forEach((mesh, i) => {
          if (nodes[i].isChain) {
            (mesh.material as THREE.MeshBasicMaterial).opacity = 0.9;
          }
        });
      }
    }

    // Mouse parallax
    if (mouse) {
      group.rotation.y += (mouse.x * 0.4 - group.rotation.y) * 0.02;
      group.rotation.x += (-mouse.y * 0.2 - group.rotation.x) * 0.02;
    }
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    nodeMeshes.forEach((m) => (m.material as THREE.Material).dispose());
    chainNodeGeo.dispose();
    walletNodeGeo.dispose();
    chainNodeMat.dispose();
    walletNodeMat.dispose();
    edgeGeom.dispose();
    edgeMat.dispose();
    particleGeom.dispose();
    particleMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    nodeMeshes.forEach((m) => {
      (m.material as THREE.MeshBasicMaterial).opacity = (nodes[nodeMeshes.indexOf(m)].isChain ? 0.9 : 0.5) * t;
    });
    edgeMat.opacity = 0.2 * t;
    particleMat.opacity = 0.9 * t;
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
  };
};
