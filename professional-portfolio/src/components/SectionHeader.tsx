'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector('.eyebrow'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
      );

      const titleEl = el.querySelector('.section-title');
      if (titleEl) {
        const words = titleEl.textContent?.split(' ') || [];
        titleEl.innerHTML = words.map(w => `<span class="inline-block" style="opacity:0;transform:translateY(20px)">${w}</span>`).join(' ');
        const spans = titleEl.querySelectorAll('span');
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }

      if (description) {
        gsap.fromTo(
          el.querySelector('.section-desc'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [title, description]);

  return (
    <div ref={ref} className="mb-16">
      <div className="eyebrow font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
        {eyebrow}
      </div>
      <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-3xl">
        {title}
      </h2>
      {description ? (
        <p className="section-desc mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
