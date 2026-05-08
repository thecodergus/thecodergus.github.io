import { describe, it, expect, beforeEach } from "vitest";
import { SceneKind } from "~/engine/types";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    get length() { return Object.keys(store).length; },
    key: (i: number) => Object.keys(store)[i] ?? null,
  };
})();

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock });

describe("themeStore", () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset module cache to re-evaluate signals
    vi.resetModules();
  });

  it("theme signal initializes as SceneKind.AI regardless of localStorage", async () => {
    localStorage.setItem("portfolio-theme", SceneKind.Blockchain);
    const mod = await import("~/stores/themeStore");
    // getInitialTheme() always returns SceneKind.AI — signal starts there
    expect(mod.theme()).toBe(SceneKind.AI);
  });

  it("THEMES array contains all 4 theme entries", async () => {
    const { THEMES } = await import("~/stores/themeStore");
    expect(THEMES).toHaveLength(4);
    const ids = THEMES.map((t) => t.id);
    expect(ids).toContain(SceneKind.AI);
    expect(ids).toContain(SceneKind.Blockchain);
    expect(ids).toContain(SceneKind.Software);
    expect(ids).toContain(SceneKind.Web);
  });

  it("REGISTRY keys match SceneKind enum values", async () => {
    const { REGISTRY } = await import("~/themes/registry");
    const keys = Object.keys(REGISTRY);
    expect(keys).toHaveLength(4);
    expect(keys).toEqual([
      SceneKind.AI,
      SceneKind.Blockchain,
      SceneKind.Software,
      SceneKind.Web,
    ]);
  });
});
