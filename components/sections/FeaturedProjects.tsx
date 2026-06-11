"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "Sistem Informasi Pengaduan Pelanggan",
      description: "Web-based customer complaints service information system untuk PT Telekomunikasi Selular Cirebon.",
      tags: ["Web Development", "PHP", "MySQL"],
      category: "Web",
      link: "/projects",
    },
    {
      title: "Sistem Pendukung Keputusan Siswa Teladan",
      description: "Decision Support System menggunakan metode ROC dan SMART untuk SDIT As Sunnah Cirebon.",
      tags: ["Data Analytics", "ROC", "SMART"],
      category: "DSS",
      link: "/projects",
    },
    {
      title: "Sistem Rekomendasi Menu Favorit",
      description: "Decision Support System untuk rekomendasi menu menggunakan metode ROC dan SMART di Kopi Buri Umah.",
      tags: ["Data Analytics", "ROC", "SMART"],
      category: "DSS",
      link: "/projects",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">{t.projects.title}</span>
            </h2>
            <p className="text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            {t.hero.viewWork}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300 cursor-pointer"
            >
              {/* Category badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
                {project.category}
              </span>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-card border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={project.link}
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-white transition-colors"
              >
                {t.projects.viewProject}
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}