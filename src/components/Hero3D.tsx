"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Apple & Vercel Studio Perspective)
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0.3, 6.2);

    // 3. WebGL Renderer with ACES Tone Mapping & SRGB Color Space
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      precision: "highp"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Cinematic Color Grading & Shadow Maps
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // 4. Root Character Group
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    let headBone: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;

    // 5. Soft Ground Shadow Plane (Bruno Simon Style Contact Shadows)
    const shadowPlaneGeo = new THREE.PlaneGeometry(8, 8);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.28 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.85;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Cinematic 3-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbeb, 1.1);
    scene.add(ambientLight);

    // Key Light (Main Directional Shadow Caster)
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    keyLight.shadow.radius = 4;
    scene.add(keyLight);

    // Fill Light (Warm Ambient Studio Glow)
    const fillLight = new THREE.DirectionalLight(0xf59e0b, 1.4);
    fillLight.position.set(-4, 3, 3);
    scene.add(fillLight);

    // Rim Light (Crisp Golden Backlight)
    const rimLight = new THREE.DirectionalLight(0xfbbf24, 2.8);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    // Ground Bounce Light
    const bounceLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
    bounceLight.position.set(0, -3, 2);
    scene.add(bounceLight);

    // 7. Load User's Uploaded 3D Avatar Model (/model.fbx)
    const loader = new FBXLoader();

    loader.load(
      "/model.fbx",
      (fbx) => {
        // Auto-scale & Center User's 3D Avatar Model
        const box = new THREE.Box3().setFromObject(fbx);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 3.6 / (maxDim || 1);
        fbx.scale.set(targetScale, targetScale, targetScale);

        fbx.position.x = -center.x * targetScale;
        fbx.position.y = -center.y * targetScale - 0.2;
        fbx.position.z = -center.z * targetScale;

        fbx.rotation.set(0, 0, 0);

        // Traverse mesh materials for cinematic shading & shadows
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (mesh.material) {
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => {
                if (m instanceof THREE.MeshStandardMaterial) {
                  m.envMapIntensity = 1.2;
                  m.roughness = Math.max(m.roughness, 0.35);
                  m.metalness = 0.15;
                }
              });
            }
          }

          // Search for Head Bone joint for cursor tracking
          const name = child.name.toLowerCase();
          if (name.includes("head") || name.includes("neck") || name.includes("mixamorighead")) {
            headBone = child;
          }
        });

        // Embedded Animation Support
        if (fbx.animations && fbx.animations.length > 0) {
          mixer = new THREE.AnimationMixer(fbx);
          const action = mixer.clipAction(fbx.animations[0]);
          action.play();
        }

        characterGroup.add(fbx);
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading user 3D avatar model:", error);
        setIsLoading(false);
      }
    );

    // --- Warm Golden Particle Dust Starfield ---
    const particlesCount = 80;
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

    // 8. Interactive Mouse Tracking Target (Looking toward cursor)
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

    // 10. FPS Guard & Intersection Observer
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 11. Render Loop (Natural Breathing & Cursor Head Tracking)
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = (time - lastTime) * 0.001;
      if (time - lastTime < 14) return;
      lastTime = time;

      // Update Animation Mixer
      if (mixer) {
        mixer.update(delta);
      }

      const elapsedTime = time * 0.001;

      // A. Natural Breathing Motion
      characterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;
      characterGroup.scale.setScalar(1 + Math.sin(elapsedTime * 1.5) * 0.004);

      // B. Particle Drift
      particlesMesh.rotation.y = elapsedTime * 0.015;

      // C. Smooth Head & Body Looking Toward Cursor
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      characterGroup.rotation.y = targetX * 0.5;
      characterGroup.rotation.x = targetY * 0.2;

      if (headBone) {
        headBone.rotation.y = targetX * 0.6;
        headBone.rotation.x = targetY * 0.4;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 12. Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      shadowPlaneGeo.dispose();
      shadowPlaneMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[360px] sm:h-[500px] lg:h-[650px] relative pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform flex items-center justify-center touch-pan-y"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
