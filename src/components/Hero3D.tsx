"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.z = 7;

    // 3. Lightweight WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    container.appendChild(renderer.domElement);

    // 4. Geometry & Mesh: Floating TorusKnot
    const geometry = new THREE.TorusKnotGeometry(0.95, 0.28, 48, 14);
    const material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.3,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // 5. Orbiting Outer Ring
    const ringGeo = new THREE.TorusGeometry(3.0, 0.02, 12, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // 6. Particle Starfield
    const particlesCount = 80;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.7,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.0);
    dirLight1.position.set(4, 4, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.5);
    dirLight2.position.set(-4, -4, -2);
    scene.add(dirLight2);

    // 8. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0003;
      mouseY = (e.clientY - windowHalfY) * 0.0003;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 10. Intersection Observer: Freeze WebGL loop when out of viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 11. Render Loop
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Zero CPU/GPU usage when scrolled past hero

      // Throttle render to ~60FPS cap to avoid GPU overheating
      if (time - lastTime < 14) return;
      lastTime = time;

      const elapsedTime = time * 0.001;

      torusKnot.rotation.x = elapsedTime * 0.3;
      torusKnot.rotation.y = elapsedTime * 0.4;

      ring.rotation.z = elapsedTime * 0.15;
      ring.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.15;

      particlesMesh.rotation.y = elapsedTime * 0.04;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      scene.rotation.y = targetX;
      scene.rotation.x = targetY;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] lg:h-[650px] relative pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform"
    />
  );
}
