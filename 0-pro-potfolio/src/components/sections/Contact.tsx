'use client';

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

export function Contact() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.1 });
  const emailRef = useMagneticEffect<HTMLAnchorElement>(0.2);
  const workRef = useMagneticEffect<HTMLAnchorElement>(0.15);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 sm:py-32 border-t border-border/60 bg-background"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="relative section-header mx-auto max-w-4xl px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
          06 / Contact
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
          Let&apos;s talk about
          <br />
          <span className="gradient-accent">what you&apos;re building.</span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The fastest way to reach me is{" "}
          <a
            href="mailto:hello@sadiqkhan.dev"
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors cursor-hover"
          >
            hello@sadiqkhan.dev
          </a>
          . I read everything and reply within 24 hours on weekdays.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 stagger-item">
          <a
            ref={emailRef}
            href="mailto:hello@sadiqkhan.dev"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background hover:bg-accent/90 transition-colors cursor-hover"
          >
            Send a brief
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
            ref={workRef}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-zinc-500 hover:bg-card transition-all cursor-hover"
          >
            Review the work first
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          <div className="bg-card px-6 py-5 text-left group transition-all duration-300 hover:bg-accent/[0.02]">
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              Response
            </div>
            <div className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">Within 24 hours</div>
          </div>
          <div className="bg-card px-6 py-5 text-left group transition-all duration-300 hover:bg-accent/[0.02]">
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              Capacity
            </div>
            <div className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">2–3 new projects</div>
          </div>
          <div className="bg-card px-6 py-5 text-left group transition-all duration-300 hover:bg-accent/[0.02]">
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              Window
            </div>
            <div className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">Q4 2026 onward</div>
          </div>
        </div>

        <p className="stagger-item mt-12 text-sm text-muted-foreground max-w-xl mx-auto">
          If I can&apos;t help, I&apos;ll point you to someone who can.
          That&apos;s the deal.
        </p>
      </div>
    </section>
  );
}