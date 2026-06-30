'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function About() {
  const ref = useScrollReveal<HTMLElement>('.stagger-item', { stagger: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 sm:py-32 border-t border-border/60"
      suppressHydrationWarning
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-header">
          <SectionHeader
            eyebrow="01 / About"
            title="I write code that ships — and stays shipped."
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p className="stagger-item">
              I started writing code at 15 because I wanted to build a Discord
              bot. That bot is long dead, but the instinct it gave me — figure
              it out, ship it, iterate — has shaped everything since.
            </p>
            <p className="stagger-item">
              Over the last five years I&apos;ve gone from freelance WordPress
              sites to leading AI product engineering for venture-backed
              startups. The throughline hasn&apos;t changed: I build things
              that work. Not demos, not prototypes dressed up with a domain
              name — real systems handling real load, real users, real money.
            </p>
            <p className="stagger-item">
              What I do best sits at an intersection most engineers avoid. I
              can architect a Next.js frontend, design the Postgres schema
              behind it, deploy the Node API on AWS, wrap the whole thing in a
              React Native app, and bolt on an LLM-powered feature that
              actually moves a business metric. That combination is rare
              because it&apos;s hard. Most people pick a layer. I learned the
              whole stack because the products I wanted to build demanded it.
            </p>
            <p className="stagger-item">
              My edge is treating AI as a first-class engineering discipline,
              not a magic layer. I&apos;ve built RAG pipelines that reduced
              hallucination by 60%, agent systems that handle multi-step
              workflows autonomously, and orchestration layers that cut LLM
              costs by 40% through caching and routing. I don&apos;t
              prompt-and-pray. I measure evals, track token economics, and
              design fallbacks.
            </p>
            <p className="stagger-item" suppressHydrationWarning>
              I work best with founders and product teams who already know what
              they&apos;re solving but need someone who can translate that into
              a system. I&apos;m not the person for &ldquo;make it pop&rdquo;
              or &ldquo;add a chatbot.&rdquo; I&apos;m the person you bring in
              when the system is breaking at scale, when the AI feature
              isn&apos;t performing, or when the mobile app needs to ship in
              eight weeks and there&apos;s no room for guesswork.
            </p>
          </div>

          <aside className="lg:col-span-4">
            <div className="stagger-item sticky top-24 rounded-2xl border border-border bg-muted/40 p-6 space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Currently
                </div>
                <div className="text-foreground font-medium">
                  Leading AI engineering
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Q4 2026 — open for 2–3 new projects
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Engagement
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> Contract
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> Technical
                    consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">→</span> Code review &
                    audits
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Off-hours
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technical writeups, mentoring junior devs into AI
                  engineering, maintaining OSS tools used by a few thousand
                  developers.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}