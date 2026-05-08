// ── Quality tier detection — pure, zero persistent side effects ──

export type QualityTier = "low" | "medium" | "high";

export interface QualityConfig {
  readonly tier: QualityTier;
  readonly pixelRatio: number;
  readonly bloomEnabled: boolean;
  readonly bloomResolutionScale: number;
  readonly scanlineEnabled: boolean;
  readonly softwarePlanes: number;
}

// ── Safe GPU detection ──
// Creates temporary canvas, obtains info, discards canvas.
// WEBGL_debug_renderer_info is widely supported (Baseline since 2017)
// but Firefox sanitizes strings since Jun/2021 and Safari returns "Apple GPU" since Feb/2020.

interface GpuInfo {
  readonly isIntegrated: boolean;
  readonly isAppleGpu: boolean;
  readonly renderer: string;
  readonly webgl2Available: boolean;
}

const detectGPU = (): GpuInfo => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2");
  canvas.remove();

  if (!gl) {
    return Object.freeze({
      isIntegrated: true,
      isAppleGpu: false,
      renderer: "unknown",
      webgl2Available: false,
    });
  }

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()
    : "";

  const isIntegrated = /intel.*(hd|uhd|iris|gma)|mali|adreno|powervr/i.test(renderer);
  const isAppleGpu = /apple (m[1-9]|gpu)/i.test(renderer);

  return Object.freeze({
    isIntegrated,
    isAppleGpu,
    renderer,
    webgl2Available: true,
  });
};

// ── Memory heuristic ──
// navigator.deviceMemory is Chrome/Edge/Opera only (not Firefox/Safari).
// Returns truncated values: 0.25, 0.5, 1, 2, 4, 8.

const hasLowMemory = (): boolean => {
  const memory = (navigator as { deviceMemory?: number }).deviceMemory;
  if (memory !== undefined && memory < 4) {
    return true;
  }
  return false;
};

// ── Tier resolver ──

export const resolveQualityConfig = (): QualityConfig => {
  const gpu = detectGPU();

  // Low: WebGL2 unavailable, or integrated GPU + low RAM, or old Apple GPU
  if (
    !gpu.webgl2Available ||
    (gpu.isIntegrated && hasLowMemory()) ||
    (gpu.isAppleGpu && hasLowMemory())
  ) {
    return Object.freeze({
      tier: "low",
      pixelRatio: 1,
      bloomEnabled: false,
      bloomResolutionScale: 0,
      scanlineEnabled: false,
      softwarePlanes: 1,
    });
  }

  // Medium: integrated GPU (but enough RAM) or Apple Silicon M1-M3
  if (gpu.isIntegrated || gpu.isAppleGpu) {
    return Object.freeze({
      tier: "medium",
      pixelRatio: 1.5,
      bloomEnabled: true,
      bloomResolutionScale: 0.5,
      scanlineEnabled: true,
      softwarePlanes: 2,
    });
  }

  // High: dedicated GPU
  return Object.freeze({
    tier: "high",
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    bloomEnabled: true,
    bloomResolutionScale: 1,
    scanlineEnabled: true,
    softwarePlanes: 3,
  });
};
