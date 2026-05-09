import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@solidjs/testing-library";
import TypewriterText from "~/components/TypewriterText";

describe("TypewriterText", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders with full text visible on first frame (SSR-friendly)", () => {
    const { container } = render(() => (
      <TypewriterText text="Gustavo" speed={80} />
    ));

    expect(container.textContent).toContain("Gustavo");
  });

  it("starts typing animation after first frame", () => {
    const { container } = render(() => (
      <TypewriterText text="Gustavo" speed={80} />
    ));

    // Advance to flush requestAnimationFrame (resets displayed & starts interval)
    vi.advanceTimersByTime(0);

    // After 80ms, first character typed
    vi.advanceTimersByTime(80);
    expect(container.textContent).toBe("G|");

    // After another 80ms (160ms total), "Gu"
    vi.advanceTimersByTime(80);
    expect(container.textContent).toBe("Gu|");

    // Type remaining 5 characters (80ms × 5 = 400ms) to reach full "Gustavo" with no cursor
    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(80);
    }
    expect(container.textContent).toContain("Gustavo");
    expect(container.textContent).not.toContain("|");
  });

  it("respects custom speed", () => {
    const { container } = render(() => (
      <TypewriterText text="AB" speed={40} />
    ));

    // Flush rAF
    vi.advanceTimersByTime(0);

    // At 30ms, still empty (speed is 40ms)
    vi.advanceTimersByTime(30);
    expect(container.textContent).toBe("|");

    // At 40ms total, first char
    vi.advanceTimersByTime(10);
    expect(container.textContent).toBe("A|");

    // At 80ms total, "AB" with no cursor
    vi.advanceTimersByTime(40);
    expect(container.textContent).toBe("AB");
  });

  it("renders empty text gracefully", () => {
    const { container } = render(() => (
      <TypewriterText text="" />
    ));

    expect(container.textContent).toBe("");
  });

  it("applies custom class", () => {
    const { container } = render(() => (
      <TypewriterText text="Test" class="my-class" />
    ));

    const span = container.querySelector("span");
    expect(span?.className).toContain("my-class");
  });

  it("cleans up interval on unmount", () => {
    const { unmount } = render(() => (
      <TypewriterText text="Long text with many characters" speed={80} />
    ));

    // Flush rAF to start the interval
    vi.advanceTimersByTime(0);
    vi.advanceTimersByTime(160);

    // Unmount should clear the interval without throwing
    expect(() => unmount()).not.toThrow();

    // Advancing further should not cause errors
    vi.advanceTimersByTime(1000);
  });
});
