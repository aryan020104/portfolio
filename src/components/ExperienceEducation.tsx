"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2,
  BookOpen
} from "lucide-react";
import { EDUCATION_LIST, PERSONAL_INFO, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceEducation() {
  const { language } = useLanguage();
  const educationList = EDUCATION_LIST[language];
  const personalInfo = PERSONAL_INFO[language];
  const expStrings = UI_STRINGS[language].experience;

  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="space-y-4 mb-20 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{expStrings.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
          {expStrings.headingPart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">{expStrings.headingHighlight}</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Education Timeline */}
        <div className="lg:col-span-7 space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-accent via-secondary to-transparent z-0 hidden sm:block" />

          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative sm:pl-16 z-10"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-2 top-4 -translate-x-1/2 w-9 h-9 rounded-full bg-[#111111] border-2 border-accent flex items-center justify-center text-accent shadow-lg shadow-accent/20 hidden sm:flex">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-2xl space-y-4 group">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-[10px] font-mono uppercase font-bold tracking-wider">
                      {edu.status}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-2 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-muted flex items-center space-x-2 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-secondary" />
                      <span>{edu.institution}</span>
                    </p>
                  </div>

                  <div className="text-xs font-mono text-muted flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-muted">
                  <MapPin className="w-3.5 h-3.5 text-muted" />
                  <span>{edu.location}</span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 max-w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{edu.specialization}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Section: Highlight Card for Current University */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8 sticky top-28"
        >
          {/* Spotlight Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111111] via-[#161618] to-[#111111] border border-white/15 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary/40 text-secondary">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-secondary uppercase font-bold tracking-wider">{expStrings.currentInstitution}</span>
                <h3 className="text-2xl font-bold font-display text-white">
                  TH Aschaffenburg
                </h3>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-muted border-t border-b border-white/10 py-4">
              <div className="flex justify-between">
                <span>{expStrings.degreeLabel}</span>
                <span className="text-white font-semibold">{personalInfo.degree}</span>
              </div>
              <div className="flex justify-between">
                <span>{expStrings.locationLabel}</span>
                <span className="text-white">{personalInfo.location}</span>
              </div>
              <div className="flex justify-between">
                <span>{expStrings.timelineLabel}</span>
                <span className="text-accent font-semibold">15.09.2024 - Present</span>
              </div>
              <div className="flex justify-between">
                <span>{expStrings.nationalityLabel}</span>
                <span className="text-emerald-400 font-semibold">{personalInfo.nationality}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-white tracking-wider flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{expStrings.specializationAreas}</span>
              </h4>
              <div className="space-y-2 text-xs text-muted">
                {expStrings.specializationList.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
