"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/types";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "footer" | "mobile";
}

const languages: Array<{ code: Language; label: string; short: string }> = [
  { code: "ar", label: "العربية", short: "عربي" },
  { code: "en", label: "English", short: "EN" },
  { code: "am", label: "አማርኛ", short: "አማ" },
];

export function LanguageSwitcher({ className = "", variant = "header" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Globe className="w-4 h-4 text-white/50" />
        <div className="flex items-center divide-x divide-white/20 text-xs">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`px-2 py-0.5 transition-colors ${
                language === lang.code
                  ? "text-gold font-bold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center bg-card border border-border rounded-sm p-0.5 shadow-2xs ${className}`}>
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`text-xs px-2.5 py-1 rounded-xs font-medium transition-all ${
              isActive
                ? "bg-green-deep text-white font-semibold shadow-xs"
                : "text-secondary hover:text-primary hover:bg-ivory"
            }`}
            title={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
