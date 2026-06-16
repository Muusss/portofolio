"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#0D0D14] to-[var(--background)]" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[150px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-[var(--foreground)]">{t.hero.greeting}</span>
              <br />
              <span className="gradient-text">{t.hero.name}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] font-semibold shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.viewWork}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--card)] text-[var(--foreground)] font-semibold border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowRight size={18} />
              {t.hero.contactMe}
            </Link>
          </div>
        </div>

        {/* Profile Photo */}
        <div className={`mt-12 flex justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-yellow-400 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full overflow-hidden bg-[var(--background)]">
              {!imageError ? (
                <Image
                  src="/profile.jpeg"
                  alt="Foto Profil Musa"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-yellow-400">
                  <span className="text-5xl sm:text-6xl font-bold text-[var(--accent-foreground)]">M</span>
                </div>
              )}
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[var(--accent)]/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
