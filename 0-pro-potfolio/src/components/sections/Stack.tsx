'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from "@/components/SectionHeader";
import { signatureSkills, stackGroups } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function SignatureCard({ skill, index }: { skill: typeof signatureSkills[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const badge = badgeRef.current;
    if (!card || !badge) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(badge, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, delay: 0.3 + index * 0.1, ease: 'back.out(2)', scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' } });
    }, card);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl border border-accent/20 bg-accent/[0.03] p-6 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06] hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)] hover:scale-[1.02]"
    >
      <div ref={badgeRef} className="absolute top-0 right-0 font-mono text-[10px] text-accent/40 px-3 py-2">
        0{index + 1}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h4 className="relative text-lg font-semibold text-foreground mb-3">
        {skill.name}
      </h4>
      <p className="relative text-sm text-muted-foreground leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
}

export function Stack() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.08 });

  return (
    <section
      ref={ref}
      id="stack"
      className="relative py-24 sm:py-32 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="">
          <SectionHeader
            eyebrow="02 / Stack"
            title="The tools I reach for, and why."
            description="Stack lists are noise. What matters is knowing when to use what, and what to avoid. Here's how I think about the layers I work in every day."
          />
        </div>

        <div className="mb-16 stagger-item">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Signature skills
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {signatureSkills.map((s, i) => (
              <SignatureCard key={s.name} skill={s} index={i} />
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 flex items-center gap-3">
                <span className="text-accent">▍</span>
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="stagger-item group rounded-xl border border-border/80 bg-muted/30 p-5 hover:border-accent/20 hover:bg-accent/[0.03] hover:shadow-[0_0_20px_-8px_rgba(52,211,153,0.1)] transition-all duration-300"
                  >
                    <div className="text-foreground font-medium mb-1.5">
                      {skill.name}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}