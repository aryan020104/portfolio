"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Moon, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles,
  ArrowUpRight,
  Globe
} from "lucide-react";
import { PERSONAL_INFO, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const navLinks = UI_STRINGS[language].navLinks;
  const personalInfo = PERSONAL_INFO[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } catch {
        // Audio fallback
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-white font-display tracking-tight text-xl font-bold"
          data-cursor-text="HOME"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#111111] border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30">
            <span className="text-accent font-black text-lg group-hover:rotate-12 transition-transform duration-300">
              A
            </span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-white group-hover:text-accent transition-colors font-bold">
              {personalInfo.shortName}
            </span>
            <span className="text-[10px] font-mono text-muted tracking-wider uppercase mt-1">
              Software Design B.Sc.
            </span>
          </div>
        </a>

        {/* Center Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-[#111111]/80 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-muted hover:text-white"
                }`}
                data-cursor-text="NAVIGATE"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent/80 to-secondary/80 rounded-full shadow-md shadow-accent/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#111111] border border-white/15 hover:border-accent text-xs font-mono font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            title="Switch Language / Sprache wechseln"
            data-cursor-text="LANG"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span className={language === "en" ? "text-accent font-bold" : "text-muted"}>EN</span>
            <span className="text-white/20">|</span>
            <span className={language === "de" ? "text-accent font-bold" : "text-muted"}>DE</span>
          </button>

          <button
            onClick={toggleSound}
            className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-white/25 transition-all"
            title={soundEnabled ? "Mute Audio FX" : "Enable Audio FX"}
            data-cursor-text="AUDIO"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-accent animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          <div
            className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-accent/80 cursor-default opacity-80"
            title="Dark Mode Locked"
          >
            <Moon className="w-4 h-4" />
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-secondary text-white text-xs font-mono font-semibold uppercase tracking-wider overflow-hidden shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95"
            data-cursor-text="RESUME"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="w-4 h-4" />
            <span>CV / Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg bg-[#111111] border border-white/15 text-xs font-mono font-bold text-accent"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-[#111111] border border-white/10 text-muted"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-accent" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-muted">LANGUAGE / SPRACHE</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-lg border ${language === "en" ? "bg-accent border-accent text-white font-bold" : "bg-white/5 border-white/10 text-muted"}`}
                  >
                    EN (English)
                  </button>
                  <button
                    onClick={() => setLanguage("de")}
                    className={`px-3 py-1 rounded-lg border ${language === "de" ? "bg-accent border-accent text-white font-bold" : "bg-white/5 border-white/10 text-muted"}`}
                  >
                    DE (Deutsch)
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display text-muted hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-4 h-4 text-accent/50" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-accent to-secondary text-center text-white text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
