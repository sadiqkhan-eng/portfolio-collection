"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export function GradientText({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#3b82f6"],
  duration = 6,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <motion.div
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: `${colors.length * 100}% 100%`,
      }}
      animate={{
        backgroundPosition: ["0% 50%", `${(colors.length - 1) * 100}% 50%`, "0% 50%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
