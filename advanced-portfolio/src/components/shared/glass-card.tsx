"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  spotlight?: boolean;
}

export function GlassCard({ children, className, hover = true, spotlight = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        spotlight && "spotlight",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
