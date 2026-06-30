"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Calendar } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedButton } from "@/components/shared/animated-button";
import { Particles } from "@/components/shared/particles";

export function HeroSection() {
  return (
    <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold tracking-tight mb-10">
              Hi, I'm{" "}
              <GradientText variant="electric">
                Sadiq Khan
              </GradientText>
              <br />
              Full-Stack Developer & AI Engineer
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Building modern web applications with AI integration, specializing in
              Next.js, React, and cutting-edge technologies. Transforming ideas into
              powerful digital solutions that drive business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/projects">
              <AnimatedButton variant="gradient" size="xl">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
            </Link>

            <Link href="/contact">
              <AnimatedButton variant="outline" size="xl">
                <Calendar className="w-5 h-5" />
                Book a Call
              </AnimatedButton>
            </Link>


          </motion.div>
            {/* Download Resume Button */}
            <Link href="/resume.pdf" download>
              <AnimatedButton variant="ghost" size="xl">
                <Download className="w-5 h-5" />
                Download Resume
              </AnimatedButton>
            
            </Link>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-8"
          >
            {["Next.js", "TypeScript", "AI/ML", "React", "Node.js", "PostgreSQL", "AWS"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 text-muted-foreground"
          >
            <p className="text-sm">Trusted by startups and enterprises worldwide</p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
