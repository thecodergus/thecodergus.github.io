import { createSignal, onMount, onCleanup } from "solid-js";

interface RotatingTypewriterProps {
  titles: string[];
  class?: string;
  speed?: number;
  pauseMs?: number;
}

enum Phase {
  Typing,
  Paused,
  Deleting,
}

export default function RotatingTypewriter(props: RotatingTypewriterProps) {
  const titles = () => props.titles.map((t) => t.toUpperCase());
  const [displayed, setDisplayed] = createSignal(titles()[0] || "");
  const [phase, setPhase] = createSignal(Phase.Typing);
  const [index, setIndex] = createSignal(0);
  const [pauseRemaining, setPauseRemaining] = createSignal(0);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  onMount(() => {
    if (titles().length === 0) return;

    const tid = setTimeout(() => {
      setDisplayed("");
      const typeSpeed = props.speed || 80;

      intervalId = setInterval(() => {
        const currentTitle = titles()[index()];

        if (phase() === Phase.Typing) {
          const next = currentTitle.substring(0, displayed().length + 1);
          setDisplayed(next);
          if (next === currentTitle) {
            setPhase(Phase.Paused);
            setPauseRemaining(Math.ceil((props.pauseMs || 2000) / typeSpeed));
          }
        } else if (phase() === Phase.Paused) {
          if (pauseRemaining() <= 0) {
            setPhase(Phase.Deleting);
          } else {
            setPauseRemaining((p) => p - 1);
          }
        } else {
          const next = displayed().substring(0, displayed().length - 1);
          setDisplayed(next);
          if (next.length === 0) {
            setPhase(Phase.Typing);
            setIndex((i) => (i + 1) % titles().length);
          }
        }
      }, typeSpeed);
    }, 0);

    onCleanup(() => {
      clearTimeout(tid);
      if (intervalId) clearInterval(intervalId);
    });
  });

  return (
    <span class={props.class}>
      {displayed()}
      <span class="animate-pulse" aria-hidden="true">|</span>
    </span>
  );
}
