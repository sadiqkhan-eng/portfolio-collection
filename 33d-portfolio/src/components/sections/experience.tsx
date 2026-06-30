"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCES } from "@/lib/constants";
import { GraduationCap, Briefcase, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  certification: Award,
};

const typeColors = {
  education: "text-blue-400 bg-blue-500/20 border-blue-500/30",
  work: "text-purple-400 bg-purple-500/20 border-purple-500/30",
  certification: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="experience">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Timeline
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="character">Experience & Journey</TextReveal>
            </h2>
          </ScrollReveal>
        </div>

        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const Icon = typeIcons[exp.type];
              return (
                <ScrollReveal
                  key={exp.id}
                  delay={0.15 * i}
                  direction="left"
                  distance={40}
                  spring
                >
                  <div className="relative pl-20">
                    <motion.div
                      className={cn(
                        "absolute left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-sm z-10",
                        typeColors[exp.type]
                      )}
                      whileHover={{ scale: 1.2, transition: { type: "spring" } }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Card glass className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {exp.title}
                            </h3>
                            <p className="text-sm text-blue-400/80">
                              {exp.organization}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant={
                                exp.type === "education"
                                  ? "success"
                                  : exp.type === "work"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {exp.type}
                            </Badge>
                          </motion.div>
                        </div>

                        <p className="text-sm text-white/50 mb-4">{exp.description}</p>

                        {exp.highlights && (
                          <ul className="space-y-2">
                            {exp.highlights.map((h, hi) => (
                              <motion.li
                                key={h}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + hi * 0.1, type: "spring", stiffness: 200 }}
                                className="text-sm text-white/40 flex items-start gap-2"
                              >
                                <motion.span
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60"
                                  animate={{ scale: [1, 1.5, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: hi * 0.3 }}
                                />
                                {h}
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </Card>
                    </motion.div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
