import { createSignal, createEffect, onMount } from "solid-js";

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
  if (typeof window === "undefined") return "ai";
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
  if (stored && THEMES.some((t) => t.id === stored)) return stored;
  return "ai";
}

const [theme, setThemeSignal] = createSignal<ThemeId>(getInitialTheme());

createEffect(() => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme());
    localStorage.setItem(STORAGE_KEY, theme());
  }
});

onMount(() => {});

export function setTheme(id: ThemeId) {
  setThemeSignal(id);
}

export { theme };
export default theme;
