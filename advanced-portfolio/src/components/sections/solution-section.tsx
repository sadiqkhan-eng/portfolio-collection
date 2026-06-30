"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Gauge, Shield } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";

const solutions = [
  {
    icon: Rocket,
    title: "Scalable Web Applications",
    description: "Modern, fast, and built to grow with your business using cutting-edge technologies",
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description: "Intelligent features that save time, reduce costs, and provide competitive advantages",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions that keep users engaged",
  },
  {
    icon: Shield,
    title: "Secure Architecture",
    description: "Enterprise-grade security and best practices protecting your data and users",
  },
];

export function SolutionSection() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            <GradientText>Solutions</GradientText> That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your digital presence with modern technology and expert execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <GlassCard key={index} spotlight>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <solution.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
