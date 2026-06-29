"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { lang, type Lang, type TranslationKey } from "./translations";

type LangContextType = {
  l: Lang;
  t: (key: string) => string;
  toggle: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [l, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("fc_lang") as Lang | null;
    if (stored === "en" || stored === "th") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "th" : "en";
      localStorage.setItem("fc_lang", next);
      return next;
    });
  };

  const t = (key: string) => (lang[l] as Record<string, string>)[key] || key;

  return <LangContext.Provider value={{ l, t, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
