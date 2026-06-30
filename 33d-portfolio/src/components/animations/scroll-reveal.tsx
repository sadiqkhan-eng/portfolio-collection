"use client";

import { useRef } from "react";
import { motion, useInView, type Transition, type Variants } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
  scale?: boolean;
  blur?: boolean;
  rotate?: number;
  spring?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  distance = 50,
  scale = false,
  blur = false,
  rotate = 0,
  spring = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  const directionVariants: Record<string, Record<string, number>> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial: Record<string, number> & { opacity: number; scale?: number; filter?: string } = {
    opacity: 0,
    ...directionVariants[direction],
  };

  if (scale) initial.scale = 0.9;
  if (blur) initial.filter = "blur(8px)";

  const transition: Transition = spring
    ? {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
      }
    : {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      };

  if (rotate) {
    initial.rotate = rotate;
  }

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial={initial}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
            : initial
        }
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}
