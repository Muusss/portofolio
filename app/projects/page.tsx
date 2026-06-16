"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n";
import { ExternalLink, X } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

const projects = [
  {
    id: 1,
    title: "Sistem Informasi Pengaduan Pelanggan",
    description: "Web-based customer complaints service information system untuk PT Telekomunikasi Selular Cirebon.",
    longDescription: "Sistem informasi pengaduan pelanggan berbasis web yang dikembangkan untuk PT Telekomunikasi Selular Cirebon. Sistem ini memungkinkan pelanggan untuk mengajukan keluhan secara online, melacak status pengaduan, dan mendapatkan respons dari tim IT support.",
    tags: ["Web Development", "PHP", "MySQL", "JavaScript"],
    category: "Web",
    color: "accent",
  },
  {
    id: 2,
    title: "Sistem Pendukung Keputusan Siswa Teladan",
    description: "Decision Support System menggunakan metode ROC dan SMART untuk SDIT As Sunnah Cirebon.",
    longDescription: "Sistem Pendukung Keputusan untuk pemilihan siswa teladan menggunakan metode ROC dan SMART. Sistem ini membantu pihak sekolah dalam menentukan siswa teladan berdasarkan kriteria yang telah ditetapkan.",
    tags: ["Data Analytics", "ROC Method", "SMART Method", "PHP", "MySQL"],
    category: "DSS",
    color: "emerald",
  },
  {
    id: 3,
    title: "Sistem Rekomendasi Menu Favorit",
    description: "Decision Support System untuk rekomendasi menu menggunakan metode ROC dan SMART di Kopi Buri Umah.",
    longDescription: "Sistem Pendukung Keputusan untuk rekomendasi menu favorit di Kopi Buri Umah menggunakan metode ROC dan SMART. Sistem ini menganalisis preferensi pelanggan dan memberikan rekomendasi menu berdasarkan berbagai kriteria.",
    tags: ["Data Analytics", "ROC Method", "SMART Method", "Web Development"],
    category: "DSS",
    color: "violet",
  },
  {
    id: 4,
    title: "Website Personal",
    description: "Website portfolio personal untuk menampilkan profil, proyek, dan informasi kontak.",
    longDescription: "Website portfolio personal yang dikembangkan menggunakan Next.js dan Tailwind CSS. Menampilkan profil lengkap, proyek-proyek yang telah dikerjakan, skills, dan informasi kontak.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    category: "Web",
    color: "indigo",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  accent: { bg: "bg-[var(--accent)]/10", text: "text-[var(--accent)]", border: "border-[var(--accent)]/20", gradient: "from-[var(--accent)] to-yellow-400" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", gradient: "from-emerald-500 to-teal-400" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", gradient: "from-violet-500 to-purple-400" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", gradient: "from-indigo-500 to-blue-400" },
};

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
    <div className="pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
            {t.projects.title}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/25"
                  : "bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--muted)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image placeholder */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white/15 text-9xl font-bold">{String(project.id).padStart(2, "0")}</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${colors.bg} ${colors.text}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[var(--card)] rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto animate-scale-in border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b border-[var(--border)]">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className={`aspect-video bg-gradient-to-br ${colorMap[selectedProject.color].gradient}`}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/15 text-9xl font-bold">{String(selectedProject.id).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-lg mb-4 ${colorMap[selectedProject.color].bg} ${colorMap[selectedProject.color].text}`}>
                {selectedProject.category}
              </span>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">{selectedProject.title}</h2>
              <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium bg-[var(--muted)] text-[var(--muted-foreground)] rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--muted)] text-[var(--foreground)] font-semibold hover:bg-[var(--border)] transition-colors"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}