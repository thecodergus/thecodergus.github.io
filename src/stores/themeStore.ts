import { createSignal, createEffect } from "solid-js";

const STORAGE_KEY = "portfolio-theme";

export type ThemeId = "ai" | "blockchain" | "software" | "web";

export interface ThemeMeta {
  id: ThemeId;
  label: string;
}

export const THEMES: ThemeMeta[] = [
  { id: "ai", label: "IA" },
  { id: "blockchain", label: "Blockchain" },
  { id: "software", label: "Software" },
  { id: "web", label: "Web" },
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
