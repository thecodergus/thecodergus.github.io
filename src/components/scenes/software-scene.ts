// ── Software Scene: Matrix Digital Rain (multi-plane, interactive, glitch, code freeze) ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig } from "./types";
import { range, randomRange, clamp01 } from "./math";

// ── Constants ──

const GRID_WIDTH = 14;
const GRID_HEIGHT = 8;
const MOUSE_WAKE_RADIUS = 1.8;
const MOUSE_WAKE_BOOST = 0.35;
const GLITCH_INTERVAL_MIN = 12_000;
const GLITCH_INTERVAL_MAX = 28_000;
const GLITCH_FRAMES = 3;
const FREEZE_INTERVAL_MIN = 7_000;
const FREEZE_INTERVAL_MAX = 14_000;
const FREEZE_DURATION = 2_800;
const KEY_CHAR_MAX = 10;
const KEY_CHAR_DURATION = 2_000;
const GRID_LINE_COUNT = 20;
const PACKETS_PER_LINE = 2;
const CASCADE_DURATION = 900;
const FOG_HEIGHT = 1.5;

// ── Plane configurations ──

interface PlaneConfig {
  readonly columns: number;
  readonly maxDropsPerColumn: number;
  readonly charSize: number;
  readonly speedMin: number;
  readonly speedMax: number;
  readonly opacityMin: number;
  readonly opacityMax: number;
  readonly zOffset: number;
  readonly parallaxFactor: number;
}

const PLANE_CONFIGS: readonly PlaneConfig[] = Object.freeze([
  Object.freeze({
    columns: 9,
    maxDropsPerColumn: 10,
    charSize: 0.42,
    speedMin: 0.04,
    speedMax: 0.09,
    opacityMin: 0.25,
    opacityMax: 0.85,
    zOffset: 2.5,
    parallaxFactor: 0.6,
  }),
  Object.freeze({
    columns: 14,
    maxDropsPerColumn: 8,
    charSize: 0.28,
    speedMin: 0.018,
    speedMax: 0.05,
    opacityMin: 0.12,
    opacityMax: 0.55,
    zOffset: 0,
    parallaxFactor: 0.3,
  }),
  Object.freeze({
    columns: 7,
    maxDropsPerColumn: 6,
    charSize: 0.18,
    speedMin: 0.008,
    speedMax: 0.028,
    opacityMin: 0.04,
    opacityMax: 0.22,
    zOffset: -2,
    parallaxFactor: 0.1,
  }),
]);

// ── Internal types ──

interface Drop {
  column: number;
  row: number;
  speed: number;
  opacity: number;
  isHead: boolean;
  entranceFactor: number;
  frozen: boolean;
}

interface PlaneState {
  group: THREE.Group;
  config: PlaneConfig;
  drops: Drop[];
  sprites: THREE.Sprite[];
  columnSpacing: number;
}

interface GlitchState {
  active: boolean;
  framesRemaining: number;
  intensity: number;
}

interface FreezeState {
  column: number;
  plane: number;
  timer: number;
  active: boolean;
}

interface KeySprite {
  sprite: THREE.Sprite;
  timer: number;
  baseScale: number;
  startY: number;
  speedY: number;
}

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

const generateChar = (): string => {
  const r = Math.random();
  if (r < 0.35) return String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
  if (r < 0.65) return Math.random() > 0.5 ? "0" : "1";
  if (r < 0.85) return String.fromCharCode(0x4E00 + Math.floor(Math.random() * 100));
  return String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
};

const hexToRGB = (hex: string): { r: number; g: number; b: number } => ({
  r: parseInt(hex.slice(1, 3), 16) / 255,
  g: parseInt(hex.slice(3, 5), 16) / 255,
  b: parseInt(hex.slice(5, 7), 16) / 255,
});

const createGradientTexture = (
  colorTop: string,
  colorBottom: string,
  transparentBottom: boolean,
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createLinearGradient(0, 0, 0, 64);
  gradient.addColorStop(0, colorTop);
  if (transparentBottom) {
    gradient.addColorStop(1, "rgba(0,0,0,0)");
  } else {
    gradient.addColorStop(1, colorBottom);
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1, 64);
  return new THREE.CanvasTexture(canvas);
};

// ── Create a single plane of drops ──

