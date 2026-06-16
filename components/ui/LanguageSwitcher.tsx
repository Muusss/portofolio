"use client";

import { useLanguage } from "@/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[var(--muted)] rounded-lg p-0.5">
      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
          language === "id"
            ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
          language === "en"
            ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
