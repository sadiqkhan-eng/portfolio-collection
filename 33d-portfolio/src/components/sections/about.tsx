"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FloatingElements } from "@/components/animations/floating-elements";
import { PERSONAL_INFO, EXPERIENCES } from "@/lib/constants";
import {
  Code2,
  Brain,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Zap,
  Sparkles,
} from "lucide-react";

const highlights = [
  { icon: Code2, label: "Projects Built", value: "20+", color: "from-blue-500 to-cyan-500" },
  { icon: Brain, label: "AI Systems", value: "10+", color: "from-purple-500 to-pink-500" },
  { icon: Zap, label: "Technologies", value: "25+", color: "from-amber-500 to-orange-500" },
  { icon: Award, label: "Certifications", value: "5+", color: "from-green-500 to-emerald-500" },
];

const currentLearning = [
  "Advanced Agentic AI Architectures",
  "Multi-Modal LLM Applications",
  "Production RAG Systems",
  "Cloud Native Development",
];

const achievements = [
  "SMIT Full Stack Development Certification",
  "Governor AI Program Advanced Track",
  "Open Source Contributor (500+ contributions)",
  "Featured in Developer Communities",
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.03, 0]);

  return (
    <SectionWrapper id="about">
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent"
          style={{ opacity: bgOpacity }}
        />
      </div>
      <FloatingElements count={4} className="opacity-30" />
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                About Me
              </Badge>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="word">Developer & AI Engineer</TextReveal>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} scale blur>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {highlights.map((item) => (
            <Card key={item.label} glass className="text-center p-6 group hover:border-blue-500/30">
              <motion.div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} p-3 mx-auto mb-3`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <item.icon className="h-full w-full text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-white/50">{item.label}</div>
            </Card>
          ))}
        </StaggerContainer>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal direction="left" spring>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                Journey & Education
              </h3>
            </ScrollReveal>
            <div className="space-y-6">
              {EXPERIENCES.filter((e) => e.type === "education").map((exp, i) => (
                <ScrollReveal key={exp.id} delay={0.1 * i} direction="left" distance={30}>
                  <motion.div
                    whileHover={{ x: 5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card glass className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-white">{exp.title}</h4>
                          <p className="text-sm text-blue-400">{exp.organization}</p>
                        </div>
                        <Badge variant="success">{exp.type}</Badge>
                      </div>
                      <p className="text-sm text-white/50 mb-3">{exp.description}</p>
                      {exp.highlights && (
                        <ul className="space-y-1">
                          {exp.highlights.map((h, hi) => (
                            <motion.li
                              key={h}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + hi * 0.1 }}
                              className="text-sm text-white/40 flex items-center gap-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                              {h}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal direction="right" spring>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-400" />
                Currently Learning
              </h3>
            </ScrollReveal>
            <div className="space-y-3 mb-10">
              {currentLearning.map((item, i) => (
                <ScrollReveal key={item} delay={0.1 * i} direction="right" distance={30}>
                  <motion.div
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card glass className="p-4 flex items-center gap-3">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-purple-400"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span className="text-white/70 text-sm">{item}</span>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <Separator className="my-6" />
            </ScrollReveal>

            <ScrollReveal direction="right" spring delay={0.3}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-cyan-400" />
                Achievements
              </h3>
            </ScrollReveal>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <ScrollReveal key={item} delay={0.1 * i + 0.3} direction="right" distance={30} rotate={-2}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card glass className="p-4 flex items-center gap-3">
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="h-4 w-4 text-cyan-400" />
                      </motion.div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
