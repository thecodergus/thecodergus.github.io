// ── Sprite atlas for Matrix rain characters ──
// Pre-renders characters into a single CanvasTexture for batched rendering.
// Grid: 8 columns × 8 rows, each cell 64×64 pixels → 512×512 atlas.

import * as THREE from "three";

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ012345789日";

const GRID_COLS = 8;
const GRID_ROWS = 8;
const TOTAL_CHARS = GRID_COLS * GRID_ROWS;
const CELL_SIZE = 64;
const ATLAS_SIZE = GRID_COLS * CELL_SIZE;

export interface AtlasData {
  readonly texture: THREE.CanvasTexture;
  readonly charCount: number;
  readonly uvForIndex: (index: number) => readonly [number, number];
  readonly indexForChar: (char: string) => number;
}

export const createMatrixAtlas = (color: string): AtlasData => {
  const canvas = document.createElement("canvas");
  canvas.width = ATLAS_SIZE;
  canvas.height = ATLAS_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get 2d rendering context for Matrix atlas");

  ctx.font = "bold 32px 'JetBrains Mono', monospace";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const charToIndex = new Map<string, number>();

  for (let i = 0; i < Math.min(MATRIX_CHARS.length, TOTAL_CHARS); i++) {
    const col = i % GRID_COLS;
    const row = Math.floor(i / GRID_COLS);
    const cx = col * CELL_SIZE + CELL_SIZE / 2;
    const cy = row * CELL_SIZE + CELL_SIZE / 2;
    const ch = MATRIX_CHARS[i];
    ctx.fillText(ch, cx, cy);
    charToIndex.set(ch, i);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const cellU = 1 / GRID_COLS;
  const cellV = 1 / GRID_ROWS;

  const uvForIndex = (index: number): readonly [number, number] => {
    const col = index % GRID_COLS;
    const row = Math.floor(index / GRID_COLS);
    return [col * cellU, row * cellV];
  };

  const indexForChar = (char: string): number => {
    const idx = charToIndex.get(char);
    return idx !== undefined ? idx : charToIndex.get("?") ?? 0;
  };

  return Object.freeze({
    texture,
    charCount: Math.min(MATRIX_CHARS.length, TOTAL_CHARS),
    uvForIndex,
    indexForChar,
  });
};

export const disposeAtlas = (atlas: AtlasData): void => {
  atlas.texture.dispose();
};
