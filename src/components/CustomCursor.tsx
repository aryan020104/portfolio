"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for hardware-accelerated 120fps motion without React state re-renders
  const cursorX = useSpring(-100, { stiffness: 600, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 600, damping: 35 });

  const dotX = useSpring(-100, { stiffness: 1000, damping: 45 });
  const dotY = useSpring(-100, { stiffness: 1000, damping: 45 });

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Event Delegation for hover triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("[data-cursor]");
      
      if (hoverable) {
        const text = hoverable.getAttribute("data-cursor-text") || "";
        const variant = (hoverable.getAttribute("data-cursor-variant") || "hover") as "hover" | "project" | "drag";
        setCursorText(text);
        setCursorVariant(variant);
      } else if (target.closest("a, button, [role='button']")) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  const getSize = () => {
    switch (cursorVariant) {
      case "hover": return 48;
      case "project": return 80;
      case "drag": return 64;
      default: return 16;
    }
  };

  const size = getSize();

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-center select-none shadow-lg shadow-accent/20 will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: -size / 2,
          translateY: -size / 2,
          width: size,
          height: size,
          backgroundColor: cursorVariant === "hover" ? "rgba(59, 130, 246, 0.2)" : cursorVariant === "project" ? "rgba(139, 92, 246, 0.3)" : "rgba(59, 130, 246, 0.9)",
          border: cursorVariant === "default" ? "1px solid rgba(255, 255, 255, 0.4)" : "1.5px solid rgba(59, 130, 246, 0.8)",
          backdropFilter: cursorVariant !== "default" ? "blur(4px)" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold font-mono tracking-wider text-white uppercase px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] shadow-sm shadow-white will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          scale: cursorVariant !== "default" ? 0 : 1,
        }}
      />
    </>
  );
}
