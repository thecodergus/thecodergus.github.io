// ── AI Scene: Transformer Architecture (Attention Is All You Need) ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, rangeBetween, randomRange, clamp01 } from "./math";

// ── Configuration ──

const TOKENS = 6;
const ENC_BLOCKS = 4;
const DEC_BLOCKS = 4;
const BLOCK_HEIGHT = 1.0;
const ENC_X = -4;
const DEC_X = 4;
const TOKEN_SPACING_Y = 0.9;
const ATTENTION_PARTICLE_COUNT = 60;

// ── Internal mutable state ──

interface TokenState {
  readonly mesh: THREE.Mesh;
  readonly meta: Readonly<{ idx: number }>;
}

interface BlockState {
  readonly group: THREE.Group;
  readonly outline: THREE.Line;
  readonly isEncoder: boolean;
  readonly layer: number;
}

interface AttentionParticle {
  readonly fromPos: THREE.Vector3;
  readonly toPos: THREE.Vector3;
  progress: number;
  readonly speed: number;
  readonly kind: number; // 0=self, 1=cross
}

// ── Build a single token sphere ──

const createToken = (
  x: number,
  y: number,
  idx: number,
  color: string,
): TokenState => {
  const geo = new THREE.SphereGeometry(0.22, 16, 16);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.85,
    depthWrite: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, 0);
  return { mesh, meta: Object.freeze({ idx }) };
};

// ── Build a transformer block outline ──

const createBlock = (
  x: number,
  y: number,
  layer: number,
  isEncoder: boolean,
  primaryColor: string,
): BlockState => {
  const group = new THREE.Group();
  const h = BLOCK_HEIGHT * 0.7;
  const w = 1.0;
  const d = 0.4;

  const outlineGeo = new THREE.BoxGeometry(w, h, d);
  const edgesGeo = new THREE.EdgesGeometry(outlineGeo);
  const line = new THREE.LineSegments(
    edgesGeo,
    new THREE.LineBasicMaterial({
      color: isEncoder ? primaryColor : "#F5C842",
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    }),
  );
  line.position.set(x, y, 0);
  group.add(line);

  // Inner translucent fill
  const fillGeo = new THREE.BoxGeometry(w * 0.9, h * 0.9, d * 0.8);
  const fillMat = new THREE.MeshBasicMaterial({
    color: isEncoder ? primaryColor : "#F5C842",
    transparent: true,
    opacity: 0.08,
    depthWrite: false,
  });
  const fill = new THREE.Mesh(fillGeo, fillMat);
  fill.position.set(x, y, 0);
  group.add(fill);

  return { group, outline: line, isEncoder, layer };
};

// ── Factory ──

