'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTiltEffect } from "@/hooks/useTiltEffect";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function QuoteMark({ index }: { index: number }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, scale: 0.5, rotate: -15 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.5, delay: index * 0.15, ease: 'back.out(2)', scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
  }, [index]);

  return (
    <svg
      ref={ref}
      className="h-7 w-7 text-accent/40 mb-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
    </svg>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const cardRef = useTiltEffect<HTMLElement>(4);

  return (
    <figure
      ref={cardRef}
      className="stagger-item relative rounded-2xl border border-border/80 bg-muted/30 p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.12)] hover:scale-[1.02] transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <QuoteMark index={index} />
      <blockquote className="text-muted-foreground leading-relaxed text-[15px] flex-1">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 pt-6 border-t border-border">
        <div className="text-foreground font-medium text-sm">
          {t.name}
        </div>
        <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.1 });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-header">
          <SectionHeader
            eyebrow="05 / Testimonials"
            title="Words from people who hired me."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}