"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
  colors?: string[];
}

export function FloatingElements({
  count = 6,
  className,
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#ec4899"],
}: FloatingElementsProps) {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  if (reduced || !ready) return null;

  const elements: FloatingElement[] = Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 4,
    opacity: 0.1 + Math.random() * 0.2,
  }));

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size * 8,
            height: el.size * 8,
            backgroundColor: colors[i % colors.length],
            opacity: el.opacity,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 20, -20, 10, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [el.opacity, el.opacity * 1.5, el.opacity * 0.5, el.opacity, el.opacity],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
