"use client";

import React from "react";

// SVG Logo components for skills
const Logos = {
  HTML: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#E34F26" x="1" y="1" width="22" height="22" rx="3"/>
      <path fill="white" d="M3 6h18l-1.2 12.5L12 19l-7.8-0.5L3 6zm9.5 3.5h-6l.3 3h4.8l-.3 3h-4.5l-.3 3h6.5z"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#1572B6" x="1" y="1" width="22" height="22" rx="3"/>
      <path fill="white" d="M3 6h18l-1.2 12.5L12 19l-7.8-0.5L3 6zm9.2 3h-6l.3 3h4.5l-.2 2h-4.6l-.3 3h6.6z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#F7DF1E" x="1" y="1" width="22" height="22" rx="3"/>
      <path fill="#323330" d="M5 18h1.5l.5-1.5h4l.5 1.5H18v-1l-1-5H8l-1 5v1zm5.5-3.5l.5-3 .5 3h-1zm3 3.5h-6v-4l3-3 3 3v4z"/>
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#777BB4" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PHP</text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#3776AB" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Python</text>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <circle fill="none" stroke="#61DAFB" strokeWidth="1.5" cx="12" cy="12" r="10"/>
      <ellipse fill="none" stroke="#61DAFB" strokeWidth="1.5" cx="12" cy="12" rx="10" ry="4"/>
      <ellipse fill="none" stroke="#61DAFB" strokeWidth="1.5" cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse fill="none" stroke="#61DAFB" strokeWidth="1.5" cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>
      <circle fill="#61DAFB" cx="12" cy="4" r="1.5"/>
      <circle fill="#61DAFB" cx="12" cy="20" r="1.5"/>
      <circle fill="#61DAFB" cx="4" cy="12" r="1.5"/>
      <circle fill="#61DAFB" cx="20" cy="12" r="1.5"/>
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#0F172A" x="1" y="1" width="22" height="22" rx="3"/>
      <path fill="white" d="M12 6l-8 4v8l8 4 8-4V10l-8-4zm0 2.5l5.5 2.75v5.5L12 19.5l-5.5-2.75v-5.5L12 8.5z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#3178C6" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">TS</text>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#4479A1" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">MySQL</text>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#F05032" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Git</text>
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#007ACC" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">VS</text>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#000000" x="1" y="1" width="10" height="10" rx="1.5"/>
      <rect fill="#000000" x="13" y="1" width="10" height="10" rx="1.5"/>
      <rect fill="#000000" x="1" y="13" width="10" height="10" rx="1.5"/>
      <rect fill="#000000" x="13" y="13" width="10" height="10" rx="1.5"/>
      <text x="12" y="16" textAnchor="middle" fill="#F24E1E" fontSize="8" fontWeight="bold">fig</text>
    </svg>
  ),
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#38B2AC" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">TW</text>
    </svg>
  ),
  Photoshop: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#31A8FF" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Ps</text>
    </svg>
  ),
  Illustrator: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#FF9A00" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Ai</text>
    </svg>
  ),
  Word: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#2B579A" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">W</text>
    </svg>
  ),
  Excel: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#217346" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Ex</text>
    </svg>
  ),
  PowerPoint: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#D24726" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">P</text>
    </svg>
  ),
  GoogleDocs: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#4285F4" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Doc</text>
    </svg>
  ),
  GoogleSheets: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#0F9D58" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Sh</text>
    </svg>
  ),
  SPSS: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#C8282E" x="1" y="1" width="22" height="22" rx="3"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">SPSS</text>
    </svg>
  ),
};

// About page specific logos
const AboutLogos = {
  SoftwareEngineering: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="var(--accent)" x="2" y="2" width="20" height="20" rx="4"/>
      <path fill="var(--accent-foreground)" d="M7 8l3 4-3 4M12 16h5M17 8l-3 4 3 4"/>
    </svg>
  ),
  WebDevelopment: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="var(--primary)" x="2" y="2" width="20" height="20" rx="4"/>
      <path fill="var(--primary-foreground)" d="M4 12h16M8 8l4-4 4 4M8 16l4 4 4-4"/>
    </svg>
  ),
  DataAnalytics: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="#8B5CF6" x="2" y="2" width="20" height="20" rx="4"/>
      <rect fill="white" x="5" y="14" width="3" height="6"/>
      <rect fill="white" x="10.5" y="10" width="3" height="10"/>
      <rect fill="white" x="16" y="6" width="3" height="14"/>
    </svg>
  ),
  ServerAdmin: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="var(--accent)" x="2" y="2" width="20" height="20" rx="4"/>
      <rect fill="var(--accent-foreground)" x="4" y="5" width="16" height="4" rx="1"/>
      <rect fill="var(--accent-foreground)" x="4" y="10" width="16" height="4" rx="1"/>
      <rect fill="var(--accent-foreground)" x="4" y="15" width="16" height="4" rx="1"/>
      <circle fill="var(--accent)" cx="7" cy="7" r="1"/>
      <circle fill="var(--accent)" cx="7" cy="12" r="1"/>
      <circle fill="var(--accent)" cx="7" cy="17" r="1"/>
    </svg>
  ),
  MicrosoftOffice: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="var(--primary)" x="2" y="2" width="20" height="20" rx="4"/>
      <text x="12" y="16" textAnchor="middle" fill="var(--primary-foreground)" fontSize="10" fontWeight="bold">Office</text>
    </svg>
  ),
  GraphicDesign: () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect fill="#EC4899" x="2" y="2" width="20" height="20" rx="4"/>
      <circle fill="none" stroke="white" strokeWidth="2" cx="12" cy="12" r="6"/>
      <circle fill="white" cx="12" cy="12" r="2"/>
    </svg>
  ),
};

export type SkillLogoKey = keyof typeof Logos;
export type AboutLogoKey = keyof typeof AboutLogos;

// Default fallback logo component
export function DefaultLogo({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 text-lg",
    lg: "w-20 h-20 text-xl",
  };

  return (
    <div className={`${sizeClasses[size]} rounded-xl bg-[var(--muted)] flex items-center justify-center font-bold text-[var(--muted-foreground)]`}>
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

// Logo component for skills page (logoKey can be null)
interface SkillLogoProps {
  logoKey: string | null;
  name: string;
  size?: "sm" | "md" | "lg";
}

export function SkillLogoComponent({ logoKey, name, size = "md" }: SkillLogoProps) {
  if (logoKey && logoKey in Logos) {
    const Logo = Logos[logoKey as SkillLogoKey];
    return <Logo />;
  }
  return <DefaultLogo name={name} size={size} />;
}

// Logo component for about page (logoKey is always string)
interface AboutLogoProps {
  logoKey: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export function AboutLogoComponent({ logoKey, name, size = "md" }: AboutLogoProps) {
  if (logoKey in AboutLogos) {
    const Logo = AboutLogos[logoKey as AboutLogoKey];
    return <Logo />;
  }
  return <DefaultLogo name={name} size={size} />;
}
