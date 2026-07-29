"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  CheckCircle2, 
  GitBranch, 
  Star, 
  GitCommit, 
  Github,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { CERTIFICATES, GITHUB_STATS, UI_STRINGS } from "@/constants/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificatesGithub() {
  const { language } = useLanguage();
  const certificatesList = CERTIFICATES[language];
  const githubStats = GITHUB_STATS[language];
  const certStrings = UI_STRINGS[language].certificates;

  const [certIndex, setCertIndex] = useState(0);

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % certificatesList.length);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev - 1 + certificatesList.length) % certificatesList.length);
  };

  // Generate contribution grid
  const contributionGrid = Array.from({ length: 364 }, (_, i) => {
    const level = (i * 11 + (i % 7) * 19) % 5;
    return level;
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 1: return "bg-emerald-900/40 border-emerald-800/40";
      case 2: return "bg-emerald-700/60 border-emerald-600/50";
      case 3: return "bg-emerald-500 border-emerald-400";
      case 4: return "bg-emerald-300 border-white shadow-sm shadow-emerald-400";
      default: return "bg-white/5 border-white/5";
    }
  };

  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      {/* SECTION 1: CERTIFICATES */}
      <div id="certificates" className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{certStrings.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              {certStrings.headingPart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">{certStrings.headingHighlight}</span>.
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevCert}
              className="p-3 rounded-full bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-white/30 transition-all"
              data-cursor-text="PREV"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCert}
              className="p-3 rounded-full bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-white/30 transition-all"
              data-cursor-text="NEXT"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesList.map((cert, idx) => {
            const isCurrent = idx === certIndex;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-3xl bg-[#111111] border transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 ${
                  isCurrent ? "border-accent shadow-accent/20 scale-105" : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-accent/15 border border-accent/30 text-accent">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{certStrings.verified}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-muted mt-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-muted">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted">{certStrings.datum}: {cert.date}</span>
                    <span className="text-accent font-semibold">{certStrings.passed}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: GITHUB ACTIVITY & METRICS */}
      <div className="space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <Github className="w-3.5 h-3.5" />
            <span>{certStrings.githubBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            {certStrings.githubHeadlinePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-accent">{certStrings.githubHeadlineHighlight}</span>.
          </h2>
        </div>

        {/* Contribution Heatmap Container */}
        <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted border-b border-white/10 pb-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold">{githubStats.totalCommits}+ {certStrings.commitsCount}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-accent" />
                <span className="text-white font-bold">{githubStats.pullRequests}</span> {certStrings.prsCount}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span>{certStrings.less}</span>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div key={lvl} className={`w-3 h-3 rounded-sm ${getCellColor(lvl)}`} />
                ))}
              </div>
              <span>{certStrings.more}</span>
            </div>
          </div>

          {/* Grid View */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px]">
              {contributionGrid.map((level, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm border transition-transform hover:scale-125 ${getCellColor(level)}`}
                  title={`Day ${i + 1}: ${level * 3} contributions`}
                />
              ))}
            </div>
          </div>

          {/* Featured Repositories Grid */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {githubStats.repositories.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/aryan020104/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 transition-colors space-y-3 block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white truncate">{repo.name}</span>
                  <div className="flex items-center space-x-1 text-xs font-mono text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
                <p className="text-[11px] text-muted line-clamp-1">{repo.desc}</p>
                <div className="text-[10px] font-mono text-accent">{repo.language}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
