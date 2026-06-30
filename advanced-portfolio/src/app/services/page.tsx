"use client";

import { motion } from "framer-motion";
import { Code, Brain, Palette, Zap, Database, Shield } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedButton } from "@/components/shared/animated-button";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like Next.js, React, Node.js, and PostgreSQL.",
    features: [
      "Custom web applications",
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Third-party integrations",
    ],
    pricing: "Starting at $5,000",
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description: "Integrate powerful AI capabilities into your applications using OpenAI, Claude, and custom ML models.",
    features: [
      "ChatGPT & Claude integration",
      "Custom AI agents",
      "Workflow automation",
      "RAG systems & vector databases",
    ],
    pricing: "Starting at $3,000",
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    description: "Beautiful, responsive interfaces that users love, built with modern design systems and animation libraries.",
    features: [
      "Responsive design",
      "Design system development",
      "Animation & micro-interactions",
      "Accessibility optimization",
    ],
    pricing: "Starting at $2,500",
  },
  {
    icon: Zap,
    title: "SaaS Development",
    description: "Complete SaaS platform development from MVP to scale, including authentication, payments, and analytics.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing",
      "User management",
      "Analytics dashboard",
    ],
    pricing: "Starting at $10,000",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust, scalable APIs with comprehensive documentation, authentication, and rate limiting.",
    features: [
      "RESTful & GraphQL APIs",
      "API documentation",
      "Authentication & authorization",
      "Rate limiting & caching",
    ],
    pricing: "Starting at $2,000",
  },
  {
    icon: Shield,
    title: "Consulting & Code Review",
    description: "Expert guidance on architecture, performance optimization, security best practices, and code quality.",
    features: [
      "Architecture review",
      "Performance optimization",
      "Security audit",
      "Best practices guidance",
    ],
    pricing: "Starting at $150/hour",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <GradientText>Services</GradientText> I Offer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gradient-to-b from-purple-900/10 to-transparent" grid>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard spotlight className="h-full flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Icon */}
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                      <service.icon className="w-8 h-8" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="pt-6 mt-6 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary mb-4">
                      {service.pricing}
                    </div>
                    <AnimatedButton variant="outline" className="w-full">
                      Get Started
                    </AnimatedButton>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Why Work With Me?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional, reliable, and results-driven
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality",
              },
              {
                title: "Clear Communication",
                description: "Regular updates and transparent progress tracking",
              },
              {
                title: "Modern Tech Stack",
                description: "Latest technologies and best practices",
              },
            ].map((item, index) => (
              <GlassCard key={item.title} spotlight>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-transparent to-purple-900/10">
        <Container>
          <GlassCard className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together
            </p>
            <AnimatedButton variant="gradient" size="xl">
              Schedule a Consultation
            </AnimatedButton>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
