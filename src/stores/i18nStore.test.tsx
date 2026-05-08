import { describe, it, expect, beforeEach, vi } from "vitest";
import { Language } from "~/types";

const mockResponses = new Map<string, object>();

let fetchImpl: typeof globalThis.fetch;

beforeEach(() => {
  mockResponses.clear();
  fetchImpl = vi.fn((url: string | URL | Request): Promise<Response> => {
    const urlStr = typeof url === "string" ? url : url instanceof URL ? url.href : url.url;
    const data = mockResponses.get(urlStr);
    if (data) {
      return Promise.resolve(
        new Response(JSON.stringify(data), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      );
    }
    return Promise.resolve(new Response(null, { status: 404 }));
  }) as unknown as typeof globalThis.fetch;
  globalThis.fetch = fetchImpl;

  vi.resetModules();
});

const mockLangData = (
  lang: Language,
  data: object,
): void => {
  mockResponses.set(`/data/languages/${lang}.json`, data);
};

describe("i18nStore — module-level signals", () => {
  it("language signal initializes as Language.PtBr", async () => {
    const { language } = await import("~/stores/i18nStore");
    expect(language()).toBe(Language.PtBr);
  });

  it("messages signal initializes as undefined", async () => {
    const { messages } = await import("~/stores/i18nStore");
    expect(messages()).toBeUndefined();
  });

  it("fetchError signal initializes as null", async () => {
    const { fetchError } = await import("~/stores/i18nStore");
    expect(fetchError()).toBeNull();
  });

  it("sharedData signal initializes as undefined", async () => {
    const { sharedData } = await import("~/stores/i18nStore");
    expect(sharedData()).toBeUndefined();
  });
});

describe("i18nStore — t() helper", () => {
  it("returns default value when messages are undefined", async () => {
    const { t } = await import("~/stores/i18nStore");
    expect(t("navbar.about", "Sobre")).toBe("Sobre");
  });

  it("returns key string when messages undefined and no default given", async () => {
    const { t } = await import("~/stores/i18nStore");
    expect(t("navbar.about")).toBe("navbar.about");
  });

  it("returns default value when key not found in messages", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, { navbar: { about: "About" } });

    setLanguage(Language.En);
    await vi.waitFor(
      () => {
        expect(messages()).toBeDefined();
      },
      { timeout: 500 },
    );

    expect(t("navbar.missing", "Faltando")).toBe("Faltando");
  });

  it("returns key when key not found and no default given", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, { navbar: { about: "About" } });

    setLanguage(Language.En);
    await vi.waitFor(() => expect(messages()).toBeDefined(), { timeout: 500 });

    expect(t("navbar.missing")).toBe("navbar.missing");
  });

  it("returns default value when intermediate path is not an object", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, { navbar: "not-an-object" });

    setLanguage(Language.En);
    await vi.waitFor(() => expect(messages()).toBeDefined(), { timeout: 500 });

    expect(t("navbar.about", "fallback")).toBe("fallback");
  });

  it("returns default value when leaf value is not a string", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, { stats: { count: 42 } });

    setLanguage(Language.En);
    await vi.waitFor(() => expect(messages()).toBeDefined(), { timeout: 500 });

    expect(t("stats.count", "fallback")).toBe("fallback");
  });

  it("resolves nested keys", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, {
      navbar: { about: "About", skills: "Skills" },
      hero: { subtitle: "Subtitle" },
    });

    setLanguage(Language.En);
    await vi.waitFor(() => expect(messages()).toBeDefined(), { timeout: 500 });

    expect(t("navbar.about")).toBe("About");
    expect(t("navbar.skills")).toBe("Skills");
    expect(t("hero.subtitle")).toBe("Subtitle");
  });

  it("deeply nested keys resolve correctly", async () => {
    const { messages, t, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, {
      basic_info: {
        section_name: {
          about: "About Me",
          projects: "Projects",
        },
      },
    });

    setLanguage(Language.En);
    await vi.waitFor(() => expect(messages()).toBeDefined(), { timeout: 500 });

    expect(t("basic_info.section_name.about")).toBe("About Me");
    expect(t("basic_info.section_name.projects")).toBe("Projects");
  });
});

describe("i18nStore — setLanguage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("updates language signal", async () => {
    const { language, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, {});

    setLanguage(Language.En);
    expect(language()).toBe(Language.En);
  });

  it("persists to localStorage", async () => {
    const { setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, {});

    setLanguage(Language.En);
    expect(localStorage.getItem("portfolio-language")).toBe(Language.En);

    mockLangData(Language.PtBr, {});
    setLanguage(Language.PtBr);
    expect(localStorage.getItem("portfolio-language")).toBe(Language.PtBr);
  });

  it("clears fetchError on fetch success", async () => {
    const { fetchError, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, {});

    setLanguage(Language.En);
    await vi.waitFor(
      () => {
        expect(fetchError()).toBeNull();
      },
      { timeout: 500 },
    );
  });

  it("sets fetchError on fetch failure", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { fetchError, setLanguage } = await import("~/stores/i18nStore");
    // Don't mock any response — will 404

    setLanguage(Language.En);
    await vi.waitFor(
      () => {
        expect(fetchError()).toContain("en");
      },
      { timeout: 500 },
    );

    consoleErrorSpy.mockRestore();
  });

  it("messages are updated after successful fetch", async () => {
    const { messages, setLanguage } = await import("~/stores/i18nStore");
    mockLangData(Language.En, { navbar: { about: "About" } });

    expect(messages()).toBeUndefined();
    setLanguage(Language.En);

    await vi.waitFor(
      () => {
        expect(messages()).toEqual({ navbar: { about: "About" } });
      },
      { timeout: 500 },
    );
  });
});

describe("i18nStore — Language enum", () => {
  it("has PtBr and En values", () => {
    expect(Language.PtBr).toBe("pt-br");
    expect(Language.En).toBe("en");
  });

  it("has exactly 2 members", () => {
    const vals = Object.values(Language);
    expect(vals).toHaveLength(2);
    expect(vals).toContain("pt-br");
    expect(vals).toContain("en");
  });
});
