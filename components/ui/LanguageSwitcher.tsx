"use client";

import { useLanguage } from "@/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg glass">
      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          language === "id"
            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
            : "text-muted-foreground hover:text-white hover:bg-card/50"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
            : "text-muted-foreground hover:text-white hover:bg-card/50"
        }`}
      >
        EN
      </button>
    </div>
  );
}