"use client";

import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode, useRef, useState, useEffect } from "react";

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  magnetic?: boolean;
}

export function AnimatedButton({ children, magnetic = false, ...props }: AnimatedButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateMousePosition = (e: MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element && magnetic) {
      element.addEventListener("mousemove", updateMousePosition);
      element.addEventListener("mouseleave", () => {
        setMousePosition({ x: 0, y: 0 });
        setIsHovering(false);
      });
      element.addEventListener("mouseenter", () => setIsHovering(true));
    }

    return () => {
      if (element && magnetic) {
        element.removeEventListener("mousemove", updateMousePosition);
        element.removeEventListener("mouseleave", () => {
          setMousePosition({ x: 0, y: 0 });
          setIsHovering(false);
        });
        element.removeEventListener("mouseenter", () => setIsHovering(true));
      }
    };
  }, [magnetic]);

  // Calculate transform for magnetic effect
  const magneticTransform = magnetic ? `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0)` : 'none';

  // Define hover and tap variants
  const hoverVariants = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 },
    ...(props.variant === 'glow' && { // Apply glow effect if variant is 'glow'
      boxShadow: '0 0 25px rgba(255, 255, 255, 0.6)', // Enhanced glow
    }),
  };

  const tapVariants = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 15 },
    ...(props.variant === 'glow' && { // Slightly reduced glow on tap
      boxShadow: '0 0 18px rgba(255, 255, 255, 0.4)',
    }),
  };

  const defaultHover = { scale: 1, transition: { duration: 0.3 } };

  return (
    <motion.div
      ref={ref}
      style={{ transform: magneticTransform }}
      // Apply hover and tap animations conditionally
      whileHover={isHovering ? hoverVariants : defaultHover}
      whileTap={tapVariants}
      className={`inline-block relative group ${magnetic ? 'cursor-pointer' : ''}`}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
