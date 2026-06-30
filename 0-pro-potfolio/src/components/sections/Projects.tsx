'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTiltEffect } from "@/hooks/useTiltEffect";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function StackTag({ name, index }: { name: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3, delay: index * 0.03, ease: 'back.out(2)', scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none reverse' } });
  }, [index]);

  return (
    <span
      ref={ref}
      className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
    >
      {name}
    </span>
  );
}

function ImpactBox({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
  }, []);

  const cls = accent
    ? 'rounded-xl border border-accent/20 bg-accent/[0.04] p-5 hover:border-accent/40 hover:shadow-[0_0_25px_-8px_rgba(52,211,153,0.12)] hover:scale-[1.02] transition-all duration-300'
    : 'rounded-xl border border-border bg-muted/40 p-5 hover:border-border/80 hover:scale-[1.02] transition-all duration-300';

  return <div ref={ref} className={cls}>{children}</div>;
}

function ProjectCard({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) {
  const cardRef = useTiltEffect<HTMLElement>(6);

  return (
    <article
      ref={cardRef}
      id={project.id}
      className="group relative scroll-mt-24 stagger-item rounded-2xl border border-transparent hover:border-accent/10 hover:bg-accent/[0.01] transition-all duration-300 p-6 -mx-6"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")} /
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-3 text-muted-foreground text-base leading-relaxed">
            {project.hook}
          </p>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
              Problem
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <StackTag key={s} name={s} index={i} />
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
              Key engineering decisions
            </div>
            <ul className="space-y-2">
              {project.decisions.map((d, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-muted-foreground text-[15px] leading-relaxed group/decision hover:text-foreground/80 transition-colors duration-300"
                  >
                    <span className="text-accent mt-1.5 shrink-0 opacity-70 group-hover/decision:opacity-100 transition-opacity duration-300">▸</span>
                    <span>{d}</span>
                  </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ImpactBox accent>
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent mb-2">
                Impact
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.impact}
              </p>
            </ImpactBox>
            <ImpactBox>
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Lessons
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.lessons}
              </p>
            </ImpactBox>
          </div>
        </div>
      </div>

      {index < total - 1 ? (
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      ) : null}
    </article>
  );
}

export function Projects() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.1 });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-header">
          <SectionHeader
            eyebrow="03 / Projects"
            title="Four products. Real metrics. Real lessons."
            description="Not tutorials, not clone apps. Each of these shipped to real users and either made money, saved time, or both."
          />
        </div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}