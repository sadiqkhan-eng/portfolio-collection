"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Input } from "@/components/ui/input";

const categories = ["All", "AI Apps", "SaaS", "E-Commerce", "Dashboards", "Automation", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "AI SaaS Platform",
    slug: "ai-saas-platform",
    description: "Full-stack AI-powered analytics platform with real-time insights and predictive modeling",
    category: "SaaS",
    image: "/projects/project-1.jpg",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "Stripe", "Tailwind"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    slug: "ecommerce-dashboard",
    description: "Modern admin dashboard with inventory management, analytics, and order processing",
    category: "Dashboards",
    image: "/projects/project-2.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind", "Chart.js"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Automation System",
    slug: "ai-automation-system",
    description: "Intelligent workflow automation with custom AI agents and task scheduling",
    category: "Automation",
    image: "/projects/project-3.jpg",
    techStack: ["Python", "LangChain", "FastAPI", "Redis", "Celery"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    slug: "real-estate-platform",
    description: "Property listing platform with advanced search, virtual tours, and booking system",
    category: "Full Stack",
    image: "/projects/project-4.jpg",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AI Content Generator",
    slug: "ai-content-generator",
    description: "GPT-powered content creation tool for blogs, social media, and marketing copy",
    category: "AI Apps",
    image: "/projects/project-5.jpg",
    techStack: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fashion E-Commerce",
    slug: "fashion-ecommerce",
    description: "Modern online store with product recommendations and seamless checkout",
    category: "E-Commerce",
    image: "/projects/project-6.jpg",
    techStack: ["Next.js", "Shopify", "Stripe", "Tailwind"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              My <GradientText>Projects</GradientText>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications built with modern technology and best practices
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Filters Section */}
      <Section>
        <Container>
          <div className="space-y-6 mb-12">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "glass hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mb-8"
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <GlassCard spotlight className="h-full cursor-pointer group">
                      <div className="space-y-4">
                        {/* Project Image Placeholder */}
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <span className="text-5xl">🚀</span>
                        </div>

                        {/* Category & Featured Badge */}
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
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 pt-2">
                          <a
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                          >
                            Code
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                No projects found matching your criteria
              </p>
            </motion.div>
          )}
        </Container>
      </Section>
    </main>
  );
}
