import { createSignal, createEffect } from "solid-js";

const STORAGE_KEY = "portfolio-theme";

export type ThemeId = "ai" | "blockchain" | "software" | "web";

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
}

export const THEMES: ThemeMeta[] = [
  { id: "ai",         label: "IA",         primary: "#00E5FF", secondary: "#10A37F", tertiary: "#8B5CF6", background: "#080012" },
  { id: "blockchain", label: "Blockchain", primary: "#F7931A", secondary: "#00BFA5", tertiary: "#627EEA", background: "#0D1117" },
  { id: "software",   label: "Software",   primary: "#00FF41", secondary: "#006622", tertiary: "#FFFFFF", background: "#000000" },
  { id: "web",        label: "Web",        primary: "#0000EE", secondary: "#551A8B", tertiary: "#CC0000", background: "#F8F9FA" },
];

function getInitialTheme(): ThemeId {
  return "ai";
}

const [theme, setThemeSignal] = createSignal<ThemeId>(getInitialTheme());

createEffect(() => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme());
    localStorage.setItem(STORAGE_KEY, theme());
  }
});


export function setTheme(id: ThemeId) {
  setThemeSignal(id);
}

export { theme };
export default theme;
