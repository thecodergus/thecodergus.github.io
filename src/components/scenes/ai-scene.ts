// ── AI Scene: 3D Neural Network with forward propagation ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, randomRange, clamp01, smoothstep } from "./math";

// ── Pure configuration ──

const LAYERS = [6, 10, 12, 10, 6] as const;
const LAYER_SPACING_X = 3.0;
const NEURON_RADIUS = 0.18;
const CONNECTION_COUNT = 8; // max connections per neuron to next layer
const PARTICLE_COUNT = 80;
const ACTIVATION_INTERVAL = 30; // frames between new activation waves
const ACTIVATION_BATCH = 3;

// ── Internal mutable state (mutable only during update, not exposed) ──

interface NeuronState {
  charge: number;
  firing: boolean;
  targetCharge: number;
}

// ── Factory ──

export const createAIScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  const neurons: THREE.Mesh[] = [];
  const connections: THREE.Line[] = [];
  const neuronStates: NeuronState[] = [];
  let particles: THREE.Points | null = null;
  let particlePositions: Float32Array | null = null;
  let particleProgress: Float32Array | null = null;
  let frameCount = 0;
  let disposed = false;

  // ── Build neuron layers ──

  const neuronPositions: Readonly<{ x: number; y: number; z: number }>[] = [];
  const neuronColors: string[] = [];

  const neuronGeo = new THREE.SphereGeometry(NEURON_RADIUS, 16, 16);
  const inactiveMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.6,
  });

  LAYERS.forEach((count, layerIdx) => {
    const x = (layerIdx - (LAYERS.length - 1) / 2) * LAYER_SPACING_X;

    range(count).forEach(() => {
      const y = randomRange(-2.5, 2.5);
      const z = randomRange(-1.5, 1.5);
      const pos = Object.freeze({ x, y, z });
      neuronPositions.push(pos);
      neuronColors.push(config.colorScheme.tertiary);

      const mesh = new THREE.Mesh(neuronGeo, inactiveMat.clone());
      mesh.position.set(x, y, z);
      mesh.userData = { index: neurons.length };
      neurons.push(mesh);
      group.add(mesh);
    });
  });

  // Initialize states
  range(neurons.length).forEach(() => {
    neuronStates.push({ charge: 0, firing: false, targetCharge: 0 });
  });

  // ── Build connections between adjacent layers ──

  const layerStartIndices: readonly number[] = (() => {
    let offset = 0;
    return LAYERS.map((c) => {
      const start = offset;
      offset += c;
      return start;
    });
  })();

  const connectionPairs: readonly (readonly [number, number])[] = (() => {
    const pairs: [number, number][] = [];

    range(LAYERS.length - 1).forEach((layerIdx) => {
      const fromStart = layerStartIndices[layerIdx];
      const fromEnd = layerStartIndices[layerIdx + 1];
      const toStart = fromEnd;
      const toEnd = layerStartIndices[layerIdx + 2] ?? layerStartIndices[layerIdx + 1] + LAYERS[layerIdx + 1];

      const fromCount = fromEnd - fromStart;
      const toCount = toEnd - toStart;

      const fromIndices = range(fromCount).map((i) => fromStart + i);
      const shuffledTo = range(toCount).map((i) => toStart + i).sort(() => Math.random() - 0.5);

      fromIndices.forEach((fromIdx) => {
        const connCount = Math.floor(randomRange(3, CONNECTION_COUNT));
        const targets = shuffledTo.slice(0, connCount);
        targets.forEach((toIdx) => {
          pairs.push([fromIdx, toIdx] as const);
        });
      });
    });

    return pairs;
  })();

  const lineMaterial = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.15,
    depthWrite: false,
  });

  connectionPairs.forEach(([fromIdx, toIdx]) => {
    const from = neuronPositions[fromIdx];
    const to = neuronPositions[toIdx];
    const points = [new THREE.Vector3(from.x, from.y, from.z), new THREE.Vector3(to.x, to.y, to.z)];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geo, lineMaterial.clone());
    connections.push(line);
    group.add(line);
  });

  // ── Activation particles (Points + ShaderMaterial) ──

  const particleCount = PARTICLE_COUNT;
  const particleGeom = new THREE.BufferGeometry();
  particlePositions = new Float32Array(particleCount * 3);
  particleProgress = new Float32Array(particleCount);
  const particleColors = new Float32Array(particleCount * 3);

  // Initialize as invisible
  range(particleCount).forEach((i) => {
    particlePositions![i * 3] = 0;
    particlePositions![i * 3 + 1] = -999;
    particlePositions![i * 3 + 2] = -999;
    particleProgress![i] = -1;
    particleColors[i * 3] = 0;
    particleColors[i * 3 + 1] = 0;
    particleColors[i * 3 + 2] = 0;
  });

  particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 1,
  });

  particles = new THREE.Points(particleGeom, particleMat);
  group.add(particles);

  // ── Particle tracking ──

  interface ParticleData {
    connectionIdx: number;
    progress: number;
    speed: number;
  }

  const activeParticles: ParticleData[] = [];

  const spawnActivationParticle = (): void => {
    if (disposed) return;

    // Pick random connection in first layer
    const firstLayerConns = connectionPairs
      .filter(([from]) => from < LAYERS[0])
      .map((pair, idx) => ({ pair, globalIdx: idx }));

    if (firstLayerConns.length === 0) return;

    const { pair, globalIdx } = firstLayerConns[Math.floor(Math.random() * firstLayerConns.length)];

    activeParticles.push({
      connectionIdx: globalIdx,
      progress: 0,
      speed: randomRange(0.008, 0.018),
    });
  };

  // ── Update ──

  const update = (time: number, _delta: number, mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    frameCount++;

    // Spawn activation waves periodically
    if (frameCount % ACTIVATION_INTERVAL < ACTIVATION_BATCH) {
      spawnActivationParticle();
    }

    // Update neuron states (decay charge)
    range(neurons.length).forEach((i) => {
      const state = neuronStates[i];
      state.charge = state.charge * 0.95 + state.targetCharge * 0.05;
      state.targetCharge *= 0.9;
      state.firing = state.charge > 0.3;

      // Update color based on charge
      const mat = neurons[i].material as THREE.MeshBasicMaterial;
      const t = clamp01(state.charge);
      const r = parseInt(config.colorScheme.tertiary.slice(1, 3), 16) / 255;
      const g = parseInt(config.colorScheme.tertiary.slice(3, 5), 16) / 255;
      const b = parseInt(config.colorScheme.tertiary.slice(5, 7), 16) / 255;
      const sr = parseInt(config.colorScheme.secondary.slice(1, 3), 16) / 255;
      const sg = parseInt(config.colorScheme.secondary.slice(3, 5), 16) / 255;
      const sb = parseInt(config.colorScheme.secondary.slice(5, 7), 16) / 255;

      mat.color.setRGB(
        r + (sr - r) * t,
        g + (sg - g) * t,
        b + (sb - b) * t,
      );
      mat.opacity = 0.4 + t * 0.6;
    });

    // Update activation particles
    const toRemove: number[] = [];

    activeParticles.forEach((p, idx) => {
      p.progress += p.speed;

      if (p.progress >= 1) {
        toRemove.push(idx);
        // Flash the target neuron
        const [_, toIdx] = connectionPairs[p.connectionIdx];
        if (toIdx < neuronStates.length) {
          neuronStates[toIdx].targetCharge = 1;
        }
      }
    });

    // Remove in reverse order
    toRemove.reverse().forEach((idx) => activeParticles.splice(idx, 1));

    // Cap active particles
    while (activeParticles.length > PARTICLE_COUNT) {
      activeParticles.shift();
    }

    // Update particle buffer
    range(particleCount).forEach((i) => {
      if (i < activeParticles.length) {
        const p = activeParticles[i];
        if (p.connectionIdx < connectionPairs.length) {
          const [fromIdx, toIdx] = connectionPairs[p.connectionIdx];
          const from = neuronPositions[fromIdx];
          const to = neuronPositions[toIdx];

          const t = p.progress;
          const glowT = smoothstep(0, 0.3, t) * (1 - smoothstep(0.7, 1, t));

          particlePositions![i * 3] = from.x + (to.x - from.x) * t;
          particlePositions![i * 3 + 1] = from.y + (to.y - from.y) * t;
          particlePositions![i * 3 + 2] = from.z + (to.z - from.z) * t;
          particleProgress![i] = t;

          const pr = parseInt(config.colorScheme.primary.slice(1, 3), 16) / 255;
          const pg = parseInt(config.colorScheme.primary.slice(3, 5), 16) / 255;
          const pb = parseInt(config.colorScheme.primary.slice(5, 7), 16) / 255;
          const sr = parseInt(config.colorScheme.secondary.slice(1, 3), 16) / 255;
          const sg = parseInt(config.colorScheme.secondary.slice(3, 5), 16) / 255;
          const sb = parseInt(config.colorScheme.secondary.slice(5, 7), 16) / 255;

          const cr = pr + (sr - pr) * t;
          const cg = pg + (sg - pg) * t;
          const cb = pb + (sb - pb) * t;

          const ci = i * 3;
          (particleGeom.attributes.color as THREE.BufferAttribute).array[ci] = cr * glowT;
          (particleGeom.attributes.color as THREE.BufferAttribute).array[ci + 1] = cg * glowT;
          (particleGeom.attributes.color as THREE.BufferAttribute).array[ci + 2] = cb * glowT;
        } else {
          particlePositions![i * 3 + 1] = -999;
        }
      } else {
        particlePositions![i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    // Mouse parallax
    if (mouse) {
      group.rotation.y += (mouse.x * 0.3 - group.rotation.y) * 0.02;
      group.rotation.x += (-mouse.y * 0.15 - group.rotation.x) * 0.02;
    }

    void time;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    neurons.forEach((m) => {
      (m.material as THREE.Material).dispose();
    });
    connections.forEach((l) => {
      l.geometry.dispose();
      (l.material as THREE.Material).dispose();
    });
    if (particles) {
      particles.geometry.dispose();
      (particles.material as THREE.Material).dispose();
    }
    neuronGeo.dispose();
    lineMaterial.dispose();
    group.clear();
  };

  // ── Opacity ──

  const setOpacity = (t: number): void => {
    neurons.forEach((m) => {
      (m.material as THREE.MeshBasicMaterial).opacity = 0.6 * t;
    });
    connections.forEach((l) => {
      (l.material as THREE.LineBasicMaterial).opacity = 0.15 * t;
    });
    if (particles) {
      (particles.material as THREE.PointsMaterial).opacity = t;
    }
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
  };
};
