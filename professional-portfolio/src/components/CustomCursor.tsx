'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], .cursor-hover, [href]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = el?.closest(INTERACTIVE_SELECTOR);
      
      if (isInteractive && !hovering.current) {
        hovering.current = true;
        gsap.to(dot, { scale: 1.8, duration: 0.25, ease: 'power2.out' });
        gsap.to(ring, { scale: 2.2, duration: 0.35, ease: 'power2.out' });
      } else if (!isInteractive && hovering.current) {
        hovering.current = false;
        gsap.to(dot, { scale: 1, duration: 0.25, ease: 'power2.out' });
        gsap.to(ring, { scale: 1, duration: 0.35, ease: 'power2.out' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    gsap.ticker.lagSmoothing(0);

    const ticker = () => {
      gsap.set(dot, { x: mouse.current.x, y: mouse.current.y });
      gsap.to(ring, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    gsap.ticker.add(ticker);

    const handleMouseDown = () => {
      gsap.to(dot, { scale: 0.7, duration: 0.12, ease: 'power2.out' });
      gsap.to(ring, { scale: 1.5, borderWidth: 3, duration: 0.12, ease: 'power2.out' });
    };

    const handleMouseUp = () => {
      gsap.to(dot, { scale: hovering.current ? 1.8 : 1, duration: 0.25, ease: 'power2.out' });
      gsap.to(ring, { scale: hovering.current ? 2.2 : 1, borderWidth: 2, duration: 0.35, ease: 'power2.out' });
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}