// ── Blockchain Scene: Block Chain + Merkle Tree + Mining ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, rangeBetween, randomRange, clamp01 } from "./math";

// ── Configuration ──

const BLOCK_COUNT = 7;
const BLOCK_SIZE = 1.2;
const CHAIN_Z_OFFSET_START = -4;
const CHAIN_Z_STEP = 1.6;
const VALIDATOR_COUNT = 12;
const PARTICLE_COUNT = 50;
const HASH_PARTICLES_PER_BLOCK = 3;

// ── Internal types ──

interface BlockData {
  readonly mesh: THREE.Group;
  readonly position: THREE.Vector3;
  readonly index: number;
}

interface MerkleNode {
  readonly mesh: THREE.Mesh;
  readonly parent: number;
  readonly level: number;
}

interface HashParticle {
  readonly from: THREE.Vector3;
  readonly to: THREE.Vector3;
  progress: number;
  readonly speed: number;
}

// ── Factory ──

export const createBlockchainScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;
  let miningIdx = 0;
  let miningTimer = 0;
  let mining = false;

  // ── Create block geometry (cube with edges) ──

  const blockGeo = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  const blockEdgeGeo = new THREE.EdgesGeometry(blockGeo);

  const blockMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });

  // ── Blocks in chain ──

  const blocks: BlockData[] = [];
  const chainStartX = 0;

  range(BLOCK_COUNT).forEach((i) => {
    const blockGroup = new THREE.Group();
    const z = CHAIN_Z_OFFSET_START + i * CHAIN_Z_STEP;

    // Block outline
    const edges = new THREE.LineSegments(
      blockEdgeGeo,
      new THREE.LineBasicMaterial({
        color: config.colorScheme.primary,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      }),
    );
    blockGroup.add(edges);

    // Block fill
    const fill = new THREE.Mesh(blockGeo, blockMat.clone());
    blockGroup.add(fill);

    // ── Merkle tree inside block ──

    const merkleLevels = 3;
    const merkleNodes: MerkleNode[] = [];
    const merkleGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const merkleMat = new THREE.MeshBasicMaterial({
      color: config.colorScheme.secondary,
      transparent: true,
      opacity: 0.7,
    });

    // Leaf nodes at bottom (level 0)
    const leafCount = 4;
    range(leafCount).forEach((leaf) => {
      const leafX = (leaf - leafCount / 2 + 0.5) * (BLOCK_SIZE * 0.25);
      const mesh = new THREE.Mesh(merkleGeo, merkleMat.clone());
      mesh.position.set(leafX, -BLOCK_SIZE * 0.28, 0);
      blockGroup.add(mesh);
      merkleNodes.push({ mesh, parent: leafCount + Math.floor(leaf / 2), level: 0 });
    });

    // Mid level (2 nodes)
    range(2).forEach((mid) => {
      const mesh = new THREE.Mesh(merkleGeo, merkleMat.clone());
      mesh.position.set((mid - 0.5) * BLOCK_SIZE * 0.35, 0, 0);
      blockGroup.add(mesh);
      merkleNodes.push({ mesh, parent: leafCount + 2, level: 1 });
    });

    // Root
    const root = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshBasicMaterial({
        color: config.colorScheme.secondary,
        transparent: true,
        opacity: 0.9,
      }),
    );
    root.position.set(0, BLOCK_SIZE * 0.28, 0);
    blockGroup.add(root);
    merkleNodes.push({ mesh: root, parent: -1, level: 2 });

    // Merkle connecting lines
    range(leafCount).forEach((leaf) => {
      const midIdx = leafCount + Math.floor(leaf / 2);
      if (midIdx < merkleNodes.length) {
        const pts = [
          merkleNodes[leaf].mesh.position.clone(),
          merkleNodes[midIdx].mesh.position.clone(),
        ];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(
          lineGeo,
          new THREE.LineBasicMaterial({
            color: config.colorScheme.secondary,
            transparent: true,
            opacity: 0.25,
            depthWrite: false,
          }),
        );
        blockGroup.add(line);
      }
    });

    range(2).forEach((mid) => {
      const midIdx = leafCount + mid;
      if (midIdx < merkleNodes.length) {
        const pts = [
          merkleNodes[midIdx].mesh.position.clone(),
          root.position.clone(),
        ];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(
          lineGeo,
          new THREE.LineBasicMaterial({
            color: config.colorScheme.secondary,
            transparent: true,
            opacity: 0.25,
            depthWrite: false,
          }),
        );
        blockGroup.add(line);
      }
    });

    blockGroup.position.set(chainStartX, 0, z);
    const pos = new THREE.Vector3(chainStartX, 0, z);
    group.add(blockGroup);
    blocks.push({
      mesh: blockGroup,
      position: pos,
      index: i,
    });
  });

  // ── Chain links between blocks (hash connections) ──

  const hashLineMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });

  range(BLOCK_COUNT - 1).forEach((i) => {
    const from = blocks[i].position.clone();
    const to = blocks[i + 1].position.clone();
    from.x += BLOCK_SIZE * 0.55;
    to.x -= BLOCK_SIZE * 0.55;

    const linkGeo = new THREE.BufferGeometry().setFromPoints([from, to]);
    const linkLine = new THREE.Line(linkGeo, hashLineMat.clone());
    group.add(linkLine);
  });

  // ── Validator nodes (spheres orbiting the chain) ──

  const validators: THREE.Mesh[] = [];
  const validatorAngles: number[] = [];
  const validatorDists: number[] = [];
  const validatorHeights: number[] = [];
  const validatorSpeeds: number[] = [];
  const validatorGeo = new THREE.SphereGeometry(0.12, 12, 12);
  const validatorMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.5,
    depthWrite: true,
  });

  range(VALIDATOR_COUNT).forEach(() => {
    const mesh = new THREE.Mesh(validatorGeo, validatorMat.clone());
    validators.push(mesh);
    validatorAngles.push(randomRange(0, Math.PI * 2));
    validatorDists.push(randomRange(1.5, 2.5));
    validatorHeights.push(randomRange(-1.5, 1.5));
    validatorSpeeds.push(randomRange(0.003, 0.008));
    group.add(mesh);
  });

  // ── Hash particles traveling along chain ──

  const particleGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(PARTICLE_COUNT * 3);
  const pColors = new Float32Array(PARTICLE_COUNT * 3);
  particleGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
  particleGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

  range(PARTICLE_COUNT).forEach((i) => {
    pPositions[i * 3 + 1] = -999;
  });

  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });

  const particlePoints = new THREE.Points(particleGeom, particleMat);
  group.add(particlePoints);

  const hashParticles: HashParticle[] = [];

  const spawnHash = (): void => {
    if (disposed || blocks.length < 2) return;
    const fromBlock = Math.floor(Math.random() * (blocks.length - 1));
    const from = blocks[fromBlock].position.clone();
    from.x += BLOCK_SIZE * 0.55;
    const to = blocks[fromBlock + 1].position.clone();
    to.x -= BLOCK_SIZE * 0.55;

    hashParticles.push({
      from,
      to,
      progress: 0,
      speed: randomRange(0.01, 0.025),
    });
  };

  // ── Update ──

  const update = (time: number, _delta: number, _mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    // Chain wobble
    blocks.forEach((b, i) => {
      b.mesh.position.y = Math.sin(time * 0.8 + i * 0.5) * 0.2;
      b.mesh.rotation.y = Math.sin(time * 0.5 + i * 0.3) * 0.05;
      b.mesh.rotation.x = Math.cos(time * 0.6 + i * 0.4) * 0.03;
    });

    // Mining animation
    miningTimer++;
    if (!mining && miningTimer > 200) {
      mining = true;
      miningTimer = 0;
      miningIdx++;
    }

    if (mining) {
      const idx = miningIdx % BLOCK_COUNT;
      if (blocks[idx]) {
        const flash = Math.sin(miningTimer * 0.4) * clamp01((15 - miningTimer) / 15);
        blocks[idx].mesh.scale.setScalar(1 + flash * 0.15);
        const child0 = blocks[idx].mesh.children[0] as THREE.LineSegments;
        const child0mat = child0.material as THREE.LineBasicMaterial;
        child0mat.opacity = 0.5 + flash * 0.5;
      }
      if (miningTimer > 15) {
        mining = false;
        miningTimer = 0;
        if (blocks[miningIdx % BLOCK_COUNT]) {
          blocks[miningIdx % BLOCK_COUNT].mesh.scale.setScalar(1);
        }
      }
    }

    // Validators orbit
    validators.forEach((v, i) => {
      validatorAngles[i] += validatorSpeeds[i];
      v.position.set(
        Math.cos(validatorAngles[i]) * validatorDists[i],
        validatorHeights[i] + Math.sin(time * 0.7 + i) * 0.5,
        CHAIN_Z_OFFSET_START + (validatorAngles[i] / (Math.PI * 2)) * BLOCK_COUNT * CHAIN_Z_STEP,
      );
    });

    // Spawn hash particles
    if (Math.random() < 0.15) {
      spawnHash();
    }

    // Update hash particles
    const toRemove: number[] = [];
    hashParticles.forEach((p, idx) => {
      p.progress += p.speed;
      if (p.progress >= 1) toRemove.push(idx);
    });
    toRemove.reverse().forEach((idx) => hashParticles.splice(idx, 1));
    while (hashParticles.length > PARTICLE_COUNT) hashParticles.shift();

    range(PARTICLE_COUNT).forEach((i) => {
      if (i < hashParticles.length) {
        const p = hashParticles[i];
        const t = p.progress;
        pPositions[i * 3] = p.from.x + (p.to.x - p.from.x) * t;
        pPositions[i * 3 + 1] = p.from.y + (p.to.y - p.from.y) * t;
        pPositions[i * 3 + 2] = p.from.z + (p.to.z - p.from.z) * t;

        const opacity = Math.sin(t * Math.PI);
        const hex = t < 0.5 ? config.colorScheme.primary : config.colorScheme.secondary;
        pColors[i * 3] = (parseInt(hex.slice(1, 3), 16) / 255) * opacity;
        pColors[i * 3 + 1] = (parseInt(hex.slice(3, 5), 16) / 255) * opacity;
        pColors[i * 3 + 2] = (parseInt(hex.slice(5, 7), 16) / 255) * opacity;
      } else {
        pPositions[i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    void time;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    blockGeo.dispose();
    blockEdgeGeo.dispose();
    blockMat.dispose();
    hashLineMat.dispose();
    validatorGeo.dispose();
    validatorMat.dispose();
    particleGeom.dispose();
    particleMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    blocks.forEach((b) => {
      b.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          (child.material as THREE.MeshBasicMaterial).opacity = (child.material as THREE.MeshBasicMaterial).opacity * t;
        } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
          (child.material as THREE.LineBasicMaterial).opacity = 0.3 * t;
        }
      });
    });
    validators.forEach((v) => {
      (v.material as THREE.MeshBasicMaterial).opacity = 0.5 * t;
    });
    particleMat.opacity = 0.9 * t;
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
