"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedButton } from "@/components/shared/animated-button";

// This would normally come from a database or API
const project = {
  title: "AI SaaS Platform",
  slug: "ai-saas-platform",
  description: "Full-stack AI-powered analytics platform with real-time insights and predictive modeling",
  longDescription: "A comprehensive SaaS platform that leverages artificial intelligence to provide businesses with actionable insights from their data. The platform features real-time analytics, predictive modeling, and automated reporting capabilities.",
  category: "SaaS",
  featured: true,
  image: "/projects/project-1.jpg",
  gallery: ["/projects/project-1.jpg", "/projects/project-2.jpg", "/projects/project-3.jpg"],
  techStack: ["Next.js", "OpenAI", "PostgreSQL", "Stripe", "Tailwind", "Prisma", "TypeScript"],
  liveUrl: "#",
  githubUrl: "#",
  problem: "Businesses struggle to extract meaningful insights from their data due to complex analytics tools and lack of AI integration. Traditional analytics platforms require extensive training and don't provide predictive capabilities.",
  solution: "Built an intuitive AI-powered platform that automatically analyzes data, generates insights, and provides predictions. The platform uses GPT-4 for natural language queries and custom ML models for predictive analytics.",
  features: [
    "Real-time data analytics dashboard",
    "AI-powered natural language queries",
    "Predictive modeling and forecasting",
    "Automated report generation",
    "Multi-tenant architecture",
    "Stripe subscription billing",
    "Role-based access control",
    "API for third-party integrations",
  ],
  challenges: "The main challenge was optimizing AI query performance while maintaining cost efficiency. Implemented caching strategies and query optimization to reduce API costs by 60% while maintaining sub-second response times.",
  results: "Successfully launched to 500+ users in the first month. Average user engagement increased by 40% compared to traditional analytics tools. Reduced time-to-insight from hours to minutes.",
  date: "2024-01",
};

export default function ProjectDetailPage() {
  return (
    <main className="pt-20">
      {/* Back Button */}
      <Section className="py-8">
        <Container>
          <Link href="/projects">
            <AnimatedButton variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </AnimatedButton>
          </Link>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Featured Project
                </span>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>January 2024</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <GradientText>{project.title}</GradientText>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.longDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <AnimatedButton variant="gradient" size="lg">
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                View Source Code
              </AnimatedButton>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-5xl">📸</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Problem & Solution */}
      <Section className="bg-gradient-to-b from-purple-900/10 to-transparent" grid>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard spotlight>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </GlassCard>

            <GlassCard spotlight>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center">Key Features</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <p>{feature}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-to-b from-transparent to-purple-900/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Technology Stack</h2>
              <p className="text-muted-foreground">
                Built with modern, production-ready technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="glass px-6 py-3 rounded-full font-medium">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Challenges & Results */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard spotlight>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Challenges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </GlassCard>

            <GlassCard spotlight>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Results</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.results}
                </p>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <GlassCard className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton variant="gradient" size="xl">
                Start a Project
              </AnimatedButton>
              <Link href="/projects">
                <AnimatedButton variant="outline" size="xl">
                  View More Projects
                </AnimatedButton>
              </Link>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
