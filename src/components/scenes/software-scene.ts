// ── Software Scene: Matrix Digital Rain ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, randomRange, clamp01 } from "./math";

// ── Configuration ──

const COLUMNS = 30;
const MAX_DROPS_PER_COLUMN = 12;
const TOTAL_PARTICLES = COLUMNS * MAX_DROPS_PER_COLUMN;
const GRID_WIDTH = 14;
const GRID_HEIGHT = 8;
const COLUMN_SPACING = GRID_WIDTH / COLUMNS;
const CHAR_SIZE = 0.3;

// ── Internal types ──

interface Drop {
  column: number;
  row: number;
  speed: number;
  opacity: number;
  isHead: boolean;
}

// ── Create character sprite textures ──

const createCharTexture = (char: string, color: string): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  ctx.font = "bold 20px 'JetBrains Mono', monospace";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(char, 16, 16);
  return new THREE.CanvasTexture(canvas);
};

const generateChar = (): string => {
  const r = Math.random();
  if (r < 0.3) return String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)); // Katakana
  if (r < 0.6) return Math.random() > 0.5 ? "0" : "1";
  if (r < 0.8) return String.fromCharCode(0x4E00 + Math.floor(Math.random() * 100)); // CJK
  return String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
};

// ── Factory ──

export const createSoftwareScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ── Background grid ──

  const gridGroup = new THREE.Group();
  const gridLineMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.04,
    depthWrite: false,
  });

  // Horizontal lines (subtle)
  range(20).forEach((i) => {
    const y = -GRID_HEIGHT / 2 + (i / 19) * GRID_HEIGHT;
    const pts = [
      new THREE.Vector3(-GRID_WIDTH / 2, y, 0),
      new THREE.Vector3(GRID_WIDTH / 2, y, 0),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    gridGroup.add(new THREE.Line(geo, gridLineMat.clone()));
  });

  group.add(gridGroup);

  // ── Falling drops using sprite particles ──

  const drops: Drop[] = [];

  // Assign some columns as "active" with more drops
  const activeColumns = new Set<number>();
  range(Math.floor(COLUMNS * 0.7)).forEach(() => {
    activeColumns.add(Math.floor(Math.random() * COLUMNS));
  });

  range(TOTAL_PARTICLES).forEach(() => {
    const col = Math.floor(Math.random() * COLUMNS);
    const char = generateChar();
    const tex = createCharTexture(char, config.colorScheme.secondary);

    const spriteMat = new THREE.SpriteMaterial({
      map: tex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(CHAR_SIZE, CHAR_SIZE, 1);

    const x = -GRID_WIDTH / 2 + col * COLUMN_SPACING + COLUMN_SPACING / 2;
    const startY = GRID_HEIGHT / 2 + Math.random() * GRID_HEIGHT;
    const startRow = Math.round(startY / CHAR_SIZE);

    sprite.position.set(x, startY, randomRange(-0.5, 0.5));
    sprite.userData = { dropIdx: drops.length };
    group.add(sprite);

    drops.push({
      column: col,
      row: startRow,
      speed: randomRange(0.02, 0.06),
      opacity: activeColumns.has(col) ? randomRange(0.3, 0.9) : randomRange(0.05, 0.2),
      isHead: false,
    });
  });

  // Mark first drop in each column as head
  const columnFirstDrops = new Map<number, number>();
  drops.forEach((d, i) => {
    if (!columnFirstDrops.has(d.column) || drops[columnFirstDrops.get(d.column)!].row > d.row) {
      columnFirstDrops.set(d.column, i);
    }
  });
  columnFirstDrops.forEach((idx) => {
    drops[idx].isHead = true;
    drops[idx].opacity = 0.8;
  });

  // ── Circuit/trace decoration ──

  const circuitGroup = new THREE.Group();
  const circuitMat = new THREE.LineBasicMaterial({
    color: config.colorScheme.primary,
    transparent: true,
    opacity: 0.06,
    depthWrite: false,
  });

  range(8).forEach(() => {
    const x1 = randomRange(-GRID_WIDTH / 2, GRID_WIDTH / 2);
    const y1 = randomRange(-GRID_HEIGHT / 2, GRID_HEIGHT / 2);
    const x2 = x1 + randomRange(-2, 2);
    const y2 = y1;
    const x3 = x2;
    const y3 = y2 + randomRange(-2, 2);

    const pts = [
      new THREE.Vector3(x1, y1, 0),
      new THREE.Vector3(x2, y2, 0),
      new THREE.Vector3(x3, y3, 0),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    circuitGroup.add(new THREE.Line(geo, circuitMat.clone()));

    // Circuit node
    const nodeGeo = new THREE.RingGeometry(0.08, 0.12, 16, 1);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: config.colorScheme.primary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
    });
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(x1, y1, 0.01);
    circuitGroup.add(node);
  });

  group.add(circuitGroup);

  // ── Get sprite by drop index ──

  const getSprite = (dropIdx: number): THREE.Sprite | null => {
    const children = group.children;
    for (const child of children) {
      if (child instanceof THREE.Sprite && child.userData.dropIdx === dropIdx) {
        return child;
      }
    }
    return null;
  };

  // ── Update ──

  const update = (time: number, _delta: number, _mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    drops.forEach((d, i) => {
      if (d.opacity <= 0) return;

      d.row -= d.speed;
      const sprite = getSprite(i);
      if (!sprite) return;

      // Move downward
      sprite.position.y = d.row * CHAR_SIZE;

      // If head is off screen, respawn at top
      if (d.isHead && d.row * CHAR_SIZE < -GRID_HEIGHT / 2 - 1) {
        d.row = Math.round((GRID_HEIGHT / 2 + 1) / CHAR_SIZE);
        // Create new char texture
        const newTex = createCharTexture(generateChar(), config.colorScheme.secondary);
        (sprite.material as THREE.SpriteMaterial).map?.dispose();
        (sprite.material as THREE.SpriteMaterial).map = newTex;
        (sprite.material as THREE.SpriteMaterial).needsUpdate = true;
      }

      // If trail is off screen, reset
      if (!d.isHead && d.row * CHAR_SIZE < -GRID_HEIGHT / 2 - 2) {
        d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / CHAR_SIZE);
        d.speed = randomRange(0.02, 0.06);
        const newTex = createCharTexture(generateChar(), config.colorScheme.secondary);
        (sprite.material as THREE.SpriteMaterial).map?.dispose();
        (sprite.material as THREE.SpriteMaterial).map = newTex;
        (sprite.material as THREE.SpriteMaterial).needsUpdate = true;
      }

      // Opacity: heads bright, trails fade
      const opacity = d.isHead ? 0.7 + Math.sin(time * 10 + i) * 0.2 : d.opacity * 0.6;
      (sprite.material as THREE.SpriteMaterial).opacity = opacity;
    });

    void time;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    group.traverse((child) => {
      if (child instanceof THREE.Sprite) {
        (child.material as THREE.SpriteMaterial).map?.dispose();
        (child.material as THREE.SpriteMaterial).dispose();
      } else if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      } else if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    gridLineMat.dispose();
    circuitMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    group.children.forEach((child) => {
      if (child instanceof THREE.Sprite) {
        const mat = child.material as THREE.SpriteMaterial;
        mat.opacity = (drops[child.userData.dropIdx]?.opacity ?? 0.5) * 0.8 * t;
      }
    });
    gridLineMat.opacity = 0.04 * t;
    circuitMat.opacity = 0.06 * t;
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [group],
  };
};
