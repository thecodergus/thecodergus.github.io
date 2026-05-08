// ── Blockchain Scene: dynamic chain + consensus checking ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig, CameraState } from "../../engine/types";
import { range, randomRange, clamp01 } from "../../engine/math";
import { ChainPhase } from "./types";
import type { BlockData, ChainLink, HashParticle } from "./types";

// ── Configuration ──

const BLOCK_SIZE = 1.2;
const CHAIN_Z_START = -4;
const CHAIN_Z_STEP = 1.6;
const VALIDATOR_COUNT = 12;
const PARTICLE_COUNT = 50;

const INITIAL_BLOCKS = 3;
const MAX_BLOCKS = 12;
const STARTUP_ORBIT_MS = 3000;
const CHECK_PER_BLOCK_MS = 1200;
const TRANSITION_MS = 400;
const WAIT_MS = 5000;
const BLOCK_ADD_MS = 800;
const GLOW_RADIUS = 1.4;
const CHECK_RADIUS = 7.0;
const CHECK_HEIGHT = 1.5;
const INITIAL_ANGLE = Math.PI / 4;

// ── Canvas glow texture ──

const createGlowTexture = (): THREE.CanvasTexture => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255, 179, 71, 1)");
  gradient.addColorStop(0.12, "rgba(255, 179, 71, 0.7)");
  gradient.addColorStop(0.35, "rgba(255, 160, 30, 0.25)");
  gradient.addColorStop(0.7, "rgba(247, 147, 26, 0.04)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
};

// ── Merkle tree factory ──

const createMerkleTree = (colorScheme: { readonly secondary: string }): THREE.Group => {
  const group = new THREE.Group();
  const leafCount = 4;
  const merkleGeo = new THREE.SphereGeometry(0.08, 8, 8);
  const merkleMat = new THREE.MeshBasicMaterial({
    color: colorScheme.secondary,
    transparent: true,
    opacity: 0.7,
  });

  const nodes: { mesh: THREE.Mesh; position: THREE.Vector3 }[] = [];

  range(leafCount).forEach((leaf) => {
    const leafX = (leaf - leafCount / 2 + 0.5) * (BLOCK_SIZE * 0.25);
    const mesh = new THREE.Mesh(merkleGeo, merkleMat.clone());
    mesh.position.set(leafX, -BLOCK_SIZE * 0.28, 0);
    group.add(mesh);
    nodes.push({ mesh, position: mesh.position.clone() });
  });

  range(2).forEach((mid) => {
    const mesh = new THREE.Mesh(merkleGeo, merkleMat.clone());
    mesh.position.set((mid - 0.5) * BLOCK_SIZE * 0.35, 0, 0);
    group.add(mesh);
    nodes.push({ mesh, position: mesh.position.clone() });
  });

  const root = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 8, 8),
    new THREE.MeshBasicMaterial({
      color: colorScheme.secondary,
      transparent: true,
      opacity: 0.9,
    }),
  );
  root.position.set(0, BLOCK_SIZE * 0.28, 0);
  group.add(root);
  nodes.push({ mesh: root, position: root.position.clone() });

  // Connecting lines
  const lineMat = new THREE.LineBasicMaterial({
    color: colorScheme.secondary,
    transparent: true,
    opacity: 0.25,
    depthWrite: false,
  });

  range(leafCount).forEach((leaf) => {
    const midIdx = leafCount + Math.floor(leaf / 2);
    if (midIdx < nodes.length) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        nodes[leaf].position,
        nodes[midIdx].position,
      ]);
      group.add(new THREE.Line(geo, lineMat.clone()));
    }
  });

  range(2).forEach((mid) => {
    const midIdx = leafCount + mid;
    const rootIdx = nodes.length - 1;
    if (midIdx < nodes.length) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        nodes[midIdx].position,
        nodes[rootIdx].position,
      ]);
      group.add(new THREE.Line(geo, lineMat.clone()));
    }
  });

  return group;
};

// ── Block factory ──

