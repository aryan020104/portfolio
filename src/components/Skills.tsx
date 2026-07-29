"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Sparkles,
  Zap
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/constants/portfolioData";

const MARQUEE_SKILLS = [
  "Java", "Spring Boot", "MySQL", "Spring Security", "Spring Data JPA",
  "JavaFX", "GitLab CI/CD", "Docker", "REST API", "Git", "Maven",
  "Hibernate / JPA", "JWT & BCrypt", "Figma UI/UX", "Godot Engine", "DBMS", "GraphAlgorithmen"
];

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Code2,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoriesList = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = activeCategory === "All" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Infinite Marquee Skills Banner */}
      <div className="mb-20 py-6 bg-[#08080A] border-y border-white/10 relative overflow-hidden select-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-3 mx-6 px-5 py-2.5 rounded-full bg-[#111111] border border-white/10 text-sm font-mono text-muted hover:text-white hover:border-accent/40 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 mb-16 text-center md:text-left flex flex-col md:flex-row items-start md:items-end justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Technologies</span>.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white font-semibold shadow-lg shadow-accent/25"
                    : "bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-white/20"
                }`}
                data-cursor-text="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, catIdx) => {
            const CategoryIcon = ICON_MAP[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                {/* Radial Mouse Glow background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3.5 rounded-2xl bg-white/5 group-hover:bg-accent/20 transition-colors">
                      <CategoryIcon className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-accent transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-mono text-muted">
                        {cat.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-white font-medium flex items-center space-x-2">
                            {skill.featured && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            )}
                            <span>{skill.name}</span>
                          </span>
                          <div className="flex items-center space-x-3 text-muted">
                            <span>{skill.experience}</span>
                            <span className="text-accent font-bold">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-accent to-secondary shadow-sm shadow-accent/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-muted uppercase">
                  <span>Production Ready</span>
                  <span className="text-accent">High Proficiency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
