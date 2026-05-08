// ── Software Scene: Matrix Digital Rain (multi-plane, glitch, code freeze) ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "../../engine/types";
import { randomRange, clamp01 } from "../../engine/math";
import type { PlaneConfig, Drop, PlaneState, GlitchState, FreezeState, KeySprite } from "./types";

// ── Constants ──

const GRID_WIDTH = 14;
const GRID_HEIGHT = 8;
const GLITCH_INTERVAL_MIN = 12_000;
const GLITCH_INTERVAL_MAX = 28_000;
const GLITCH_FRAMES = 3;
const FREEZE_INTERVAL_MIN = 7_000;
const FREEZE_INTERVAL_MAX = 14_000;
const FREEZE_DURATION = 2_800;
const KEY_CHAR_MAX = 10;
const KEY_CHAR_DURATION = 2_000;
const CASCADE_DURATION = 900;
const FOG_HEIGHT = 1.5;

// ── Plane configurations ──

const PLANE_CONFIGS: readonly PlaneConfig[] = Object.freeze([
  Object.freeze({
    columns: 14,
    maxDropsPerColumn: 14,
    charSize: 0.42,
    speedMin: 0.05,
    speedMax: 0.12,
    opacityMin: 0.25,
    opacityMax: 0.85,
    zOffset: 2.5,
    parallaxFactor: 0.6,
  }),
  Object.freeze({
    columns: 20,
    maxDropsPerColumn: 12,
    charSize: 0.28,
    speedMin: 0.025,
    speedMax: 0.07,
    opacityMin: 0.12,
    opacityMax: 0.55,
    zOffset: 0,
    parallaxFactor: 0.3,
  }),
  Object.freeze({
    columns: 10,
    maxDropsPerColumn: 8,
    charSize: 0.18,
    speedMin: 0.01,
    speedMax: 0.035,
    opacityMin: 0.04,
    opacityMax: 0.22,
    zOffset: -2,
    parallaxFactor: 0.1,
  }),
]);

// ── Code snippets for freeze effect ──

const CODE_SNIPPETS: readonly string[] = Object.freeze([
  "async fn handle",
  "  let user = auth",
  "    .verify(&req)",
  "    .await?;",
  "fn process(data",
  "  : &[u8]) -> Res",
  "  let buf = Vec",
  "    ::with_cap(64",
  "def train_model",
  "  (dataset: Data",
  "  optimizer.zero",
  "  loss = criterio",
  "impl Repository",
  "  for PostgresDb",
  "  async fn query<",
  "    &self, sql: &",
  "const handler = (",
  "  req: Request,",
  "  const token = re",
  "  const user = awa",
  "docker build -t",
  "  app:latest .",
  "  && docker push",
  "cargo build --",
  "  release --targ",
  "  get x86_64-unkn",
  "npm run dev --",
  "  --host 0.0.0.0",
]);

// ── Matrix character set ──

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ012345789日";

// ── Fast character pool (avoids Math.random in hot path) ──

const createCharPool = (): { next: () => string } => {
  const len = MATRIX_CHARS.length;
  // 256-entry ring buffer: pre-filled with random chars, cycled via & 0xFF
  const pool: string[] = [];
  for (let i = 0; i < 256; i++) {
    pool.push(MATRIX_CHARS[Math.floor(Math.random() * len)]);
  }
  let cursor = 0;
  return {
    next: (): string => {
      const ch = pool[cursor];
      cursor = (cursor + 1) & 0xFF;
      return ch;
    },
  };
};

// ── Helpers ──

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

// ── Texture cache (reuses per-character textures instead of recreating) ──

const createTextureCache = () => {
  const cache = new Map<string, THREE.CanvasTexture>();

  const get = (char: string, color: string): THREE.CanvasTexture => {
    const key = `${char}:${color}`;
    const existing = cache.get(key);
    if (existing) return existing;
    const tex = createCharTexture(char, color);
    cache.set(key, tex);
    return tex;
  };

  const dispose = (): void => {
    cache.forEach((tex) => tex.dispose());
    cache.clear();
  };

  return { get, dispose };
};

// ── SpriteMaterial pool (reuses materials for freeze/key sprites) ──

