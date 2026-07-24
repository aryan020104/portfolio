"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-white space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-muted hover:text-white transition-all"
            data-cursor-text="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono uppercase font-semibold">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase flex items-center space-x-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>{project.metrics}</span>
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              {project.title}
            </h2>
            <p className="text-base text-muted font-mono">{project.subtitle}</p>
          </div>

          {/* Image Banner */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          </div>

          {/* Detailed Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-accent" />
              <span>Project Architecture & Purpose</span>
            </h3>
            <p className="text-muted leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display text-white flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-secondary" />
              <span>Engineering Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 text-xs sm:text-sm text-muted"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-muted tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-xl bg-[#050505] border border-white/10 text-xs font-mono text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-accent to-secondary text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-accent/25 hover:scale-105 transition-transform"
                data-cursor-text="VISIT"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 transition-all"
              data-cursor-text="CODE"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>Source Code</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