const createBlock = (
  index: number,
  z: number,
  cs: { readonly primary: string; readonly secondary: string },
): { block: THREE.Group; fillMat: THREE.MeshBasicMaterial; edgeMat: THREE.LineBasicMaterial } => {
  const blockGeo = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  const blockEdgeGeo = new THREE.EdgesGeometry(blockGeo);

  const blockGroup = new THREE.Group();

  const edgeMat = new THREE.LineBasicMaterial({
    color: cs.primary,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });
  blockGroup.add(new THREE.LineSegments(blockEdgeGeo, edgeMat));

  const fillMat = new THREE.MeshBasicMaterial({
    color: cs.primary,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });
  blockGroup.add(new THREE.Mesh(blockGeo, fillMat));

  const merkleTree = createMerkleTree(cs);
  blockGroup.add(merkleTree);

  blockGroup.position.set(0, 0, z);

  return { block: blockGroup, fillMat, edgeMat };
};

// ── Chain link factory ──

const createChainLink = (
  from: THREE.Vector3,
  to: THREE.Vector3,
  color: string,
): { line: THREE.Line; material: THREE.LineBasicMaterial } => {
  const f = from.clone();
  f.x += BLOCK_SIZE * 0.55;
  const t = to.clone();
  t.x -= BLOCK_SIZE * 0.55;

  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });

  const geo = new THREE.BufferGeometry().setFromPoints([f, t]);
  const line = new THREE.Line(geo, material);

  return { line, material };
};

// ── Scene factory ──

