import { describe, it, expect } from "vitest";
import {
  vec3,
  vec2,
  add,
  sub,
  scale,
  mul,
  normalize,
  dot,
  length,
  dist,
  distSq,
  lerp,
  lerpVec3,
  lerpColor,
  clamp,
  clamp01,
  smoothstep,
  easeInOutCubic,
  easeOutQuad,
  easeInOutSine,
  setSeed,
  random,
  randomRange,
  randomInt,
  randomVec3,
  randomOnSphere,
  degToRad,
  radToDeg,
  range,
  rangeBetween,
  choose,
  shuffle,
} from "./math";

// ── Vector construction ──

describe("vec3", () => {
  it("creates a Vec3 with correct components", () => {
    const v = vec3(1, 2, 3);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.z).toBe(3);
  });

  it("returns a frozen object", () => {
    const v = vec3(0, 0, 0);
    expect(Object.isFrozen(v)).toBe(true);
  });

  it("vec3(0, 0, 0) is frozen and at origin", () => {
    expect(vec3(0, 0, 0).x).toBe(0);
    expect(vec3(0, 0, 0).y).toBe(0);
    expect(vec3(0, 0, 0).z).toBe(0);
    expect(Object.isFrozen(vec3(0, 0, 0))).toBe(true);
  });
});

describe("vec2", () => {
  it("creates a Vec2 with correct components", () => {
    const v = vec2(5, 7);
    expect(v.x).toBe(5);
    expect(v.y).toBe(7);
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(vec2(0, 0))).toBe(true);
  });
});

// ── Vector arithmetic ──

describe("add", () => {
  it("adds two vectors", () => {
    const v = add(vec3(1, 2, 3), vec3(4, 5, 6));
    expect(v.x).toBe(5);
    expect(v.y).toBe(7);
    expect(v.z).toBe(9);
  });

  it("adding vec3(0, 0, 0) is identity", () => {
    const a = vec3(10, 20, 30);
    const v = add(a, vec3(0, 0, 0));
    expect(v).toEqual(a);
  });

  it("returns a new frozen object", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 5, 6);
    const v = add(a, b);
    expect(v).not.toBe(a);
    expect(Object.isFrozen(v)).toBe(true);
  });
});

describe("sub", () => {
  it("subtracts two vectors", () => {
    const v = sub(vec3(5, 7, 9), vec3(1, 2, 3));
    expect(v.x).toBe(4);
    expect(v.y).toBe(5);
    expect(v.z).toBe(6);
  });

  it("subtraction of self yields vec3(0, 0, 0)", () => {
    const a = vec3(3, 4, 5);
    expect(sub(a, a)).toEqual(vec3(0, 0, 0));
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(sub(vec3(1, 1, 1), vec3(0, 0, 0)))).toBe(true);
  });
});

describe("scale", () => {
  it("scales a vector by a scalar", () => {
    const v = scale(vec3(1, 2, 3), 2);
    expect(v).toEqual(vec3(2, 4, 6));
  });

  it("scale by 0 yields vec3(0, 0, 0)", () => {
    expect(scale(vec3(5, 10, 15), 0)).toEqual(vec3(0, 0, 0));
  });

  it("scale by 1 is identity", () => {
    const a = vec3(7, 8, 9);
    expect(scale(a, 1)).toEqual(a);
  });

  it("scale by negative flips direction", () => {
    expect(scale(vec3(1, -2, 3), -1)).toEqual(vec3(-1, 2, -3));
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(scale(vec3(1, 1, 1), 5))).toBe(true);
  });
});

