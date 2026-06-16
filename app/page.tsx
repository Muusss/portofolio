import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Projects Preview Section */}
      <section className="py-24 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">Selected Work</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <article className="group relative bg-[var(--background)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/50 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--accent)] to-yellow-400 flex items-center justify-center">
                <span className="text-white/20 text-8xl font-bold">01</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] rounded-md">Web</span>
                  <span className="text-xs text-[var(--muted-foreground)]">2024</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Sistem Informasi Pengaduan Pelanggan
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                  Web-based customer complaints service information system untuk PT Telekomunikasi Selular Cirebon.
                </p>
                <div className="flex gap-4">
                  <span className="text-xs font-medium text-[var(--muted-foreground)]">PHP</span>
                  <span className="text-xs font-medium text-[var(--muted-foreground)]">MySQL</span>
                  <span className="text-xs font-medium text-[var(--muted-foreground)]">JavaScript</span>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group relative bg-[var(--background)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                <span className="text-white/20 text-8xl font-bold">02</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 rounded-md">DSS</span>
                  <span className="text-xs text-[var(--muted-foreground)]">2024</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-emerald-400 transition-colors">
                  Sistem Pendukung Keputusan Siswa Teladan
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                  Decision Support System menggunakan metode ROC dan SMART untuk SDIT As Sunnah Cirebon.
                </p>
                <div className="flex gap-4">
                  <span className="text-xs font-medium text-[var(--muted-foreground)]">ROC Method</span>
                  <span className="text-xs font-medium text-[var(--muted-foreground)]">SMART Method</span>
                </div>
              </div>
            </article>
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--card)] to-[var(--muted)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--accent)] to-yellow-500 text-[var(--accent-foreground)] font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}