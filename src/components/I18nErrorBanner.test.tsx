import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { createSignal } from "solid-js";
import { I18nContext } from "~/stores/i18nStore";
import type { I18nContextValue } from "~/stores/i18nStore";
import { Language } from "~/types";
import I18nErrorBanner from "~/components/I18nErrorBanner";

vi.mock("lucide-solid/icons/triangle-alert", () => ({
  default: (props: Record<string, unknown>) => <svg {...props} />,
}));
vi.mock("lucide-solid/icons/x", () => ({
  default: (props: Record<string, unknown>) => <svg {...props} />,
}));

function mockI18nContext(fetchError: () => string | null): I18nContextValue {
  const [language] = createSignal(Language.PtBr);
  const [messages] = createSignal(undefined);
  const [sharedData] = createSignal(undefined);

  return {
    language,
    setLanguage: () => {},
    t: (key: string, defaultValue?: string) => defaultValue ?? key,
    messages,
    sharedData,
    fetchError,
  };
}

describe("I18nErrorBanner", () => {
  it("renders nothing when fetchError is null", () => {
    const [errorSignal] = createSignal<string | null>(null);
    const ctx = mockI18nContext(errorSignal);

    const { container } = render(() => (
      <I18nContext.Provider value={ctx}>
        <I18nErrorBanner />
      </I18nContext.Provider>
    ));

    expect(container.textContent).toBe("");
  });

  it("renders alert with error message when fetchError is set", () => {
    const [errorSignal] = createSignal<string | null>("Falha ao carregar idioma: pt-br");
    const ctx = mockI18nContext(errorSignal);

    render(() => (
      <I18nContext.Provider value={ctx}>
        <I18nErrorBanner />
      </I18nContext.Provider>
    ));

    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
    expect(alert.outerHTML).toMatch(/Falha ao carregar idioma: pt-br/);
  });

  it("dismisses when close button is clicked", async () => {
    const [errorSignal] = createSignal<string | null>("Erro de teste");
    const ctx = mockI18nContext(errorSignal);

    const { container } = render(() => (
      <I18nContext.Provider value={ctx}>
        <I18nErrorBanner />
      </I18nContext.Provider>
    ));

    expect(screen.getByRole("alert")).toBeDefined();

    const dismissBtn = screen.getByLabelText("Dismiss");
    dismissBtn.click();

    await new Promise((r) => setTimeout(r, 10));
    expect(container.querySelector('[role="alert"]')).toBeNull();
  });

  it("renders null when fetchError becomes null after dismissal", () => {
    const [errorSignal, setError] = createSignal<string | null>("Erro");
    const ctx = mockI18nContext(errorSignal);

    const { container } = render(() => (
      <I18nContext.Provider value={ctx}>
        <I18nErrorBanner />
      </I18nContext.Provider>
    ));

    expect(screen.getByRole("alert")).toBeDefined();

    setError(null);

    expect(container.querySelector('[role="alert"]')).toBeNull();
  });
});
