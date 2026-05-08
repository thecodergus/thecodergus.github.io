// ── Pure math utilities for 3D scene animations ──

import type { Vec2 } from "./types";

// ── Constants ──

export type Vec3 = Readonly<{ x: number; y: number; z: number }>;

const ZERO: Vec3 = Object.freeze({ x: 0, y: 0, z: 0 });

// ── Vector construction (immutable factory) ──

export const vec3 = (x: number, y: number, z: number): Vec3 =>
  Object.freeze({ x, y, z });

export const vec2 = (x: number, y: number): Vec2 =>
  Object.freeze({ x, y });

// ── Vector arithmetic (returns new, does NOT mutate) ──

export const add = (a: Vec3, b: Vec3): Vec3 =>
  vec3(a.x + b.x, a.y + b.y, a.z + b.z);

export const sub = (a: Vec3, b: Vec3): Vec3 =>
  vec3(a.x - b.x, a.y - b.y, a.z - b.z);

export const scale = (v: Vec3, s: number): Vec3 =>
  vec3(v.x * s, v.y * s, v.z * s);

export const mul = (a: Vec3, b: Vec3): Vec3 =>
  vec3(a.x * b.x, a.y * b.y, a.z * b.z);

export const normalize = (v: Vec3): Vec3 => {
  const len = length(v);
  return len > 0 ? scale(v, 1 / len) : ZERO;
};

// ── Scalar operations ──

export const dot = (a: Vec3, b: Vec3): number =>
  a.x * b.x + a.y * b.y + a.z * b.z;

export const length = (v: Vec3): number =>
  Math.sqrt(dot(v, v));

export const dist = (a: Vec3, b: Vec3): number =>
  length(sub(a, b));

export const distSq = (a: Vec3, b: Vec3): number => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
};

// ── Interpolation ──

export const lerp = (a: number, b: number, t: number): number =>
  a + (b - a) * t;

export const lerpVec3 = (a: Vec3, b: Vec3, t: number): Vec3 =>
  vec3(lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t));

export const lerpColor = (a: string, b: string, t: number): string => {
  // NOTE: only supports 6-char hex (#RRGGBB), not 3-char short (#RGB).
  // All theme colors in this project use long hex format.
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 0xff;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;
  const br = (bh >> 16) & 0xff;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;
  const rr = Math.round(lerp(ar, br, t));
  const rg = Math.round(lerp(ag, bg, t));
  const rb = Math.round(lerp(ab, bb, t));
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, "0")}`;
};

// ── Clamping ──

export const clamp = (v: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, v));

export const clamp01 = (v: number): number =>
  clamp(v, 0, 1);

// ── Easing ──

export const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const easeOutQuad = (t: number): number =>
  t * (2 - t);

export const easeInOutSine = (t: number): number =>
  -(Math.cos(Math.PI * t) - 1) / 2;

// ── Random ──

let seed = 42;

export const setSeed = (s: number): void => {
  seed = s;
};

export const random = (): number => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

export const randomRange = (min: number, max: number): number =>
  min + random() * (max - min);

export const randomInt = (min: number, max: number): number =>
  Math.floor(randomRange(min, max + 1));

export const randomVec3 = (range: number): Vec3 =>
  vec3(
    randomRange(-range, range),
    randomRange(-range, range),
    randomRange(-range, range),
  );

export const randomOnSphere = (radius: number): Vec3 => {
  const theta = random() * Math.PI * 2;
  const phi = Math.acos(2 * random() - 1);
  return vec3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  );
};

// ── Math constants as pure functions ──

export const degToRad = (deg: number): number => deg * Math.PI / 180;

export const radToDeg = (rad: number): number => rad * 180 / Math.PI;

// ── Array utilities (immutable) ──

export const range = (n: number): readonly number[] =>
  Array.from({ length: n }, (_, i) => i);

export const rangeBetween = (start: number, end: number): readonly number[] =>
  Array.from({ length: end - start }, (_, i) => start + i);

export const choose = <T>(arr: readonly T[]): T =>
  arr[randomInt(0, arr.length - 1)];

export const shuffle = <T>(arr: readonly T[]): readonly T[] =>
  [...arr].sort(() => random() - 0.5);
