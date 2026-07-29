"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight,
  Eye,
  Layers
} from "lucide-react";
import { PROJECTS, UI_STRINGS } from "@/constants/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const projectsList = PROJECTS[language];
  const projectStrings = UI_STRINGS[language].projects;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "Java & Backend", "Security & Systems", "UI/UX & WebGL"];

  const filteredProjects = selectedCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0 mb-16">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{projectStrings.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            {projectStrings.headingPart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">{projectStrings.headingHighlight}</span>.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-accent text-white font-semibold shadow-lg shadow-accent/30"
                  : "bg-[#111111] border border-white/10 text-muted hover:text-white hover:border-white/25"
              }`}
              data-cursor-text="FILTER"
            >
              {cat === "All" ? projectStrings.filterAll : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-3xl bg-[#111111] border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between"
              data-cursor-text="EXPLORE"
              data-cursor-variant="project"
            >
              {/* Top Banner & Image Preview */}
              <div 
                className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-white shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-accent/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 rounded-full bg-black/90 border border-white/20 text-xs font-mono font-semibold text-white flex items-center space-x-2 shadow-2xl">
                    <Eye className="w-4 h-4 text-accent" />
                    <span>{projectStrings.viewCaseStudy}</span>
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 
                      onClick={() => setActiveModalProject(project)}
                      className="text-2xl font-bold font-display text-white group-hover:text-accent transition-colors cursor-pointer flex items-center space-x-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-secondary">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-accent hover:underline flex items-center space-x-1 font-semibold uppercase tracking-wider"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{projectStrings.architectureDetails}</span>
                    </button>

                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors"
                        title={projectStrings.github}
                        data-cursor-text="GITHUB"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
                          title={projectStrings.liveDemo}
                          data-cursor-text="DEMO"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
