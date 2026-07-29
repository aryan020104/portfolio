"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Terminal } from "lucide-react";
import dynamic from "next/dynamic";
import { PERSONAL_INFO, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const { language } = useLanguage();
  const personalInfo = PERSONAL_INFO[language];
  const heroStrings = UI_STRINGS[language].hero;
  const expStrings = UI_STRINGS[language].experience;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    personalInfo.title,
    "Java & Spring Boot Specialist",
    "DevSecOps & Software Architect",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2200; // Pause at end of role
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          return currentRole.slice(0, prev.length + 1);
        } else {
          return currentRole.slice(0, prev.length - 1);
        }
      });

      if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 text-xs font-mono tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.availability}</span>
            </span>
          </motion.div>

          {/* Heading with Serif Reveal matching reference screenshot */}
          <div className="space-y-4">
            <motion.h2 variants={itemVariants} className="text-xs md:text-sm font-mono text-amber-700 dark:text-amber-400 tracking-widest uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>{heroStrings.hello}</span>
            </motion.h2>

            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-7xl xl:text-8xl font-serif tracking-tight text-[#1c1917] dark:text-[#fffbeb] leading-[1.02]"
            >
              Aryan <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 dark:from-amber-200 dark:via-amber-400 dark:to-amber-500">
                Sorathiya
              </span>
            </motion.h1>

            {/* Dynamic Typewriter Role */}
            <motion.div variants={itemVariants} className="h-10 flex items-center space-x-3 text-lg md:text-2xl font-mono text-amber-800 dark:text-amber-200/90">
              <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>
                {displayedText}
                <span className="animate-pulse text-amber-500">|</span>
              </span>
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            {heroStrings.taglinePre}{" "}
            <span className="text-amber-800 dark:text-amber-200 font-medium underline decoration-amber-500/40 underline-offset-4">
              {personalInfo.university}
            </span>{" "}
            {heroStrings.taglinePost}
          </motion.p>

          {/* Luxury iOS Pill Buttons matching Reference Screenshot */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#1c1917] text-[#fffbeb] dark:bg-[#fffbeb] dark:text-[#0a0908] font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              data-cursor-text="PROJECTS"
              data-cursor-variant="project"
            >
              <span>{heroStrings.viewProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white/80 dark:bg-[#0a0908]/80 border border-amber-500/40 text-amber-800 dark:text-amber-300 font-semibold text-sm hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>{language === "de" ? "Kontaktieren" : "Get in touch"}</span>
            </a>

            <a
              href={language === "de" ? "/resume_de.pdf" : "/resume_en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-white dark:bg-[#141210] border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-medium text-sm hover:border-amber-500/40 hover:text-stone-900 dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              data-cursor-text="RESUME"
            >
              <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Résumé ↗</span>
            </a>
          </motion.div>

          {/* Quick Info Bar */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-stone-300 dark:border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-600 dark:text-stone-400 font-mono">
            <div>
              <span className="text-amber-700 dark:text-amber-400 uppercase font-semibold">{expStrings.locationLabel}:</span>{" "}
              <span>{personalInfo.location}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 hidden sm:block" />
            <div>
              <span className="text-amber-700 dark:text-amber-400 uppercase font-semibold">{expStrings.degreeLabel}:</span>{" "}
              <span>{personalInfo.degree}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Floating Badges Overlay on 3D Object */}
          <div className="absolute top-12 left-2 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#111111]/80 backdrop-blur-md border border-stone-300 dark:border-white/10 text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-stone-800 dark:text-white font-medium">JavaFX</span>
          </div>

          <div className="absolute top-8 right-4 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#111111]/80 backdrop-blur-md border border-stone-300 dark:border-white/10 text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-stone-800 dark:text-white font-medium">Godot Engine</span>
          </div>

          <div className="absolute bottom-24 left-0 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#111111]/80 backdrop-blur-md border border-stone-300 dark:border-white/10 text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-stone-800 dark:text-white font-medium">GitLab CI/CD</span>
          </div>

          <div className="absolute bottom-20 right-2 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#111111]/80 backdrop-blur-md border border-stone-300 dark:border-white/10 text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-stone-800 dark:text-white font-medium">Java</span>
          </div>

          {/* Three.js 3D Developer Character Canvas Component */}
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
