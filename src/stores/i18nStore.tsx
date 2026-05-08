import { createSignal, createContext, useContext, JSX, onMount } from "solid-js";
import { Language, type Messages, type SharedData } from "~/types";

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  return Language.PtBr;
}

const [language, setLanguageSignal] = createSignal<Language>(getInitialLanguage());
const [messages, setMessages] = createSignal<Messages | undefined>(undefined);
const [sharedData, setSharedData] = createSignal<SharedData | undefined>(undefined);
const [fetchError, setFetchError] = createSignal<string | null>(null);

export function setLanguage(lang: Language) {
  setLanguageSignal(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
    setFetchError(null);
    fetchMessages(lang)
      .then((data) => { setMessages(data); setFetchError(null); })
      .catch((err) => {
        console.error("[i18n] Failed to load messages:", err);
        setFetchError(`Falha ao carregar idioma: ${lang}`);
      });
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

export function t(key: string, defaultValue?: string): string {
  const msgs = messages();
  if (!msgs) return defaultValue ?? key;

  const keys = key.split(".");
  let value: unknown = msgs;
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return defaultValue ?? key;
    }
  }
  return typeof value === "string" ? value : defaultValue ?? key;
}

export { language, messages, sharedData, fetchError };

interface I18nContextValue {
  language: () => Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
  messages: () => Messages | undefined;
  sharedData: () => SharedData | undefined;
  fetchError: () => string | null;
}

const I18nContext = createContext<I18nContextValue>();

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

export function I18nProvider(props: { children: JSX.Element }) {
  onMount(() => {
    fetchSharedData()
      .then((data) => { if (data) setSharedData(data); })
      .catch((err) => {
        console.error("[i18n] Failed to load shared data:", err);
        setFetchError("Falha ao carregar dados compartilhados");
      });

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored && Object.values(Language).includes(stored) && stored !== language()) {
        setLanguageSignal(stored);
      }
    }

    const lang = language();

    fetchMessages(lang)
      .then((data) => {
        setMessages(data);
        setFetchError(null);
      })
      .catch((err) => {
        console.error("[i18n] Failed to load messages:", err);
        setFetchError(`Falha ao carregar idioma: ${lang}`);
      });
  });

  const value: I18nContextValue = {
    language,
    setLanguage,
    t,
    messages,
    sharedData,
    fetchError,
  };

  return (
    <I18nContext.Provider value={value}>
      {props.children}
    </I18nContext.Provider>
  );
}
