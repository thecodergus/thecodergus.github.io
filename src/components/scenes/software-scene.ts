// ── Software Scene: 3D Data Flow Pipeline / Corridor ──

import * as THREE from "three";
import type { SceneHandle, SceneConfig, Vec2 } from "./types";
import { range, randomRange, clamp01 } from "./math";

// ── Configuration ──

const STAGE_COUNT = 7;
const PIPELINES = 4;
const PARTICLE_COUNT = 200;
const STAGE_Z_SPACING = 3.5;
const STAGE_X_SPREAD = 3.0;
const STAGE_Y_SPREAD = 1.5;

// ── Internal types ──

interface PipelineParticle {
  pipelineIdx: number;
  stageProgress: number;
  speed: number;
  stageFrom: number;
  stageTo: number;
}

interface StageInfo {
  pos: THREE.Vector3;
  pipelineIdx: number;
  globalIdx: number;
}

// ── Factory ──

export const createSoftwareScene = (config: SceneConfig): SceneHandle => {
  const group = new THREE.Group();
  let disposed = false;

  // ── Generate pipeline stages ──

  const stages: StageInfo[] = [];
  let globalIdx = 0;

  range(PIPELINES).forEach((pipeIdx) => {
    const xBase = (pipeIdx - (PIPELINES - 1) / 2) * STAGE_X_SPREAD;
    const yBase = randomRange(-0.5, 0.5);

    range(STAGE_COUNT).forEach((stageIdx) => {
      stages.push({
        pos: new THREE.Vector3(
          xBase + randomRange(-0.3, 0.3),
          yBase + randomRange(-STAGE_Y_SPREAD * 0.5, STAGE_Y_SPREAD * 0.5),
          (stageIdx - (STAGE_COUNT - 1) / 2) * STAGE_Z_SPACING,
        ),
        pipelineIdx: pipeIdx,
        globalIdx,
      });
      globalIdx++;
    });
  });

  // ── Stage nodes (cubes/icosahedrons) ──

  const stageGeo = new THREE.IcosahedronGeometry(0.25, 2);
  const stageMat = new THREE.MeshBasicMaterial({
    color: config.colorScheme.tertiary,
    transparent: true,
    opacity: 0.7,
    depthWrite: true,
  });

  const stageMeshes = stages.map((s) => {
    const mesh = new THREE.Mesh(stageGeo, stageMat.clone());
    mesh.position.copy(s.pos);
    group.add(mesh);
    return mesh;
  });

  // ── Connections (tubes/curves) ──

  const connectionCurves: THREE.CubicBezierCurve3[] = [];

  range(PIPELINES).forEach((pipeIdx) => {
    range(STAGE_COUNT - 1).forEach((stageIdx) => {
      const from = stages[pipeIdx * STAGE_COUNT + stageIdx];
      const to = stages[pipeIdx * STAGE_COUNT + stageIdx + 1];

      const midZ = (from.pos.z + to.pos.z) / 2;
      const controlOffset = randomRange(-0.8, 0.8);

      const curve = new THREE.CubicBezierCurve3(
        from.pos.clone(),
        new THREE.Vector3(from.pos.x + controlOffset, from.pos.y + controlOffset * 0.5, midZ),
        new THREE.Vector3(to.pos.x - controlOffset, to.pos.y - controlOffset * 0.5, midZ),
        to.pos.clone(),
      );

      connectionCurves.push(curve);

      // Draw curve as points
      const curvePoints = curve.getPoints(30);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveLine = new THREE.Line(
        curveGeom,
        new THREE.LineBasicMaterial({
          color: config.colorScheme.primary,
          transparent: true,
          opacity: 0.25,
          depthWrite: false,
        }),
      );
      group.add(curveLine);
    });
  });

  // ── Data flow particles ──

  const particleGeom = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
  const particleColors = new Float32Array(PARTICLE_COUNT * 3);
  particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

  range(PARTICLE_COUNT).forEach((i) => {
    particlePositions[i * 3 + 1] = -999;
  });

  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.9,
  });

  const particlePoints = new THREE.Points(particleGeom, particleMat);
  group.add(particlePoints);

  const flowParticles: PipelineParticle[] = [];

  const spawnParticle = (): void => {
    if (disposed) return;
    const pipeIdx = Math.floor(Math.random() * PIPELINES);

    flowParticles.push({
      pipelineIdx: pipeIdx,
      stageProgress: 0,
      speed: randomRange(0.008, 0.022),
      stageFrom: 0,
      stageTo: 0,
    });
  };

  // ── Update ──

  const update = (_time: number, _delta: number, _mouse: Vec2 | null): void => {
    if (disposed) return;

    // Spawn particles
    if (Math.random() < 0.3) {
      spawnParticle();
    }

    // Update stage nodes (subtle pulse)
    stageMeshes.forEach((mesh, idx) => {
      const scale = 1 + Math.sin(_time * 3 + idx * 0.7) * 0.1;
      mesh.scale.setScalar(scale);
    });

    // Update flow particles
    const toRemove: number[] = [];

    flowParticles.forEach((p, idx) => {
      p.stageProgress += p.speed;

      if (p.stageProgress >= 1) {
        p.stageFrom++;
        p.stageProgress = 0;

        if (p.stageFrom >= STAGE_COUNT - 1) {
          toRemove.push(idx);
        }
      }
    });

    toRemove.reverse().forEach((idx) => flowParticles.splice(idx, 1));

    while (flowParticles.length > PARTICLE_COUNT) {
      flowParticles.shift();
    }

    // Update particle positions
    range(PARTICLE_COUNT).forEach((i) => {
      if (i < flowParticles.length) {
        const p = flowParticles[i];
        const baseIdx = p.pipelineIdx * STAGE_COUNT;
        const fromStage = stages[baseIdx + p.stageFrom];
        const toStage = stages[baseIdx + Math.min(p.stageFrom + 1, STAGE_COUNT - 1)];

        if (fromStage && toStage) {
          const t = p.stageProgress;
          particlePositions[i * 3] = fromStage.pos.x + (toStage.pos.x - fromStage.pos.x) * t;
          particlePositions[i * 3 + 1] = fromStage.pos.y + (toStage.pos.y - fromStage.pos.y) * t;
          particlePositions[i * 3 + 2] = fromStage.pos.z + (toStage.pos.z - fromStage.pos.z) * t;

          const opacity = Math.sin(t * Math.PI);
          const pr = parseInt(config.colorScheme.secondary.slice(1, 3), 16) / 255;
          const pg = parseInt(config.colorScheme.secondary.slice(3, 5), 16) / 255;
          const pb = parseInt(config.colorScheme.secondary.slice(5, 7), 16) / 255;

          particleColors[i * 3] = pr * opacity;
          particleColors[i * 3 + 1] = pg * opacity;
          particleColors[i * 3 + 2] = pb * opacity;
        }
      } else {
        particlePositions[i * 3 + 1] = -999;
      }
    });

    particleGeom.attributes.position.needsUpdate = true;
    particleGeom.attributes.color.needsUpdate = true;

    void _mouse;
    void _time;
  };

  // ── Dispose ──

  const dispose = (): void => {
    disposed = true;
    stageMeshes.forEach((m) => (m.material as THREE.Material).dispose());
    stageGeo.dispose();
    stageMat.dispose();
    particleGeom.dispose();
    particleMat.dispose();
    group.clear();
  };

  const setOpacity = (t: number): void => {
    stageMeshes.forEach((m) => {
      (m.material as THREE.MeshBasicMaterial).opacity = 0.7 * t;
    });
    group.children.forEach((child) => {
      if (child instanceof THREE.Line) {
        (child.material as THREE.LineBasicMaterial).opacity = 0.25 * t;
      }
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
