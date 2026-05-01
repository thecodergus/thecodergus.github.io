// ── Transition manager for crossfade + pixel dissolve between scenes ──

import type { SceneHandle } from "./types";

// ── Enums ──

enum TransitionPhase {
  Idle,
  FadingOut,
  FadingIn,
}

// ── Configuration ──

const FADE_DURATION = 800; // ms total
const FADE_HALF = FADE_DURATION / 2;

// ── Internal state (mutable, encapsulated) ──

interface TransitionState {
  phase: TransitionPhase;
  current: SceneHandle | null;
  next: SceneHandle | null;
  timer: number;
  transitionStart: number;
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
    timer: 0,
    transitionStart: 0,
  };

  const transition = (from: SceneHandle | null, to: SceneHandle): void => {
    if (state.phase !== TransitionPhase.Idle && state.next) {
      state.next.setOpacity(0);
      state.next.dispose();
    }

    state.phase = TransitionPhase.FadingOut;
    state.next = to;
    state.timer = 0;
    state.transitionStart = 0;

    to.setOpacity(0);

    if (from) {
      from.setOpacity(1);
    }
  };

  const update = (dt: number): void => {
    if (state.phase === TransitionPhase.Idle) return;

    state.timer += dt;
    state.transitionStart += dt;

    if (state.phase === TransitionPhase.FadingOut) {
      const progress = Math.min(state.timer / FADE_HALF, 1);
      const eased = easeInOutCubic(progress);

      if (state.current) {
        state.current.setOpacity(1 - eased);
        if (state.current.dissolve) {
          state.current.dissolve(eased);
        }
      }

      if (progress >= 1) {
        if (state.current) {
          state.current.dispose();
        }
        state.current = state.next;
        state.next = null;
        state.phase = TransitionPhase.FadingIn;
        state.timer = 0;

        if (state.current) {
          state.current.setOpacity(0);
        }
      }
    } else if (state.phase === TransitionPhase.FadingIn) {
      const progress = Math.min(state.timer / FADE_HALF, 1);
      const eased = easeInOutCubic(progress);

      if (state.current) {
        state.current.setOpacity(eased);
        if (state.current.entrance) {
          state.current.entrance(state.timer);
        }
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
