"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Apple / Vercel Studio Perspective)
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

    // Head reference for cursor looking interaction
    let headBone: THREE.Object3D | null = null;
    let eyelidLeft: THREE.Mesh | null = null;
    let eyelidRight: THREE.Mesh | null = null;
    let mixer: THREE.AnimationMixer | null = null;

    // 5. Soft Ground Shadow Plane (Bruno Simon Style Contact Shadows)
    const shadowPlaneGeo = new THREE.PlaneGeometry(8, 8);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.28 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.8;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Cinematic 3-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbeb, 1.0);
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

    // 7. GLTFLoader Setup
    const gltfLoader = new GLTFLoader();

    // Helper to create procedural 3D Developer Avatar if GLB is loading or fallback
    const createFallbackAvatar = () => {
      const avatarGroup = new THREE.Group();

      const skinMat = new THREE.MeshStandardMaterial({
        color: 0xf5d0c5,
        roughness: 0.4,
        metalness: 0.05,
      });

      const suitMat = new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.3,
        metalness: 0.2,
      });

      const shirtMat = new THREE.MeshStandardMaterial({
        color: 0xfffbeb,
        roughness: 0.2,
      });

      const tieMat = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        roughness: 0.2,
        metalness: 0.3,
      });

      const beanieMat = new THREE.MeshStandardMaterial({
        color: 0x27272a,
        roughness: 0.8,
      });

      const glassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.9,
      });

      // Torso in Executive Suit
      const torsoGeo = new THREE.CylinderGeometry(0.55, 0.45, 1.4, 24);
      const torso = new THREE.Mesh(torsoGeo, suitMat);
      torso.position.y = -0.5;
      torso.castShadow = true;
      avatarGroup.add(torso);

      // Shirt & Tie
      const shirtGeo = new THREE.BoxGeometry(0.28, 0.5, 0.25);
      const shirt = new THREE.Mesh(shirtGeo, shirtMat);
      shirt.position.set(0, -0.2, 0.38);
      avatarGroup.add(shirt);

      const tieGeo = new THREE.BoxGeometry(0.08, 0.45, 0.04);
      const tie = new THREE.Mesh(tieGeo, tieMat);
      tie.position.set(0, -0.25, 0.52);
      avatarGroup.add(tie);

      // Head Group (for looking toward cursor)
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.45, 0);

      // Head Base
      const headGeo = new THREE.SphereGeometry(0.42, 32, 32);
      const headMesh = new THREE.Mesh(headGeo, skinMat);
      headMesh.castShadow = true;
      headGroup.add(headMesh);

      // Beanie Cap
      const beanieGeo = new THREE.SphereGeometry(0.44, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const beanie = new THREE.Mesh(beanieGeo, beanieMat);
      beanie.position.y = 0.08;
      beanie.castShadow = true;
      headGroup.add(beanie);

      // Round Glasses
      const glassFrameGeo = new THREE.TorusGeometry(0.12, 0.02, 16, 32);
      const glassL = new THREE.Mesh(glassFrameGeo, glassMat);
      glassL.position.set(-0.16, 0.04, 0.38);
      headGroup.add(glassL);

      const glassR = new THREE.Mesh(glassFrameGeo, glassMat);
      glassR.position.set(0.16, 0.04, 0.38);
      headGroup.add(glassR);

      const bridgeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.12, 8);
      const bridge = new THREE.Mesh(bridgeGeo, glassMat);
      bridge.rotation.z = Math.PI / 2;
      bridge.position.set(0, 0.04, 0.38);
      headGroup.add(bridge);

      // Eyelids (for procedural blinking)
      const eyelidGeo = new THREE.BoxGeometry(0.16, 0.08, 0.02);
      const eyelidMat = new THREE.MeshBasicMaterial({ color: 0x3f3f46 });

      const eyeL = new THREE.Mesh(eyelidGeo, eyelidMat);
      eyeL.position.set(-0.16, 0.04, 0.39);
      headGroup.add(eyeL);
      eyelidLeft = eyeL;

      const eyeR = new THREE.Mesh(eyelidGeo, eyelidMat);
      eyeR.position.set(0.16, 0.04, 0.39);
      headGroup.add(eyeR);
      eyelidRight = eyeR;

      // Ears
      const earGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const earL = new THREE.Mesh(earGeo, skinMat);
      earL.position.set(-0.43, 0.02, 0);
      headGroup.add(earL);

      const earR = new THREE.Mesh(earGeo, skinMat);
      earR.position.set(0.43, 0.02, 0);
      headGroup.add(earR);

      // Arms (Standing Upright)
      const armGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.9, 16);
      const armL = new THREE.Mesh(armGeo, suitMat);
      armL.position.set(-0.62, -0.4, 0);
      armL.rotation.z = 0.15;
      armL.castShadow = true;
      avatarGroup.add(armL);

      const armR = new THREE.Mesh(armGeo, suitMat);
      armR.position.set(0.62, -0.4, 0);
      armR.rotation.z = -0.15;
      armR.castShadow = true;
      avatarGroup.add(armR);

      avatarGroup.add(headGroup);
      headBone = headGroup;

      return avatarGroup;
    };

    // Load GLTF / GLB Avatar Model
    let isGLBLoaded = false;

    gltfLoader.load(
      "/avatar.glb",
      (gltf) => {
        isGLBLoaded = true;
        const model = gltf.scene;

        // Auto-scale & Center GLTF Model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 3.6 / (maxDim || 1);
        model.scale.set(targetScale, targetScale, targetScale);

        model.position.x = -center.x * targetScale;
        model.position.y = -center.y * targetScale - 0.2;
        model.position.z = -center.z * targetScale;

        // Traverse mesh materials & shadow properties
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (mesh.material) {
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => {
                if (m instanceof THREE.MeshStandardMaterial) {
                  m.envMapIntensity = 1.2;
                  m.roughness = Math.max(m.roughness, 0.3);
                }
              });
            }
          }

          // Search for Head Bone joint for cursor tracking
          const name = child.name.toLowerCase();
          if (name.includes("head") || name.includes("neck")) {
            headBone = child;
          }
        });

        // Baked Animations Support
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        characterGroup.add(model);
        setIsLoading(false);
      },
      undefined,
      (error) => {
        // Fallback to high-quality 3D developer character mesh
        if (!isGLBLoaded) {
          const fallback = createFallbackAvatar();
          characterGroup.add(fallback);
          setIsLoading(false);
        }
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

    // 8. Interactive Mouse Tracking Target (Lerped looking towards cursor)
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

    // 11. Render Loop (Natural Breathing, Eye Blinking & Head Tracking)
    let animationFrameId: number;
    let lastTime = 0;
    let blinkTimer = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = (time - lastTime) * 0.001;
      if (time - lastTime < 14) return;
      lastTime = time;

      // Update GLTF Animations Mixer
      if (mixer) {
        mixer.update(delta);
      }

      const elapsedTime = time * 0.001;

      // A. Natural Breathing Motion
      characterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;
      characterGroup.scale.setScalar(1 + Math.sin(elapsedTime * 1.5) * 0.004);

      // B. Eye Blinking Loop (Blinks every 3.8s)
      blinkTimer += delta;
      if (blinkTimer > 3.8) {
        const blinkProgress = Math.sin((blinkTimer - 3.8) * Math.PI * 8);
        if (eyelidLeft && eyelidRight) {
          const scaleY = Math.max(0.1, 1 - blinkProgress);
          eyelidLeft.scale.y = scaleY;
          eyelidRight.scale.y = scaleY;
        }
        if (blinkTimer > 4.1) {
          blinkTimer = 0;
        }
      }

      // C. Particle Drift
      particlesMesh.rotation.y = elapsedTime * 0.015;

      // D. Smooth Head & Body Looking Toward Cursor
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
