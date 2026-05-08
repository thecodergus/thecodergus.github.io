import { describe, it, expect, beforeEach } from "vitest";

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

  it("theme signal initializes as 'ai' regardless of localStorage", async () => {
    localStorage.setItem("portfolio-theme", "blockchain");
    const mod = await import("~/stores/themeStore");
    // getInitialTheme() always returns "ai" — signal starts there
    expect(mod.theme()).toBe("ai");
  });

  it("THEMES array contains all 4 theme entries", async () => {
    const { THEMES } = await import("~/stores/themeStore");
    expect(THEMES).toHaveLength(4);
    const ids = THEMES.map((t) => t.id);
    expect(ids).toContain("ai");
    expect(ids).toContain("blockchain");
    expect(ids).toContain("software");
    expect(ids).toContain("web");
  });

  it("REGISTRY has all 4 theme modules", async () => {
    const { REGISTRY } = await import("~/themes/registry");
    const keys = Object.keys(REGISTRY);
    expect(keys).toHaveLength(4);
    expect(keys).toEqual(["ai", "blockchain", "software", "web"]);
  });
});
