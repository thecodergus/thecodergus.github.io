// ── Custom ShaderMaterial for Matrix rain Points with sprite atlas ──

import * as THREE from "three";
import type { AtlasData } from "./atlas";

const VERTEX = /* glsl */ `
  attribute float charIndex;
  attribute float aOpacity;

  varying float vOpacity;
  varying vec2 vAtlasUV;

  uniform float uCellU;
  uniform float uCellV;
  uniform float uGridCols;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 28.0;

    vOpacity = aOpacity;

    float col = mod(charIndex, uGridCols);
    float row = floor(charIndex / uGridCols);
    vAtlasUV = vec2(col * uCellU, row * uCellV);
  }
`;

const FRAGMENT = /* glsl */ `
  uniform sampler2D uAtlas;
  uniform float uCellU;
  uniform float uCellV;

  varying float vOpacity;
  varying vec2 vAtlasUV;

  void main() {
    vec2 uv = vAtlasUV + gl_PointCoord * vec2(uCellU, uCellV);
    vec4 tex = texture(uAtlas, uv);
    float alpha = tex.a * vOpacity;

    gl_FragColor = vec4(tex.rgb, alpha);

    if (alpha < 0.02) discard;
  }
`;

export const createRainMaterial = (atlas: AtlasData): THREE.ShaderMaterial => {
  const cellU = 1.0 / 8.0;
  const cellV = 1.0 / 8.0;

  return new THREE.ShaderMaterial({
    uniforms: {
      uAtlas: { value: atlas.texture },
      uCellU: { value: cellU },
      uCellV: { value: cellV },
      uGridCols: { value: 8 },
    },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
};
