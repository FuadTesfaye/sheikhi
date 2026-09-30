"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Direction, Translations } from "./types";
import { translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: Direction;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL param first (?lang=ar, ?lang=am, ?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang") as Language | null;
    
    if (langParam && (langParam === "en" || langParam === "ar" || langParam === "am")) {
      setLanguageState(langParam);
      try {
        localStorage.setItem("sheikhi_lang_v2", langParam);
        document.cookie = `NEXT_LOCALE=${langParam};path=/;max-age=31536000`;
      } catch (_) {}
      return;
    }

    // Check localStorage (v2 key ensures default Arabic for both new and existing visitors)
    try {
      const stored = localStorage.getItem("sheikhi_lang_v2") as Language | null;
      if (stored && (stored === "en" || stored === "ar" || stored === "am")) {
        setLanguageState(stored);
      } else {
        setLanguageState("ar");
      }
    } catch (_) {
      setLanguageState("ar");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("sheikhi_lang_v2", lang);
      document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000`;
    } catch (_) {}
  };

  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const t = translations[language];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      
      // Toggle font class on body for script optimization
      if (language === "ar") {
        document.body.classList.add("font-arabic");
        document.body.classList.remove("font-amharic");
      } else if (language === "am") {
        document.body.classList.add("font-amharic");
        document.body.classList.remove("font-arabic");
      } else {
        document.body.classList.remove("font-arabic");
        document.body.classList.remove("font-amharic");
      }
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
