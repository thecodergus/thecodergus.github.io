// ── AI Scene 2.0: Deep Feedforward Neural Network ──
//
// 9 layers arranged in a 3D conical layout:
//   Input (wide circle) → Hidden layers → Output (narrow circle)
//
// 12 visual effects: forward pass waves, backpropagation, dropout,
// normalization ripples, attention matrix, activation arcs, loss chart,
// neuron spike rings, weight color coding, gradient norm bar,
// data manifold, slow camera orbit (managed by NeuralCanvas).
//
// Tensor-based luminosity: sigmoid forward pass drives
// neuron glow (activation-mapped) and edge brightness
// (weight × source activation), refreshed every ~0.6s.
//
// Performance: 44 neurons via InstancedMesh (1 draw call),
// 198 connections via LineSegments with vertex colors (1 draw call),
// 165 particles via 2 Points objects (2 draw calls).

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "../../engine/types";
import { range, rangeBetween, randomRange, clamp01, easeInOutCubic, easeOutQuad } from "../../engine/math";
import type { LayerDef, FlowParticle, SpikeRing, DropoutState } from "./types";

const LAYERS: readonly LayerDef[] = Object.freeze([
  { count:  7, z: -10.5, radius: 7.5, color: "#8B5CF6", hasRipple: false },  // Input (purple)
  { count:  6, z:  -6.6, radius: 6.3, color: "#00E5FF", hasRipple: false },  // H1 (cyan)
  { count:  6, z:  -3.0, radius: 5.1, color: "#00E5FF", hasRipple: true  },  // H2 (cyan) ★ ripple
  { count:  6, z:   0.3, radius: 3.9, color: "#00E5FF", hasRipple: false },  // H3 (cyan)
  { count:  4, z:   3.0, radius: 3.0, color: "#F5C842", hasRipple: false },  // Attention (yellow)
  { count:  4, z:   5.4, radius: 2.4, color: "#10A37F", hasRipple: true  },  // H4 (green) ★ ripple
  { count:  4, z:   7.5, radius: 1.8, color: "#10A37F", hasRipple: false },  // H5 (green)
  { count:  4, z:   9.3, radius: 1.5, color: "#10A37F", hasRipple: true  },  // H6 (green) ★ ripple
  { count:  3, z:  11.1, radius: 0.9, color: "#8B5CF6", hasRipple: false },  // Output (purple)
]);

const TOTAL_LAYERS = LAYERS.length;
const TOTAL_NEURONS = LAYERS.reduce((s, l) => s + l.count, 0);

// Pre-compute neuron start indices per layer
const LAYER_STARTS: readonly number[] = Object.freeze(
  (() => {
    const arr: number[] = [];
    let sum = 0;
    for (const l of LAYERS) { arr.push(sum); sum += l.count; }
    return arr;
  })(),
);

// Total connections (all-to-all between adjacent layers)
const TOTAL_EDGES = (() => {
  let e = 0;
  for (let i = 0; i < TOTAL_LAYERS - 1; i++) {
    e += LAYERS[i].count * LAYERS[i + 1].count;
  }
  return e;
})();

// Pre-compute edge start indices per layer pair
const EDGE_BASES: readonly number[] = Object.freeze(
  (() => {
    const arr: number[] = [];
    let base = 0;
    for (let l = 0; l < TOTAL_LAYERS - 1; l++) {
      arr.push(base);
      base += LAYERS[l].count * LAYERS[l + 1].count;
    }
    return arr;
  })(),
);

// ── Particle constants ──

const FORWARD_PARTICLES = 125;
const BACKWARD_PARTICLES = 40;
const SPIKE_RING_POOL = 20;
const ATTENTION_MATRIX_SIZE = 4;

// ── Helper: compute neuron world position ──

const neuronPosition = (layerIdx: number, neuronIdx: number): readonly [number, number, number] => {
  const layer = LAYERS[layerIdx];
  const angle = (neuronIdx / layer.count) * Math.PI * 2;
  return [Math.cos(angle) * layer.radius, Math.sin(angle) * layer.radius, layer.z];
};

const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));

// ── Factory ──