export const createAIScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ── Token rows (encoder input side) ──

  const tokensEnc: TokenState[] = [];
  const tokensDec: TokenState[] = [];
  const startY = ((TOKENS - 1) * TOKEN_SPACING_Y) / 2;

  range(TOKENS).forEach((i) => {
    const y = startY - i * TOKEN_SPACING_Y;
    tokensEnc.push(createToken(ENC_X - 1.5, y, i, config.colorScheme.tertiary));
    tokensDec.push(createToken(DEC_X + 1.5, y, i, config.colorScheme.primary));
  });

  // ── Encoder blocks (left stack) ──

  const encBlocks: BlockState[] = [];
  const totalEncH = ENC_BLOCKS * BLOCK_HEIGHT;
  const encStartY = totalEncH / 2 - BLOCK_HEIGHT / 2;

  range(ENC_BLOCKS).forEach((layer) => {
    const y = encStartY - layer * BLOCK_HEIGHT;
    const block = createBlock(ENC_X, y, layer, true, config.colorScheme.primary);
    group.add(block.group);
    encBlocks.push(block);
  });

  // ── Decoder blocks (right stack) ──

  const decBlocks: BlockState[] = [];
  const totalDecH = DEC_BLOCKS * BLOCK_HEIGHT;
  const decStartY = totalDecH / 2 - BLOCK_HEIGHT / 2;

  range(DEC_BLOCKS).forEach((layer) => {
    const y = decStartY - layer * BLOCK_HEIGHT;
    const block = createBlock(DEC_X, y, layer, false, config.colorScheme.primary);
    group.add(block.group);
    decBlocks.push(block);
  });

  // ── Attention lines ──

  const attentionLines: THREE.Line[] = [];
  const attLineMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.1,
    depthWrite: false,
  });

  // Self-attention: tokens to tokens within encoder/decoder (horizontal arcs)
  const createCurvedLine = (from: THREE.Vector3, to: THREE.Vector3, curveOffset: number): THREE.Line => {
    const mid = new THREE.Vector3(
      (from.x + to.x) / 2,
      (from.y + to.y) / 2,
      (from.z + to.z) / 2 + curveOffset,
    );
    const curve = new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
    const pts = curve.getPoints(20);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    return new THREE.Line(geo, attLineMat.clone());
  };

  // Encoder self-attention lines (horizontal between tokens)
  range(TOKENS).forEach((i) => {
    rangeBetween(i + 1, TOKENS).forEach((j) => {
      const from = tokensEnc[i].mesh.position.clone();
      const to = tokensEnc[j].mesh.position.clone();
      const line = createCurvedLine(from, to, randomRange(-0.3, 0.3));
      attentionLines.push(line);
      group.add(line);
    });
  });

  // Decoder self-attention
  range(TOKENS).forEach((i) => {
    rangeBetween(i + 1, TOKENS).forEach((j) => {
      const from = tokensDec[i].mesh.position.clone();
      const to = tokensDec[j].mesh.position.clone();
      const line = createCurvedLine(from, to, randomRange(-0.3, 0.3));
      attentionLines.push(line);
      group.add(line);
    });
  });

  // Cross-attention lines (decoder → encoder)
  const crossLineMat = new THREE.LineBasicMaterial({
    color: "#F5C842",
    transparent: true,
    opacity: 0.08,
    depthWrite: false,
  });

  range(TOKENS).forEach((i) => {
    range(TOKENS).forEach((j) => {
      if (Math.random() > 0.4) {
        const from = tokensDec[i].mesh.position.clone();
        const to = tokensEnc[j].mesh.position.clone();
        const mid = new THREE.Vector3(
          (from.x + to.x) / 2,
          (from.y + to.y) / 2 + randomRange(-0.5, 0.5),
          randomRange(-0.3, 0.3),
        );
        const curve = new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
        const pts = curve.getPoints(30);
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geo, crossLineMat.clone());
        attentionLines.push(line);
        group.add(line);
      }
    });
  });

  // ── Residual lines (curved arrows around blocks) ──

  range(ENC_BLOCKS - 1).forEach((layer) => {
    const y = encStartY - layer * BLOCK_HEIGHT;
    const nextY = encStartY - (layer + 1) * BLOCK_HEIGHT;
    const x = ENC_X + 1.2;

    const points = [
      new THREE.Vector3(x, y, 0),
      new THREE.Vector3(x + 0.6, y, 0),
      new THREE.Vector3(x + 0.6, nextY, 0),
      new THREE.Vector3(x, nextY, 0),
    ];
    const spline = new THREE.CatmullRomCurve3(points);
    const splinePts = spline.getPoints(20);
    const geo = new THREE.BufferGeometry().setFromPoints(splinePts);
    const line = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: config.colorScheme.secondary,
        transparent: true,
        opacity: 0.15,
        depthWrite: false,
      }),
    );
    group.add(line);
  });

  // ── Attention flow particles ──

  const particleCount = ATTENTION_PARTICLE_COUNT;
  const particleGeom = new THREE.BufferGeometry();
  const pPositions = new Float32Array(particleCount * 3);
  const pColors = new Float32Array(particleCount * 3);
  particleGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
  particleGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

  range(particleCount).forEach((i) => {
    pPositions[i * 3 + 1] = -999;
  });

  const particleMat = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });

  const particlePoints = new THREE.Points(particleGeom, particleMat);
  group.add(particlePoints);

  const flowParticles: AttentionParticle[] = [];

  const spawn = (): void => {
    if (disposed) return;
    const kind = Math.random() < 0.3 ? 1 : 0; // 30% cross-attention

    if (kind === 0) {
      // Self-attention
      const isDec = Math.random() < 0.5;
      const pool = isDec ? tokensDec : tokensEnc;
      if (pool.length < 2) return;
      const ai = Math.floor(Math.random() * pool.length);
      let bi = Math.floor(Math.random() * pool.length);
      while (bi === ai) bi = Math.floor(Math.random() * pool.length);

      flowParticles.push({
        fromPos: pool[ai].mesh.position.clone(),
        toPos: pool[bi].mesh.position.clone(),
        progress: 0,
        speed: randomRange(0.008, 0.02),
        kind,
      });
    } else {
      // Cross-attention: decoder → encoder
      if (tokensDec.length === 0 || tokensEnc.length === 0) return;
      const di = Math.floor(Math.random() * tokensDec.length);
      const ei = Math.floor(Math.random() * tokensEnc.length);

      flowParticles.push({
        fromPos: tokensDec[di].mesh.position.clone(),
        toPos: tokensEnc[ei].mesh.position.clone(),
        progress: 0,
        speed: randomRange(0.006, 0.014),
        kind,
      });
    }
  };

  // ── Update ──

  const update = (time: number, _delta: number, _mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    // Spawn attention flow particles
    if (Math.random() < 0.35) {
      spawn();
    }

    // Animate token positions (subtle float)
    range(TOKENS).forEach((i) => {
      const offset = Math.sin(time * 2 + i * 0.8) * 0.08;
      const enc = tokensEnc[i];
      const dec = tokensDec[i];
      if (enc) enc.mesh.position.z = offset;
      if (dec) dec.mesh.position.z = offset * 1.3;
    });

    // Block pulse
    encBlocks.forEach((b, i) => {
      const s = 1 + Math.sin(time * 3 + i * 0.5) * 0.03;
      b.group.scale.setScalar(s);
    });
    decBlocks.forEach((b, i) => {
      const s = 1 + Math.sin(time * 3 + i * 0.5 + 1) * 0.03;
      b.group.scale.setScalar(s);
    });

    // Update flow particles
    const toRemove: number[] = [];
    flowParticles.forEach((p, idx) => {
      p.progress += p.speed;
      if (p.progress >= 1) toRemove.push(idx);
    });
    toRemove.reverse().forEach((idx) => flowParticles.splice(idx, 1));
    while (flowParticles.length > particleCount) flowParticles.shift();

    // Update particle buffer
    range(particleCount).forEach((i) => {
      if (i < flowParticles.length) {
        const p = flowParticles[i];
        const t = p.progress;
        const px = p.fromPos.x + (p.toPos.x - p.fromPos.x) * t;
        const py = p.fromPos.y + (p.toPos.y - p.fromPos.y) * t;
        // Arc path
        const pz = Math.sin(t * Math.PI) * 1.5;
        pPositions[i * 3] = px;
        pPositions[i * 3 + 1] = py;
        pPositions[i * 3 + 2] = pz;

        const opacity = Math.sin(t * Math.PI);
        const colorHex = p.kind === 1 ? "#F5C842" : config.colorScheme.primary;
        pColors[i * 3] = (parseInt(colorHex.slice(1, 3), 16) / 255) * opacity;
        pColors[i * 3 + 1] = (parseInt(colorHex.slice(3, 5), 16) / 255) * opacity;
        pColors[i * 3 + 2] = (parseInt(colorHex.slice(5, 7), 16) / 255) * opacity;
      } else {
        pPositions[i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    void time;
  };

  // ── Add all tokens to group ──

  tokensEnc.forEach((t) => group.add(t.mesh));
  tokensDec.forEach((t) => group.add(t.mesh));

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    tokensEnc.forEach((t) => {
      t.mesh.geometry.dispose();
      (t.mesh.material as THREE.Material).dispose();
    });
    tokensDec.forEach((t) => {
      t.mesh.geometry.dispose();
      (t.mesh.material as THREE.Material).dispose();
    });
    attentionLines.forEach((l) => {
      l.geometry.dispose();
      (l.material as THREE.Material).dispose();
    });
    attLineMat.dispose();
    crossLineMat.dispose();
    particleGeom.dispose();
    particleMat.dispose();
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    group.clear();
  };

  const setOpacity = (t: number): void => {
    tokensEnc.forEach((tok) => {
      (tok.mesh.material as THREE.MeshBasicMaterial).opacity = 0.85 * t;
    });
    tokensDec.forEach((tok) => {
      (tok.mesh.material as THREE.MeshBasicMaterial).opacity = 0.85 * t;
    });
    attentionLines.forEach((l) => {
      (l.material as THREE.LineBasicMaterial).opacity = 0.12 * t;
    });
    particleMat.opacity = 0.9 * t;
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
  };
};
