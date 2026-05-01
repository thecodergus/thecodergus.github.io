import { JSX } from "solid-js";
import { theme } from "~/stores/themeStore";

export function ThemeProvider(props: { children: JSX.Element }) {
  return <>{props.children}</>;
}

export { theme };
