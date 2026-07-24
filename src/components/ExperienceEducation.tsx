"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2
} from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/constants/portfolioData";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="space-y-4 mb-20 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career & Academic Timeline</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Education</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Timeline: Work Experience */}
        <div className="lg:col-span-7 space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-accent via-secondary to-transparent z-0 hidden sm:block" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative sm:pl-16 z-10"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-2 top-4 -translate-x-1/2 w-9 h-9 rounded-full bg-[#111111] border-2 border-accent flex items-center justify-center text-accent shadow-lg shadow-accent/20 hidden sm:flex">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-2xl space-y-4 group">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-[10px] font-mono uppercase font-bold tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-2 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-muted flex items-center space-x-2 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-secondary" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="text-xs font-mono text-muted flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-muted">
                  <MapPin className="w-3.5 h-3.5 text-muted" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 pt-2">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#050505] border border-white/10 text-[11px] font-mono text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Section: Featured Education Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8 sticky top-28"
        >
          {/* Education Spotlight Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111111] via-[#161618] to-[#111111] border border-white/15 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary/40 text-secondary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-secondary uppercase font-bold tracking-wider">Academic Degree</span>
                <h3 className="text-2xl font-bold font-display text-white">
                  {EDUCATION.degree}
                </h3>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-muted border-t border-b border-white/10 py-4">
              <div className="flex justify-between">
                <span>UNIVERSITY:</span>
                <span className="text-white font-semibold">{EDUCATION.institution}</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-white">{EDUCATION.location}</span>
              </div>
              <div className="flex justify-between">
                <span>TIMELINE:</span>
                <span className="text-accent font-semibold">{EDUCATION.period}</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-semibold">{EDUCATION.status}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-white tracking-wider flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Academic Highlights</span>
              </h4>
              <div className="space-y-2">
                {EDUCATION.highlights.map((h, i) => (
                  <p key={i} className="text-xs text-muted leading-relaxed flex items-start space-x-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{h}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
