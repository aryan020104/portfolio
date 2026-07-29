"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ultra-lightweight mouse spotlight using CSS transform
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Subtle Warm Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80"
      />

      {/* Hardware-accelerated Warm Gold Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none will-change-transform opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, rgba(217,119,6,0.1) 45%, transparent 70%)",
          transform: "translate3d(-250px, -250px, 0)",
        }}
      />

      {/* Top Ambient Glow */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -top-20 -right-20 w-[550px] h-[550px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