export const createBlockchainScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  const cs = config.colorScheme;
  let disposed = false;

  // ── Shared geometry ──

  const validatorGeo = new THREE.SphereGeometry(0.12, 12, 12);
  const validatorMat = new THREE.MeshBasicMaterial({
    color: cs.tertiary,
    transparent: true,
    opacity: 0.5,
    depthWrite: true,
  });

  // ── Glow sprite ──

  const glowTex = createGlowTexture();
  const glowMat = new THREE.SpriteMaterial({
    map: glowTex,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    depthTest: false,
  });
  const glowSprite = new THREE.Sprite(glowMat);
  glowSprite.scale.set(GLOW_RADIUS, GLOW_RADIUS, 1);
  glowSprite.position.set(-999, -999, -999);
  group.add(glowSprite);

  // ── Blocks (dynamic) ──

  const blocks: BlockData[] = [];
  const chainLinks: ChainLink[] = [];

  const addBlock = (index: number, z: number): BlockData => {
    const { block, fillMat, edgeMat } = createBlock(index, z, cs);
    group.add(block);

    const pos = new THREE.Vector3(0, 0, z);
    const bd: BlockData = {
      mesh: block,
      fillMaterial: fillMat,
      edgeMaterial: edgeMat,
      position: pos,
      index,
    };
    blocks.push(bd);

    if (index > 0 && blocks[index - 1]) {
      const { line, material } = createChainLink(blocks[index - 1].position, pos, cs.primary);
      chainLinks.push({ line, material, fromIdx: index - 1, toIdx: index });
      group.add(line);
    }

    return bd;
  };

  range(INITIAL_BLOCKS).forEach((i) => {
    addBlock(i, CHAIN_Z_START + i * CHAIN_Z_STEP);
  });

  // ── Validators ──

  const validators: THREE.Mesh[] = [];
  const validatorAngles: number[] = [];
  const validatorDists: number[] = [];
  const validatorHeights: number[] = [];
  const validatorSpeeds: number[] = [];

  range(VALIDATOR_COUNT).forEach(() => {
    const mesh = new THREE.Mesh(validatorGeo, validatorMat.clone());
    validators.push(mesh);
    validatorAngles.push(randomRange(0, Math.PI * 2));
    validatorDists.push(randomRange(1.5, 2.5));
    validatorHeights.push(randomRange(-1.5, 1.5));
    validatorSpeeds.push(randomRange(0.003, 0.008));
    group.add(mesh);
  });

  // ── Hash particles ──

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

  // ── State machine ──

  let phase: ChainPhase = ChainPhase.Orbiting;
  let checkIndex = 0;
  let phaseTimer = 0; // ms
  let totalElapsed = 0; // ms
  let nextBlockZ = CHAIN_Z_START + INITIAL_BLOCKS * CHAIN_Z_STEP;
  let nextBlockIndex = INITIAL_BLOCKS;

  const _tmpVec3 = new THREE.Vector3();

  // ── Camera state getter ──

  const getCameraState = (): CameraState | null => {
    if (phase !== ChainPhase.Checking) return null;
    const block = blocks[checkIndex];
    if (!block) return null;
    const pos = block.position.clone();
    pos.y += 0;
    const cameraPos = new THREE.Vector3(
      Math.sin(INITIAL_ANGLE) * CHECK_RADIUS,
      CHECK_HEIGHT,
      pos.z + Math.cos(INITIAL_ANGLE) * CHECK_RADIUS,
    );
    return { position: cameraPos, lookAt: pos.clone(), lerpFactor: 4 };
  };

  // ── Update ──

  const update = (time: number, _deltaRaw: number, _mouse: unknown): void => {
    if (disposed) return;

    const deltaMs = Math.min(_deltaRaw * 1000, 50);
    totalElapsed += deltaMs;
    phaseTimer += deltaMs;

    // ── Chain wobble ──

    blocks.forEach((b, i) => {
      b.mesh.position.y = Math.sin(time * 0.8 + i * 0.5) * 0.2;
      b.mesh.rotation.y = Math.sin(time * 0.5 + i * 0.3) * 0.05;
      b.mesh.rotation.x = Math.cos(time * 0.6 + i * 0.4) * 0.03;
    });

    // ── Validators orbit ──

    validators.forEach((v, i) => {
      validatorAngles[i] += validatorSpeeds[i];
      v.position.set(
        Math.cos(validatorAngles[i]) * validatorDists[i],
        validatorHeights[i] + Math.sin(time * 0.7 + i) * 0.5,
        CHAIN_Z_START + (validatorAngles[i] / (Math.PI * 2)) * blocks.length * CHAIN_Z_STEP,
      );
    });

    // ── Hash particles ──

    if (Math.random() < 0.15) spawnHash();

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
        const hex = t < 0.5 ? cs.primary : cs.secondary;
        pColors[i * 3] = (parseInt(hex.slice(1, 3), 16) / 255) * opacity;
        pColors[i * 3 + 1] = (parseInt(hex.slice(3, 5), 16) / 255) * opacity;
        pColors[i * 3 + 2] = (parseInt(hex.slice(5, 7), 16) / 255) * opacity;
      } else {
        pPositions[i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    // ── Phase machine ──

    const transitionTo = (next: ChainPhase): void => {
      // Exit current phase
      if (phase === ChainPhase.Checking) {
        glowMat.opacity = 0;
        const prev = blocks[checkIndex];
        if (prev) {
          prev.fillMaterial.opacity = 0.12;
          prev.edgeMaterial.opacity = 0.5;
          prev.mesh.scale.setScalar(1);
        }
      }
      phase = next;
      phaseTimer = 0;
    };

    switch (phase) {
      case ChainPhase.Orbiting: {
        if (phaseTimer >= STARTUP_ORBIT_MS || totalElapsed >= STARTUP_ORBIT_MS) {
          checkIndex = 0;
          transitionTo(ChainPhase.Checking);
        }
        break;
      }

      case ChainPhase.Checking: {
        const block = blocks[checkIndex];
        if (!block) {
          transitionTo(ChainPhase.Waiting);
          break;
        }

        const localT = phaseTimer;
        const totalPerBlock = CHECK_PER_BLOCK_MS + TRANSITION_MS;

        // Glow and scale animation
        const brighten = clamp01(localT / 200); // 0→1 over 200ms
        const sustain = localT > 200 && localT < CHECK_PER_BLOCK_MS;
        const dim = localT >= CHECK_PER_BLOCK_MS && localT < totalPerBlock;
        const dimT = dim ? 1 - clamp01((localT - CHECK_PER_BLOCK_MS) / TRANSITION_MS) : 0;
        const glowF = sustain ? 1 : brighten * (1 - dimT);

        block.fillMaterial.opacity = 0.12 + glowF * 0.38;
        block.edgeMaterial.opacity = 0.5 + glowF * 0.5;
        block.mesh.scale.setScalar(1 + glowF * 0.15);

        // Glow sprite follows block
        block.mesh.getWorldPosition(_tmpVec3);
        glowSprite.position.set(_tmpVec3.x, _tmpVec3.y, _tmpVec3.z);
        glowSprite.position.z += 0.1;
        glowMat.opacity = glowF * 0.35;

        // Transition to next block
        if (localT >= totalPerBlock) {
          block.fillMaterial.opacity = 0.12;
          block.edgeMaterial.opacity = 0.5;
          block.mesh.scale.setScalar(1);

          checkIndex++;
          phaseTimer = 0;

          if (checkIndex >= blocks.length) {
            glowMat.opacity = 0;
            transitionTo(ChainPhase.Waiting);
          } else {
            glowMat.opacity = 0;
          }
        }
        break;
      }

      case ChainPhase.Waiting: {
        glowMat.opacity = 0;
        if (phaseTimer >= WAIT_MS) {
          transitionTo(ChainPhase.AddingBlock);
        }
        break;
      }

      case ChainPhase.AddingBlock: {
        if (nextBlockIndex >= MAX_BLOCKS) {
          // Reset cycle
          nextBlockIndex = INITIAL_BLOCKS;
          nextBlockZ = CHAIN_Z_START + INITIAL_BLOCKS * CHAIN_Z_STEP;

          // Remove blocks beyond initial
          while (blocks.length > INITIAL_BLOCKS) {
            const removed = blocks.pop()!;
            group.remove(removed.mesh);
            removed.mesh.traverse((child) => {
              if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
                child.geometry.dispose();
                (child.material as THREE.Material).dispose();
              }
            });
          }

          // Remove extra chain links
          while (chainLinks.length > INITIAL_BLOCKS - 1) {
            const removed = chainLinks.pop()!;
            group.remove(removed.line);
            removed.line.geometry.dispose();
            removed.material.dispose();
          }

          transitionTo(ChainPhase.Orbiting);
          break;
        }

        // Animate new block scaling up
        const addT = clamp01(phaseTimer / BLOCK_ADD_MS);

        // Create block at start of phase timer
        if (phaseTimer <= deltaMs + 5) {
          addBlock(nextBlockIndex, nextBlockZ);
          const newest = blocks[blocks.length - 1];
          newest.mesh.scale.setScalar(0.01);
          newest.fillMaterial.opacity = 0;
          newest.edgeMaterial.opacity = 0;
        }

        const newest = blocks[blocks.length - 1];
        if (newest && newest.index === nextBlockIndex) {
          newest.mesh.scale.setScalar(clamp01(addT));
          newest.fillMaterial.opacity = clamp01(addT) * 0.12;
          newest.edgeMaterial.opacity = clamp01(addT) * 0.5;
        }

        if (phaseTimer >= BLOCK_ADD_MS) {
          nextBlockIndex++;
          nextBlockZ += CHAIN_Z_STEP;
          checkIndex = 0;
          transitionTo(ChainPhase.Checking);
        }
        break;
      }
    }

    void _mouse;
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
      } else if (child instanceof THREE.Sprite) {
        const m = child.material as THREE.SpriteMaterial;
        if (m.map) m.map.dispose();
        m.dispose();
      }
    });
    validatorGeo.dispose();
    validatorMat.dispose();
    particleGeom.dispose();
    particleMat.dispose();
    glowTex.dispose();
    glowMat.dispose();
    group.clear();
  };

  // ── SetOpacity ──

  const setOpacity = (t: number): void => {
    const setMaterialOpacity = (mat: THREE.Material): void => {
      const basicMat = mat as THREE.MeshBasicMaterial;
      if (basicMat.userData._baseOpacity === undefined) {
        basicMat.userData._baseOpacity = basicMat.opacity;
      }
      basicMat.opacity = (basicMat.userData._baseOpacity as number) * t;
    };
    blocks.forEach((b) => {
      b.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          setMaterialOpacity(child.material as THREE.MeshBasicMaterial);
        } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
          setMaterialOpacity(child.material as THREE.LineBasicMaterial);
        }
      });
    });
    validators.forEach((v) => {
      setMaterialOpacity(v.material as THREE.MeshBasicMaterial);
    });
    chainLinks.forEach((cl) => {
      setMaterialOpacity(cl.material);
    });
    setMaterialOpacity(particleMat);
  };

  // ── Dissolve ──

  const dissolve = (_progress: number): void => {
    setOpacity(1 - clamp01(_progress));
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
    getCameraState,
    dissolve,
  };
};
