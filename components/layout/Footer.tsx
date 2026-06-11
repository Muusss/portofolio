"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n";
import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold">PM</span>
              </div>
              <span className="text-white font-bold text-lg">{t.footer.brand}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`text-sm transition-colors ${
                  pathname === "/" ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className={`text-sm transition-colors ${
                  pathname === "/about" ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/projects"
                className={`text-sm transition-colors ${
                  pathname === "/projects" ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/skills"
                className={`text-sm transition-colors ${
                  pathname === "/skills" ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {t.nav.skills}
              </Link>
              <Link
                href="/contact"
                className={`text-sm transition-colors ${
                  pathname === "/contact" ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.connect}</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-border transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/musa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-border transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:assunnah.musa@gmail.com"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-border transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.madeWith}{" "}
            <Heart size={14} className="text-accent fill-accent" /> {t.footer.byMe}
          </p>
          <p className="text-muted-foreground text-sm">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}