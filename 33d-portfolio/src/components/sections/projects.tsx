"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Plus, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { ParallaxScroll } from "@/components/animations/parallax-scroll";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ParallaxTilt } from "@/components/animations/parallax-tilt";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const categoryFilters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "fullstack", label: "Full Stack" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Featured Work
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="character">Projects & Case Studies</TextReveal>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Real-world applications built with cutting-edge technologies
            </p>
          </ScrollReveal>
        </div>

        <ParallaxScroll speed={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryFilters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border relative",
                  activeFilter === f.id
                    ? "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg shadow-blue-500/10"
                    : "text-white/50 border-white/10 hover:border-white/30 hover:text-white/80"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeFilter === f.id && (
                  <motion.div
                    layoutId="project-filter-bg"
                    className="absolute inset-0 bg-blue-500/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </motion.button>
            ))}
          </div>
        </ParallaxScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <ParallaxTilt strength={8} perspective={1200}>
                    <Card
                      glass
                      glow
                      className="group cursor-pointer overflow-hidden h-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={
                            hoveredId === project.id
                              ? { scale: 1.1, rotate: 5 }
                              : { scale: 1, rotate: 0 }
                          }
                          transition={{ duration: 0.4 }}
                        >
                          <div className="text-4xl opacity-20 font-bold text-white tracking-wider select-none">
                            {project.id.split("-").map(w => w[0]).join("").toUpperCase()}
                          </div>
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"
                          animate={
                            hoveredId === project.id
                              ? { opacity: 0.7 }
                              : { opacity: 1 }
                          }
                        />
                        <motion.div
                          className="absolute top-3 right-3"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={
                            hoveredId === project.id
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.5 }
                          }
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Plus className="h-5 w-5 text-white" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="absolute bottom-3 left-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            hoveredId === project.id
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{ delay: 0.1 }}
                        >
                          <Badge variant="default" className="text-[10px]">
                            {project.category === "ai" ? "AI/ML" : "Full Stack"}
                          </Badge>
                        </motion.div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50 line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="default" className="text-[10px]">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-[10px]">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  </ParallaxTilt>
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <DialogHeader>
                    <DialogTitle>{selectedProject.title}</DialogTitle>
                    <DialogDescription>
                      {selectedProject.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 space-y-4">
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {selectedProject.tags.map((tag, i) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <Badge>{tag}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProject.liveUrl && (
                        <Button size="sm" asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </Container>
    </SectionWrapper>
  );
}
