// ── Software Scene: Matrix Digital Rain (multi-plane, glitch, code freeze) ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "../../engine/types";
import { range, randomRange, clamp01 } from "../../engine/math";
import type { PlaneConfig, Drop, PlaneState, GlitchState, FreezeState, KeySprite } from "./types";
import { createMatrixAtlas, disposeAtlas } from "./atlas";
import type { AtlasData } from "./atlas";
import { createRainMaterial } from "./rain-shader";

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

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ012345789日";

const generateChar = (): string => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];


// ── Create a single plane of drops (Points + sprite atlas) ──

const createPlane = (
  config: PlaneConfig,
  atlas: AtlasData,
  rainMat: THREE.ShaderMaterial,
): PlaneState => {
  const group = new THREE.Group();
  const columnSpacing = GRID_WIDTH / config.columns;
  const totalDrops = config.columns * config.maxDropsPerColumn;

  const positions = new Float32Array(totalDrops * 3);
  const charIndices = new Float32Array(totalDrops);
  const opacities = new Float32Array(totalDrops);

  const activeColumns = new Set<number>();
  range(config.columns).forEach((i) => activeColumns.add(i));

  const drops: Drop[] = [];

  range(totalDrops).forEach((i) => {
    const col = Math.floor(Math.random() * config.columns);
    const char = generateChar();
    const x = -GRID_WIDTH / 2 + col * columnSpacing + columnSpacing / 2;
    const startY = GRID_HEIGHT / 2 + Math.random() * GRID_HEIGHT;
    const startRow = Math.round(startY / config.charSize);

    positions[i * 3] = x;
    positions[i * 3 + 1] = startY;
    positions[i * 3 + 2] = randomRange(-0.3, 0.3);

    const isActive = activeColumns.has(col);
    drops.push({
      column: col,
      row: startRow,
      speed: randomRange(config.speedMin, config.speedMax),
      opacity: isActive
        ? randomRange(config.opacityMin, config.opacityMax)
        : randomRange(config.opacityMin * 0.3, config.opacityMax * 0.4),
      isHead: false,
      entranceFactor: 0,
      frozen: false,
      charIndex: atlas.indexForChar(char),
    });
  });

  // Mark heads (highest Y drop per column)
  const columnHeads = new Map<number, number>();
  drops.forEach((d, i) => {
    const existing = columnHeads.get(d.column);
    if (existing === undefined || drops[existing].row < d.row) {
      columnHeads.set(d.column, i);
    }
  });
  columnHeads.forEach((idx) => {
    drops[idx].isHead = true;
    drops[idx].opacity = Math.min(drops[idx].opacity * 1.4, 0.95);
  });

  // Init buffer data (all start invisible for cascade)
  drops.forEach((d, i) => {
    charIndices[i] = d.charIndex;
    opacities[i] = 0;
  });

  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  const charAttr = new THREE.BufferAttribute(charIndices, 1);
  const opacAttr = new THREE.BufferAttribute(opacities, 1);

  posAttr.setUsage(THREE.DynamicDrawUsage);
  charAttr.setUsage(THREE.DynamicDrawUsage);
  opacAttr.setUsage(THREE.DynamicDrawUsage);

  geo.setAttribute("position", posAttr);
  geo.setAttribute("charIndex", charAttr);
  geo.setAttribute("aOpacity", opacAttr);

  const points = new THREE.Points(geo, rainMat);
  points.frustumCulled = false;

  group.add(points);
  group.position.z = config.zOffset;

  return { group, points, config, drops, columnSpacing, geo };
};

// ── Factory ──

