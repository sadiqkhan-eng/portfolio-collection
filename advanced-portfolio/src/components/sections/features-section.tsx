"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Lock, TrendingUp, Palette, Code } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";

const features = [
  {
    icon: Zap,
    title: "Fast Development",
    description: "Rapid prototyping and deployment without compromising quality",
  },
  {
    icon: Code,
    title: "AI Integrations",
    description: "Seamless integration with OpenAI, Claude, and custom ML models",
  },
  {
    icon: Lock,
    title: "Secure Architecture",
    description: "Enterprise-grade security with modern authentication and encryption",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices and screen sizes",
  },
  {
    icon: Palette,
    title: "Premium UI/UX",
    description: "Beautiful, intuitive interfaces that users love",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Built for search engines and maximum visibility",
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-gradient-to-b from-purple-900/10 to-transparent" grid>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions built with modern best practices
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} spotlight>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