export const createAIScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ═══════════════════════════════════════════
  // LAYOUT: Neuron positions
  // ═══════════════════════════════════════════

  const nPositions: THREE.Vector3[] = [];
  for (let l = 0; l < TOTAL_LAYERS; l++) {
    for (let n = 0; n < LAYERS[l].count; n++) {
      const [x, y, z] = neuronPosition(l, n);
      nPositions.push(new THREE.Vector3(x, y, z));
    }
  }

  // ── Neuron activation state (tensor model) ──

  const neuronActivations = new Float32Array(TOTAL_NEURONS);
  const neuronBiases = new Float32Array(TOTAL_NEURONS);
  for (let i = 0; i < TOTAL_NEURONS; i++) {
    neuronActivations[i] = randomRange(0.1, 0.9);
    neuronBiases[i] = randomRange(-0.3, 0.3);
  }

  const runForwardPass = (): void => {
    for (let l = 1; l < TOTAL_LAYERS; l++) {
      const fromStart = LAYER_STARTS[l - 1];
      const toStart = LAYER_STARTS[l];
      const fromCount = LAYERS[l - 1].count;
      const toCount = LAYERS[l].count;
      const edgeBase = EDGE_BASES[l - 1];

      for (let t = 0; t < toCount; t++) {
        let z = neuronBiases[toStart + t];
        for (let f = 0; f < fromCount; f++) {
          const ei = edgeBase + f * toCount + t;
          z += edgeWeights[ei] * neuronActivations[fromStart + f];
        }
        neuronActivations[toStart + t] = sigmoid(z);
      }
    }
  };

  // ═══════════════════════════════════════════
  // E1+E9: NEURONS (InstancedMesh) + Weight coding
  // ═══════════════════════════════════════════

  const neuronGeo = new THREE.IcosahedronGeometry(0.16, 1);
  const neuronMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.92,
    depthWrite: true,
  });
  const neurons = new THREE.InstancedMesh(neuronGeo, neuronMat, TOTAL_NEURONS);

  const dummy = new THREE.Object3D();
  const nColor = new THREE.Color();
  const neuronBaseColors: Float32Array = new Float32Array(TOTAL_NEURONS * 3);

  for (let i = 0; i < TOTAL_NEURONS; i++) {
    const pos = nPositions[i];
    dummy.position.copy(pos);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    neurons.setMatrixAt(i, dummy.matrix);

    // Find which layer this neuron belongs to
    let layerIdx = 0;
    while (layerIdx < TOTAL_LAYERS - 1 && i >= LAYER_STARTS[layerIdx + 1]) layerIdx++;

    nColor.set(LAYERS[layerIdx].color);
    neurons.setColorAt(i, nColor);
    neuronBaseColors[i * 3] = nColor.r;
    neuronBaseColors[i * 3 + 1] = nColor.g;
    neuronBaseColors[i * 3 + 2] = nColor.b;
  }
  neurons.instanceMatrix.needsUpdate = true;
  if (neurons.instanceColor) neurons.instanceColor.needsUpdate = true;
  group.add(neurons);

  // ═══════════════════════════════════════════
  // CONNECTIONS: All-to-all LineSegments with weight vertex colors
  // ═══════════════════════════════════════════

  const edgePositions = new Float32Array(TOTAL_EDGES * 2 * 3);
  const edgeColors = new Float32Array(TOTAL_EDGES * 2 * 3);
  const edgeWeights: number[] = [];

  let edgeIdx = 0;
  for (let l = 0; l < TOTAL_LAYERS - 1; l++) {
    const fromLayer = LAYERS[l];
    const toLayer = LAYERS[l + 1];
    const fromStart = LAYER_STARTS[l];
    const toStart = LAYER_STARTS[l + 1];

    for (let f = 0; f < fromLayer.count; f++) {
      for (let t = 0; t < toLayer.count; t++) {
        const weight = randomRange(0.1, 1.0);
        edgeWeights.push(weight);

        const fromPos = nPositions[fromStart + f];
        const toPos = nPositions[toStart + t];

        const vi = edgeIdx * 6;
        edgePositions[vi] = fromPos.x;
        edgePositions[vi + 1] = fromPos.y;
        edgePositions[vi + 2] = fromPos.z;
        edgePositions[vi + 3] = toPos.x;
        edgePositions[vi + 4] = toPos.y;
        edgePositions[vi + 5] = toPos.z;

        // Tensor brightness: weight × source activation (dot-product contribution)
        const activation = neuronActivations[fromStart + f];
        const brightness = 0.05 + activation * weight * 0.35;
        edgeColors[vi] = brightness;
        edgeColors[vi + 1] = brightness;
        edgeColors[vi + 2] = brightness;
        edgeColors[vi + 3] = brightness;
        edgeColors[vi + 4] = brightness;
        edgeColors[vi + 5] = brightness;

        edgeIdx++;
      }
    }
  }

  const edgeGeo = new THREE.BufferGeometry();
  edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
  edgeGeo.setAttribute("color", new THREE.BufferAttribute(edgeColors, 3));

  const edgeMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
  group.add(edgeLines);

  // ═══════════════════════════════════════════
  // E1: FORWARD PASS PARTICLES
  // ═══════════════════════════════════════════

  const fwdGeo = new THREE.BufferGeometry();
  const fwdPositions = new Float32Array(FORWARD_PARTICLES * 3);
  const fwdColors = new Float32Array(FORWARD_PARTICLES * 3);
  fwdGeo.setAttribute("position", new THREE.BufferAttribute(fwdPositions, 3));
  fwdGeo.setAttribute("color", new THREE.BufferAttribute(fwdColors, 3));

  const fwdMat = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });
  const fwdPoints = new THREE.Points(fwdGeo, fwdMat);
  group.add(fwdPoints);

  const fwdParticles: FlowParticle[] = [];

  const spawnFwd = (): void => {
    if (disposed) return;
    const fromLayer = Math.floor(Math.random() * (TOTAL_LAYERS - 1));
    const fromCount = LAYERS[fromLayer].count;
    const toCount = LAYERS[fromLayer + 1].count;
    fwdParticles.push({
      fromLayer,
      fromNeuron: Math.floor(Math.random() * fromCount),
      toLayer: fromLayer + 1,
      toNeuron: Math.floor(Math.random() * toCount),
      progress: 0,
      speed: randomRange(0.018, 0.066),
    });
  };

  // Initialize pool
  for (let i = 0; i < FORWARD_PARTICLES; i++) {
    fwdPositions[i * 3 + 1] = -999;
    spawnFwd();
  }

  // ═══════════════════════════════════════════
  // E2: BACKPROPAGATION PARTICLES
  // ═══════════════════════════════════════════

  const bwdGeo = new THREE.BufferGeometry();
  const bwdPositions = new Float32Array(BACKWARD_PARTICLES * 3);
  const bwdColors = new Float32Array(BACKWARD_PARTICLES * 3);
  bwdGeo.setAttribute("position", new THREE.BufferAttribute(bwdPositions, 3));
  bwdGeo.setAttribute("color", new THREE.BufferAttribute(bwdColors, 3));

  const bwdMat = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.8,
  });
  const bwdPoints = new THREE.Points(bwdGeo, bwdMat);
  group.add(bwdPoints);

  const bwdParticles: FlowParticle[] = [];
  let backpropActive = false;
  let backpropTimer = 0;
  let backpropPhase = 0; // 0=forward, 1=backward, 2=pause
  let phaseTimer = 2.5;

  const spawnBwd = (): void => {
    if (disposed) return;
    const toLayer = Math.floor(Math.random() * (TOTAL_LAYERS - 1)) + 1; // 1..last
    const fromCount = LAYERS[toLayer].count;
    const toCount = LAYERS[toLayer - 1].count;
    bwdParticles.push({
      fromLayer: toLayer,
      fromNeuron: Math.floor(Math.random() * fromCount),
      toLayer: toLayer - 1,
      toNeuron: Math.floor(Math.random() * toCount),
      progress: 0,
      speed: randomRange(0.024, 0.075),
    });
  };

  // Initialize empty
  for (let i = 0; i < BACKWARD_PARTICLES; i++) {
    bwdPositions[i * 3 + 1] = -999;
  }

  // ═══════════════════════════════════════════
  // E3: DROPOUT STATE
  // ═══════════════════════════════════════════

  const dropout: DropoutState = {
    dropped: new Set(),
    epochTimer: 3.0,
    epochDuration: 3.0,
  };

  const applyDropout = (): void => {
    dropout.dropped.clear();
    const dropCount = Math.floor(TOTAL_NEURONS * 0.15);
    const candidates = range(TOTAL_NEURONS);
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    for (let i = 0; i < dropCount; i++) {
      dropout.dropped.add(shuffled[i]);
    }
  };

  // ═══════════════════════════════════════════
  // E4: NORMALIZATION RIPPLES
  // ═══════════════════════════════════════════

  const ripples: { ring: THREE.Mesh; material: THREE.MeshBasicMaterial; layerIdx: number }[] = [];
  LAYERS.forEach((layer, idx) => {
    if (!layer.hasRipple) return;
    const ringGeo = new THREE.TorusGeometry(layer.radius + 0.7, 0.05, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: "#00E5FF",
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.z = layer.z;
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    ripples.push({ ring, material: ringMat, layerIdx: idx });
  });

  // ═══════════════════════════════════════════
  // E5: ATTENTION MATRIX
  // ═══════════════════════════════════════════

  const attnCells = ATTENTION_MATRIX_SIZE * ATTENTION_MATRIX_SIZE;
  const attnGeo = new THREE.BoxGeometry(0.12, 0.12, 0.03);
  const attnMat = new THREE.MeshBasicMaterial({
    color: "#F5C842",
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  });
  const attnMesh = new THREE.InstancedMesh(attnGeo, attnMat, attnCells);
  const attnDummy = new THREE.Object3D();
  const attnColor = new THREE.Color();
  const attnCellValues: number[] = new Array(attnCells).fill(0);

  const attnZ = (LAYERS[4].z + LAYERS[5].z) / 2; // Between Attention and H4
  const attnSpan = 5.0;
  const attnHalf = attnSpan / 2;

  for (let row = 0; row < ATTENTION_MATRIX_SIZE; row++) {
    for (let col = 0; col < ATTENTION_MATRIX_SIZE; col++) {
      const idx = row * ATTENTION_MATRIX_SIZE + col;
      const x = (col / (ATTENTION_MATRIX_SIZE - 1) - 0.5) * attnSpan;
      const y = (row / (ATTENTION_MATRIX_SIZE - 1) - 0.5) * attnSpan;
      attnDummy.position.set(x, y, attnZ);
      attnDummy.scale.setScalar(0.6 + Math.random() * 0.4);
      attnDummy.updateMatrix();
      attnMesh.setMatrixAt(idx, attnDummy.matrix);
      attnColor.set("#F5C842");
      attnMesh.setColorAt(idx, attnColor);
    }
  }
  attnMesh.instanceMatrix.needsUpdate = true;
  if (attnMesh.instanceColor) attnMesh.instanceColor.needsUpdate = true;
  group.add(attnMesh);

  // ═══════════════════════════════════════════
  // E6: ACTIVATION FUNCTION ARCS
  // ═══════════════════════════════════════════

  const arcLines: THREE.Line[] = [];
  const arcFunctions = ["ReLU", "GELU", "Swish", "Sigmoid", "Tanh"];

  arcFunctions.forEach((_name, idx) => {
    const x0 = -9 + idx * 4.5;
    const y0 = -7.5;
    const points: THREE.Vector3[] = [];
    const segs = 40;
    for (let s = 0; s <= segs; s++) {
      const t = s / segs;
      const x = x0 + t * 2.0;
      const raw = (t - 0.5) * 4;
      // Different curve shapes per "activation function"
      let y: number;
      if (idx === 0) y = Math.max(0, raw) * 0.4;           // ReLU
      else if (idx === 1) y = raw / (1 + Math.exp(-raw)) * 0.35; // GELU-like
      else if (idx === 2) y = raw / (1 + Math.exp(-raw)) * 0.4;  // Swish
      else if (idx === 3) y = 1 / (1 + Math.exp(-raw)) * 0.7 - 0.35; // Sigmoid
      else y = Math.tanh(raw) * 0.35;                       // Tanh
      points.push(new THREE.Vector3(x, y0 + y, -3.0 + idx * 0.9));
    }
    const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
    const curveMat = new THREE.LineBasicMaterial({
      color: idx % 2 === 0 ? "#10A37F" : "#00E5FF",
      transparent: true,
      opacity: 0.25,
      depthWrite: false,
    });
    const line = new THREE.Line(curveGeo, curveMat);
    group.add(line);
    arcLines.push(line);
  });

  // ═══════════════════════════════════════════
  // E7: TRAINING LOSS CHART
  // ═══════════════════════════════════════════

  const lossPoints = 200;
  const lossBaseY = -12.0;
  const lossBaseZ = 0;

  const lossPositionsArr = new Float32Array(lossPoints * 3);
  const lossColorsArr = new Float32Array(lossPoints * 3);

  let lossSeed = Math.random() * 1000;
  const resetLossChart = (): void => {
    lossSeed = Math.random() * 1000;
    for (let i = 0; i < lossPoints; i++) {
      const t = i / (lossPoints - 1);
      const mainLoss = 5.0 * Math.exp(-t * 4) + 0.15;
      const noise = Math.sin(lossSeed + t * 20) * 0.08 * (1 - t);
      const y = lossBaseY + (mainLoss + noise) * 0.6;
      lossPositionsArr[i * 3] = -10 + t * 20;
      lossPositionsArr[i * 3 + 1] = y;
      lossPositionsArr[i * 3 + 2] = lossBaseZ;

      const r = 1.0 - t * 0.7;
      const g = t * 0.8;
      const b = 0.1;
      lossColorsArr[i * 3] = r;
      lossColorsArr[i * 3 + 1] = g;
      lossColorsArr[i * 3 + 2] = b;
    }
  };
  resetLossChart();

  const lossGeo = new THREE.BufferGeometry();
  lossGeo.setAttribute("position", new THREE.BufferAttribute(lossPositionsArr, 3));
  lossGeo.setAttribute("color", new THREE.BufferAttribute(lossColorsArr, 3));

  const lossMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });
  const lossLine = new THREE.Line(lossGeo, lossMat);
  group.add(lossLine);

  let lossResetTimer = 15.0;

  // ═══════════════════════════════════════════
  // E8: NEURON SPIKE RING POOL
  // ═══════════════════════════════════════════

  const spikeRings: SpikeRing[] = [];
  for (let i = 0; i < SPIKE_RING_POOL; i++) {
    const ringGeo = new THREE.TorusGeometry(0.35, 0.03, 6, 16);
    const ringMat = new THREE.MeshBasicMaterial({
      color: "#00E5FF",
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(ringGeo, ringMat);
    mesh.visible = false;
    group.add(mesh);
    spikeRings.push({ mesh, active: false, timer: 0, maxTime: 0.6 });
  }

  const triggerSpike = (neuronIdx: number): void => {
    // Find a free ring in the pool
    for (let i = 0; i < SPIKE_RING_POOL; i++) {
      if (!spikeRings[i].active) {
        const r = spikeRings[i];
        const pos = nPositions[neuronIdx];
        r.mesh.position.copy(pos);
        r.mesh.scale.setScalar(0.5);
        r.mesh.visible = true;
        r.active = true;
        r.timer = 0;
        r.maxTime = 0.6;
        (r.mesh.material as THREE.MeshBasicMaterial).opacity = 0.7;
        return;
      }
    }
  };

  // ═══════════════════════════════════════════
  // E10: GRADIENT NORM BAR
  // ═══════════════════════════════════════════

  const gradBarGeo = new THREE.BoxGeometry(0.3, 0.2, 0.2);
  const gradBarMat = new THREE.MeshBasicMaterial({
    color: "#10A37F",
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
  });
  const gradBar = new THREE.Mesh(gradBarGeo, gradBarMat);
  gradBar.position.set(9.0, 0, 0);
  group.add(gradBar);

  // ═══════════════════════════════════════════
  // E11: DATA MANIFOLD
  // ═══════════════════════════════════════════

  const manifoldCount = 60;
  const manGeo = new THREE.BufferGeometry();
  const manPositions = new Float32Array(manifoldCount * 3);
  const manColors = new Float32Array(manifoldCount * 3);
  manGeo.setAttribute("position", new THREE.BufferAttribute(manPositions, 3));
  manGeo.setAttribute("color", new THREE.BufferAttribute(manColors, 3));

  const manMat = new THREE.PointsMaterial({
    size: 0.07,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.5,
  });
  const manPoints = new THREE.Points(manGeo, manMat);
  group.add(manPoints);

  const manifoldClusters: { centerX: number; centerY: number; color: string }[] = [
    { centerX: -6.0, centerY: -9.0, color: "#00E5FF" },
    { centerX: 0, centerY: -9.5, color: "#8B5CF6" },
    { centerX: 6.0, centerY: -9.0, color: "#10A37F" },
  ];

  for (let i = 0; i < manifoldCount; i++) {
    const cluster = manifoldClusters[i % 3];
    manPositions[i * 3] = cluster.centerX + randomRange(-1.5, 1.5);
    manPositions[i * 3 + 1] = cluster.centerY + randomRange(-1.0, 1.0);
    manPositions[i * 3 + 2] = randomRange(-2.0, 2.0);
    const c = new THREE.Color(cluster.color);
    manColors[i * 3] = c.r * 0.6;
    manColors[i * 3 + 1] = c.g * 0.6;
    manColors[i * 3 + 2] = c.b * 0.6;
  }

  // ═══════════════════════════════════════════
  // Entrance + Dissolve state
  // ═══════════════════════════════════════════

  let entranceTimer = -1; // -1 = done/not started
  let entranceOpacity = 1.0;
  const ENTRANCE_DURATION = 900; // ms for full cascade

  // ── Tensor forward pass timer ──

  let forwardPassTimer = 0.6;
  const FORWARD_PASS_INTERVAL = 0.6;

  // ═══════════════════════════════════════════
  // UPDATE FUNCTION
  // ═══════════════════════════════════════════

  const update = (time: number, _delta: number, _mouse: import("../../engine/types").Vec2 | null): void => {
    if (disposed) return;

    // ── Entrance cascade ──
    if (entranceTimer >= 0) {
      entranceTimer += _delta * 1000;
      entranceOpacity = clamp01(entranceTimer / 300);
    }

    // ── Tensor forward pass ──
    forwardPassTimer -= _delta;
    if (forwardPassTimer <= 0) {
      forwardPassTimer = FORWARD_PASS_INTERVAL;
      for (let n = 0; n < LAYERS[0].count; n++) {
        neuronActivations[n] = randomRange(0.2, 0.8);
      }
      runForwardPass();
    }

    // ── E1: Forward pass particles ──
    // Spawn continuously
    if (fwdParticles.length < FORWARD_PARTICLES && Math.random() < 0.6) {
      spawnFwd();
    }

    for (let i = fwdParticles.length - 1; i >= 0; i--) {
      const p = fwdParticles[i];
      p.progress += p.speed;

      if (p.progress >= 1.0) {
        // Trigger spike at destination neuron
        const destIdx = LAYER_STARTS[p.toLayer] + p.toNeuron;
        if (entranceTimer < 0 || entranceTimer > ENTRANCE_DURATION) {
          triggerSpike(destIdx);
        }

        // Move to next layer pair or respawn at input
        if (p.toLayer < TOTAL_LAYERS - 1) {
          p.fromLayer = p.toLayer;
          p.fromNeuron = p.toNeuron;
          p.toLayer = p.toLayer + 1;
          p.toNeuron = Math.floor(Math.random() * LAYERS[p.toLayer].count);
          p.progress = 0;
          p.speed = randomRange(0.018, 0.066);
        } else {
          fwdParticles.splice(i, 1);
        }
        continue;
      }

      const t = p.progress;
      const srcIdx = LAYER_STARTS[p.fromLayer] + p.fromNeuron;
      const dstIdx = LAYER_STARTS[p.toLayer] + p.toNeuron;
      const src = nPositions[srcIdx];
      const dst = nPositions[dstIdx];

      const idx = Math.min(i, FORWARD_PARTICLES - 1);
      fwdPositions[idx * 3] = src.x + (dst.x - src.x) * t;
      fwdPositions[idx * 3 + 1] = src.y + (dst.y - src.y) * t;
      fwdPositions[idx * 3 + 2] = src.z + (dst.z - src.z) * t + Math.sin(t * Math.PI) * 0.5;

      // Color gradient: cyan→green→purple based on layer position
      const layerFrac = p.fromLayer / (TOTAL_LAYERS - 1);
      const opacity = Math.sin(t * Math.PI);
      fwdColors[idx * 3] = (1 - layerFrac) * 0.3 * opacity;
      fwdColors[idx * 3 + 1] = layerFrac * 0.6 * opacity + (1 - layerFrac) * 0.9 * opacity;
      fwdColors[idx * 3 + 2] = layerFrac * 0.7 * opacity;
    }

    // Hide unused slots
    for (let i = fwdParticles.length; i < FORWARD_PARTICLES; i++) {
      fwdPositions[i * 3 + 1] = -999;
    }

    fwdGeo.attributes.position.needsUpdate = true;
    fwdGeo.attributes.color.needsUpdate = true;

    // ── E2: Backpropagation cycle ──
    phaseTimer -= _delta;
    if (phaseTimer <= 0) {
      backpropPhase = (backpropPhase + 1) % 3;
      if (backpropPhase === 0) phaseTimer = 2.5; // Forward
      else if (backpropPhase === 1) phaseTimer = 1.2; // Backward
      else phaseTimer = 1.0; // Pause
      backpropActive = backpropPhase === 1;
    }

    if (backpropActive) {
      if (bwdParticles.length < BACKWARD_PARTICLES && Math.random() < 0.5) {
        spawnBwd();
      }
    } else {
      // Drain backward particles
      bwdParticles.length = 0;
    }

    for (let i = bwdParticles.length - 1; i >= 0; i--) {
      const p = bwdParticles[i];
      p.progress += p.speed;
      if (p.progress >= 1.0) {
        if (p.toLayer > 0) {
          p.fromLayer = p.toLayer;
          p.fromNeuron = p.toNeuron;
          p.toLayer = p.toLayer - 1;
          p.toNeuron = Math.floor(Math.random() * LAYERS[p.toLayer].count);
          p.progress = 0;
          p.speed = randomRange(0.024, 0.075);
        } else {
          bwdParticles.splice(i, 1);
        }
        continue;
      }

      const t = p.progress;
      const srcIdx = LAYER_STARTS[p.fromLayer] + p.fromNeuron;
      const dstIdx = LAYER_STARTS[p.toLayer] + p.toNeuron;
      const src = nPositions[srcIdx];
      const dst = nPositions[dstIdx];

      const idx = Math.min(i, BACKWARD_PARTICLES - 1);
      bwdPositions[idx * 3] = src.x + (dst.x - src.x) * t;
      bwdPositions[idx * 3 + 1] = src.y + (dst.y - src.y) * t;
      bwdPositions[idx * 3 + 2] = src.z + (dst.z - src.z) * t + Math.sin(t * Math.PI) * 0.5;

      const opacity = Math.sin(t * Math.PI);
      bwdColors[idx * 3] = 0.97 * opacity;
      bwdColors[idx * 3 + 1] = 0.35 * opacity;
      bwdColors[idx * 3 + 2] = 0.1 * opacity;
    }

    for (let i = bwdParticles.length; i < BACKWARD_PARTICLES; i++) {
      bwdPositions[i * 3 + 1] = -999;
    }
    bwdGeo.attributes.position.needsUpdate = true;
    bwdGeo.attributes.color.needsUpdate = true;

    // ── E3: Dropout cycle ──
    dropout.epochTimer -= _delta;
    if (dropout.epochTimer <= 0) {
      dropout.epochTimer = dropout.epochDuration;
      applyDropout();
    }

    // Apply dropout + update neuron glow (activation-mapped)
    const isDropped = (globalIdx: number): boolean => dropout.dropped.has(globalIdx);

    for (let i = 0; i < TOTAL_NEURONS; i++) {
      const pos = nPositions[i];
      dummy.position.copy(pos);

      if (isDropped(i)) {
        dummy.scale.setScalar(0.05);
        dummy.updateMatrix();
        neurons.setMatrixAt(i, dummy.matrix);
        nColor.setRGB(
          neuronBaseColors[i * 3] * 0.06,
          neuronBaseColors[i * 3 + 1] * 0.06,
          neuronBaseColors[i * 3 + 2] * 0.06,
        );
      } else {
        dummy.scale.setScalar(1.0);
        dummy.updateMatrix();
        neurons.setMatrixAt(i, dummy.matrix);
        const a = neuronActivations[i];
        const glow = 0.4 + a * 0.6;
        nColor.setRGB(
          neuronBaseColors[i * 3] * glow,
          neuronBaseColors[i * 3 + 1] * glow,
          neuronBaseColors[i * 3 + 2] * glow,
        );
      }
      neurons.setColorAt(i, nColor);
    }
    neurons.instanceMatrix.needsUpdate = true;
    if (neurons.instanceColor) neurons.instanceColor.needsUpdate = true;

    // Tensor edge brightness: weight × source activation
    {
      let ei = 0;
      const eColorArr = edgeGeo.attributes.color.array as Float32Array;
      for (let l = 0; l < TOTAL_LAYERS - 1; l++) {
        const fromStart = LAYER_STARTS[l];
        const toStart = LAYER_STARTS[l + 1];
        const fromCount = LAYERS[l].count;
        const toCount = LAYERS[l + 1].count;
        for (let f = 0; f < fromCount; f++) {
          const sourceActivation = neuronActivations[fromStart + f];
          for (let t = 0; t < toCount; t++) {
            const weight = edgeWeights[ei];
            let brightness = 0.05 + sourceActivation * weight * 0.35;
            if (isDropped(fromStart + f) || isDropped(toStart + t)) {
              brightness *= 0.08;
            }
            const vi = ei * 6;
            eColorArr[vi] = brightness;
            eColorArr[vi + 1] = brightness;
            eColorArr[vi + 2] = brightness;
            eColorArr[vi + 3] = brightness;
            eColorArr[vi + 4] = brightness;
            eColorArr[vi + 5] = brightness;
            ei++;
          }
        }
      }
      edgeGeo.attributes.color.needsUpdate = true;
    }

    // ── E4: Normalization ripples ──
    ripples.forEach((r) => {
      const scale = 1.0 + Math.sin(time * 3 + r.layerIdx * 1.5) * 0.12;
      r.ring.scale.setScalar(scale);
      r.material.opacity = 0.25 + Math.sin(time * 4 + r.layerIdx) * 0.15;
    });

    // ── E5: Attention matrix shimmer (every 4th frame) ──
    {
      const frameMod = Math.floor(time * 60) % 4;
      if (frameMod === 0) {
        for (let row = 0; row < ATTENTION_MATRIX_SIZE; row++) {
          for (let col = 0; col < ATTENTION_MATRIX_SIZE; col++) {
            const idx = row * ATTENTION_MATRIX_SIZE + col;
            const diag = Math.abs(row - col);
            let val = Math.exp(-diag * 0.4) * 0.7; // Strong diagonal
            val += Math.sin(time * 5 + row * 0.7 + col * 0.9) * 0.15; // Shimmer
            val = clamp01(val + 0.1);
            attnCellValues[idx] = val;

            attnDummy.position.set(
              (col / (ATTENTION_MATRIX_SIZE - 1) - 0.5) * attnSpan,
              (row / (ATTENTION_MATRIX_SIZE - 1) - 0.5) * attnSpan,
              attnZ,
            );
            attnDummy.scale.setScalar(val * 1.2);
            attnDummy.updateMatrix();
            attnMesh.setMatrixAt(idx, attnDummy.matrix);

            const b = 0.2 + val * 0.8;
            attnColor.setRGB(b * 0.96, b * 0.72, b * 0.26);
            attnMesh.setColorAt(idx, attnColor);
          }
        }
        attnMesh.instanceMatrix.needsUpdate = true;
        if (attnMesh.instanceColor) attnMesh.instanceColor.needsUpdate = true;
      }
    }

    // ── E6: Activation arcs slow rotation ──
    arcLines.forEach((line, i) => {
      line.rotation.z = Math.sin(time * 0.3 + i) * 0.15;
      line.rotation.y = Math.cos(time * 0.25 + i) * 0.2;
    });

    // ── E7: Loss chart re-generation ──
    lossResetTimer -= _delta;
    if (lossResetTimer <= 0) {
      resetLossChart();
      lossResetTimer = 15.0;
      lossGeo.attributes.position.needsUpdate = true;
      lossGeo.attributes.color.needsUpdate = true;
    }

    // Animate last point's Y for current "epoch progress"
    {
      const arr = lossGeo.attributes.position.array as Float32Array;
      const last = (lossPoints - 1) * 3 + 1;
      const currentLoss = 5.0 * Math.exp(-(15 - lossResetTimer) / 15 * 4) + 0.15;
      arr[last] = lossBaseY + currentLoss * 0.6;
      lossGeo.attributes.position.needsUpdate = true;
    }

    // ── E8: Spike ring updates ──
    spikeRings.forEach((r) => {
      if (!r.active) return;
      r.timer += _delta;
      const t = clamp01(r.timer / r.maxTime);
      const scale = 0.5 + t * 2.5;
      r.mesh.scale.setScalar(scale);
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - t);
      if (t >= 1) {
        r.active = false;
        r.mesh.visible = false;
      }
    });

    // ── E10: Gradient bar (pulses during backprop) ──
    {
      const targetH = backpropActive ? 1.5 + Math.sin(time * 10) * 0.8 : 0.3;
      const currentH = gradBar.scale.y;
      gradBar.scale.y += (targetH - currentH) * 0.1;
      gradBar.position.y = gradBar.scale.y / 2;
      gradBarMat.opacity = 0.3 + (backpropActive ? 0.5 : 0.1);
    }

    // ── E11: Data manifold drift ──
    {
      for (let i = 0; i < manifoldCount; i++) {
        const cluster = manifoldClusters[i % 3];
        const sep = Math.sin(time * 0.3) * 0.5;
        manPositions[i * 3] += (cluster.centerX + (i % 3 === 0 ? -sep : i % 3 === 1 ? 0 : sep) - manPositions[i * 3]) * 0.01;
        manPositions[i * 3 + 1] += (cluster.centerY + Math.sin(time * 0.5 + i) * 0.3 - manPositions[i * 3 + 1]) * 0.01;
        manPositions[i * 3 + 2] += (Math.cos(time * 0.4 + i) * 0.5 - manPositions[i * 3 + 2]) * 0.01;

        nColor.set(cluster.color);
        const dim = 0.3 + Math.sin(time * 2 + i) * 0.15;
        manColors[i * 3] = nColor.r * dim;
        manColors[i * 3 + 1] = nColor.g * dim;
        manColors[i * 3 + 2] = nColor.b * dim;
      }
      manGeo.attributes.position.needsUpdate = true;
      manGeo.attributes.color.needsUpdate = true;
    }

    // ── Global entrance opacity for group ──
    if (entranceTimer >= 0 && entranceTimer <= ENTRANCE_DURATION) {
      group.children.forEach((child) => {
        if (child === neurons) return; // handled separately
        if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points || child instanceof THREE.LineSegments || child instanceof THREE.InstancedMesh) {
          // Layer-based visibility
          // For simplicity, fade in overall group
          group.scale.setScalar(entranceOpacity);
        }
      });
    }

    void time;
  };

  // ═══════════════════════════════════════════
  // DISPOSE
  // ═══════════════════════════════════════════

  const dispose = (): void => {
    disposed = true;
    neuronGeo.dispose();
    neuronMat.dispose();
    neurons.dispose();

    edgeGeo.dispose();
    edgeMat.dispose();

    fwdGeo.dispose();
    fwdMat.dispose();
    bwdGeo.dispose();
    bwdMat.dispose();

    ripples.forEach((r) => {
      r.ring.geometry.dispose();
      r.material.dispose();
    });

    attnGeo.dispose();
    attnMat.dispose();
    attnMesh.dispose();

    arcLines.forEach((l) => {
      l.geometry.dispose();
      (l.material as THREE.Material).dispose();
    });

    lossGeo.dispose();
    lossMat.dispose();

    spikeRings.forEach((r) => {
      r.mesh.geometry.dispose();
      (r.mesh.material as THREE.Material).dispose();
    });

    gradBarGeo.dispose();
    gradBarMat.dispose();

    manGeo.dispose();
    manMat.dispose();

    group.clear();
  };

  // ═══════════════════════════════════════════
  // SET OPACITY
  // ═══════════════════════════════════════════

  const setOpacity = (t: number): void => {
    neuronMat.opacity = 0.92 * t;
    edgeMat.opacity = 0.8 * t;
    fwdMat.opacity = 0.9 * t;
    bwdMat.opacity = 0.8 * t;
    lossMat.opacity = 0.5 * t;
    manMat.opacity = 0.5 * t;
    ripples.forEach((r) => { r.material.opacity = 0.4 * t; });
    attnMat.opacity = 0.7 * t;
    arcLines.forEach((l) => { (l.material as THREE.LineBasicMaterial).opacity = 0.25 * t; });
    gradBarMat.opacity = 0.6 * t;
  };

  // ═══════════════════════════════════════════
  // DISSOLVE
  // ═══════════════════════════════════════════

  const dissolve = (progress: number): void => {
    const objs: THREE.Object3D[] = [];
    group.traverse((child) => {
      if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points || child instanceof THREE.LineSegments || child instanceof THREE.InstancedMesh) {
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
          if ("opacity" in mat) (mat as THREE.MeshBasicMaterial).opacity = Math.max(0, (mat as THREE.MeshBasicMaterial).opacity - localP * 0.8);
        };
        if (obj instanceof THREE.Mesh) {
          const mats = obj.material;
          if (Array.isArray(mats)) mats.forEach(applyFade);
          else applyFade(mats);
        } else if (obj instanceof THREE.InstancedMesh) {
          applyFade(obj.material as THREE.Material);
        } else {
          const mats = (obj as THREE.Line | THREE.Points | THREE.LineSegments).material;
          if (Array.isArray(mats)) mats.forEach(applyFade);
          else applyFade(mats);
        }
      }
    });
  };

  // ═══════════════════════════════════════════
  // ENTRANCE
  // ═══════════════════════════════════════════

  const entrance = (elapsed: number): void => {
    entranceTimer = elapsed;
  };

  // ═══════════════════════════════════════════
  // GET DENSITY
  // ═══════════════════════════════════════════

  const getDensity = (): number => {
    const active = TOTAL_NEURONS - dropout.dropped.size;
    return active / TOTAL_NEURONS;
  };

  // ═══════════════════════════════════════════
  // RETURN HANDLE
  // ═══════════════════════════════════════════

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
    dissolve,
    entrance,
    getDensity,
  };
};
