import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { teamMembers, type TeamMember } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team — Sadiq Khan",
  description:
    "The engineers behind every shipped product. Full-stack, AI, mobile, and DevOps expertise under one roof.",
};

export default function TeamPage() {
  const [featured, ...rest] = teamMembers;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-zinc-800/60 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 8H3M7 4L3 8l4 4" />
            </svg>
            Back to portfolio
          </Link>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6">
            08 / Team
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
            <span className="gradient-text">The people</span>
            <br />
            <span className="text-zinc-400">behind the shipped work.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Three engineers. One shared standard: it works, it scales, and
            it&apos;s documented. No contractors, no offshore handoffs — the
            same people who scope the work ship the work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              { k: "3", v: "engineers" },
              { k: "12+", v: "years combined" },
              { k: "1", v: "shared standard" },
            ].map((s, i) => (
              <div
                key={s.v}
                className="flex items-baseline gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 animate-slide-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <span className="font-mono text-sm font-semibold text-emerald-300">
                  {s.k}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured member - larger card */}
      {featured ? (
        <section className="py-20 sm:py-24 border-b border-zinc-800/60">
          <div className="mx-auto max-w-6xl px-6">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-3">
              <span className="text-emerald-400">▍</span>
              Founder
            </div>

            <article className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.04] via-zinc-900/40 to-zinc-950 p-8 sm:p-12 animate-fade-in hover:border-emerald-400/40 hover:shadow-[0_0_35px_-10px_rgba(52,211,153,0.1)] transition-all duration-300">
              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-zinc-900 ring-1 ring-emerald-400/30 glow">
                  <Image
                    src={featured.image}
                    alt={`${featured.name} — ${featured.role}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 mb-3">
                  {featured.role}
                </div>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-100">
                  {featured.name}
                </h2>
                <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
                  {featured.longBio}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featured.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800/60">
                  {featured.highlights.map((h) => (
                    <div key={h.label} className="bg-zinc-950 px-4 py-4 group transition-all duration-300 hover:bg-accent/[0.02]">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1 group-hover:text-accent/70 transition-colors duration-300">
                        {h.label}
                      </div>
                      <div className="text-zinc-100 font-medium text-sm group-hover:text-accent transition-colors duration-300">
                        {h.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <SocialLinks links={featured.links} />
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {/* Other team members */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-3">
            <span className="text-emerald-400">▍</span>
            Engineering
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((member, i) => (
              <article
                key={member.id}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 hover:border-zinc-600 hover:bg-zinc-900/50 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative aspect-square w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-zinc-800 ring-1 ring-zinc-700/50 shrink-0">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 128px, 160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 mb-2">
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <SocialLinks links={member.links} small />
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {member.highlights[0]?.value} · {member.highlights[1]?.value}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team / Work with us CTA */}
      <section className="py-20 sm:py-24 border-t border-zinc-800/60 bg-zinc-950">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-4">
              Work with us
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
              Need a team that ships, not a vendor that slides?
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              We take on a limited number of engagements per quarter so every
              client gets the same people who scoped the work. If that sounds
              like what you need, send the brief.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@sadiqkhan.dev?subject=Project%20inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300 transition-colors"
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
              <Link
                href="/pay"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLinks({
  links,
  small = false,
}: {
  links: TeamMember["links"];
  small?: boolean;
}) {
  const size = small ? "h-9 w-9" : "h-10 w-10";
  const iconSize = small ? "h-4 w-4" : "h-5 w-5";

  const items: { href: string; label: string; icon: React.ReactNode }[] = [];

  if (links.github) {
    items.push({
      href: links.github,
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 16 16" fill="currentColor" className={iconSize}>
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
    });
  }

  if (links.linkedin) {
    items.push({
      href: links.linkedin,
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 16 16" fill="currentColor" className={iconSize}>
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      ),
    });
  }

  if (links.twitter) {
    items.push({
      href: links.twitter,
      label: "Twitter",
      icon: (
        <svg viewBox="0 0 16 16" fill="currentColor" className={iconSize}>
          <path d="M12.6 1H15l-5.3 6.1L16 15h-4.9l-3.8-5-4.4 5H.5l5.7-6.5L0 1h5l3.4 4.5L12.6 1zm-.9 12.6h1.4L4.4 2.3H2.9l8.8 11.3z" />
        </svg>
      ),
    });
  }

  if (links.email) {
    items.push({
      href: links.email,
      label: "Email",
      icon: (
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={iconSize}
        >
          <path d="M2 4h12v8H2zM2 4l6 5 6-5" />
        </svg>
      ),
    });
  }

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800 transition-all ${size}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
