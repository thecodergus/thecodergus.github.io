// ── Transition manager for crossfade between scenes ──

import type { SceneHandle } from "./types";

// ── Enums ──

enum TransitionPhase {
  Idle,
  FadingOut,
  FadingIn,
}

// ── Configuration ──

const FADE_DURATION = 800; // ms
const FADE_STEPS = 16; // number of steps

// ── Internal state (mutable, encapsulated) ──

interface TransitionState {
  phase: TransitionPhase;
  current: SceneHandle | null;
  next: SceneHandle | null;
  opacity: number;
  timer: number;
}

// ── Factory ──

export const createTransitionManager = (): Readonly<{
  readonly transition: (from: SceneHandle | null, to: SceneHandle) => void;
  readonly update: (dt: number) => void;
  readonly isTransitioning: () => boolean;
  readonly getActive: () => SceneHandle | null;
}> => {
  const state: TransitionState = {
    phase: TransitionPhase.Idle,
    current: null,
    next: null,
    opacity: 1,
    timer: 0,
  };

  const transition = (from: SceneHandle | null, to: SceneHandle): void => {
    // If transitioning, force-complete current
    if (state.phase !== TransitionPhase.Idle && state.next) {
      state.next.setOpacity(0);
      state.next.dispose();
    }

    state.phase = TransitionPhase.FadingOut;
    state.next = to;
    state.timer = 0;

    // Pre-set next at 0 opacity
    to.setOpacity(0);

    if (from) {
      from.setOpacity(1);
    }
  };

  const update = (dt: number): void => {
    if (state.phase === TransitionPhase.Idle) return;

    const step = dt / FADE_DURATION;
    state.timer += dt;

    if (state.phase === TransitionPhase.FadingOut) {
      const progress = Math.min(state.timer / (FADE_DURATION / 2), 1);
      const eased = easeInOutCubic(progress);

      if (state.current) {
        state.current.setOpacity(1 - eased);
      }

      if (progress >= 1) {
        // Dispose old
        if (state.current) {
          state.current.dispose();
        }
        state.current = state.next;
        state.next = null;
        state.phase = TransitionPhase.FadingIn;
        state.timer = 0;
      }
    } else if (state.phase === TransitionPhase.FadingIn) {
      const progress = Math.min(state.timer / (FADE_DURATION / 2), 1);
      const eased = easeInOutCubic(progress);

      if (state.current) {
        state.current.setOpacity(eased);
      }

      if (progress >= 1) {
        state.phase = TransitionPhase.Idle;
        state.timer = 0;
      }
    }
  };

  const isTransitioning = (): boolean =>
    state.phase !== TransitionPhase.Idle;

  const getActive = (): SceneHandle | null =>
    state.current;

  return Object.freeze({
    transition,
    update,
    isTransitioning,
    getActive,
  });
};

// ── Pure easing ──

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
