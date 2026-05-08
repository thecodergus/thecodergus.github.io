import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const makeMockGL = (renderer: string): Record<string, unknown> => {
  const debugInfo = { UNMASKED_RENDERER_WEBGL: 0x9246 };
  return {
    getExtension: vi.fn((name: string) => {
      if (name === "WEBGL_debug_renderer_info") return debugInfo;
      return null;
    }),
    getParameter: vi.fn((param: number) => {
      if (param === 0x9246) return renderer;
      return null;
    }),
  };
};

const setGetContext = (returnValue: unknown): void => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => returnValue) as unknown as typeof HTMLCanvasElement.prototype.getContext;
};

const setDeviceMemory = (value: number): void => {
  Object.defineProperty(navigator, "deviceMemory", {
    value,
    configurable: true,
  });
};

let originalGetContext: typeof HTMLCanvasElement.prototype.getContext;
let originalDeviceMemory: PropertyDescriptor | undefined;

describe("resolveQualityConfig", () => {
  beforeEach(() => {
    originalGetContext = HTMLCanvasElement.prototype.getContext;
    originalDeviceMemory = Object.getOwnPropertyDescriptor(
      navigator,
      "deviceMemory",
    );
  });

  afterEach(() => {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
    if (originalDeviceMemory) {
      Object.defineProperty(navigator, "deviceMemory", originalDeviceMemory);
    } else {
      const nav = navigator as unknown as Record<string, unknown>;
      delete nav.deviceMemory;
    }
    vi.resetModules();
  });

  it("low tier: WebGL2 unavailable", async () => {
    setGetContext(null);
    setDeviceMemory(8);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("low");
    expect(config.bloomEnabled).toBe(false);
    expect(config.scanlineEnabled).toBe(false);
    expect(config.pixelRatio).toBe(1);
  });

  it("low tier: integrated GPU + low memory", async () => {
    setGetContext(makeMockGL("intel uhd graphics 620"));
    setDeviceMemory(2);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("low");
    expect(config.bloomEnabled).toBe(false);
    expect(config.softwarePlanes).toBe(1);
  });

  it("medium tier: integrated GPU + sufficient RAM", async () => {
    setGetContext(makeMockGL("intel iris xe graphics"));
    setDeviceMemory(8);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("medium");
    expect(config.bloomEnabled).toBe(true);
    expect(config.bloomResolutionScale).toBe(0.5);
    expect(config.softwarePlanes).toBe(2);
  });

  it("medium tier: Apple Silicon", async () => {
    setGetContext(makeMockGL("apple m1"));
    setDeviceMemory(8);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("medium");
  });

  it("high tier: dedicated GPU", async () => {
    setGetContext(makeMockGL("nvidia geforce rtx 3060"));
    setDeviceMemory(16);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("high");
    expect(config.bloomEnabled).toBe(true);
    expect(config.bloomResolutionScale).toBe(1);
    expect(config.softwarePlanes).toBe(3);
  });

  it("high tier: pixelRatio capped at 2", async () => {
    setGetContext(makeMockGL("nvidia geforce rtx 4090"));
    setDeviceMemory(32);

    const originalDPR = window.devicePixelRatio;
    Object.defineProperty(window, "devicePixelRatio", {
      value: 3,
      configurable: true,
    });

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.pixelRatio).toBe(2);

    Object.defineProperty(window, "devicePixelRatio", {
      value: originalDPR,
      configurable: true,
    });
  });

  it("medium tier: Mali GPU (mobile integrated)", async () => {
    setGetContext(makeMockGL("mali-g78"));
    setDeviceMemory(6);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("medium");
  });

  it("low tier: Adreno GPU + low memory", async () => {
    setGetContext(makeMockGL("adreno 618"));
    setDeviceMemory(3);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("low");
  });

  it("returned config is frozen", async () => {
    setGetContext(makeMockGL("nvidia geforce rtx 3060"));
    setDeviceMemory(16);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(Object.isFrozen(config)).toBe(true);
  });

  it("no renderer info string: defaults to dedicated (high) with enough RAM", async () => {
    const debugInfo = { UNMASKED_RENDERER_WEBGL: 0x9246 };
    setGetContext({
      getExtension: vi.fn((name: string) => {
        if (name === "WEBGL_debug_renderer_info") return debugInfo;
        return null;
      }),
      getParameter: vi.fn(() => null),
    });
    setDeviceMemory(16);

    const { resolveQualityConfig } = await import("./quality");
    const config = resolveQualityConfig();

    expect(config.tier).toBe("high");
  });
});
