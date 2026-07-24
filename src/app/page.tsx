"use client";

import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import NoiseOverlay from "@/components/NoiseOverlay";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/ExperienceEducation";
import CertificatesGithub from "@/components/CertificatesGithub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-accent selection:text-white">
      {/* Fullscreen Awwwards Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Global Interactive Overlays */}
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <BackgroundEffects />

      {/* Main Content Layout */}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <CertificatesGithub />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
