"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Globe, Star, GitCommit, FolderGit2, Code2, Sparkles } from "lucide-react";

const stats = [
  { icon: FolderGit2, label: "Repositories", end: 25, suffix: "+", color: "from-blue-500 to-cyan-500" },
  { icon: Star, label: "Stars Earned", end: 150, suffix: "+", color: "from-amber-500 to-yellow-500" },
  { icon: GitCommit, label: "Contributions", end: 850, suffix: "+", color: "from-green-500 to-emerald-500" },
  { icon: Code2, label: "Languages", end: 12, suffix: "", color: "from-purple-500 to-pink-500" },
];

const languages = [
  { name: "TypeScript", percentage: 40, color: "bg-blue-500" },
  { name: "Python", percentage: 25, color: "bg-yellow-500" },
  { name: "JavaScript", percentage: 20, color: "bg-green-500" },
  { name: "HTML/CSS", percentage: 10, color: "bg-orange-500" },
  { name: "Other", percentage: 5, color: "bg-gray-500" },
];

export function GitHubStats() {
  return (
    <SectionWrapper id="github">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Open Source
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="h-8 w-8" />
              </motion.div>
              <TextReveal mode="word">GitHub Statistics</TextReveal>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} glass className="text-center p-6 group">
              <motion.div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${stat.color} p-3 mx-auto mb-3`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <stat.icon className="h-full w-full text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </Card>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3} scale spring>
          <Card glass className="p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-400" />
              Languages Used
            </h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{lang.name}</span>
                    <span className="text-white/40">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.15,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
