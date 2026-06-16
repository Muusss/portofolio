import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Musa | Software Engineer",
  description: "Portfolio of Musa - Software Engineer from Cirebon, Jawa Barat. Specializing in web development, data analytics, and cloud computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${plusJakarta.variable}`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {/* Skip to main content link for keyboard users */}
            <a
              href="#main-content"
              className="sr-only focus:not:sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold"
            >
              Skip to main content
            </a>

            <Navbar />
            <main id="main-content">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}