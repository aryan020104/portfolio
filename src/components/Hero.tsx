"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Sparkles, 
  Code2, 
  MapPin, 
  GraduationCap,
  ChevronDown
} from "lucide-react";
import { PERSONAL_INFO, HERO_ROLES, FLOATING_BADGES, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

// Dynamically load 3D Canvas with ssr: false to prevent SSG WebGL prerendering errors
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-accent/20 animate-spin-slow bg-accent/5 blur-sm" />
    </div>
  ),
});

export default function Hero() {
  const { language } = useLanguage();
  const personalInfo = PERSONAL_INFO[language];
  const heroRoles = HERO_ROLES[language];
  const heroStrings = UI_STRINGS[language].hero;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = heroRoles[roleIndex % heroRoles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, heroRoles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8 z-10"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#111111] border border-white/10 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-muted tracking-wider uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Heading with Serif Reveal matching reference screenshot */}
          <div className="space-y-4">
            <motion.h2 variants={itemVariants} className="text-xs md:text-sm font-mono text-amber-400/90 tracking-widest uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{heroStrings.hello}</span>
            </motion.h2>

            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-7xl xl:text-8xl font-serif tracking-tight text-[#fffbeb] leading-[1.02]"
            >
              Aryan <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Sorathiya
              </span>
            </motion.h1>

            {/* Dynamic Typewriter Role */}
            <motion.div variants={itemVariants} className="h-10 flex items-center space-x-3 text-lg md:text-2xl font-mono text-amber-200/80">
              <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                {displayedText}
                <span className="animate-pulse text-amber-400">|</span>
              </span>
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            {heroStrings.taglinePre}{" "}
            <span className="text-amber-200 font-medium underline decoration-amber-500/40 underline-offset-4">
              {personalInfo.university}
            </span>{" "}
            {heroStrings.taglinePost}
          </motion.p>

          {/* Luxury iOS Pill Buttons matching Reference Screenshot */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#fffbeb] text-[#0a0908] font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              data-cursor-text="PROJECTS"
              data-cursor-variant="project"
            >
              <span>{heroStrings.viewProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#0a0908]/80 border border-amber-500/40 text-amber-300 font-semibold text-sm hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{language === "de" ? "Kontaktieren" : "Get in touch"}</span>
            </a>

            <a
              href={language === "de" ? "/resume_de.pdf" : "/resume_en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-[#141210] border border-stone-800 text-stone-300 font-medium text-sm hover:border-amber-500/30 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              data-cursor-text="RESUME"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Résumé ↗</span>
            </a>
          </motion.div>

          {/* Quick Info Bar */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-muted font-mono">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-secondary" />
              <span>{personalInfo.degree}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Java • Spring Boot • MySQL</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side 3D Interactive Canvas & Glass Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* 3D Background Mesh */}
          <Hero3D />

          {/* Floating Technology Badges around Hero */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            {FLOATING_BADGES.map((badge, idx) => {
              const angles = [0, 45, 90, 135, 180, 225, 270, 315];
              const angle = (angles[idx] * Math.PI) / 180;
              const radius = 170;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [y - 8, y + 8, y - 8],
                  }}
                  transition={{
                    opacity: { delay: 0.6 + idx * 0.1 },
                    scale: { delay: 0.6 + idx * 0.1 },
                    y: { duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{
                    left: `calc(50% + ${x}px - 45px)`,
                    top: `calc(50% + ${y}px - 18px)`,
                  }}
                  className="absolute pointer-events-auto px-3.5 py-1.5 rounded-xl border border-white/15 bg-[#111111]/80 backdrop-blur-md text-xs font-mono font-medium text-white shadow-xl flex items-center space-x-2 transition-transform hover:scale-110"
                  data-cursor-text={badge.name}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: badge.color }}
                  />
                  <span>{badge.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 text-xs font-mono text-muted"
      >
        <span>{heroStrings.scrollDown}</span>
        <ChevronDown className="w-4 h-4 text-accent" />
      </motion.div>
    </section>
  );
}
