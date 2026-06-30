"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { GradientText } from "@/components/animations/gradient-text";
import { FloatingElements } from "@/components/animations/floating-elements";
import dynamic from "next/dynamic";
import { ROLE_TITLES, PERSONAL_INFO } from "@/lib/constants";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});
const Particles = dynamic(() => import("@/components/three/particles").then((m) => m.Particles), {
  ssr: false,
});

function FloatingParticles({ count = 20 }: { count?: number }) {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  if (!ready) return null;

  const particles = Array.from({ length: count }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    y: [0, -30 - Math.random() * 40, 0] as [number, number, number],
    opacity: [0, 0.8, 0] as [number, number, number],
    scale: [0, 1, 0] as [number, number, number],
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400/20"
          style={{ left: p.left, top: p.top }}
          animate={{ y: p.y, opacity: p.opacity, scale: p.scale }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]"
    >
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
        <HeroScene />
        <Particles />
        <FloatingParticles count={30} />
        <FloatingElements count={8} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)" }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for projects
            <Sparkles className="h-3 w-3 ml-1 text-blue-300" />
          </motion.p>
        </motion.div>

        <motion.div variants={childVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Building Intelligent
            <br />
            <GradientText
              colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#3b82f6"]}
              duration={8}
            >
              Web Experiences
            </GradientText>
          </h1>
        </motion.div>

        <motion.div variants={childVariants} className="mt-6 h-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="text-xl sm:text-2xl text-white/50 font-light"
            >
              {ROLE_TITLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={childVariants}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/30 leading-relaxed"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton strength={0.4}>
            <Button
              size="lg"
              onClick={() => scrollTo("#projects")}
              className="group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ filter: "blur(20px)", opacity: 0.3 }}
              />
              <Eye className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.4}>
            <Button variant="outline" size="lg" asChild>
              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </motion.a>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.4}>
            <Button variant="ghost" size="lg" onClick={() => scrollTo("#contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
