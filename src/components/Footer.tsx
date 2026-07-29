"use client";

import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { PERSONAL_INFO, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const personalInfo = PERSONAL_INFO[language];
  const footerStrings = UI_STRINGS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Logo & Copy */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#111111] border border-white/15 flex items-center justify-center text-accent font-black text-lg font-display">
              A
            </div>
            <span className="text-xl font-bold font-display text-white tracking-tight">
              {personalInfo.name}<span className="text-accent">.dev</span>
            </span>
          </div>

          <p className="text-xs font-mono text-muted text-center md:text-left">
            {footerStrings.tagline}
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center space-x-4">
          {[
            { name: "GitHub", href: personalInfo.github, icon: Github },
            { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
            { name: "Twitter", href: personalInfo.twitter, icon: Twitter },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-accent hover:scale-110 transition-all"
                title={s.name}
                data-cursor-text={s.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Right Side Back To Top Button */}
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono text-muted hidden sm:inline">
            © 2026 {personalInfo.name}. {footerStrings.rights}
          </span>

          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/20 hover:scale-110 active:scale-95 transition-all"
            title="Back to top"
            data-cursor-text="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
