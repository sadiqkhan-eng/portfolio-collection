'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTiltEffect } from "@/hooks/useTiltEffect";

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useTiltEffect<HTMLDivElement>(5);

  return (
    <div
      ref={cardRef}
      className="stagger-item group relative rounded-2xl border border-border/80 bg-gradient-to-b from-muted/40 to-background p-7 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.12)] hover:scale-[1.02] transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </div>
        <svg
          className="h-5 w-5 text-zinc-700 group-hover:text-accent transition-colors"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 12L12 4M6 4h6v6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-[15px]">
        {service.body}
      </p>
    </div>
  );
}

export function Services() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.1 });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 sm:py-32 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-header">
          <SectionHeader
            eyebrow="04 / Services"
            title="What I take on, and how it usually goes."
            description="Outcome-focused engagements. No retainers, no mystery. You know what you're getting and what it costs before we start."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}