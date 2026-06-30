"use client";

import { useRef, type ReactNode, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  radius = 200,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      if (dist < radius) {
        const magnetStrength = (1 - dist / radius) * strength;
        const moveX = (e.clientX - centerX) * magnetStrength;
        const moveY = (e.clientY - centerY) * magnetStrength;
        x.set(moveX);
        y.set(moveY);
        scale.set(1 + magnetStrength * 0.3);
      }
    },
    [reduced, strength, radius, x, y, scale]
  );

  function handleReset() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      style={{ x, y, scale }}
    >
      {children}
    </motion.div>
  );
}
