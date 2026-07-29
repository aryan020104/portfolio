"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Professional Perspective)
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0.4, 6.2);

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

    // 4. Character Container Group
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    // 5. Load User Uploaded FBX 3D Avatar Model (Original Wide Spread Pose)
    const loader = new FBXLoader();
    let mixer: THREE.AnimationMixer | null = null;

    loader.load(
      "/model.fbx",
      (fbx) => {
        // Calculate model bounding box and scale to fit container perfectly
        const box = new THREE.Box3().setFromObject(fbx);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 3.6 / (maxDim || 1);
        fbx.scale.set(targetScale, targetScale, targetScale);

        // Center FBX model in scene
        fbx.position.x = -center.x * targetScale;
        fbx.position.y = -center.y * targetScale - 0.2;
        fbx.position.z = -center.z * targetScale;

        // Keep natural original orientation with hands wide spread
        fbx.rotation.set(0, 0, 0);

        // Traverse mesh materials for clean studio lighting finish
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => {
                if (m instanceof THREE.MeshStandardMaterial) {
                  m.roughness = 0.35;
                  m.metalness = 0.15;
                }
              });
            }
          }
        });

        // Embedded animation support
        if (fbx.animations && fbx.animations.length > 0) {
          mixer = new THREE.AnimationMixer(fbx);
          const action = mixer.clipAction(fbx.animations[0]);
          action.play();
        }

        characterGroup.add(fbx);
      },
      (xhr) => {
        // progress
      },
      (error) => {
        console.error("Error loading FBX avatar model:", error);
      }
    );

    // --- Subtle Warm Gold Ambient Sparkles ---
    const particlesCount = 70;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.65,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 6. Professional Studio 3-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf59e0b, 1.2);
    fillLight.position.set(-4, 3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xd97706, 1.8);
    rimLight.position.set(0, 2, -4);
    scene.add(rimLight);

    // 7. Subtle Professional Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0002;
      mouseY = (e.clientY - windowHalfY) * 0.0002;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 9. Intersection Observer (FPS Guard)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 10. Render Loop
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = (time - lastTime) * 0.001;
      if (time - lastTime < 14) return;
      lastTime = time;

      if (mixer) {
        mixer.update(delta);
      }

      const elapsedTime = time * 0.001;

      // Subtle natural breathing levitation
      characterGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.05;

      // Particle drift
      particlesMesh.rotation.y = elapsedTime * 0.015;

      // Subtle mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      characterGroup.rotation.y = targetX * 0.6;
      characterGroup.rotation.x = targetY * 0.3;

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
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] lg:h-[650px] relative pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform flex items-center justify-center"
    />
  );
}
