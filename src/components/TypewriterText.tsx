import { createSignal, onMount, onCleanup } from "solid-js";

interface TypewriterTextProps {
  text: string;
  class?: string;
  speed?: number;
}

export default function TypewriterText(props: TypewriterTextProps) {
  const [displayed, setDisplayed] = createSignal("");
  const [typing, setTyping] = createSignal(true);

  onMount(() => {
    let i = 0;
    const chars = props.text;
    if (chars.length === 0) {
      setTyping(false);
      return;
    }

    const timer = setInterval(() => {
      i++;
      setDisplayed(chars.substring(0, i));
      if (i >= chars.length) {
        setTyping(false);
        clearInterval(timer);
      }
    }, props.speed || 80);

    onCleanup(() => clearInterval(timer));
  });

  return (
    <span class={props.class}>
      {displayed()}
      {typing() && <span class="animate-pulse" aria-hidden="true">|</span>}
    </span>
  );
}
