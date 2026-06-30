"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedButton } from "@/components/shared/animated-button";
import { Particles } from "@/components/shared/particles";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-12 text-center space-y-8 relative"
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Ready to Build Something{" "}
              <GradientText variant="electric">Amazing?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality with modern technology
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton variant="gradient" size="xl">
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </AnimatedButton>

            <AnimatedButton variant="outline" size="xl">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </AnimatedButton>
          </div>

          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              🚀 Currently accepting new projects • Response within 24 hours
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
