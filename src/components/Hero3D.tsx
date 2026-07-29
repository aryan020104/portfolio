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
    camera.position.set(0, 0.2, 7.5);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 4. Create 3D Stylized Developer Character Group
    const characterGroup = new THREE.Group();

    // --- A. Head ---
    const headGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.3,
      metalness: 0.7,
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.position.y = 1.0;
    characterGroup.add(headMesh);

    // --- B. Cyber Visor / Glasses ---
    const visorGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.22, 32, 1, false, -Math.PI / 3, (2 * Math.PI) / 3);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xd97706,
      emissiveIntensity: 0.6,
    });
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.position.set(0, 1.05, 0.22);
    visorMesh.rotation.x = 0.05;
    characterGroup.add(visorMesh);

    // Visor Glow Line
    const lineGeo = new THREE.BoxGeometry(1.2, 0.04, 0.05);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    lineMesh.position.set(0, 1.05, 0.86);
    characterGroup.add(lineMesh);

    // --- C. Headphones / Ears ---
    const phoneGeo = new THREE.TorusGeometry(0.9, 0.06, 16, 32, Math.PI);
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.2 });
    const phoneBand = new THREE.Mesh(phoneGeo, phoneMat);
    phoneBand.position.set(0, 1.0, 0);
    phoneBand.rotation.x = -0.1;
    characterGroup.add(phoneBand);

    const earGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.1, 16);
    const earMat = new THREE.MeshStandardMaterial({ color: 0x292524, metalness: 0.9 });
    
    const earLeft = new THREE.Mesh(earGeo, earMat);
    earLeft.position.set(-0.84, 1.0, 0);
    earLeft.rotation.z = Math.PI / 2;
    characterGroup.add(earLeft);

    const earRight = new THREE.Mesh(earGeo, earMat);
    earRight.position.set(0.84, 1.0, 0);
    earRight.rotation.z = Math.PI / 2;
    characterGroup.add(earRight);

    // --- D. Torso & Shoulders ---
    const bodyGeo = new THREE.CylinderGeometry(0.65, 0.95, 1.6, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x121110,
      roughness: 0.4,
      metalness: 0.6,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = -0.35;
    characterGroup.add(bodyMesh);

    // Jacket Collar Accent
    const collarGeo = new THREE.TorusGeometry(0.68, 0.08, 16, 32);
    const collarMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.7, roughness: 0.3 });
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.set(0, 0.38, 0);
    collar.rotation.x = Math.PI / 2;
    characterGroup.add(collar);

    // --- E. Glowing Tech Core in Chest ---
    const coreGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, -0.1, 0.62);
    characterGroup.add(coreMesh);

    // Core Outer Ring
    const coreRingGeo = new THREE.TorusGeometry(0.28, 0.02, 16, 32);
    const coreRingMat = new THREE.MeshBasicMaterial({ color: 0xd97706 });
    const coreRing = new THREE.Mesh(coreRingGeo, coreRingMat);
    coreRing.position.set(0, -0.1, 0.62);
    characterGroup.add(coreRing);

    scene.add(characterGroup);

    // --- F. Orbiting Holographic Rings ---
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.025, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 12, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xd97706, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // --- G. Floating Warm Gold Particle Dust ---
    const particlesCount = 120;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 5. Warm Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff3c7, 0.8);
    scene.add(ambientLight);

    const mainGoldLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    mainGoldLight.position.set(5, 5, 5);
    scene.add(mainGoldLight);

    const rimLight = new THREE.DirectionalLight(0xd97706, 1.8);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    const pointCoreLight = new THREE.PointLight(0xfbbf24, 2, 5);
    pointCoreLight.position.set(0, 0, 1.5);
    scene.add(pointCoreLight);

    // 6. Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0004;
      mouseY = (e.clientY - windowHalfY) * 0.0004;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 8. Intersection Observer (FPS Guard)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. Render Animation Loop
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      if (time - lastTime < 14) return; // cap ~60 FPS
      lastTime = time;

      const elapsedTime = time * 0.001;

      // Organic levitation floating
      characterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Pulse core ring
      coreRing.rotation.z = elapsedTime * 2;
      
      // Orbiting outer rings
      ring1.rotation.z = elapsedTime * 0.25;
      ring1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.4) * 0.15;
      ring2.rotation.y = elapsedTime * 0.3;

      // Particle drift
      particlesMesh.rotation.y = elapsedTime * 0.03;

      // Mouse Look Smoothing
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      characterGroup.rotation.y = targetX * 1.2;
      characterGroup.rotation.x = targetY * 0.8;

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
      headGeo.dispose();
      headMat.dispose();
      visorGeo.dispose();
      visorMat.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
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
