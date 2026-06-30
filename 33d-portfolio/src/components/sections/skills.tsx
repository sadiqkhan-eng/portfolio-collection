"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const categoryColors: Record<string, string> = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  ai: "from-purple-500 to-pink-500",
  tools: "from-orange-500 to-yellow-500",
};

const categoryGradients: Record<string, string> = {
  frontend: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  backend: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
  ai: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
  tools: "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const categories = SKILLS.reduce(
    (acc, s) => {
      acc[s.category] = (acc[s.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <SectionWrapper id="skills">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Skills & Expertise
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="character">Tech Stack & Proficiency</TextReveal>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Technologies I work with on a daily basis to build modern applications
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border relative overflow-hidden",
                activeCategory === cat.id
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg shadow-blue-500/10"
                  : "text-white/50 border-white/10 hover:border-white/30 hover:text-white/80"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="skill-bg"
                  className="absolute inset-0 bg-blue-500/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">
                {cat.label}
                {cat.id !== "all" && (
                  <span className="ml-2 text-xs opacity-50">({categories[cat.id]})</span>
                )}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card
                    glass
                    glow
                    className={cn(
                      "p-5 border-l-2 group",
                      categoryGradients[skill.category]
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-medium text-sm">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-xs font-mono text-white/40"
                        whileHover={{ scale: 1.2, color: "#3b82f6" }}
                      >
                        <AnimatedCounter
                          end={skill.percentage}
                          suffix="%"
                          duration={1.5}
                        />
                      </motion.span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1,
                          ease: [0.25, 0.4, 0.25, 1],
                          type: "spring",
                          stiffness: 80,
                        }}
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r",
                          categoryColors[skill.category]
                        )}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </Container>
    </SectionWrapper>
  );
}