export const createSoftwareScene = (config: SceneConfig): SceneHandle => {
  const root = new THREE.Group();
  let disposed = false;
  let sceneStartTime: number | null = null;
  let cascadeDone = false;

  const { colorScheme: cs } = config;

  // ── Rain planes (Points + sprite atlas) ──

  const atlas = createMatrixAtlas(cs.primary);
  const rainMat = createRainMaterial(atlas);

  const maxPlanes = config.softwarePlanes ?? 3;
  const planes: PlaneState[] = PLANE_CONFIGS
    .slice(0, maxPlanes)
    .map((pc) => createPlane(pc, atlas, rainMat));
  planes.forEach((p) => root.add(p.group));

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

  // ── Scene-space mouse coordinate ──



  // ── Entrance progress tracking ──

  const updateCascade = (elapsedMs: number): void => {
    if (cascadeDone) return;
    let allDone = true;
    planes.forEach((plane) => {
      plane.drops.forEach((d) => {
        if (d.entranceFactor < 1) {
          const delay = (d.column / plane.config.columns) * CASCADE_DURATION;
          d.entranceFactor = clamp01(elapsedMs / Math.max(delay, 1));
          if (d.entranceFactor < 1) allDone = false;
        }
      });
    });
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

    // ── Per-plane rain update ──

    planes.forEach((plane) => {
      const posAttr = plane.geo.attributes.position as THREE.BufferAttribute;
      const charAttr = plane.geo.attributes.charIndex as THREE.BufferAttribute;
      const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;

      plane.drops.forEach((d, i) => {
        if (d.opacity <= 0 || d.entranceFactor < 1) return;
        if (d.frozen) return;

        d.row -= d.speed;

        const localX = -GRID_WIDTH / 2 + d.column * plane.columnSpacing + plane.columnSpacing / 2;
        posAttr.array[i * 3] = localX;
        posAttr.array[i * 3 + 1] = d.row * plane.config.charSize;

        // Head respawn: recycle to top of screen, pick new random char from atlas
        if (d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 1) {
          d.row = Math.round((GRID_HEIGHT / 2 + 1) / plane.config.charSize);
          d.charIndex = atlas.indexForChar(generateChar());
          charAttr.array[i] = d.charIndex;
          charAttr.needsUpdate = true;
        }

        // Trail respawn
        if (!d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 2) {
          d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / plane.config.charSize);
          d.speed = randomRange(plane.config.speedMin, plane.config.speedMax);
          d.charIndex = atlas.indexForChar(generateChar());
          charAttr.array[i] = d.charIndex;
          charAttr.needsUpdate = true;
        }

        // Opacity with sinusoidal shimmer on heads
        const baseOpacity = d.isHead
          ? 0.6 + Math.sin(time * 12 + i) * 0.15
          : d.opacity * 0.55;
        opacAttr.array[i] = clamp01(baseOpacity);
      });

      posAttr.needsUpdate = true;
      opacAttr.needsUpdate = true;
    });

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
        // Pick a random plane and column
        const rPlane = Math.floor(Math.random() * planes.length);
        const pState = planes[rPlane];
        const rCol = Math.floor(Math.random() * pState.config.columns);

        freeze.active = true;
        freeze.plane = rPlane;
        freeze.column = rCol;
        freeze.timer = 0;
        freezeTimer = 0;

        // Freeze all drops in that column
        const frozenDrops: Drop[] = [];
        pState.drops.forEach((d) => {
          if (d.column === rCol) {
            d.frozen = true;
            frozenDrops.push(d);
          }
        });

        // Spawn code snippet sprites
        const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        const chars = snippet.split("");
        const pConfig = pState.config;
        const x = -GRID_WIDTH / 2 + rCol * pState.columnSpacing + pState.columnSpacing / 2;
        const startY = GRID_HEIGHT / 2 - 1;

        freezeSpriteData = [];

        chars.forEach((ch, ci) => {
          const tex = createCharTexture(ch, cs.tertiary);
          const mat = new THREE.SpriteMaterial({
            map: tex,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
          });
          const sprite = new THREE.Sprite(mat);
          sprite.scale.set(pConfig.charSize * 1.3, pConfig.charSize * 1.3, 1);
          sprite.position.set(x, startY - ci * pConfig.charSize * 1.1, 0);
          pState.group.add(sprite);
          freezeSpriteData.push({ sprite, plane: pState, idx: -1 });
        });
      }
    } else {
      freeze.timer += _delta * 1000;
      if (freeze.timer > FREEZE_DURATION) {
        // Unfreeze
        const pState = planes[freeze.plane];
        if (pState) {
          pState.drops.forEach((d) => {
            if (d.column === freeze.column) d.frozen = false;
          });
        }

        // Remove snippet sprites
        freezeSpriteData.forEach(({ sprite, plane: ps }) => {
          ps.group.remove(sprite);
          (sprite.material as THREE.SpriteMaterial).map?.dispose();
          (sprite.material as THREE.SpriteMaterial).dispose();
        });
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
        (ks.sprite.material as THREE.SpriteMaterial).map?.dispose();
        (ks.sprite.material as THREE.SpriteMaterial).dispose();
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
        (oldest.sprite.material as THREE.SpriteMaterial).map?.dispose();
        (oldest.sprite.material as THREE.SpriteMaterial).dispose();
      }
    }

    const tex = createCharTexture(key, cs.tertiary);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
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
    planes.forEach((plane) => {
      const posAttr = plane.geo.attributes.position as THREE.BufferAttribute;
      plane.drops.forEach((d, i) => {
        totalCount++;
        if (d.opacity > 0 && d.entranceFactor >= 1 && !d.frozen) {
          const y = posAttr.array[i * 3 + 1];
          if (y > -GRID_HEIGHT / 2 - 1 && y < GRID_HEIGHT / 2 + 1) {
            activeCount++;
          }
        }
      });
    });
    return totalCount === 0 ? 0 : clamp01(activeCount / totalCount);
  };

  // ── dissolve (pixel dissolve for transitions) ──

  const dissolve = (progress: number): void => {
    planes.forEach((plane) => {
      const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;
      plane.drops.forEach((d, i) => {
        const threshold = (i / plane.drops.length) * 0.9;
        if (progress > threshold) {
          const localP = clamp01((progress - threshold) / (1 - threshold + 0.001));
          opacAttr.array[i] = clamp01(d.opacity * (1 - localP));
        }
      });
      opacAttr.needsUpdate = true;
    });

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
    planes.forEach((plane) => {
      const opacAttr = plane.geo.attributes.aOpacity as THREE.BufferAttribute;
      plane.drops.forEach((d, i) => {
        const entranceF = d.entranceFactor < 1 ? d.entranceFactor : 1;
        opacAttr.array[i] = clamp01(d.opacity * entranceF * t * 0.8);
      });
      opacAttr.needsUpdate = true;
    });

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

    rainMat.dispose();
    disposeAtlas(atlas);

    // Clear key sprites
    keySprites.forEach((ks) => {
      (ks.sprite.material as THREE.SpriteMaterial).map?.dispose();
      (ks.sprite.material as THREE.SpriteMaterial).dispose();
    });
    keySprites.length = 0;

    // Clear freeze sprites
    freezeSpriteData.forEach(({ sprite }) => {
      (sprite.material as THREE.SpriteMaterial).map?.dispose();
      (sprite.material as THREE.SpriteMaterial).dispose();
    });
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
