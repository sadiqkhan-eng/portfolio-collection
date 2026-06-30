"use client";

import { motion } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We discuss your goals, requirements, and vision. I analyze your needs and propose the best technical approach.",
  },
  {
    number: "02",
    icon: Code,
    title: "Development",
    description: "I build your solution using modern technologies, keeping you updated with regular progress reports and demos.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Your product goes live with full documentation, training, and ongoing support to ensure continued success.",
  },
];

export function HowItWorksSection() {
  return (
    <Section grid>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process from idea to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <GlassCard spotlight className="h-full">
                <div className="space-y-4">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
