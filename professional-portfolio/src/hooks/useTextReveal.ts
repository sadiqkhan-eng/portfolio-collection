'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useTextReveal<T extends HTMLElement>(
  options: {
    stagger?: number;
    duration?: number;
    y?: number;
    start?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const { stagger = 0.04, duration = 0.6, y = 40, start = 'top 85%' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent || '';
    const words = text.split(/\s+/);
    el.innerHTML = words
      .map((word) => `<span class="reveal-word" style="display:inline-block">${word}</span>`)
      .join(' ');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.reveal-word'),
        { opacity: 0, y, rotateX: -45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, duration, y, start]);

  return ref;
}