"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n";
import { ExternalLink, X } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

const projects = [
  {
    id: 1,
    title: "Sistem Informasi Pengaduan Pelanggan",
    description: "Web-based customer complaints service information system untuk PT Telekomunikasi Selular Cirebon.",
    longDescription: "Sistem informasi pengaduan pelanggan berbasis web yang dikembangkan untuk PT Telekomunikasi Selular Cirebon. Sistem ini memungkinkan pelanggan untuk mengajukan keluhan secara online, melacak status pengaduan, dan mendapatkan respons dari tim IT support.",
    tags: ["Web Development", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
    category: "Web",
    image: "https://picsum.photos/seed/complaints/600/400",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Sistem Pendukung Keputusan Siswa Teladan",
    description: "Decision Support System menggunakan metode ROC dan SMART untuk SDIT As Sunnah Cirebon.",
    longDescription: "Sistem Pendukung Keputusan untuk pemilihan siswa teladan menggunakan metode ROC (Rank Order Centroid) dan SMART (Simple Multi-Attribute Rating Technique). Sistem ini membantu pihak sekolah dalam menentukan siswa teladan berdasarkan kriteria yang telah ditetapkan.",
    tags: ["Data Analytics", "ROC Method", "SMART Method", "PHP", "MySQL"],
    category: "DSS",
    image: "https://picsum.photos/seed/dss-student/600/400",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Sistem Rekomendasi Menu Favorit",
    description: "Decision Support System untuk rekomendasi menu menggunakan metode ROC dan SMART di Kopi Buri Umah.",
    longDescription: "Sistem Pendukung Keputusan untuk rekomendasi menu favorit di Kopi Buri Umah menggunakan metode ROC dan SMART. Sistem ini menganalisis preferensi pelanggan dan memberikan rekomendasi menu berdasarkan berbagai kriteria seperti harga,popularitas, dan ketersediaan bahan.",
    tags: ["Data Analytics", "ROC Method", "SMART Method", "Web Development"],
    category: "DSS",
    image: "https://picsum.photos/seed/restaurant/600/400",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Website Personal",
    description: "Website portfolio personal untuk menampilkan profil, proyek, dan informasi kontak.",
    longDescription: "Website portfolio personal yang dikembangkan menggunakan Next.js dan Tailwind CSS. Menampilkan profil lengkap, proyek-proyek yang telah dikerjakan, skills, dan informasi kontak untuk keperluan profesional.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    category: "Web",
    image: "https://picsum.photos/seed/portfolio/600/400",
    link: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { key: "All", label: t.categories.all },
    { key: "Web", label: t.categories.web },
    { key: "DSS", label: "DSS" },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.projects.title}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-primary via-secondary to-accent text-white"
                  : "glass text-muted-foreground hover:text-white hover:bg-card"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative rounded-2xl overflow-hidden glass hover:bg-card/80 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3">
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
                    {project.tags.slice(0, 3).map((tag) => (
<span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-card border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-card border border-border text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      {t.projects.liveDemo}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                      {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-card transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            {/* Image */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            {/* Content */}
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
              {selectedProject.category}
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-card border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <ExternalLink size={18} />
                {t.projects.liveDemo}
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Github size={18} />
                {t.projects.viewCode}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}