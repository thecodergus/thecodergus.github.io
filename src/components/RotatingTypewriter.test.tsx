import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@solidjs/testing-library";
import RotatingTypewriter from "~/components/RotatingTypewriter";

describe("RotatingTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const titles = ["AI Engineer", "Developer"];

  it("renders with first title visible on first frame (SSR-friendly)", () => {
    const { container } = render(() => (
      <RotatingTypewriter titles={titles} speed={80} />
    ));

    expect(container.textContent).toContain("AI ENGINEER");
  });

  it("cycles: typing → deleting → next title", () => {
    const { container } = render(() => (
      <RotatingTypewriter titles={titles} speed={80} pauseMs={200} />
    ));

    // Flush setTimeout(0) to reset and start typing from empty
    vi.advanceTimersByTime(0);

    // Phase 1: Type "AI ENGINEER" — 11 characters at 80ms each = 880ms
    for (let i = 0; i < 11; i++) {
      vi.advanceTimersByTime(80);
    }
    expect(container.textContent).toContain("AI ENGINEER");

    // Phase 2: Pause — pauseMs=200, ceil(200/80)=3 pause ticks + 1 transition tick
    // pauseRemaining: 3→2→1→0, then tick where ≤0 sets Deleting (no char change)
    for (let i = 0; i < 4; i++) {
      vi.advanceTimersByTime(80);
    }

    // Phase 3: Deleting — 11 characters + 1 transition tick (last delete sets Typing)
    for (let i = 0; i < 12; i++) {
      vi.advanceTimersByTime(80);
    }

    // Phase 4: Next title "DEVELOPER" — first char
    vi.advanceTimersByTime(80);
    expect(container.textContent).toContain("D");
  });

  it("respects custom pauseMs and pauses before deleting", () => {
    const titlesSingle = ["AB"];
    const { container } = render(() => (
      <RotatingTypewriter titles={titlesSingle} speed={80} pauseMs={400} />
    ));

    // Flush setTimeout(0) to start typing
    vi.advanceTimersByTime(0);

    // Type "AB" — 2 chars at 80ms = 160ms
    vi.advanceTimersByTime(160);

    // pauseMs=400, ceil(400/80)=5 pause decrement ticks
    // After 5 ticks, pauseRemaining reaches 0 (still paused)
    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(80);
    }
    expect(container.textContent).toBe("AB|"); // full title, still not deleting yet

    // 1 transition tick: enters Deleting phase (no char removed yet)
    vi.advanceTimersByTime(80);
    expect(container.textContent).toBe("AB|"); // still not deleting

    // 1st deletion tick: removes last char
    vi.advanceTimersByTime(80);
    expect(container.textContent).toBe("A|");
  });

  it("displays nothing for empty titles array", () => {
    const { container } = render(() => (
      <RotatingTypewriter titles={[]} speed={80} />
    ));

    expect(container.textContent).toBe("|"); // only cursor, no text
  });

  it("applies custom class", () => {
    const { container } = render(() => (
      <RotatingTypewriter titles={titles} class="custom-class" />
    ));

    const span = container.querySelector("span");
    expect(span?.className).toContain("custom-class");
  });

  it("cleans up interval on unmount", () => {
    const { unmount } = render(() => (
      <RotatingTypewriter titles={titles} speed={80} />
    ));

    vi.advanceTimersByTime(0); // flush setTimeout
    vi.advanceTimersByTime(160);
    expect(() => unmount()).not.toThrow();
    vi.advanceTimersByTime(1000); // should not cause errors after unmount
  });
});
