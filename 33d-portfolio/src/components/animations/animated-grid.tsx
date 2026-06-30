"use client";

import { useReducedMotion } from "@/lib/hooks";

export function AnimatedGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: reduced ? "60px 60px" : "60px 60px",
          animation: reduced ? "none" : "gridShift 20s linear infinite",
        }}
      />
    </div>
  );
}