const createPlane = (
  config: PlaneConfig,
  color: string,
): PlaneState => {
  const group = new THREE.Group();
  const columnSpacing = GRID_WIDTH / config.columns;

  const totalDrops = config.columns * config.maxDropsPerColumn;
  const drops: Drop[] = [];
  const sprites: THREE.Sprite[] = [];

  const activeColumns = new Set<number>();
  range(Math.floor(config.columns * 0.65)).forEach(() => {
    activeColumns.add(Math.floor(Math.random() * config.columns));
  });

  range(totalDrops).forEach(() => {
    const col = Math.floor(Math.random() * config.columns);
    const char = generateChar();
    const tex = createCharTexture(char, color);

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
  });

  // Mark first (highest Y) drop in each column as head
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

  // ── Background grid ──

  const gridGroup = new THREE.Group();
  const gridLineMat = new THREE.LineBasicMaterial({
    color: cs.primary,
    transparent: true,
    opacity: 0.04,
    depthWrite: false,
  });

  range(GRID_LINE_COUNT).forEach((i) => {
    const y = -GRID_HEIGHT / 2 + (i / (GRID_LINE_COUNT - 1)) * GRID_HEIGHT;
    const pts = [new THREE.Vector3(-GRID_WIDTH / 2, y, 0), new THREE.Vector3(GRID_WIDTH / 2, y, 0)];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    gridGroup.add(new THREE.Line(geo, gridLineMat.clone()));
  });

  root.add(gridGroup);

  // ── Circuit/trace decoration ──

  const circuitGroup = new THREE.Group();
  const circuitMat = new THREE.LineBasicMaterial({
    color: cs.primary,
    transparent: true,
    opacity: 0.05,
    depthWrite: false,
  });

  range(6).forEach(() => {
    const x1 = randomRange(-GRID_WIDTH / 2, GRID_WIDTH / 2);
    const y1 = randomRange(-GRID_HEIGHT / 2, GRID_HEIGHT / 2);
    const x2 = x1 + randomRange(-2, 2);
    const y2 = y1;
    const x3 = x2;
    const y3 = y2 + randomRange(-2, 2);

    const pts = [new THREE.Vector3(x1, y1, 0), new THREE.Vector3(x2, y2, 0), new THREE.Vector3(x3, y3, 0)];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    circuitGroup.add(new THREE.Line(geo, circuitMat.clone()));

    const nodeGeo = new THREE.RingGeometry(0.06, 0.1, 16, 1);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: cs.primary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(x1, y1, 0.01);
    circuitGroup.add(node);
  });

  root.add(circuitGroup);

  // ── Three rain planes ──

  const planes: PlaneState[] = PLANE_CONFIGS.map((pc) => createPlane(pc, cs.secondary));
  planes.forEach((p) => root.add(p.group));

  // ── Data packets (traveling dots on grid lines) ──

  const totalPackets = GRID_LINE_COUNT * PACKETS_PER_LINE;
  const pktGeom = new THREE.BufferGeometry();
  const pktPositions = new Float32Array(totalPackets * 3);
  const pktColors = new Float32Array(totalPackets * 3);
  pktGeom.setAttribute("position", new THREE.BufferAttribute(pktPositions, 3));
  pktGeom.setAttribute("color", new THREE.BufferAttribute(pktColors, 3));

  const pktMat = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
  });

  const pktPoints = new THREE.Points(pktGeom, pktMat);
  root.add(pktPoints);

  interface Packet {
    lineIndex: number;
    y: number;
    x: number;
    speed: number;
  }

  const packets: Packet[] = [];
  range(totalPackets).forEach((i) => {
    const lineIndex = Math.floor(i / PACKETS_PER_LINE);
    const y = -GRID_HEIGHT / 2 + (lineIndex / (GRID_LINE_COUNT - 1)) * GRID_HEIGHT;
    packets.push({
      lineIndex,
      y,
      x: randomRange(-GRID_WIDTH / 2, GRID_WIDTH / 2),
      speed: randomRange(0.02, 0.06),
    });
  });

  // ── Ground fog ──

  const fogTex = createGradientTexture(cs.secondary, "#000000", true);
  const fogGeo = new THREE.PlaneGeometry(GRID_WIDTH, FOG_HEIGHT);
  const fogMat = new THREE.MeshBasicMaterial({
    map: fogTex,
    transparent: true,
    opacity: 0.12,
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

  const SCENE_HALF_WIDTH = 5.5;
  const SCENE_HALF_HEIGHT = 3.2;

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

  const update = (time: number, _delta: number, mouse: import("./types").Vec2 | null): void => {
    if (disposed) return;

    const now = performance.now();

    // Track scene start
    if (sceneStartTime === null) {
      sceneStartTime = now;
    }

    // Cascade entrance
    const elapsedSinceCreation = now - (sceneStartTime ?? now);
    updateCascade(elapsedSinceCreation);

    // Scene-space mouse
    const sceneMouseX = mouse ? mouse.x * SCENE_HALF_WIDTH : 999;
    const sceneMouseY = mouse ? mouse.y * SCENE_HALF_HEIGHT : 999;

    // ── Per-plane rain update ──

    planes.forEach((plane) => {
      // Parallax offset from mouse
      if (mouse) {
        plane.group.position.x = mouse.x * plane.config.parallaxFactor * 2.5;
        plane.group.position.y = mouse.y * plane.config.parallaxFactor * 1.5;
      }

      plane.drops.forEach((d, i) => {
        if (d.opacity <= 0 || d.entranceFactor < 1) return;
        if (d.frozen) return;

        d.row -= d.speed;
        const sprite = plane.sprites[i];
        if (!sprite) return;

        // Position in local space (group is already offset for parallax)
        const localX = -GRID_WIDTH / 2 + d.column * plane.columnSpacing + plane.columnSpacing / 2;
        sprite.position.x = localX;
        sprite.position.y = d.row * plane.config.charSize;

        // Mouse wake
        const dx = localX - sceneMouseX;
        const dy = sprite.position.y - sceneMouseY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        let wakeBoost = 0;
        if (distToMouse < MOUSE_WAKE_RADIUS) {
          wakeBoost = MOUSE_WAKE_BOOST * (1 - distToMouse / MOUSE_WAKE_RADIUS);
        }

        // Head respawn
        if (d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 1) {
          d.row = Math.round((GRID_HEIGHT / 2 + 1) / plane.config.charSize);
          const newTex = createCharTexture(generateChar(), cs.secondary);
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.map?.dispose();
          mat.map = newTex;
          mat.needsUpdate = true;
        }

        // Trail respawn
        if (!d.isHead && d.row * plane.config.charSize < -GRID_HEIGHT / 2 - 2) {
          d.row = Math.round((GRID_HEIGHT / 2 + Math.random() * 2) / plane.config.charSize);
          d.speed = randomRange(plane.config.speedMin, plane.config.speedMax);
          const newTex = createCharTexture(generateChar(), cs.secondary);
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.map?.dispose();
          mat.map = newTex;
          mat.needsUpdate = true;
        }

        // Final opacity: base + wake
        const baseOpacity = d.isHead ? 0.6 + Math.sin(time * 12 + i) * 0.15 : d.opacity * 0.55;
        const mat = sprite.material as THREE.SpriteMaterial;
        mat.opacity = clamp01(baseOpacity + wakeBoost);
      });
    });

    // ── Data packets ──

    packets.forEach((p, i) => {
      p.x += p.speed;
      if (p.x > GRID_WIDTH / 2) {
        p.x = -GRID_WIDTH / 2;
        p.speed = randomRange(0.02, 0.06);
      }

      pktPositions[i * 3] = p.x;
      pktPositions[i * 3 + 1] = p.y;
      pktPositions[i * 3 + 2] = 0;

      const opacity = 0.3 + Math.sin(time * 8 + i * 0.7) * 0.2;
      const c = hexToRGB(cs.primary);
      pktColors[i * 3] = c.r * opacity;
      pktColors[i * 3 + 1] = c.g * opacity;
      pktColors[i * 3 + 2] = c.b * opacity;
    });

    pktGeom.attributes.position.needsUpdate = true;
    pktGeom.attributes.color.needsUpdate = true;

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

    void time;
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
      plane.drops.forEach((d) => {
        totalCount++;
        if (d.opacity > 0 && d.entranceFactor >= 1 && !d.frozen) {
          const sprite = plane.sprites[plane.drops.indexOf(d)];
          if (sprite) {
            const y = sprite.position.y;
            if (y > -GRID_HEIGHT / 2 - 1 && y < GRID_HEIGHT / 2 + 1) {
              activeCount++;
            }
          }
        }
      });
    });
    return totalCount === 0 ? 0 : clamp01(activeCount / totalCount);
  };

  // ── dissolve (pixel dissolve for transitions) ──

  const dissolve = (progress: number): void => {
    planes.forEach((plane) => {
      plane.drops.forEach((d, i) => {
        const threshold = (i / plane.drops.length) * 0.9;
        const sprite = plane.sprites[i];
        if (!sprite) return;

        if (progress > threshold) {
          const localP = clamp01((progress - threshold) / (1 - threshold + 0.001));
          sprite.scale.setScalar(plane.config.charSize * (1 - localP));
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.opacity = clamp01(d.opacity * (1 - localP));
        }
      });
    });

    // Dissolve data packets
    pktMat.opacity = 1 - progress;
    // Dissolve fog
    fogMat.opacity = 0.12 * (1 - progress);
    // Dissolve grid
    gridLineMat.opacity = 0.04 * (1 - progress);
    circuitMat.opacity = 0.05 * (1 - progress);
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
      plane.drops.forEach((d, i) => {
        const sprite = plane.sprites[i];
        if (!sprite) return;
        const entranceF = d.entranceFactor < 1 ? d.entranceFactor : 1;
        const mat = sprite.material as THREE.SpriteMaterial;
        mat.opacity = clamp01(d.opacity * entranceF * t * 0.8);
      });
    });

    gridLineMat.opacity = 0.04 * t;
    circuitMat.opacity = 0.05 * t;
    fogMat.opacity = 0.12 * t;
    pktMat.opacity = t;
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

    gridLineMat.dispose();
    circuitMat.dispose();
    fogMat.dispose();
    fogTex.dispose();
    pktGeom.dispose();
    pktMat.dispose();

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
