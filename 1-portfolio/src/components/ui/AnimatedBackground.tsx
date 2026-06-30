"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "grid" | "particles" | "gradient"; // or a combination
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  className,
  variant = "gradient",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noise3D = createNoise3D();

  useEffect(() => {
    if (variant === "grid" && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let animationFrameId: number;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      const drawGrid = () => {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gridSize = 30; // Size of each grid cell
        const detail = 0.05; // Noise detail
        const speed = 0.0005; // Animation speed
        const glowStrength = 20; // Max glow strength

        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const noiseVal = noise3D(
              x * detail,
              y * detail,
              Date.now() * speed
            );
            const alpha = (noiseVal + 1) / 2; // Normalize noise to 0-1
            const glow = Math.sin(Date.now() * speed * 5 + x * 0.01 + y * 0.01) * 0.5 + 0.5; // Pulsating glow
            const color = `rgba(139, 92, 246, ${alpha * glow})`; // Violet color with varying alpha

            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.shadowBlur = glowStrength * alpha * glow;
            ctx.shadowColor = `rgba(139, 92, 246, ${alpha * glow * 0.8})`;
            ctx.fill();
            ctx.closePath();
          }
        }
        animationFrameId = requestAnimationFrame(drawGrid);
      };

      drawGrid();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [variant, noise3D]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {variant === "gradient" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900 to-blue-900 opacity-70"
        />
      )}
      {variant === "grid" && (
        <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default AnimatedBackground;
