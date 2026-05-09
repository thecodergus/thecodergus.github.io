import { createSignal, onMount, onCleanup } from "solid-js";

interface TypewriterTextProps {
  text: string;
  class?: string;
  speed?: number;
}

export default function TypewriterText(props: TypewriterTextProps) {
  const [displayed, setDisplayed] = createSignal(props.text || "");
  const [typing, setTyping] = createSignal(true);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  onMount(() => {
    let i = 0;
    const chars = props.text;
    if (chars.length === 0) {
      setTyping(false);
      return;
    }

    const tid = setTimeout(() => {
      setDisplayed("");
      intervalId = setInterval(() => {
        i++;
        setDisplayed(chars.substring(0, i));
        if (i >= chars.length) {
          setTyping(false);
          if (intervalId) clearInterval(intervalId);
        }
      }, props.speed || 80);
    }, 0);

    onCleanup(() => {
      clearTimeout(tid);
      if (intervalId) clearInterval(intervalId);
    });
  });

  return (
    <span class={props.class}>
      {displayed()}
      {typing() && <span class="animate-pulse" aria-hidden="true">|</span>}
    </span>
  );
}
