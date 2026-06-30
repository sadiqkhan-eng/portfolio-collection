'use client';

import { Mail, ArrowUp, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: LinkIcon, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: LinkIcon, href: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: LinkIcon, href: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="glass rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
