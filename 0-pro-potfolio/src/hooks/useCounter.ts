'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useCounter<T extends HTMLElement>(
  endValue: number,
  suffix = '',
  duration = 2
) {
  const ref = useRef<T>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const ctx = gsap.context(() => {
      const obj = { value: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          animated.current = true;
          gsap.to(obj, {
            value: endValue,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = `${Math.round(obj.value).toLocaleString()}${suffix}`;
            },
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [endValue, suffix, duration]);

  return ref;
}