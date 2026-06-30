// src/components/ui/AnimatedText.tsx
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: React.ElementType;
  className?: string;
  animation?: {
    staggerChildren?: number;
    delayChildren?: number;
    opacity?: [number, number];
    y?: [number, number];
  };
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Component = 'p',
  className,
  animation = {
    staggerChildren: 0.05,
    delayChildren: 0.2,
    opacity: [0, 1],
    y: [20, 0],
  },
}) => {
  const characters = text.split('');

  const variants: Variants = {
    hidden: { opacity: animation.opacity?.[0] ?? 0, y: animation.y?.[0] ?? 20 },
    visible: { opacity: animation.opacity?.[1] ?? 1, y: animation.y?.[1] ?? 0 },
  };

  return (
    <Component className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: animation.staggerChildren,
            delayChildren: animation.delayChildren,
          }}
          className="inline-block" // Important for stagger effect
        >
          {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
        </motion.span>
      ))}
    </Component>
  );
};

export default AnimatedText;