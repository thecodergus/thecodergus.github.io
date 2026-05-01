import { onMount, onCleanup } from "solid-js";

interface GlitchTextProps {
  text: string;
  class?: string;
}

export default function GlitchText(props: GlitchTextProps) {
  let containerRef: HTMLSpanElement | undefined;

  onMount(() => {
    const container = containerRef;
    if (!container) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const originalText = props.text;
    let intervalId: ReturnType<typeof setInterval>;
    let isGlitching = false;

    const glitch = () => {
      if (isGlitching) return;
      isGlitching = true;
      let iterations = 0;

      intervalId = setInterval(() => {
        if (!container) {
          clearInterval(intervalId);
          return;
        }

        container.textContent = originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        iterations += 1 / 2;

        if (iterations >= originalText.length) {
          clearInterval(intervalId);
          container.textContent = originalText;
          isGlitching = false;
        }
      }, 30);
    };

    // Trigger glitch every 4 seconds
    const timeoutId = setTimeout(glitch, 500);
    const interval = setInterval(glitch, 4000);

    onCleanup(() => {
      clearTimeout(timeoutId);
      clearInterval(interval);
      clearInterval(intervalId);
    });
  });

  return (
    <span
      ref={containerRef}
      class={props.class}
      style={{ display: "inline-block", "white-space": "pre" }}
    >
      {props.text}
    </span>
  );
}
