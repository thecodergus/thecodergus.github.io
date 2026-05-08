// ── Shared canvas texture utility ──

import * as THREE from "three";

export interface CanvasTextureOptions {
  readonly width: number;
  readonly height: number;
  readonly minFilter?: THREE.MinificationTextureFilter;
  readonly magFilter?: THREE.MagnificationTextureFilter;
}

export const createCanvasTexture = (
  options: CanvasTextureOptions,
  draw: (ctx: CanvasRenderingContext2D) => void,
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error(`Failed to get 2d context for ${options.width}x${options.height} canvas`);
  draw(ctx);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = options.minFilter ?? THREE.LinearFilter as THREE.MinificationTextureFilter;
  tex.magFilter = options.magFilter ?? THREE.LinearFilter as THREE.MagnificationTextureFilter;
  return tex;
};
