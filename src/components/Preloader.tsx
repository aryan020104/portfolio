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
    // Ultra-fast progress for instant page load feel (<200ms total)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 35;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, 150);
      } else {
        setProgress(currentProgress);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#0a0908] p-8 md:p-16 select-none"
        >
          {/* Top text */}
          <div className="w-full flex items-center justify-between text-xs tracking-widest uppercase text-amber-500/70 font-mono">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Aryan // Portfolio 2026
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-amber-400 font-bold"
            >
              TH ASCHAFFENBURG
            </motion.span>
          </div>

          {/* Center Logo & Progress */}
          <div className="flex flex-col items-center justify-center space-y-6 my-auto">
            {/* Animated Stylized Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-[#141210] border border-amber-500/20 shadow-2xl shadow-amber-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/20 animate-pulse-slow" />
              <span className="text-4xl font-black font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                A<span className="text-amber-500">.</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <div className="text-center space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl font-serif tracking-tight text-[#fffbeb]"
              >
                Crafting Digital Experiences
              </motion.h2>
              <p className="text-[10px] text-amber-500/70 font-mono tracking-widest uppercase">
                Software Engineering & System Architecture
              </p>
            </div>

            {/* Percentage Display */}
            <div className="font-mono text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#fffbeb] via-amber-400 to-amber-500">
              {progress}%
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-sm space-y-2">
            <div className="h-[2px] w-full bg-stone-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 shadow-lg shadow-amber-500/50"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
