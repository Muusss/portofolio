"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-yellow-400 flex items-center justify-center shadow-lg shadow-[var(--accent)]/20">
                <span className="text-[var(--accent-foreground)] font-bold text-sm">PM</span>
              </div>
              <span className="font-bold text-lg text-[var(--foreground)]">{t.footer.brand}</span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/about", label: t.nav.about },
                { href: "/projects", label: t.nav.projects },
                { href: "/skills", label: t.nav.skills },
                { href: "/contact", label: t.nav.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-[var(--accent)] font-medium"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/musa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:assunnah.musa@gmail.com"
                className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} {t.footer.brand}. All rights reserved.
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
