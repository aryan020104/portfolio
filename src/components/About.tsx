"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  User, 
  Code, 
  Cpu, 
  GitCommit, 
  Award, 
  BookOpen, 
  Languages as LanguagesIcon,
  CheckCircle2
} from "lucide-react";
import { PERSONAL_INFO, LANGUAGES } from "@/constants/portfolioData";

function StatCounter({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-mono text-muted uppercase tracking-widest">Verified</span>
      </div>

      <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
        {displayValue.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>

      <div className="text-xs font-mono text-muted mt-2 tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<"story" | "languages" | "academic">("story");

  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
          <User className="w-3.5 h-3.5" />
          <span>About {PERSONAL_INFO.shortName}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Precision</span> & Leadership.
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Photo & Tech Badge Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="h-full rounded-3xl bg-[#111111] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-500" />

            {/* Profile Banner Graphic */}
            <div className="relative w-full h-64 rounded-2xl bg-gradient-to-br from-neutral-900 via-[#161618] to-neutral-900 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-xl font-mono">
                  A.
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase">
                  TH Aschaffenburg
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="bg-[#050505]/90 p-4 rounded-xl border border-white/10 font-mono text-xs text-muted space-y-1 shadow-lg">
                <p className="text-accent">class <span className="text-white font-semibold">AryanSorathiya</span> {"{"}</p>
                <p className="pl-4">String degree = <span className="text-emerald-400">&quot;Software Design B.Sc.&quot;</span>;</p>
                <p className="pl-4">String location = <span className="text-emerald-400">&quot;Aschaffenburg, Germany&quot;</span>;</p>
                <p className="pl-4">String core = <span className="text-secondary">&quot;Java, DevSecOps, C++&quot;</span>;</p>
                <p>{"}"}</p>
              </div>
            </div>

            {/* Quick Highlights list */}
            <div className="mt-8 space-y-3">
              <h3 className="text-lg font-bold text-white font-display">Core Competencies</h3>
              <div className="space-y-2">
                {[
                  "Drone network optimization & graph algorithms",
                  "Automated DevSecOps & GitLab CI/CD pipelines",
                  "Object-Oriented Software Engineering (OOP) in Java & C++",
                  "Multilingual: German (B2 Goethe), English (C1 IELTS), Gujarati"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted">
              <span>INSTITUTION</span>
              <span className="text-white font-medium">{PERSONAL_INFO.university}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Tab Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-8"
        >
          {/* Tabs Navigation */}
          <div className="flex items-center space-x-2 p-1.5 rounded-2xl bg-[#111111] border border-white/10 max-w-fit">
            {[
              { id: "story", label: "Profile", icon: BookOpen },
              { id: "languages", label: "Languages", icon: LanguagesIcon },
              { id: "academic", label: "Academics", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                    isActive ? "text-white font-semibold" : "text-muted hover:text-white"
                  }`}
                  data-cursor-text="SELECT"
                >
                  {isActive && (
                    <motion.div
                      layoutId="aboutTabHighlight"
                      className="absolute inset-0 bg-accent rounded-xl shadow-lg shadow-accent/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-white" : "text-muted"}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="min-h-[220px] p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-4">
            {activeTab === "story" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h3 className="text-xl font-bold font-display text-white">
                  Focused, Composed, & Driven by Practical Knowledge.
                </h3>
                <p className="text-muted leading-relaxed text-sm md:text-base italic border-l-2 border-accent pl-4 py-1">
                  &quot;{PERSONAL_INFO.bio}&quot;
                </p>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  I am a Software Design student at Technische Hochschule Aschaffenburg, Germany. I specialize in Java system development, drone routing algorithm optimization, DevSecOps pipelines, and modern interactive applications.
                </p>
              </motion.div>
            )}

            {activeTab === "languages" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h3 className="text-xl font-bold font-display text-white">
                  Language Proficiency (Sprachkenntnisse)
                </h3>
                <div className="space-y-4 pt-2">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-white font-bold">{lang.name}</span>
                        <span className="text-accent font-semibold">{lang.level}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                          style={{ width: `${lang.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "academic" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h3 className="text-xl font-bold font-display text-white">
                  Software Design B.Sc. — TH Aschaffenburg
                </h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  Pursuing Software Design B.Sc. in Aschaffenburg, Germany (Specialization: Informatik / Softwareentwicklung). Formerly studied Computer Engineering B.Tech. at Marwadi University, India.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Software Design", "Informatik", "Drone Routing", "DevSecOps", "JavaFX", "Figma HCI"].map((course, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCounter value={PERSONAL_INFO.yearsExperience} label="Years Exp" icon={Code} />
            <StatCounter value={PERSONAL_INFO.projectsCompleted} label="CV Projects" icon={Cpu} />
            <StatCounter value={PERSONAL_INFO.technologiesMastered} label="Technologies" icon={Award} />
            <StatCounter value={PERSONAL_INFO.githubContributions} label="GitHub Commits" icon={GitCommit} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
