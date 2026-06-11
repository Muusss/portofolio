"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const techCategories = [
  {
    id: "development",
    title: "Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "HTML", abbr: "HT" },
      { name: "CSS", abbr: "CS" },
      { name: "JavaScript", abbr: "JS" },
      { name: "PHP", abbr: "PH" },
      { name: "Python", abbr: "PY" },
      { name: "React", abbr: "RC" },
      { name: "Next.js", abbr: "NX" },
      { name: "TypeScript", abbr: "TS" },
      { name: "MySQL", abbr: "MY" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "Git", abbr: "GT" },
      { name: "VS Code", abbr: "VC" },
      { name: "Figma", abbr: "FG" },
      { name: "Tailwind CSS", abbr: "TW" },
      { name: "Photoshop", abbr: "PS" },
      { name: "Illustrator", abbr: "AI" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Microsoft Word", abbr: "MW" },
      { name: "Microsoft Excel", abbr: "ME" },
      { name: "Microsoft PowerPoint", abbr: "MP" },
      { name: "Google Docs", abbr: "GD" },
      { name: "Google Sheets", abbr: "GS" },
    ],
  },
  {
    id: "data",
    title: "Data Analytics",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "ROC Method", abbr: "RC" },
      { name: "SMART Method", abbr: "SM" },
      { name: "Data Analysis", abbr: "DA" },
      { name: "SPSS", abbr: "SP" },
    ],
  },
];

export function FeaturedSkills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("development");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeCategoryData = techCategories.find((c) => c.id === activeCategory);

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : "glass text-muted-foreground hover:text-white hover:bg-card"
              }`}
            >
              <category.icon size={16} />
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Tech logos grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 rounded-2xl glass"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            {activeCategoryData?.items.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                className="group flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-default aspect-square"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${activeCategoryData?.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-xs md:text-sm">
                    {tech.abbr}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}