describe("mul", () => {
  it("component-wise multiplication", () => {
    const v = mul(vec3(2, 3, 4), vec3(5, 6, 7));
    expect(v).toEqual(vec3(10, 18, 28));
  });

  it("multiplying by vec3(0, 0, 0) yields vec3(0, 0, 0)", () => {
    expect(mul(vec3(1, 2, 3), vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(mul(vec3(1, 1, 1), vec3(2, 2, 2)))).toBe(true);
  });
});

describe("normalize", () => {
  it("unit vector remains unit", () => {
    const v = normalize(vec3(1, 0, 0));
    expect(v.x).toBeCloseTo(1);
    expect(v.y).toBeCloseTo(0);
    expect(v.z).toBeCloseTo(0);
  });

  it("arbitrary vector normalizes to length 1", () => {
    const v = normalize(vec3(3, 4, 0));
    expect(length(v)).toBeCloseTo(1);
  });

  it("vec3(0, 0, 0) normalizes to vec3(0, 0, 0)", () => {
    expect(normalize(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(normalize(vec3(5, 0, 0)))).toBe(true);
  });
});

// ── Scalar operations ──

describe("dot", () => {
  it("dot of orthogonal vectors is 0", () => {
    expect(dot(vec3(1, 0, 0), vec3(0, 1, 0))).toBe(0);
  });

  it("dot of parallel vectors equals product of lengths", () => {
    const a = vec3(2, 0, 0);
    const b = vec3(3, 0, 0);
    expect(dot(a, b)).toBeCloseTo(6);
  });

  it("dot of same vector equals length squared", () => {
    const a = vec3(3, 4, 0);
    expect(dot(a, a)).toBeCloseTo(25);
  });
});

describe("length", () => {
  it("length of unit vector is 1", () => {
    expect(length(vec3(1, 0, 0))).toBe(1);
  });

  it("length of 3-4-5 triangle in 2D", () => {
    expect(length(vec3(3, 4, 0))).toBe(5);
  });

  it("length of vec3(0, 0, 0) is 0", () => {
    expect(length(vec3(0, 0, 0))).toBe(0);
  });
});

describe("dist", () => {
  it("distance between same point is 0", () => {
    const a = vec3(5, 6, 7);
    expect(dist(a, a)).toBe(0);
  });

  it("distance is symmetric", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 5, 6);
    expect(dist(a, b)).toBe(dist(b, a));
  });

  it("unit distance along X axis", () => {
    expect(dist(vec3(0, 0, 0), vec3(1, 0, 0))).toBe(1);
  });
});

describe("distSq", () => {
  it("squared distance matches distance squared", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 6, 8);
    const d = dist(a, b);
    expect(distSq(a, b)).toBeCloseTo(d * d);
  });

  it("distance to self is 0", () => {
    const a = vec3(3, 3, 3);
    expect(distSq(a, a)).toBe(0);
  });
});

// ── Interpolation ──

describe("lerp", () => {
  it("t=0 returns a", () => {
    expect(lerp(10, 20, 0)).toBe(10);
  });

  it("t=1 returns b", () => {
    expect(lerp(10, 20, 1)).toBe(20);
  });

  it("t=0.5 returns midpoint", () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });

  it("t outside [0,1] extrapolates", () => {
    expect(lerp(0, 10, 2)).toBe(20);
  });
});

describe("lerpVec3", () => {
  it("t=0 returns a", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 5, 6);
    expect(lerpVec3(a, b, 0)).toEqual(a);
  });

  it("t=1 returns b", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 5, 6);
    expect(lerpVec3(a, b, 1)).toEqual(b);
  });

  it("t=0.5 returns midpoint", () => {
    const v = lerpVec3(vec3(0, 0, 0), vec3(10, 10, 10), 0.5);
    expect(v).toEqual(vec3(5, 5, 5));
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(lerpVec3(vec3(0, 0, 0), vec3(1, 1, 1), 0.5))).toBe(true);
  });
});

describe("lerpColor", () => {
  it("t=0 returns a", () => {
    expect(lerpColor("#ff0000", "#0000ff", 0)).toBe("#ff0000");
  });

  it("t=1 returns b", () => {
    expect(lerpColor("#ff0000", "#0000ff", 1)).toBe("#0000ff");
  });

  it("t=0.5 returns midpoint (purple)", () => {
    expect(lerpColor("#000000", "#ffffff", 0.5)).toBe("#808080");
  });

  it("handles shorthand hex (after padStart)", () => {
    const result = lerpColor("#000000", "#ffffff", 0);
    expect(result).toBe("#000000");
  });
});

