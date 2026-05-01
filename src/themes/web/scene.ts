// ── Web Scene: Hyperlink Spiderweb ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "../../engine/types";
import { randomRange, clamp01 } from "../../engine/math";
import type { CardNode, Thread, Traveler, FloatingSprite } from "./types";

// ── Constants ──

const SPOKES = 10;
const RINGS = 3;
const RING_RADII = [2.5, 5.0, 7.5];
const RING_Z_OFFSET = -0.3;
const TRAVELER_COUNT = 14;
const FLOATING_SPRITE_COUNT = 10;
const URL_TEXTS = [
  "https://github.com",
  "https://google.com",
  "https://wikipedia.org",
  "https://stackoverflow.com",
  "https://npmjs.com",
  "https://python.org",
  "https://react.dev",
  "https://nodejs.org",
  "https://threejs.org",
  "https://vercel.com",
  "https://mozilla.org",
  "https://gitlab.com",
];

// ── Canvas texture helpers ──

type CanvasSize = { readonly w: number; readonly h: number };

const createCanvasTexture = (size: CanvasSize, draw: (ctx: CanvasRenderingContext2D) => void): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = size.w;
  canvas.height = size.h;
  const ctx = canvas.getContext("2d")!;
  draw(ctx);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
};

const createCardSymbolTexture = (symbol: string): THREE.CanvasTexture =>
  createCanvasTexture({ w: 256, h: 128 }, (ctx) => {
    ctx.fillStyle = "#000000";
    ctx.font = "bold 36px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(symbol, 128, 64);
  });

const createURLTexture = (url: string, color: string): THREE.CanvasTexture =>
  createCanvasTexture({ w: 512, h: 64 }, (ctx) => {
    ctx.fillStyle = color;
    ctx.font = "bold 28px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(url, 256, 32);
  });

// ── Card factory ──

const createCard = (
  pos: THREE.Vector3,
  planeGeo: THREE.PlaneGeometry,
  edgeGeo: THREE.EdgesGeometry,
  planeMat: THREE.MeshBasicMaterial,
  edgeMat: THREE.LineBasicMaterial,
): THREE.Group => {
  const group = new THREE.Group();
  group.add(new THREE.Mesh(planeGeo, planeMat));
  group.add(new THREE.LineSegments(edgeGeo, edgeMat));
  group.position.copy(pos);
  group.rotation.y = (Math.random() - 0.5) * 0.5;
  group.rotation.x = (Math.random() - 0.5) * 0.3;
  return group;
};

// ── Spoke position helper ──

const spokePos = (spokeIndex: number, radius: number, z: number): THREE.Vector3 => {
  const angle = (spokeIndex / SPOKES) * Math.PI * 2;
  return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, z);
};

// ── Scene factory ──

