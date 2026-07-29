"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 12;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          }, 500);
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#050505] p-8 md:p-16 select-none"
        >
          {/* Top text */}
          <div className="w-full flex items-center justify-between text-xs tracking-widest uppercase text-muted font-mono">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Aryan // Portfolio 2026
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent"
            >
              TH ASCHAFFENBURG
            </motion.span>
          </div>

          {/* Center Logo & Progress */}
          <div className="flex flex-col items-center justify-center space-y-8 my-auto">
            {/* Animated Stylized Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl shadow-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 animate-pulse-slow" />
              <span className="text-4xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
                A<span className="text-accent">.</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <div className="text-center space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl font-semibold tracking-tight text-white"
              >
                Crafting Digital Experiences
              </motion.h2>
              <p className="text-xs text-muted font-mono tracking-widest uppercase">
                Software Engineering & System Architecture
              </p>
            </div>

            {/* Percentage Display */}
            <div className="font-mono text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-secondary">
              {progress}%
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-md space-y-3">
            <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-secondary to-accent shadow-lg shadow-accent/50"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-muted uppercase">
              <span>Loading Assets</span>
              <span>Initializing Shaders</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
