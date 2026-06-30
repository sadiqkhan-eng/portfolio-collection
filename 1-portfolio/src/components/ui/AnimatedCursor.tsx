// src/components/ui/AnimatedCursor.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(129, 140, 248, 0.6)', // violet-400 with opacity
      width: 32,
      height: 32,
      mixBlendMode: 'difference',
    },
    text: {
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // white with opacity
      width: 96,
      height: 96,
      mixBlendMode: 'difference',
    },
    // Add more variants for different hover states (e.g., magnetic buttons)
  };

  const handleMouseEnter = () => setCursorVariant('text');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <motion.div
      className="fixed z-50 rounded-full pointer-events-none hidden md:block" // Hidden on mobile
      variants={variants}
      animate={cursorVariant}
    >
      {/* You can add content here for different cursor states, e.g., a small icon */}
    </motion.div>
  );
};

export default AnimatedCursor;