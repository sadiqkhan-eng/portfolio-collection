'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { slideUp, slideDown, slideLeft, slideRight } from '@/lib/utils/animations';

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = 'up', delay = 0, className }: SlideInProps) {
  const variants = {
    up: slideUp,
    down: slideDown,
    left: slideLeft,
    right: slideRight,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants[direction]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
