'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import { gsap } from 'gsap';
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const links = header.querySelectorAll('a, button');
    gsap.fromTo(
      header,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo(
      links,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out', delay: 0.2 }
    );

    let lastScroll = 0;
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      gsap.killTweensOf(header);
      gsap.killTweensOf(links);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl transition-transform duration-300"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>sadiq
          <span className="text-zinc-500">.khan</span>
          <span className="text-zinc-600 animate-pulse">▍</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/team"
            className="ml-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
          >
            Team
          </Link>
          <Link
            href="/pay"
            className="ml-1 px-3 py-2 text-sm text-accent hover:text-accent-dim transition-colors rounded-md font-medium"
          >
            Pay
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/10 hover:border-accent/50 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available
          </a>
        </div>
      </div>
    </header>
  );
}
