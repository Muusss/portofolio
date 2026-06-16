"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { SkillLogoComponent } from "@/components/ui/Logos";

const techCategories = [
  {
    id: "development",
    title: "Development",
    icon: Code,
    items: [
      { name: "HTML", logo: "HTML" },
      { name: "CSS", logo: "CSS" },
      { name: "JavaScript", logo: "JavaScript" },
      { name: "PHP", logo: "PHP" },
      { name: "Python", logo: "Python" },
      { name: "React", logo: "React" },
      { name: "Next.js", logo: "NextJS" },
      { name: "TypeScript", logo: "TypeScript" },
      { name: "MySQL", logo: "MySQL" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: Wrench,
    items: [
      { name: "Git", logo: "Git" },
      { name: "VS Code", logo: "VSCode" },
      { name: "Figma", logo: "Figma" },
      { name: "Tailwind CSS", logo: "TailwindCSS" },
      { name: "Photoshop", logo: "Photoshop" },
      { name: "Illustrator", logo: "Illustrator" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    icon: Cloud,
    items: [
      { name: "Microsoft Word", logo: "Word" },
      { name: "Microsoft Excel", logo: "Excel" },
      { name: "Microsoft PowerPoint", logo: "PowerPoint" },
      { name: "Google Docs", logo: "GoogleDocs" },
      { name: "Google Sheets", logo: "GoogleSheets" },
    ],
  },
  {
    id: "data",
    title: "Data Analytics",
    icon: Database,
    items: [
      { name: "ROC Method", logo: null },
      { name: "SMART Method", logo: null },
      { name: "Data Analysis", logo: null },
      { name: "SPSS", logo: "SPSS" },
    ],
  },
];

export default function SkillsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("development");

  const activeCategoryData = techCategories.find((c) => c.id === activeCategory);

  return (
    <div className="pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">Skill</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
            {t.skills.title}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/25"
                  : "bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--muted)]"
              }`}
            >
              <category.icon size={16} />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="bg-[var(--card)] rounded-3xl border border-[var(--border)] p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {activeCategoryData?.items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[var(--muted)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SkillLogoComponent logoKey={tech.logo} name={tech.name} />
                </div>
                <span className="text-xs font-semibold text-[var(--muted-foreground)] text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 flex items-center justify-between text-sm">
          <p className="text-[var(--muted-foreground)]">
            <span className="font-semibold text-[var(--foreground)]">{activeCategoryData?.items.length}</span> skills in {activeCategoryData?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
