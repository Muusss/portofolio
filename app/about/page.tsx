"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n";
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: "work",
      title: "Computer Administrator",
      company: "Lapas Narkotika Class II A Cirebon",
      period: "November 2025 - Present",
      description: "Mengelola server, database, dan sistem informasi. Memastikan integritas data melalui backup reguler dan manajemen akses. Mengembangkan dan meningkatkan aplikasi untuk efisiensi operasional.",
    },
    {
      type: "work",
      title: "IT Support",
      company: "PT Telekomunikasi Selular - Business Jawa Barat Section",
      period: "November - December 2024",
      description: "Mengembangkan website personal, memantau sistem komputer dan jaringan, serta mengembangkan website pengaduan pelanggan.",
    },
    {
      type: "education",
      title: "S1 Informatika",
      company: "Universitas Muhammadiyah Cirebon",
      period: "2021 - 2025",
      description: "GPA3.53/4.00. Aktivis organisasi: Kepala Departemen Advokasi Himasantika, Kepala Departemen Advokasi BEM FT, Kepala Kelompok Kerja Mahasiswa.",
    },
  ];

  const skills = [
    { name: "Software Engineering", level: 90 },
    { name: "Web Development", level: 85 },
    { name: "Data Analytics", level: 80 },
    { name: "Server Administration", level: 75 },
    { name: "Microsoft Office", level: 90 },
    { name: "Graphic Design", level: 70 },
  ];

  const certifications = [
    { name: "Informatika Engineering", issuer: "Universitas Muhammadiyah Cirebon", year: "2025" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Google Data Analytics", issuer: "Google", year: "2024" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
              {/* Gradient placeholder for photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-card/50 backdrop-blur flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">M</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/30 blur-[40px]" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/30 blur-[40px]" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">{t.about.title}</span>
                <span className="gradient-text">{t.about.titleAccent}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">{t.about.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm">{t.about.available}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t.about.bio2}
            </p>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <Download size={18} />
              {t.about.downloadCV}
            </a>
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">{t.about.skillsTitle}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-card overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">{t.about.experienceTitle}</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "work" ? (
                          <Briefcase size={16} className="text-primary" />
                        ) : (
                          <GraduationCap size={16} className="text-secondary" />
                        )}
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.type === "work" ? t.about.work : t.about.education}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">{item.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">{t.about.certTitle}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}