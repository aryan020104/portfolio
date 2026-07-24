"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/portfolioData";
import Image from "next/image";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Client & Peer Feedback</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
          What Architects & Team Leads <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Say</span>.
        </h2>
      </div>

      {/* Carousel Main Card */}
      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-3xl bg-[#111111]/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-8 relative overflow-hidden"
          >
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 pointer-events-none" />

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-2xl font-display text-white leading-relaxed italic">
              &quot;{current.quote}&quot;
            </p>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-md">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-white">{current.name}</h4>
                  <p className="text-xs font-mono text-muted">{current.role} • <span className="text-accent">{current.company}</span></p>
                </div>
              </div>

              {/* Step indicator */}
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === index ? "w-8 bg-accent" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
