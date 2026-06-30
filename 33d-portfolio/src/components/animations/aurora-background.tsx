"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function drawBlob(
      cx: number,
      cy: number,
      radius: number,
      hue: number,
      timeOffset: number,
      alpha: number
    ) {
      if (!ctx) return;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${alpha})`);
      gradient.addColorStop(0.5, `hsla(${hue + 30}, 80%, 50%, ${alpha * 0.5})`);
      gradient.addColorStop(1, `hsla(${hue + 60}, 80%, 40%, 0)`);

      ctx.beginPath();
      const points = 8;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave = Math.sin(angle * 2 + time * 0.3 + timeOffset) * 20;
        const r = radius + wave;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    function animate() {
      if (!ctx || !canvas) return;
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBlob(
        canvas.width * 0.3 + Math.sin(time * 0.2) * 200,
        canvas.height * 0.4 + Math.cos(time * 0.3) * 150,
        400 + Math.sin(time * 0.15) * 50,
        220,
        0,
        0.06
      );

      drawBlob(
        canvas.width * 0.7 + Math.cos(time * 0.25) * 250,
        canvas.height * 0.6 + Math.sin(time * 0.2) * 200,
        350 + Math.cos(time * 0.1) * 60,
        280,
        2,
        0.05
      );

      drawBlob(
        canvas.width * 0.5 + Math.sin(time * 0.15) * 300,
        canvas.height * 0.3 + Math.cos(time * 0.35) * 180,
        300 + Math.sin(time * 0.2) * 40,
        190,
        4,
        0.04
      );

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" }}
    />
  );
}
