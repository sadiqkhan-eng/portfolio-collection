"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition, useReducedMotion } from "@/lib/hooks";

export function CursorFollower() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();
  const isHovering = useRef(false);

  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    springX.set(x);
    springY.set(y);
  }, [x, y, springX, springY]);

  useEffect(() => {
    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');
      isHovering.current = !!isClickable;
    }
    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (reduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30"
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovering.current ? 1.8 : 1,
          borderColor: isHovering.current
            ? "rgba(147, 51, 234, 0.5)"
            : "rgba(59, 130, 246, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