const createMaterialPool = () => {
  const pool: THREE.SpriteMaterial[] = [];
  const defaults: THREE.SpriteMaterialParameters = {
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  };

  const acquire = (map: THREE.CanvasTexture, opacity: number): THREE.SpriteMaterial => {
    const mat = pool.pop();
    if (mat) {
      mat.map = map;
      mat.opacity = opacity;
      mat.needsUpdate = true;
      return mat;
    }
    return new THREE.SpriteMaterial({ ...defaults, map, opacity });
  };

  const release = (mat: THREE.SpriteMaterial): void => {
    mat.map = null;
    mat.opacity = 0;
    pool.push(mat);
  };

  const dispose = (): void => {
    pool.forEach((m) => m.dispose());
    pool.length = 0;
  };

  return { acquire, release, dispose };
};

// ── Create a single plane of drops ──

const createPlane = (
  config: PlaneConfig,
  color: string,
  getTex: (char: string, color: string) => THREE.CanvasTexture,
): PlaneState => {
  const group = new THREE.Group();
  const columnSpacing = GRID_WIDTH / config.columns;

  const totalDrops = config.columns * config.maxDropsPerColumn;
  const drops: Drop[] = [];
  const sprites: THREE.Sprite[] = [];

  const activeColumns = new Set<number>();
  for (let i = 0; i < config.columns; i++) {
    activeColumns.add(i);
  }

  for (let i = 0; i < totalDrops; i++) {
    const col = Math.floor(Math.random() * config.columns);
    const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    const tex = getTex(char, color);

    const spriteMat = new THREE.SpriteMaterial({
      map: tex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(config.charSize, config.charSize, 1);

    const x = -GRID_WIDTH / 2 + col * columnSpacing + columnSpacing / 2;
    const startY = GRID_HEIGHT / 2 + Math.random() * GRID_HEIGHT;
    const startRow = Math.round(startY / config.charSize);

    sprite.position.set(x, startY, randomRange(-0.3, 0.3));
    group.add(sprite);
    sprites.push(sprite);

    drops.push({
      column: col,
      row: startRow,
      speed: randomRange(config.speedMin, config.speedMax),
      opacity: activeColumns.has(col)
        ? randomRange(config.opacityMin, config.opacityMax)
        : randomRange(config.opacityMin * 0.3, config.opacityMax * 0.4),
      isHead: false,
      entranceFactor: 0,
      frozen: false,
    });
  }

  // Mark first (highest Y) drop in each column as head
  const columnHeads = new Map<number, number>();
  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    const existing = columnHeads.get(d.column);
    if (existing === undefined || drops[existing].row < d.row) {
      columnHeads.set(d.column, i);
    }
  }
  columnHeads.forEach((idx) => {
    drops[idx].isHead = true;
    drops[idx].opacity = Math.min(drops[idx].opacity * 1.4, 0.95);
  });

  group.position.z = config.zOffset;

  return { group, config, drops, sprites, columnSpacing };
};

// ── Factory ──

export const createSoftwareScene = (config: SceneConfig): SceneHandle => {
  const root = new THREE.Group();
  let disposed = false;
  let sceneStartTime: number | null = null;
  let cascadeDone = false;

  const { colorScheme: cs } = config;

  // ── Caches & pools ──

  const textureCache = createTextureCache();
  const materialPool = createMaterialPool();
  const charPool = createCharPool();

  // ── Three rain planes ──

  const planes: PlaneState[] = [];
  for (let i = 0; i < PLANE_CONFIGS.length; i++) {
    const plane = createPlane(PLANE_CONFIGS[i], cs.primary, (ch: string, c: string) => textureCache.get(ch, c));
    planes.push(plane);
    root.add(plane.group);
  }

  // ── Ground fog (wide plane with horizontal fade) ──

  const fogCanvas = document.createElement("canvas");
  fogCanvas.width = 256;
  fogCanvas.height = 64;
  const fctx = fogCanvas.getContext("2d")!;
  const vGrad = fctx.createLinearGradient(0, 0, 0, fogCanvas.height);
  vGrad.addColorStop(0, cs.primary);
  vGrad.addColorStop(0.45, cs.primary);
  vGrad.addColorStop(1, "rgba(0,0,0,0)");
  fctx.fillStyle = vGrad;
  fctx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
  const hMask = fctx.createLinearGradient(0, 0, fogCanvas.width, 0);
  hMask.addColorStop(0, "rgba(0,0,0,0)");
  hMask.addColorStop(0.15, "rgba(0,0,0,1)");
  hMask.addColorStop(0.85, "rgba(0,0,0,1)");
  hMask.addColorStop(1, "rgba(0,0,0,0)");
  fctx.globalCompositeOperation = "destination-in";
  fctx.fillStyle = hMask;
  fctx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
  const fogTex = new THREE.CanvasTexture(fogCanvas);
  const fogGeo = new THREE.PlaneGeometry(GRID_WIDTH * 3, FOG_HEIGHT * 2);
  const fogMat = new THREE.MeshBasicMaterial({
    map: fogTex,
    transparent: true,
    opacity: 0.04,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const fogPlane = new THREE.Mesh(fogGeo, fogMat);
  fogPlane.position.set(0, -GRID_HEIGHT / 2 - FOG_HEIGHT / 2 + 0.3, -0.5);
  root.add(fogPlane);

  // ── Glitch state ──

  const glitch: GlitchState = { active: false, framesRemaining: 0, intensity: 0 };
  let glitchTimer = 0;

  // ── Freeze state ──

  const freeze: FreezeState = { column: -1, plane: -1, timer: 0, active: false };
  let freezeTimer = 0;
  let freezeSpriteData: Array<{ sprite: THREE.Sprite; plane: PlaneState; idx: number }> = [];

  // ── Keyboard char sprites ──

  const keySprites: KeySprite[] = [];

  // ── Pre-allocated reusable objects (zero GC per frame) ──

  const _vec3 = new THREE.Vector3();
  const _projScreen = new THREE.Matrix4();
  const _frustum = new THREE.Frustum();

  // ── Entrance progress tracking ──

  const updateCascade = (elapsedMs: number): void => {
    if (cascadeDone) return;
    let allDone = true;
    for (let pi = 0; pi < planes.length; pi++) {
      const plane = planes[pi];
      const drops = plane.drops;
      for (let di = 0; di < drops.length; di++) {
        const d = drops[di];
        if (d.entranceFactor < 1) {
          const delay = (d.column / plane.config.columns) * CASCADE_DURATION;
          d.entranceFactor = clamp01(elapsedMs / Math.max(delay, 1));
          if (d.entranceFactor < 1) allDone = false;
        }
      }
    }
    if (allDone) cascadeDone = true;
  };

  // ── Update ──

  const update = (time: number, _delta: number, mouse: import("../../engine/types").Vec2 | null): void => {
    if (disposed) return;

    const now = performance.now();

    // Track scene start
    if (sceneStartTime === null) {
      sceneStartTime = now;
    }

    // Cascade entrance
    const elapsedSinceCreation = now - (sceneStartTime ?? now);
    updateCascade(elapsedSinceCreation);

    // ── Per-plane rain update (with frustum culling) ──

    // Compute frustum from camera once per frame
    _projScreen.multiplyMatrices(config.camera.projectionMatrix, config.camera.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(_projScreen);

    for (let pi = 0; pi < planes.length; pi++) {
      const plane = planes[pi];
      const drops = plane.drops;
      const sprites = plane.sprites;
      const pc = plane.config;
      const colSpacing = plane.columnSpacing;
      const groupZ = plane.group.position.z;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        if (d.opacity <= 0 || d.entranceFactor < 1) continue;
        if (d.frozen) continue;

        d.row -= d.speed;
        const sprite = sprites[i];
        if (!sprite) continue;

        const localX = -GRID_WIDTH / 2 + d.column * colSpacing + colSpacing / 2;
        const localY = d.row * pc.charSize;
        sprite.position.set(localX, localY, 0);

        // Frustum culling: compute cheap world position (skip getWorldPosition overhead)
        _vec3.set(localX, localY, groupZ);
        sprite.visible = _frustum.containsPoint(_vec3);

        // Head respawn (reuse cached texture)
        if (d.isHead && d.row * pc.charSize < -GRID_HEIGHT / 2 - 1) {
          d.row = Math.round((GRID_HEIGHT / 2 + 1) / pc.charSize);
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.map = textureCache.get(charPool.next(), cs.primary);
          mat.needsUpdate = true;
        }

        // Trail respawn (reuse cached texture)
        if (!d.isHead && d.row * pc.charSize < -GRID_HEIGHT / 2 - 2) {
          d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / pc.charSize);
          d.speed = randomRange(pc.speedMin, pc.speedMax);
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.map = textureCache.get(charPool.next(), cs.primary);
          mat.needsUpdate = true;
        }

        const baseOpacity = d.isHead ? 0.6 + Math.sin(time * 12 + i) * 0.15 : d.opacity * 0.55;
        const mat = sprite.material as THREE.SpriteMaterial;
        mat.opacity = clamp01(baseOpacity);
      }
    }

    // ── Glitch ──

    if (glitch.active) {
      glitch.framesRemaining--;
      root.position.x = (Math.random() - 0.5) * glitch.intensity;
      root.position.y = (Math.random() - 0.5) * glitch.intensity * 0.4;

      if (glitch.framesRemaining <= 0) {
        glitch.active = false;
        root.position.x = 0;
        root.position.y = 0;
      }
    } else {
      glitchTimer += _delta * 1000;
      if (glitchTimer > randomRange(GLITCH_INTERVAL_MIN, GLITCH_INTERVAL_MAX)) {
        glitch.active = true;
        glitch.framesRemaining = GLITCH_FRAMES;
        glitch.intensity = randomRange(1.0, 2.5);
        glitchTimer = 0;
      }
    }

    // ── Code freeze ──

    if (!freeze.active) {
      freezeTimer += _delta * 1000;
      if (freezeTimer > randomRange(FREEZE_INTERVAL_MIN, FREEZE_INTERVAL_MAX)) {
        const rPlane = Math.floor(Math.random() * planes.length);
        const pState = planes[rPlane];
        const rCol = Math.floor(Math.random() * pState.config.columns);
        const pConfig = pState.config;
        const drops = pState.drops;

        freeze.active = true;
        freeze.plane = rPlane;
        freeze.column = rCol;
        freeze.timer = 0;
        freezeTimer = 0;

        // Freeze all drops in that column
        for (let i = 0; i < drops.length; i++) {
          if (drops[i].column === rCol) {
            drops[i].frozen = true;
          }
        }

        // Spawn code snippet sprites (use material pool)
        const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        const chars = snippet.split("");
        const x = -GRID_WIDTH / 2 + rCol * pState.columnSpacing + pState.columnSpacing / 2;
        const startY = GRID_HEIGHT / 2 - 1;

        freezeSpriteData = [];

        for (let ci = 0; ci < chars.length; ci++) {
          const ch = chars[ci];
          const tex = textureCache.get(ch, cs.tertiary);
          const mat = materialPool.acquire(tex, 0.7);
          const sprite = new THREE.Sprite(mat);
          sprite.scale.set(pConfig.charSize * 1.3, pConfig.charSize * 1.3, 1);
          sprite.position.set(x, startY - ci * pConfig.charSize * 1.1, 0);
          pState.group.add(sprite);
          freezeSpriteData.push({ sprite, plane: pState, idx: -1 });
        }
      }
    } else {
      freeze.timer += _delta * 1000;
      if (freeze.timer > FREEZE_DURATION) {
        // Unfreeze
        const pState = planes[freeze.plane];
        if (pState) {
          const drops = pState.drops;
          for (let i = 0; i < drops.length; i++) {
            if (drops[i].column === freeze.column) drops[i].frozen = false;
          }
        }

        // Remove snippet sprites (return materials to pool)
        for (let fi = 0; fi < freezeSpriteData.length; fi++) {
          const { sprite, plane: ps } = freezeSpriteData[fi];
          ps.group.remove(sprite);
          materialPool.release(sprite.material as THREE.SpriteMaterial);
        }
        freezeSpriteData = [];
        freeze.active = false;
        freeze.column = -1;
        freeze.plane = -1;
      }
    }

    // ── Keyboard char sprites ──

    for (let i = keySprites.length - 1; i >= 0; i--) {
      const ks = keySprites[i];
      ks.timer += _delta * 1000;
      const prog = ks.timer / KEY_CHAR_DURATION;
      const scale = ks.baseScale * (1 - prog);
      ks.sprite.scale.setScalar(Math.max(scale, 0.02));
      ks.sprite.position.y = ks.startY + ks.speedY * prog;
      (ks.sprite.material as THREE.SpriteMaterial).opacity = clamp01(1 - prog);

      if (prog >= 1) {
        root.remove(ks.sprite);
        materialPool.release(ks.sprite.material as THREE.SpriteMaterial);
        keySprites.splice(i, 1);
      }
    }

    void mouse;
  };

  // ── onKeyPress (keyboard easter egg) ──

  const onKeyPress = (key: string): void => {
    if (disposed) return;
    if (key.length !== 1) return;
    if (keySprites.length >= KEY_CHAR_MAX) {
      const oldest = keySprites.shift();
      if (oldest) {
        root.remove(oldest.sprite);
        materialPool.release(oldest.sprite.material as THREE.SpriteMaterial);
      }
    }

    const tex = textureCache.get(key, cs.tertiary);
    const mat = materialPool.acquire(tex, 1);
    const sprite = new THREE.Sprite(mat);
    const baseScale = randomRange(0.5, 1.0);
    sprite.scale.setScalar(baseScale);
    sprite.position.set(
      randomRange(-GRID_WIDTH / 3, GRID_WIDTH / 3),
      randomRange(GRID_HEIGHT / 4, GRID_HEIGHT / 2),
      randomRange(-0.5, 0.5),
    );
    root.add(sprite);

    keySprites.push({
      sprite,
      timer: 0,
      baseScale,
      startY: sprite.position.y,
      speedY: randomRange(-0.8, -0.2),
    });
  };

  // ── getDensity (for bloom breathing) ──

  const getDensity = (): number => {
    let activeCount = 0;
    let totalCount = 0;
    for (let pi = 0; pi < planes.length; pi++) {
      const plane = planes[pi];
      const drops = plane.drops;
      const sprites = plane.sprites;
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        totalCount++;
        if (d.opacity > 0 && d.entranceFactor >= 1 && !d.frozen) {
          const sprite = sprites[i];
          if (sprite) {
            const y = sprite.position.y;
            if (y > -GRID_HEIGHT / 2 - 1 && y < GRID_HEIGHT / 2 + 1) {
              activeCount++;
            }
          }
        }
      }
    }
    return totalCount === 0 ? 0 : clamp01(activeCount / totalCount);
  };

  // ── dissolve (pixel dissolve for transitions) ──

  const dissolve = (progress: number): void => {
    for (let pi = 0; pi < planes.length; pi++) {
      const plane = planes[pi];
      const drops = plane.drops;
      const sprites = plane.sprites;
      const pConfig = plane.config;
      const len = drops.length;
      for (let i = 0; i < len; i++) {
        const d = drops[i];
        const threshold = (i / len) * 0.9;
        const sprite = sprites[i];
        if (!sprite) continue;

        if (progress > threshold) {
          const localP = clamp01((progress - threshold) / (1 - threshold + 0.001));
          sprite.scale.setScalar(pConfig.charSize * (1 - localP));
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.opacity = clamp01(d.opacity * (1 - localP));
        }
      }
    }

    fogMat.opacity = 0.12 * (1 - progress);
  };

  // ── entrance ──

  const entrance = (_elapsed: number): void => {
    // Cascade is handled internally via updateCascade / sceneStartTime
    // This is a no-op hook for the transition system
    void _elapsed;
  };

  // ── setOpacity ──

  const setOpacity = (t: number): void => {
    for (let pi = 0; pi < planes.length; pi++) {
      const plane = planes[pi];
      const drops = plane.drops;
      const sprites = plane.sprites;
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        const sprite = sprites[i];
        if (!sprite) continue;
        const entranceF = d.entranceFactor < 1 ? d.entranceFactor : 1;
        const mat = sprite.material as THREE.SpriteMaterial;
        mat.opacity = clamp01(d.opacity * entranceF * t * 0.8);
      }
    }

    fogMat.opacity = 0.12 * t;
  };

  // ── dispose ──

  const dispose = (): void => {
    disposed = true;

    const disposeChild = (child: THREE.Object3D): void => {
      if (child instanceof THREE.Sprite) {
        (child.material as THREE.SpriteMaterial).map?.dispose();
        (child.material as THREE.SpriteMaterial).dispose();
      } else if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const mat = child.material as THREE.Material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => m.dispose());
        } else {
          mat.dispose();
        }
      } else if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      } else if (child instanceof THREE.Points) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    };

    root.traverse(disposeChild);

    fogMat.dispose();
    fogTex.dispose();

    textureCache.dispose();
    materialPool.dispose();

    // Clear key sprites
    for (let i = 0; i < keySprites.length; i++) {
      const mat = keySprites[i].sprite.material as THREE.SpriteMaterial;
      mat.map?.dispose();
      mat.dispose();
    }
    keySprites.length = 0;

    // Clear freeze sprites
    for (let i = 0; i < freezeSpriteData.length; i++) {
      const mat = freezeSpriteData[i].sprite.material as THREE.SpriteMaterial;
      mat.map?.dispose();
      mat.dispose();
    }
    freezeSpriteData.length = 0;

    root.clear();
  };

  return {
    update,
    dispose,
    setOpacity,
    getObjects: () => [root],
    onKeyPress,
    getDensity,
    dissolve,
    entrance,
  };
};
