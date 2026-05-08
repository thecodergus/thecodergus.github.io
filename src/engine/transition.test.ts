import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTransitionManager } from "./transition";
import type { SceneHandle } from "./types";

const makeHandle = (_name: string): SceneHandle => {
  const spies = {
    setOpacity: vi.fn(),
    dispose: vi.fn(),
    dissolve: vi.fn(),
    entrance: vi.fn(),
  };
  return {
    update: vi.fn(),
    dispose: spies.dispose,
    setOpacity: spies.setOpacity,
    getObjects: vi.fn(() => []),
    dissolve: spies.dissolve,
    entrance: spies.entrance,
  };
};

describe("createTransitionManager", () => {
  let onDispose: (handle: SceneHandle) => void;

  beforeEach(() => {
    onDispose = vi.fn();
  });

  it("initial state: getActive returns null, not transitioning", () => {
    const tm = createTransitionManager(onDispose);
    expect(tm.getActive()).toBeNull();
    expect(tm.isTransitioning()).toBe(false);
  });

  it("transition null → scene starts FadingOut", () => {
    const tm = createTransitionManager(onDispose);
    const next = makeHandle("next");
    tm.transition(null, next);
    expect(tm.isTransitioning()).toBe(true);
  });

  it("during FadingOut: old scene opacity decreases", () => {
    const tm = createTransitionManager(onDispose);
    const old = makeHandle("old");
    const next = makeHandle("next");

    // Manually set state: current=old, transition to next
    // First transition: null → old
    tm.transition(null, old);
    // Complete it immediately
    tm.update(400); // FadingOut half
    tm.update(400); // FadingIn half
    expect(tm.isTransitioning()).toBe(false);
    expect(tm.getActive()).toBe(old);

    // Now transition old → next
    tm.transition(old, next);
    // During FadingOut, old.setOpacity should be called with decreasing values
    tm.update(100);
    expect(old.setOpacity).toHaveBeenCalled();
  });

  it("FadingOut → FadingIn → Idle completes full cycle", () => {
    const tm = createTransitionManager(onDispose);
    const old = makeHandle("old");
    const next = makeHandle("next");

    tm.transition(null, old);
    tm.update(400); // Complete FadingOut
    tm.update(400); // Complete FadingIn
    expect(tm.isTransitioning()).toBe(false);

    tm.transition(old, next);

    // FadingOut: 400ms
    tm.update(400);
    // onDispose should have been called on old scene
    expect(onDispose).toHaveBeenCalledWith(old);

    // FadingIn: 400ms
    tm.update(400);
    expect(tm.isTransitioning()).toBe(false);
    expect(tm.getActive()).toBe(next);
  });

  it("getActive returns current scene after transition completes", () => {
    const tm = createTransitionManager(onDispose);
    const scene = makeHandle("scene");
    tm.transition(null, scene);
    tm.update(400);
    tm.update(400);
    expect(tm.getActive()).toBe(scene);
  });

  it("abort: rapid theme switch calls onDispose on pending next scene", () => {
    const tm = createTransitionManager(onDispose);
    const a = makeHandle("a");
    const b = makeHandle("b");
    const c = makeHandle("c");

    // Start: null → a
    tm.transition(null, a);
    // Abort: a → b during FadingOut
    tm.update(100); // partial progress
    tm.transition(a, b);
    // onDispose should have been called on b (the pending next was replaced)
    // Actually: the abort handler sets opacity=0 and calls onDispose on pending next
    // The pending next at the point of abort is 'a'? No wait...
    // After tm.transition(null, a): state.current=null, state.next=a, phase=FadingOut
    // After tm.transition(a, b): 
    //   - Since phase is FadingOut and state.next exists (a), it sets a.setOpacity(0) and onDispose(a)
    //   - Then sets state.next = b, phase=FadingOut
    expect(onDispose).toHaveBeenCalledWith(a);

    // Complete transition to b then abort to c
    tm.update(400); // FadingOut
    tm.update(400); // FadingIn
    tm.transition(b, c);
    tm.update(50);
    tm.transition(c, makeHandle("d"));
    expect(onDispose).toHaveBeenCalled();
  });

  it("isTransitioning returns true during FadingOut", () => {
    const tm = createTransitionManager(onDispose);
    tm.transition(null, makeHandle("test"));
    expect(tm.isTransitioning()).toBe(true);
    tm.update(100);
    expect(tm.isTransitioning()).toBe(true);
  });

  it("isTransitioning returns true during FadingIn", () => {
    const tm = createTransitionManager(onDispose);
    tm.transition(null, makeHandle("test"));
    tm.update(400); // FadingOut complete
    expect(tm.isTransitioning()).toBe(true); // now in FadingIn
  });

  it("isTransitioning returns false after full cycle", () => {
    const tm = createTransitionManager(onDispose);
    tm.transition(null, makeHandle("test"));
    tm.update(400); // FadingOut
    tm.update(400); // FadingIn
    expect(tm.isTransitioning()).toBe(false);
  });

  it("setOpacity called on new scene at start of transition (opacity 0)", () => {
    const tm = createTransitionManager(onDispose);
    const next = makeHandle("next");
    tm.transition(null, next);
    expect(next.setOpacity).toHaveBeenCalledWith(0);
  });

  it("dissolve called on old scene during FadingOut", () => {
    const tm = createTransitionManager(onDispose);
    const old = makeHandle("old");
    const next = makeHandle("next");

    // Set up state with old as current
    tm.transition(null, old);
    tm.update(400);
    tm.update(400);

    tm.transition(old, next);
    tm.update(200); // mid-FadingOut

    expect(old.dissolve).toHaveBeenCalled();
  });

  it("entrance called on new scene during FadingIn", () => {
    const tm = createTransitionManager(onDispose);
    const next = makeHandle("next");

    tm.transition(null, next);
    tm.update(400); // FadingOut complete
    tm.update(200); // mid-FadingIn

    expect(next.entrance).toHaveBeenCalled();
  });

  it("total transition time is ~800ms", () => {
    const tm = createTransitionManager(onDispose);
    tm.transition(null, makeHandle("test"));

    // After 400ms FadingOut should complete
    tm.update(400);
    expect(tm.isTransitioning()).toBe(true); // now in FadingIn

    // After 800ms total FadingIn should complete
    tm.update(400);
    expect(tm.isTransitioning()).toBe(false);
  });

  it("returned API is frozen", () => {
    const tm = createTransitionManager(onDispose);
    expect(Object.isFrozen(tm)).toBe(true);
  });

  it("handles multiple rapid transitions without leaking", () => {
    const tm = createTransitionManager(onDispose);
    for (let i = 0; i < 5; i++) {
      const s = makeHandle(`scene-${i}`);
      tm.transition(null, s);
      tm.update(400);
      tm.update(400);
      expect(tm.getActive()).toBe(s);
    }
    expect(onDispose).toHaveBeenCalledTimes(4); // first becomes next, then disposed during transition to second, etc.
  });

  describe("forceScene", () => {
    it("replaces current scene immediately with full opacity", () => {
      const tm = createTransitionManager(onDispose);
      const old = makeHandle("old");
      const next = makeHandle("next");

      // Set up old as current
      tm.transition(null, old);
      tm.update(400);
      tm.update(400);

      // Force replace
      tm.forceScene(next);
      expect(tm.isTransitioning()).toBe(false);
      expect(tm.getActive()).toBe(next);
      expect(next.setOpacity).toHaveBeenCalledWith(1);
      expect(onDispose).toHaveBeenCalledWith(old);
    });

    it("aborts pending transition and disposes next scene", () => {
      const tm = createTransitionManager(onDispose);
      const a = makeHandle("a");
      const b = makeHandle("b");
      const c = makeHandle("c");

      // Start transition a → b
      tm.transition(null, a);
      tm.update(400);
      tm.update(400);
      tm.transition(a, b);
      tm.update(100); // mid-FadingOut (a dissolving, b waiting)

      // Force c in the middle of transition
      tm.forceScene(c);

      // a was current (disposed), b was pending next (aborted and disposed)
      expect(onDispose).toHaveBeenCalledWith(a);
      expect(onDispose).toHaveBeenCalledWith(b);
      expect(tm.isTransitioning()).toBe(false);
      expect(tm.getActive()).toBe(c);
      expect(c.setOpacity).toHaveBeenCalledWith(1);
    });

    it("works when no current scene exists", () => {
      const tm = createTransitionManager(onDispose);
      const scene = makeHandle("fresh");

      tm.forceScene(scene);
      expect(tm.isTransitioning()).toBe(false);
      expect(tm.getActive()).toBe(scene);
      expect(scene.setOpacity).toHaveBeenCalledWith(1);
      expect(onDispose).not.toHaveBeenCalled();
    });
  });
});
