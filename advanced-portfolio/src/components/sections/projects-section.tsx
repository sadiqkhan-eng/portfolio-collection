"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedButton } from "@/components/shared/animated-button";

const projects = [
  {
    id: 1,
    title: "AI SaaS Platform",
    description: "Full-stack AI-powered analytics platform with real-time insights",
    category: "SaaS",
    image: "/projects/project-1.jpg",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Modern admin dashboard with inventory management and analytics",
    category: "Dashboard",
    image: "/projects/project-2.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Automation System",
    description: "Intelligent workflow automation with custom AI agents",
    category: "AI Apps",
    image: "/projects/project-3.jpg",
    techStack: ["Python", "LangChain", "FastAPI", "Redis"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
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
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <GlassCard key={project.id} spotlight>
              <div className="space-y-4">
                {/* Project Image Placeholder */}
                <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton variant="outline" size="lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </Container>
    </Section>
  );
}