// ── Clamping ──

describe("clamp", () => {
  it("value below min returns min", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("value above max returns max", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("value inside range returns value", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("value at min returns min", () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it("value at max returns max", () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });
});

describe("clamp01", () => {
  it("negative clamps to 0", () => {
    expect(clamp01(-0.5)).toBe(0);
  });

  it(">1 clamps to 1", () => {
    expect(clamp01(1.5)).toBe(1);
  });

  it("inner value passes through", () => {
    expect(clamp01(0.5)).toBe(0.5);
  });
});

// ── Easing ──

describe("smoothstep", () => {
  it("x <= edge0 returns 0", () => {
    expect(smoothstep(0, 1, -0.5)).toBe(0);
  });

  it("x >= edge1 returns 1", () => {
    expect(smoothstep(0, 1, 1.5)).toBe(1);
  });

  it("midpoint is ~0.5", () => {
    expect(smoothstep(0, 1, 0.5)).toBeCloseTo(0.5);
  });

  it("is monotonic", () => {
    expect(smoothstep(0, 1, 0.3)).toBeLessThan(smoothstep(0, 1, 0.7));
  });
});

describe("easeInOutCubic", () => {
  it("t=0 returns 0", () => {
    expect(easeInOutCubic(0)).toBe(0);
  });

  it("t=1 returns 1", () => {
    expect(easeInOutCubic(1)).toBeCloseTo(1);
  });

  it("midpoint is 0.5", () => {
    expect(easeInOutCubic(0.5)).toBeCloseTo(0.5);
  });

  it("is monotonic", () => {
    for (let i = 0; i < 10; i++) {
      const t1 = i / 10;
      const t2 = (i + 1) / 10;
      expect(easeInOutCubic(t1)).toBeLessThanOrEqual(easeInOutCubic(t2));
    }
  });
});

describe("easeOutQuad", () => {
  it("t=0 returns 0", () => {
    expect(easeOutQuad(0)).toBe(0);
  });

  it("t=1 returns 1", () => {
    expect(easeOutQuad(1)).toBeCloseTo(1);
  });

  it("is monotonic", () => {
    expect(easeOutQuad(0.2)).toBeLessThan(easeOutQuad(0.8));
  });
});

describe("easeInOutSine", () => {
  it("t=0 returns 0", () => {
    expect(easeInOutSine(0)).toBeCloseTo(0);
  });

  it("t=1 returns 1", () => {
    expect(easeInOutSine(1)).toBeCloseTo(1);
  });

  it("midpoint is 0.5", () => {
    expect(easeInOutSine(0.5)).toBeCloseTo(0.5);
  });
});

// ── Random ──

describe("random (PRNG)", () => {
  it("same seed produces deterministic sequence", () => {
    setSeed(42);
    const seq1 = Array.from({ length: 10 }, () => random());

    setSeed(42);
    const seq2 = Array.from({ length: 10 }, () => random());

    expect(seq1).toEqual(seq2);
  });

  it("different seeds produce different sequences", () => {
    setSeed(42);
    const seq1 = Array.from({ length: 5 }, () => random());

    setSeed(99);
    const seq2 = Array.from({ length: 5 }, () => random());

    expect(seq1).not.toEqual(seq2);
  });

  it("values in [0, 1)", () => {
    setSeed(123);
    for (let i = 0; i < 100; i++) {
      const r = random();
      expect(r).toBeGreaterThanOrEqual(0);
      expect(r).toBeLessThan(1);
    }
  });
});

describe("randomRange", () => {
  it("values are within [min, max)", () => {
    setSeed(456);
    for (let i = 0; i < 50; i++) {
      const r = randomRange(5, 10);
      expect(r).toBeGreaterThanOrEqual(5);
      expect(r).toBeLessThan(10);
    }
  });

  it("deterministic with same seed", () => {
    setSeed(1);
    const a = randomRange(0, 100);
    setSeed(1);
    const b = randomRange(0, 100);
    expect(a).toBe(b);
  });
});

describe("randomInt", () => {
  it("integers in [min, max]", () => {
    setSeed(789);
    for (let i = 0; i < 50; i++) {
      const r = randomInt(1, 6);
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThanOrEqual(6);
      expect(Number.isInteger(r)).toBe(true);
    }
  });

  it("covers entire range eventually", () => {
    setSeed(101);
    const seen = new Set<number>();
    for (let i = 0; i < 200; i++) {
      seen.add(randomInt(1, 6));
    }
    for (let v = 1; v <= 6; v++) {
      expect(seen.has(v)).toBe(true);
    }
  });
});

describe("randomVec3", () => {
  it("components are within [-range, range)", () => {
    setSeed(42);
    for (let i = 0; i < 20; i++) {
      const v = randomVec3(5);
      expect(v.x).toBeGreaterThanOrEqual(-5);
      expect(v.x).toBeLessThan(5);
      expect(v.y).toBeGreaterThanOrEqual(-5);
      expect(v.y).toBeLessThan(5);
      expect(v.z).toBeGreaterThanOrEqual(-5);
      expect(v.z).toBeLessThan(5);
    }
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(randomVec3(1))).toBe(true);
  });
});

describe("randomOnSphere", () => {
  it("points are on sphere surface", () => {
    setSeed(33);
    const r = 5;
    for (let i = 0; i < 20; i++) {
      const v = randomOnSphere(r);
      expect(length(v)).toBeCloseTo(r);
    }
  });

  it("returns a frozen object", () => {
    expect(Object.isFrozen(randomOnSphere(1))).toBe(true);
  });
});

// ── Math constants ──

describe("degToRad", () => {
  it("180 deg = PI rad", () => {
    expect(degToRad(180)).toBeCloseTo(Math.PI);
  });

  it("0 deg = 0 rad", () => {
    expect(degToRad(0)).toBe(0);
  });
});

describe("radToDeg", () => {
  it("PI rad = 180 deg", () => {
    expect(radToDeg(Math.PI)).toBeCloseTo(180);
  });

  it("0 rad = 0 deg", () => {
    expect(radToDeg(0)).toBe(0);
  });
});

// ── Array utilities ──

describe("range", () => {
  it("generates [0, 1, ..., n-1]", () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  it("n=0 returns empty", () => {
    expect(range(0)).toEqual([]);
  });

  it("n=1 returns [0]", () => {
    expect(range(1)).toEqual([0]);
  });
});

describe("rangeBetween", () => {
  it("generates [start, ..., end-1]", () => {
    expect(rangeBetween(3, 7)).toEqual([3, 4, 5, 6]);
  });

  it("empty when start === end", () => {
    expect(rangeBetween(5, 5)).toEqual([]);
  });
});

describe("choose", () => {
  it("returns an element from the array", () => {
    const arr = ["a", "b", "c", "d"] as const;
    setSeed(42);
    for (let i = 0; i < 10; i++) {
      expect(arr).toContain(choose(arr));
    }
  });

  it("works with single-element array", () => {
    const arr = [42] as const;
    expect(choose(arr)).toBe(42);
  });
});

describe("shuffle", () => {
  it("preserves length", () => {
    const arr = [1, 2, 3, 4, 5] as const;
    expect(shuffle(arr)).toHaveLength(arr.length);
  });

  it("preserves all elements", () => {
    const arr = [1, 2, 3, 4, 5] as const;
    const shuffled = shuffle(arr);
    expect([...shuffled].sort()).toEqual([...arr].sort());
  });

  it("does not mutate input", () => {
    const arr = [1, 2, 3, 4, 5] as const;
    const copy = [...arr];
    shuffle(arr);
    expect(arr).toEqual(copy);
  });
});
