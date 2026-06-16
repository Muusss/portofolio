"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n";
import { Download, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { AboutLogoComponent } from "@/components/ui/Logos";

export default function AboutPage() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const timeline = [
    {
      type: "work",
      title: "Computer Administrator",
      company: "Lapas Narkotika Class II A Cirebon",
      period: "November 2025 - Sekarang",
      description: "Mengelola server, database, dan sistem informasi. Memastikan integritas data melalui backup reguler dan manajemen akses.",
    },
    {
      type: "work",
      title: "IT Support",
      company: "PT Telekomunikasi Selular - Business Jawa Barat",
      period: "November - Desember 2024",
      description: "Mengembangkan website personal, memantau sistem komputer dan jaringan, serta mengembangkan website pengaduan pelanggan.",
    },
    {
      type: "education",
      title: "S1 Informatika",
      company: "Universitas Muhammadiyah Cirebon",
      period: "2021 - 2025",
      description: "IPK 3.53/4.00. Aktif dalam organisasi kemahasiswaan.",
    },
  ];

  const skills = [
    { name: "Software Engineering", logo: "SoftwareEngineering" },
    { name: "Web Development", logo: "WebDevelopment" },
    { name: "Data Analytics", logo: "DataAnalytics" },
    { name: "Server Administration", logo: "ServerAdmin" },
    { name: "Microsoft Office", logo: "MicrosoftOffice" },
    { name: "Graphic Design", logo: "GraphicDesign" },
  ];

  return (
    <div className="pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">Tentang Saya</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] tracking-tight">
            {t.about.title}
            <span className="gradient-text">{t.about.titleAccent}</span>
          </h1>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Avatar with real photo */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--accent)] to-yellow-400 shadow-xl shadow-[var(--accent)]/20">
                {!imageError ? (
                  <Image
                    src="/profile.jpeg"
                    alt="Foto Profil Musa"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[var(--accent-foreground)]/90 text-8xl font-bold">M</span>
                  </div>
                )}
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--muted)] rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {t.about.bio}
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                <MapPin size={16} className="text-[var(--accent)]" />
                <span className="text-sm font-medium">{t.about.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                <Calendar size={16} className="text-[var(--accent)]" />
                <span className="text-sm font-medium">{t.about.available}</span>
              </div>
            </div>

            <p className="text-[var(--muted-foreground)] leading-relaxed">
              {t.about.bio2}
            </p>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] font-semibold shadow-lg shadow-[var(--accent)]/25 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 transition-all"
            >
              <Download size={18} />
              {t.about.downloadCV}
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">{t.about.skillsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AboutLogoComponent logoKey={skill.logo} name={skill.name} />
                </div>
                <span className="text-xs font-semibold text-[var(--muted-foreground)] text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">{t.about.experienceTitle}</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="relative pl-8 pb-6 border-l-2 border-[var(--border)] last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                  item.type === "work" ? "bg-[var(--accent)]" : "bg-[var(--primary)]"
                }`} />

                {/* Content */}
                <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent)]/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "work" ? (
                      <Briefcase size={14} className="text-[var(--accent)]" />
                    ) : (
                      <GraduationCap size={14} className="text-[var(--primary)]" />
                    )}
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                      {item.type === "work" ? t.about.work : t.about.education}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="font-medium text-[var(--accent)] mb-1">{item.company}</p>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">{item.period}</p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
