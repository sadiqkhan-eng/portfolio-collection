"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock, Zap } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";

const problems = [
  {
    icon: TrendingDown,
    title: "Outdated Technology",
    description: "Legacy systems holding your business back from modern capabilities and integrations",
  },
  {
    icon: Clock,
    title: "Slow Performance",
    description: "Poor loading times and sluggish interfaces driving customers away",
  },
  {
    icon: AlertCircle,
    title: "Poor User Experience",
    description: "Confusing navigation and dated design reducing conversions and engagement",
  },
  {
    icon: Zap,
    title: "No AI Integration",
    description: "Missing out on automation and intelligent features that competitors are leveraging",
  },
];

export function ProblemSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent to-purple-900/10" grid>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Common Challenges Businesses Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These issues cost time, money, and opportunities every single day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <GlassCard key={index} spotlight>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
