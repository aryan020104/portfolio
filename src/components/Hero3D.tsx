"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

// ---- Tunable pose targets -------------------------------------------------
// These are rotation offsets (radians) applied ON TOP of the bind pose to
// bring the arms from a T/A-pose into a relaxed "hands folded" stance.
// Sign/axis conventions differ per rig, so if the fold looks wrong, flip
// the sign or swap which axis (x/y/z) is used for that bone.
const FOLD_POSE = {
  leftArm: new THREE.Euler(0, 0, 1.15),
  leftForeArm: new THREE.Euler(0, 0, 1.55),
  rightArm: new THREE.Euler(0, 0, -1.15),
  rightForeArm: new THREE.Euler(0, 0, -1.55),
};

const WAVE_DURATION = 1800; // ms the wave gesture plays on load
const POSE_SETTLE_DURATION = 900; // ms to ease from wave/bind into fold pose

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0.3, 6.2);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      precision: "highp",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    let neckBone: THREE.Object3D | null = null;
    let leftEyeBone: THREE.Object3D | null = null;
    let rightEyeBone: THREE.Object3D | null = null;
    let leftArmBone: THREE.Object3D | null = null;
    let leftForeArmBone: THREE.Object3D | null = null;
    let rightArmBone: THREE.Object3D | null = null;
    let rightForeArmBone: THREE.Object3D | null = null;

    // Bind-pose quaternions so we can lerp additively from the model's
    // native rest pose rather than fighting it.
    const bindQuats = new Map<THREE.Object3D, THREE.Quaternion>();

    let smileMesh: THREE.Mesh | null = null;
    let smileIndex = -1;
    let smileCurrent = 0;
    let smileTarget = 0;

    let mixer: THREE.AnimationMixer | null = null;

    // 5. Ground Shadow Plane
    const shadowPlaneGeo = new THREE.PlaneGeometry(8, 8);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.28 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.85;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbeb, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    keyLight.shadow.radius = 4;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf59e0b, 1.4);
    fillLight.position.set(-4, 3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xfbbf24, 2.8);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    const bounceLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
    bounceLight.position.set(0, -3, 2);
    scene.add(bounceLight);

    // Fuzzy bone finder — matches Mixamo names with or without the
    // "mixamorig" prefix.
    const findBone = (root: THREE.Object3D, keywords: string[]) => {
      let found: THREE.Object3D | null = null;
      root.traverse((child) => {
        if (found) return;
        const name = child.name.toLowerCase();
        if (keywords.some((k) => name.includes(k))) found = child;
      });
      return found;
    };

    // Finds the first morph target whose name suggests a smile.
    const findSmileMorph = (root: THREE.Object3D) => {
      let mesh: THREE.Mesh | null = null;
      let index = -1;
      root.traverse((child) => {
        if (mesh) return;
        const m = child as THREE.Mesh;
        if ((m as any).isMesh && (m as any).morphTargetDictionary) {
          const dict = (m as any).morphTargetDictionary as Record<string, number>;
          for (const key of Object.keys(dict)) {
            const lower = key.toLowerCase();
            if (lower.includes("smile") || lower.includes("mouthsmile")) {
              mesh = m;
              index = dict[key];
              break;
            }
          }
        }
      });
      return { mesh, index };
    };

    // 7. Load Avatar
    const loader = new FBXLoader();
    let loadTimestamp = 0;

    loader.load(
      "/model.fbx",
      (fbx) => {
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
        });

        headBone = findBone(fbx, ["head", "mixamorighead"]);
        neckBone = findBone(fbx, ["neck"]);
        leftEyeBone = findBone(fbx, ["lefteye", "eye_l", "l_eye"]);
        rightEyeBone = findBone(fbx, ["righteye", "eye_r", "r_eye"]);
        leftArmBone = findBone(fbx, ["leftarm"]);
        leftForeArmBone = findBone(fbx, ["leftforearm"]);
        rightArmBone = findBone(fbx, ["rightarm"]);
        rightForeArmBone = findBone(fbx, ["rightforearm"]);

        const bones: (THREE.Object3D | null)[] = [
          leftArmBone,
          leftForeArmBone,
          rightArmBone,
          rightForeArmBone,
          headBone,
        ];
        bones.forEach((b) => {
          if (b) bindQuats.set(b, b.quaternion.clone());
        });
        const smile = findSmileMorph(fbx);
        smileMesh = smile.mesh;
        smileIndex = smile.index;
        if (smileIndex === -1) {
          console.warn(
            "Hero3D: no 'smile' morph target found on this model — hover-smile will be skipped."
          );
        }

        if (fbx.animations && fbx.animations.length > 0) {
          mixer = new THREE.AnimationMixer(fbx);
          const action = mixer.clipAction(fbx.animations[0]);
          action.play();
        }

        characterGroup.add(fbx);
        loadTimestamp = performance.now();
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading user 3D avatar model:", error);
        setIsLoading(false);
      }
    );

    // Particle dust
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

    // 8. Cursor tracking
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

    // Hover -> smile trigger (container-level; swap for raycasting onto
    // the mesh if you want pixel-precise hover detection)
    const handlePointerEnter = () => {
      smileTarget = 1;
    };
    const handlePointerLeave = () => {
      smileTarget = 0;
    };
    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointerleave", handlePointerLeave);

    // 9. Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 10. Visibility guard
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Helper: ease-in-out
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    // 11. Render Loop
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = (time - lastTime) * 0.001;
      if (time - lastTime < 14) return;
      lastTime = time;

      if (mixer) mixer.update(delta);

      const elapsedTime = time * 0.001;

      // Breathing
      characterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;
      characterGroup.scale.setScalar(1 + Math.sin(elapsedTime * 1.5) * 0.004);

      // Particle drift
      particlesMesh.rotation.y = elapsedTime * 0.015;

      // Smooth head/eye tracking toward cursor (subtle — body stays put
      // so the folded pose reads as composed, not fidgety)
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      if (neckBone) {
        neckBone.rotation.y = targetX * 0.25;
        neckBone.rotation.x = targetY * 0.15;
      }
      if (headBone) {
        headBone.rotation.y = targetX * 0.5;
        headBone.rotation.x = targetY * 0.3;
      }
      if (leftEyeBone) {
        leftEyeBone.rotation.y = targetX * 0.8;
        leftEyeBone.rotation.x = targetY * 0.5;
      }
      if (rightEyeBone) {
        rightEyeBone.rotation.y = targetX * 0.8;
        rightEyeBone.rotation.x = targetY * 0.5;
      }

      // Wave-in then settle into folded pose
      if (loadTimestamp > 0) {
        const sinceLoad = time - loadTimestamp;

        if (sinceLoad < WAVE_DURATION && rightArmBone && rightForeArmBone) {
          // Raise arm and oscillate the forearm for a wave motion
          const waveT = sinceLoad / WAVE_DURATION;
          const raise = Math.sin(Math.min(waveT * 3, 1) * (Math.PI / 2)); // quick raise, then hold
          const oscillation = Math.sin(elapsedTime * 8) * 0.35;

          const rArmBind = bindQuats.get(rightArmBone);
          const rForeBind = bindQuats.get(rightForeArmBone);
          if (rArmBind) {
            const q = new THREE.Quaternion().setFromEuler(
              new THREE.Euler(0, 0, -2.0 * raise)
            );
            rightArmBone.quaternion.copy(rArmBind).multiply(q);
          }
          if (rForeBind) {
            const q = new THREE.Quaternion().setFromEuler(
              new THREE.Euler(0, 0, oscillation * raise - 1.2 * raise)
            );
            rightForeArmBone.quaternion.copy(rForeBind).multiply(q);
          }
        } else {
          // Ease from wherever we are into the folded pose
          const settleT = Math.min(
            (sinceLoad - WAVE_DURATION) / POSE_SETTLE_DURATION,
            1
          );
          const eased = easeInOut(Math.max(settleT, 0));

          const applyFold = (
            bone: THREE.Object3D | null,
            offset: THREE.Euler
          ) => {
            if (!bone) return;
            const bind = bindQuats.get(bone);
            if (!bind) return;
            const target = new THREE.Quaternion()
              .copy(bind)
              .multiply(new THREE.Quaternion().setFromEuler(offset));
            bone.quaternion.slerp(target, eased * 0.12 + 0.02);
          };

          applyFold(leftArmBone, FOLD_POSE.leftArm);
          applyFold(leftForeArmBone, FOLD_POSE.leftForeArm);
          applyFold(rightArmBone, FOLD_POSE.rightArm);
          applyFold(rightForeArmBone, FOLD_POSE.rightForeArm);
        }
      }

      // Smile morph lerp
      if (smileMesh && smileIndex !== -1) {
        smileCurrent += (smileTarget - smileCurrent) * 0.12;
        const influences = (smileMesh as any).morphTargetInfluences;
        if (influences) influences[smileIndex] = smileCurrent;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 12. Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
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