export const createWebScene = (config: SceneConfig): SceneHandle => {
  const cs = config.colorScheme;
  const root = new THREE.Group();
  let disposed = false;

  // ── Shared geometries ──

  const cardGeo = new THREE.PlaneGeometry(0.42, 0.28);
  const cardEdgeGeo = new THREE.EdgesGeometry(cardGeo);
  const centerGeo = new THREE.PlaneGeometry(0.7, 0.5);
  const centerEdgeGeo = new THREE.EdgesGeometry(centerGeo);

  // ── Textures ──

  const bracketTex = createCardSymbolTexture("</>");
  const hashTex = createCardSymbolTexture("#");
  const curlyTex = createCardSymbolTexture("{ }");
  const symbolTexs = [bracketTex, hashTex, curlyTex];

  const urlTexs = URL_TEXTS.map((t) => createURLTexture(t, cs.primary));

  // ── Center card (homepage) ──

  const centerPlaneMat = new THREE.MeshBasicMaterial({
    map: bracketTex,
    transparent: true,
    opacity: 0.90,
    depthWrite: true,
  });
  const centerEdgeMat = new THREE.LineBasicMaterial({
    color: cs.secondary,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  });
  const centerGroup = createCard(
    new THREE.Vector3(0, 0, 0),
    centerGeo,
    centerEdgeGeo,
    centerPlaneMat,
    centerEdgeMat,
  );
  root.add(centerGroup);

  const centerNode: CardNode = Object.freeze({
    group: centerGroup,
    planeMat: centerPlaneMat,
    edgeMat: centerEdgeMat,
    position: new THREE.Vector3(0, 0, 0),
    spokeIndex: -1,
    ringIndex: 0,
  });

  // ── Ring cards ──

  const cardNodes: CardNode[] = [];

  for (let r = 0; r < RINGS; r++) {
    const radius = RING_RADII[r];
    const z = (r + 1) * RING_Z_OFFSET;

    for (let s = 0; s < SPOKES; s++) {
      const pos = spokePos(s, radius, z);
      const tex = symbolTexs[(s + r) % symbolTexs.length];

      const planeMat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.78,
        depthWrite: true,
      });
      const edgeMat = new THREE.LineBasicMaterial({
        color: cs.secondary,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });

      const group = createCard(pos, cardGeo, cardEdgeGeo, planeMat, edgeMat);
      root.add(group);

      cardNodes.push(
        Object.freeze({
          group,
          planeMat,
          edgeMat,
          position: pos,
          spokeIndex: s,
          ringIndex: r + 1,
        }),
      );
    }
  }

  const allCards: readonly CardNode[] = Object.freeze([centerNode, ...cardNodes]);

  // ── Spoke threads ──

  const threads: Thread[] = [];

  for (let s = 0; s < SPOKES; s++) {
    const angle = (s / SPOKES) * Math.PI * 2;

    // Center → Ring1
    {
      const p0 = new THREE.Vector3(0, 0, 0);
      const p1 = spokePos(s, RING_RADII[0], 1 * RING_Z_OFFSET);
      const geo = new THREE.BufferGeometry().setFromPoints([p0, p1]);
      const baseOp = 0.45 + Math.random() * 0.10;
      const mat = new THREE.LineBasicMaterial({
        color: cs.primary,
        transparent: true,
        opacity: baseOp,
        depthWrite: false,
      });
      mat.userData = { baseOpacity: baseOp };
      root.add(new THREE.Line(geo, mat));
      threads.push({ line: null as unknown as THREE.Line, mat, baseOpacity: baseOp, kind: "spoke" });
    }

    // Ring → Ring
    for (let r = 0; r < RINGS - 1; r++) {
      const r0 = r + 1;
      const r1 = r + 2;
      const p0 = spokePos(s, RING_RADII[r], r0 * RING_Z_OFFSET);
      const p1 = spokePos(s, RING_RADII[r + 1], r1 * RING_Z_OFFSET);
      const geo = new THREE.BufferGeometry().setFromPoints([p0, p1]);
      const baseOp = 0.30 + Math.random() * 0.08;
      const mat = new THREE.LineBasicMaterial({
        color: cs.primary,
        transparent: true,
        opacity: baseOp,
        depthWrite: false,
      });
      mat.userData = { baseOpacity: baseOp };
      root.add(new THREE.Line(geo, mat));
      threads.push({ line: null as unknown as THREE.Line, mat, baseOpacity: baseOp, kind: "spoke" });
    }
  }

  // ── Ring threads (closed polygons) ──

  for (let r = 0; r < RINGS; r++) {
    const radius = RING_RADII[r];
    const z = (r + 1) * RING_Z_OFFSET;
    const pts: THREE.Vector3[] = [];

    for (let s = 0; s <= SPOKES; s++) {
      const a = (s % SPOKES) / SPOKES * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, z));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const baseOp = 0.20 + Math.random() * 0.05;
    const mat = new THREE.LineBasicMaterial({
      color: cs.primary,
      transparent: true,
      opacity: baseOp,
      depthWrite: false,
    });
    mat.userData = { baseOpacity: baseOp };
    root.add(new THREE.Line(geo, mat));
    threads.push({ line: null as unknown as THREE.Line, mat, baseOpacity: baseOp, kind: "ring" });
  }

  // ── Travelers (URL particles along spokes) ──

  const travelers: Traveler[] = [];

  for (let i = 0; i < TRAVELER_COUNT; i++) {
    const urlTex = urlTexs[i % urlTexs.length];
    const mat = new THREE.SpriteMaterial({
      map: urlTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.6, 0.4, 1);
    sprite.position.set(-999, -999, -999);
    root.add(sprite);

    travelers.push({
      sprite,
      spokeIndex: Math.floor(Math.random() * SPOKES),
      progress: Math.random(),
      speed: randomRange(0.004, 0.01),
    });
  }

  // ── Floating </> sprites (ambient) ──

  const floatingSprites: FloatingSprite[] = [];

  for (let i = 0; i < FLOATING_SPRITE_COUNT; i++) {
    const mat = new THREE.SpriteMaterial({
      map: bracketTex,
      transparent: true,
      opacity: 0.2 + Math.random() * 0.15,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.45, 0.45, 1);

    const r = randomRange(1.5, 8.5);
    const a = Math.random() * Math.PI * 2;
    const y = Math.sin(a) * r;
    const x = Math.cos(a) * r;
    sprite.position.set(x, y, randomRange(-1.5, 0.3));

    root.add(sprite);

    floatingSprites.push({
      sprite,
      mat,
      baseY: sprite.position.y,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    });
  }

  // ── Update ──

  const update = (time: number, _delta: number, _mouse: import("../../engine/types").Vec2 | null): void => {
    if (disposed) return;

    // Pulse card scales
    const centerS = 1 + Math.sin(time * 2.5) * 0.05;
    centerGroup.scale.setScalar(centerS);

    cardNodes.forEach((c, i) => {
      const s = 1 + Math.sin(time * 2.5 + i * 0.4) * 0.04;
      c.group.scale.setScalar(s);
    });

    // Pulse thread opacities (breathing)
    threads.forEach((th, i) => {
      const amp = th.kind === "spoke" ? 0.06 : 0.03;
      th.mat.opacity = th.baseOpacity + Math.sin(time * 1.5 + i * 0.3) * amp;
    });

    // Update travelers
    const maxRadius = RING_RADII[RINGS - 1];
    const maxZ = RINGS * RING_Z_OFFSET;

    travelers.forEach((t) => {
      t.progress += t.speed;
      if (t.progress >= 1) {
        t.progress = 0;
        t.spokeIndex = Math.floor(Math.random() * SPOKES);
        t.speed = randomRange(0.004, 0.01);
        const urlTex = urlTexs[Math.floor(Math.random() * urlTexs.length)];
        (t.sprite.material as THREE.SpriteMaterial).map = urlTex;
      }

      const radius = t.progress * maxRadius;
      const angle = (t.spokeIndex / SPOKES) * Math.PI * 2;
      const z = t.progress * maxZ;
      const arc = Math.sin(t.progress * Math.PI) * 0.55;

      t.sprite.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius + arc,
        z,
      );
    });

    // Float </> sprites
    floatingSprites.forEach((fs) => {
      fs.sprite.position.y = fs.baseY + Math.sin(time * fs.speed + fs.phase) * 0.35;
      fs.mat.opacity = 0.2 + Math.sin(time * fs.speed + fs.phase) * 0.1;
      fs.sprite.rotation.z += 0.002;
    });

    void _mouse;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    root.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const m = child.material as THREE.Material;
        if (m instanceof THREE.MeshBasicMaterial && m.map) m.map.dispose();
        m.dispose();
      } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      } else if (child instanceof THREE.Sprite) {
        const m = child.material as THREE.SpriteMaterial;
        if (m.map) m.map.dispose();
        m.dispose();
      }
    });
    cardGeo.dispose();
    cardEdgeGeo.dispose();
    centerGeo.dispose();
    centerEdgeGeo.dispose();
    bracketTex.dispose();
    hashTex.dispose();
    curlyTex.dispose();
    urlTexs.forEach((t) => t.dispose());
    root.clear();
  };

  // ── SetOpacity (fade transition) ──

  const setOpacity = (t: number): void => {
    const c = clamp01(t);
    centerPlaneMat.opacity = 0.85 * c;
    centerEdgeMat.opacity = 0.7 * c;
    cardNodes.forEach((cn) => {
      cn.planeMat.opacity = 0.7 * c;
      cn.edgeMat.opacity = 0.5 * c;
    });
    threads.forEach((th) => {
      th.mat.opacity = th.baseOpacity * c;
    });
    travelers.forEach((tr) => {
      (tr.sprite.material as THREE.SpriteMaterial).opacity = 0.85 * c;
    });
    floatingSprites.forEach((fs) => {
      fs.mat.opacity = 0.3 * c;
    });
  };

  // ── Dissolve (transition out) ──

  const dissolve = (progress: number): void => {
    const objs: THREE.Object3D[] = [];
    root.traverse((child) => {
      if (
        child instanceof THREE.Mesh ||
        child instanceof THREE.Line ||
        child instanceof THREE.LineSegments ||
        child instanceof THREE.Sprite
      ) {
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
          (mat as THREE.MeshBasicMaterial).opacity = Math.max(
            0,
            1 - localP,
          );
        };
        if (
          obj instanceof THREE.Mesh ||
          obj instanceof THREE.Line ||
          obj instanceof THREE.LineSegments
        ) {
          const mats = obj.material;
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
    getObjects: () => [root],
    dissolve,
  };
};
