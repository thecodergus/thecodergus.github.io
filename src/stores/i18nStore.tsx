import { createSignal, createContext, useContext, JSX, onMount } from "solid-js";
import { Language, type Messages, type SharedData } from "~/types";

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return Language.PtBr;
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && Object.values(Language).includes(stored)) return stored;
  return Language.PtBr;
}

const [language, setLanguageSignal] = createSignal<Language>(getInitialLanguage());
const [messages, setMessages] = createSignal<Messages | undefined>(undefined);
const [sharedData, setSharedData] = createSignal<SharedData | undefined>(undefined);

export function setLanguage(lang: Language) {
  setLanguageSignal(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
    fetchMessages(lang).then(setMessages).catch(console.error);
  }
}

const fetchMessages = async (lang: Language): Promise<Messages> => {
  const response = await fetch(`/data/languages/${lang}.json`);
  if (!response.ok) throw new Error("Failed to load messages");
  return response.json() as Promise<Messages>;
};

const fetchSharedData = async (): Promise<SharedData> => {
  const response = await fetch("/data/portfolio_shared_data.json");
  if (!response.ok) throw new Error("Failed to load shared data");
  return response.json() as Promise<SharedData>;
};

export function t(key: string): string {
  const msgs = messages();
  if (!msgs) return key;

  const keys = key.split(".");
  let value: unknown = msgs;
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}

export { language, messages, sharedData };

interface I18nContextValue {
  language: () => Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  messages: () => Messages | undefined;
  sharedData: () => SharedData | undefined;
}

const I18nContext = createContext<I18nContextValue>();

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

export function I18nProvider(props: { children: JSX.Element }) {
  onMount(() => {
    fetchSharedData().then(setSharedData).catch(console.error);
    fetchMessages(language()).then(setMessages).catch(console.error);
  });

  const value: I18nContextValue = {
    language,
    setLanguage,
    t,
    messages,
    sharedData,
  };

  return (
    <I18nContext.Provider value={value}>
      {props.children}
    </I18nContext.Provider>
  );
}
