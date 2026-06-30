'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sadiqkhan' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sadiqkhan' },
  { label: 'Twitter', href: 'https://twitter.com/sadiqkhan' },
  { label: 'Email', href: 'mailto:hello@sadiqkhan.dev' },
];

function SocialLink({ link, index }: { link: typeof socialLinks[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 + index * 0.05, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none reverse' } });
  }, [index]);

  return (
    <a
      ref={ref}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-xs text-zinc-500 hover:text-accent transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
    >
      {link.label}
    </a>
  );
}

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={ref}
      className="border-t border-border/60 py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs text-zinc-500">
            <span className="text-accent">$</span> built with Next.js
            <span className="text-zinc-700 mx-2">·</span>
            Tailwind v4
            <span className="text-zinc-700 mx-2">·</span>
            TypeScript
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((link, i) => (
              <SocialLink key={link.label} link={link} index={i} />
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-zinc-600">
            © {year} Sadiq Khan. All rights reserved.
          </div>
          <a
            href="#top"
            className="font-mono text-[11px] text-zinc-600 hover:text-accent transition-colors"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}