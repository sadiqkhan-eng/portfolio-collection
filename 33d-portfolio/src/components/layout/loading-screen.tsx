"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
      scaleX.set(newProgress / 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setFadeOut(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [scaleX]);

  if (!show) return null;

  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      onAnimationComplete={() => {
        if (fadeOut) setShow(false);
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a]"
    >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold text-white mb-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Sadiq<span className="text-blue-500">.</span>
              </motion.h2>
              <p className="text-sm text-white/40 mb-6">Loading portfolio...</p>
            </motion.div>

            <div className="flex justify-center gap-1 mb-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0.3 }}
                  animate={{ scaleY: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="h-8 w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-purple-500"
                />
              ))}
            </div>

            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden mx-auto">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ scaleX, originX: 0 }}
              />
            </div>
            <motion.p className="text-xs text-white/30 mt-2 font-mono">
              {Math.round(progress)}%
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="h-1 w-1 rounded-full bg-blue-400/50"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
        </motion.div>
      </motion.div>
  );
}
