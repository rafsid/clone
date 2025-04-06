"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Responsive handling
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Create cubes with Modal's brand colors
    const cubes: THREE.Mesh[] = [];
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x3ec285, transparent: true, opacity: 0.8 }),  // Modal green
      new THREE.MeshBasicMaterial({ color: 0x25654f, transparent: true, opacity: 0.6 }),  // Darker green
      new THREE.MeshBasicMaterial({ color: 0x55c19c, transparent: true, opacity: 0.7 }),  // Lighter green
    ];

    // Create multiple cubes at different positions
    const cubePositions = [
      [-1.5, 0, 0],
      [1.5, 0.5, -1],
      [0, -1, -0.5],
      [0.8, 1.2, -2],
      [-0.7, -1.3, -1.5],
    ];

    cubePositions.forEach((position, i) => {
      const geometry = new THREE.BoxGeometry(
        Math.random() * 0.5 + 0.7,
        Math.random() * 0.5 + 0.7,
        Math.random() * 0.5 + 0.7
      );
      const cube = new THREE.Mesh(geometry, materials[i % materials.length]);
      cube.position.set(position[0], position[1], position[2]);
      scene.add(cube);
      cubes.push(cube);
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate each cube differently
      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.002 * (i % 3 + 1);
        cube.rotation.y += 0.003 * ((i + 1) % 3 + 1);

        // Add subtle floating animation
        cube.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });

      // Mouse tracking effect
      if (typeof window !== 'undefined') {
        const mouseX = (window.innerWidth / 2 - (window.mouseX || 0)) * 0.001;
        const mouseY = (window.innerHeight / 2 - (window.mouseY || 0)) * 0.001;
        scene.rotation.x += (mouseY - scene.rotation.x) * 0.01;
        scene.rotation.y += (mouseX - scene.rotation.y) * 0.01;
      }

      renderer.render(scene, camera);
    };

    // Track mouse position
    if (typeof window !== 'undefined') {
      window.mouseX = 0;
      window.mouseY = 0;
      document.addEventListener('mousemove', (event) => {
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
      });
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', () => {});
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose of geometries and materials
      cubes.forEach(cube => {
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach(material => material.dispose());
        } else {
          cube.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-lg bg-transparent overflow-hidden"
      style={{ minHeight: "400px" }}
    />
  );
}

// Add custom type for window with mouseX and mouseY
declare global {
  interface Window {
    mouseX?: number;
    mouseY?: number;
  }
}
