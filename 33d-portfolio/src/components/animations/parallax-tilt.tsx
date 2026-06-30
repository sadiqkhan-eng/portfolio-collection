"use client";

import { useRef, type ReactNode, useCallback } from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface ParallaxTiltProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  glow?: boolean;
  perspective?: number;
  disabled?: boolean;
}

export function ParallaxTilt({
  children,
  className,
  strength = 10,
  glow = true,
  perspective = 1000,
  disabled = false,
}: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || disabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -strength;

      ref.current.style.transform =
        `perspective(${perspective}px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02,1.02,1.02)`;
      ref.current.style.transition = "transform 0.15s cubic-bezier(0.25, 0.4, 0.25, 1)";

      if (glow) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty("--glare-x", `${glareX}%`);
        ref.current.style.setProperty("--glare-y", `${glareY}%`);
      }
    },
    [reduced, disabled, strength, glow, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1)";
  }, [perspective]);

  if (reduced || disabled) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        ...(glow
          ? {
              backgroundImage:
                "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.06) 0%, transparent 60%)",
            }
          : {}),
      }}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </div>
  );
}
