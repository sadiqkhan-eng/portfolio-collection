"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Download, ExternalLink, Code2, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PERSONAL_INFO } from "@/lib/constants";

const socialLinks = [
  {
    icon: Code2,
    href: "https://github.com/sadiqkhan",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: Globe,
    href: "https://linkedin.com/in/sadiqkhan",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: ExternalLink,
    href: "https://x.com/sadiqkhan",
    label: "X (Twitter)",
    color: "hover:text-sky-400",
  },
  {
    icon: Mail,
    href: "mailto:sadiqkhan@example.com",
    label: "Email",
    color: "hover:text-red-400",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a1a]/50 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <Container className="py-12 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <ScrollReveal scale spring>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-2xl font-bold text-white"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {PERSONAL_INFO.name.split(" ")[0]}
                <span className="text-blue-500">.</span>
              </motion.span>
              <Sparkles className="h-4 w-4 text-blue-400" />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} spring>
            <motion.div
              className="flex items-center gap-4"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                >
                  <MagneticButton strength={0.3} radius={120}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 backdrop-blur-sm transition-all duration-300 ${link.color} hover:border-white/20 hover:bg-white/10`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  </MagneticButton>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button variant="outline" size="sm" asChild>
                <a href={PERSONAL_INFO.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/30">
                &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
                Next.js, TypeScript & Three.js
              </p>
              <p className="text-xs text-white/20 mt-1">
                Crafted for recruiters, founders, and AI companies
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>
    </footer>
  );
}
