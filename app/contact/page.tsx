"use client";

import { useLanguage } from "@/i18n";
import { Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">Kontak</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
            {t.contact.title}
            <span className="gradient-text">{t.contact.titleAccent}</span>
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12">
          {/* Email */}
          <a
            href="mailto:assunnah.musa@gmail.com"
            className="group flex items-center gap-6 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
              <Mail size={24} className="text-[var(--accent)]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--muted-foreground)] mb-1">{t.contact.emailLabel}</p>
              <p className="text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                assunnah.musa@gmail.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281929525771"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-emerald-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Phone size={24} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--muted-foreground)] mb-1">WhatsApp</p>
              <p className="text-lg font-medium text-[var(--foreground)] group-hover:text-emerald-400 transition-colors">
                +62 819 2952 5771
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
            <div className="w-14 h-14 rounded-xl bg-[var(--muted)] flex items-center justify-center">
              <MapPin size={24} className="text-[var(--muted-foreground)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--muted-foreground)] mb-1">{t.contact.locationLabel}</p>
              <p className="text-lg font-medium text-[var(--foreground)]">{t.about.location}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="p-8 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">{t.contact.connectTitle}</h3>
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/musa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[var(--primary)]/50 hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}