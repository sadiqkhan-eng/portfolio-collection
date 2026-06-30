"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  mode?: "word" | "character" | "typewriter";
  typewriterSpeed?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  once = true,
  mode = "word",
  typewriterSpeed = 40,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  const words = children.split(" ");
  const chars = children.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: mode === "word" ? 0.04 : 0.02,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: mode === "character" ? 10 : 30,
      rotateX: mode === "character" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  if (mode === "typewriter") {
    return (
      <div ref={ref} className={cn(className)}>
        <TypewriterText
          text={children}
          isInView={isInView}
          speed={typewriterSpeed}
          delay={delay}
        />
      </div>
    );
  }

  if (mode === "character") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={cn("flex flex-wrap", className)}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={childVariants}
            className={char === " " ? "mr-[0.25em]" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span className="inline-block" variants={childVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

function TypewriterText({
  text,
  isInView,
  speed = 40,
  delay = 0,
}: {
  text: string;
  isInView: boolean;
  speed?: number;
  delay?: number;
}) {
  const displayText = useRef("");
  const index = useRef(0);

  if (isInView && displayText.current.length < text.length) {
    const timer = setTimeout(() => {
      displayText.current = text.slice(0, index.current + 1);
      index.current++;
    }, speed + delay * 1000);

    return (
      <span>
        {displayText.current}
        <span className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 animate-pulse" />
      </span>
    );
  }

  return <span>{text}</span>;
}
