'use client';

import { useHeroAnimation } from '@/lib/useScrollReveal';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { useCounter } from '@/hooks/useCounter';

function StatItem({ raw, label }: { raw: string; label: string }) {
  const num = parseInt(raw.replace(/[^0-9.]/g, ''));
  const suffix = raw.replace(/[0-9.]/g, '');
  const canAnimate = !isNaN(num);

  if (!canAnimate) {
    return (
      <div className="bg-card px-6 py-6 sm:py-8 group transition-all duration-300 hover:bg-accent/[0.02]">
        <div className="font-mono text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {raw}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
          {label}
        </div>
      </div>
    );
  }

  return <AnimatedStat num={num} suffix={suffix} label={label} />;
}

function AnimatedStat({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const ref = useCounter<HTMLDivElement>(num, suffix);
  return (
    <div className="bg-card px-6 py-6 sm:py-8 group transition-all duration-300 hover:bg-accent/[0.02]">
      <div ref={ref} className="font-mono text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
        0{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useHeroAnimation<HTMLElement>();
  const ctaRef = useMagneticEffect<HTMLAnchorElement>(0.2);
  const secondaryRef = useMagneticEffect<HTMLAnchorElement>(0.15);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="hero-badge flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">●</span> status: available
          </span>
          <span className="text-zinc-700">/</span>
          <span className="font-mono text-xs text-muted-foreground">
            location: remote, global
          </span>
        </div>

        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
          <span className="gradient-text">
            I build AI-native products
          </span>
          <br />
          <span className="text-foreground">end-to-end —</span>
          <br />
          <span className="text-muted-foreground">from </span>
          <span className="text-accent">model</span>
          <span className="text-muted-foreground"> to </span>
          <span className="text-accent">mobile</span>
          <span className="text-muted-foreground">,</span>
          <br />
          <span className="text-muted-foreground">from </span>
          <span className="text-accent">API</span>
          <span className="text-muted-foreground"> to </span>
          <span className="text-accent">App Store</span>
          <span className="text-muted-foreground">.</span>
        </h1>

        <p className="hero-subtitle mt-10 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          I&apos;m a full-stack engineer with 5+ years shipping production AI
          products, mobile apps, and scalable web platforms. I specialize in
          LLM integration, RAG systems, and turning ambiguous ideas into
          shipped software.
        </p>

        <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
          <a
            ref={ctaRef}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors cursor-hover"
          >
            See shipped work
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            ref={secondaryRef}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground hover:border-zinc-500/50 hover:bg-card transition-all cursor-hover"
          >
            Start a conversation
          </a>
        </div>

        <div className="hero-stats mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {[
            { k: "5+", v: "years shipping" },
            { k: "40+", v: "products deployed" },
            { k: "2M+", v: "LLM calls / day" },
            { k: "< 24h", v: "response time" },
          ].map((s) => (
            <StatItem key={s.v} raw={s.k} label={s.v} />
          ))}
        </div>
      </div>
    </section>
  );
}