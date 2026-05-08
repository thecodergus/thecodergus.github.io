import { createSignal, createEffect } from "solid-js";
import { SceneKind } from "~/engine/types";

const STORAGE_KEY = "portfolio-theme";

export interface ThemeMeta {
  id: SceneKind;
  label: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
}

export const THEMES: ThemeMeta[] = [
  { id: SceneKind.AI,          label: "IA",         primary: "#00E5FF", secondary: "#10A37F", tertiary: "#8B5CF6", background: "#080012" },
  { id: SceneKind.Blockchain,  label: "Blockchain", primary: "#F7931A", secondary: "#00BFA5", tertiary: "#627EEA", background: "#0D1117" },
  { id: SceneKind.Software,    label: "Software",   primary: "#00FF41", secondary: "#006622", tertiary: "#FFFFFF", background: "#000000" },
  { id: SceneKind.Web,         label: "Web",        primary: "#0000EE", secondary: "#551A8B", tertiary: "#CC0000", background: "#F8F9FA" },
];

function getInitialTheme(): SceneKind {
  return SceneKind.AI;
}

const [theme, setThemeSignal] = createSignal<SceneKind>(getInitialTheme());

createEffect(() => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme());
    localStorage.setItem(STORAGE_KEY, theme());
  }
});


export function setTheme(id: SceneKind) {
  setThemeSignal(id);
}

export { theme };
export default theme;
