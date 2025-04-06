"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Sample company logos for the placeholder slots
const LOGO_PLACEHOLDERS = [
  "cursor", "quora", "ramp", "cartesia",
  "openai", "mistral", "contextual", "substack"
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Banner */}
      <div className="bg-primary/20 border-b border-primary/30 py-2 px-4 text-center text-sm">
        <span>Startups get up to $50k in free compute credits. </span>
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Serve custom AI <br />
              <span className="modal-gradient-text">models at scale</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Add one line of code to run any function in the cloud. Get instant autoscaling for ML inference, data jobs, and more.
            </p>
            <div className="space-x-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Customer logos */}
            <div className="pt-8">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                {LOGO_PLACEHOLDERS.map((company) => (
                  <div key={company} className="h-8 w-20 rounded-md bg-white/5 animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px]">
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Sub-second container starts"
            description="We built a Rust-based container stack from scratch so you can iterate as quickly in the cloud as you can locally."
            actionText="View Docs"
            actionLink="/docs/guide"
          />
          <FeatureCard
            title="Zero config files"
            description="Easily define hardware and container requirements next to your Python functions."
            actionText="View Docs"
            actionLink="/docs/guide/gpu"
          />
          <FeatureCard
            title="Scale to hundreds of GPUs in seconds"
            description="Never worry about hitting rate limits again. We autoscale containers for your functions instantly."
            actionText="View Docs"
            actionLink="/docs/guide/scale"
          />
        </div>
      </div>
    </div>
  );
}

// Rest of the component stays the same
function FeatureCard({ title, description, actionText, actionLink }: {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link
        href={actionLink}
        className="text-primary font-medium hover:underline inline-flex items-center"
      >
        {actionText}
      </Link>
    </div>
  );
}

interface CubeProps {
  x: number;
  y: number;
  size: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  color: string;
  speed: number;
}

function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || animationStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setAnimationStarted(true);

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Define cube properties
    const cubes: CubeProps[] = [
      { x: 100, y: 100, size: 70, rotationX: 0, rotationY: 0, rotationZ: 0, color: '#3ec285', speed: 0.005 },
      { x: 250, y: 150, size: 60, rotationX: 0.5, rotationY: 0.3, rotationZ: 0.1, color: '#35b25f', speed: 0.007 },
      { x: 180, y: 220, size: 80, rotationX: 0.2, rotationY: 0.4, rotationZ: 0.3, color: '#26654f', speed: 0.004 }
    ];

    // Animation function
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cube of cubes) {
        // Update rotation
        cube.rotationX += cube.speed;
        cube.rotationY += cube.speed * 0.7;

        // Draw cube
        drawCube(ctx, cube);
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animationStarted]);

  // Function to draw a 3D cube
  const drawCube = (ctx: CanvasRenderingContext2D, cube: CubeProps) => {
    const { x, y, size, rotationX, rotationY, color } = cube;
    const half = size / 2;

    // Define cube vertices
    const vertices = [
      [-half, -half, -half], // 0: back-top-left
      [half, -half, -half],  // 1: back-top-right
      [half, half, -half],   // 2: back-bottom-right
      [-half, half, -half],  // 3: back-bottom-left
      [-half, -half, half],  // 4: front-top-left
      [half, -half, half],   // 5: front-top-right
      [half, half, half],    // 6: front-bottom-right
      [-half, half, half],   // 7: front-bottom-left
    ];

    // Define faces
    const faces = [
      [0, 1, 2, 3], // back
      [4, 5, 6, 7], // front
      [0, 4, 7, 3], // left
      [1, 5, 6, 2], // right
      [0, 1, 5, 4], // top
      [3, 2, 6, 7], // bottom
    ];

    // Rotate and project vertices
    const rotatedVertices = vertices.map(vertex => {
      const [vx, vy, vz] = vertex;

      // Rotate around X axis
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const y1 = vy * cosX - vz * sinX;
      const z1 = vy * sinX + vz * cosX;

      // Rotate around Y axis
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const x2 = vx * cosY + z1 * sinY;
      const z2 = -vx * sinY + z1 * cosY;

      return [x2, y1, z2];
    });

    // Sort faces by depth (simple painter's algorithm)
    const sortedFaces = [...faces].sort((a, b) => {
      const aDepth = rotatedVertices[a[0]][2] + rotatedVertices[a[1]][2] +
                     rotatedVertices[a[2]][2] + rotatedVertices[a[3]][2];
      const bDepth = rotatedVertices[b[0]][2] + rotatedVertices[b[1]][2] +
                     rotatedVertices[b[2]][2] + rotatedVertices[b[3]][2];
      return aDepth - bDepth;
    });

    // Draw faces
    for (let i = 0; i < sortedFaces.length; i++) {
      const face = sortedFaces[i];
      ctx.beginPath();

      for (let j = 0; j < face.length; j++) {
        const vertexIndex = face[j];
        const [vx, vy] = rotatedVertices[vertexIndex];
        const px = x + vx;
        const py = y + vy;

        if (j === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();

      // Use different shades based on face index
      const hslColor = hexToHSL(color);
      const lightness = 40 + (i * 5);
      ctx.fillStyle = `hsl(${hslColor.h}, ${hslColor.s}%, ${lightness}%)`;
      ctx.fill();

      ctx.strokeStyle = `hsla(${hslColor.h}, ${hslColor.s}%, ${lightness + 10}%, 0.8)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  // Helper function to convert hex to HSL
  const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
    const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h *= 60;
    }

    return { h, s: s * 100, l: l * 100 };
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-lg bg-background/20 backdrop-blur-sm"
    />
  );
}
