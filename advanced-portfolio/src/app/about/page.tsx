"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Code, Sparkles, Rocket, Award } from "lucide-react";

const journey = [
  {
    year: "2024",
    title: "AI Integration Specialist",
    description: "Leading AI-powered web application development, integrating GPT-4, Claude, and custom ML models into production systems.",
  },
  {
    year: "2023",
    title: "Senior Full-Stack Developer",
    description: "Built scalable SaaS platforms serving 10k+ users. Specialized in Next.js, React, and Node.js architectures.",
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    description: "Developed e-commerce platforms and dashboards. Mastered modern web technologies and cloud infrastructure.",
  },
  {
    year: "2021",
    title: "Started Web Development",
    description: "Began journey in web development, learning JavaScript, React, and building first client projects.",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Rocket,
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "AI & ML",
    icon: Sparkles,
    items: ["OpenAI API", "LangChain", "Vector Databases", "RAG Systems"],
  },
  {
    category: "DevOps",
    icon: Award,
    items: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
  },
];

const achievements = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
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
              About <GradientText>Me</GradientText>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Hi, I'm Sadiq Khan - a passionate full-stack developer transforming ideas into powerful,
              AI-driven web applications that solve real problems
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section>
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm Sadiq Khan, a full-stack developer with a passion for building modern web
                applications that leverage the latest in AI and automation technology.
                My journey in software development has been driven by curiosity and a
                desire to create solutions that make a real impact.
              </p>
              <p>
                Over the years, I've worked with startups and enterprises, helping them
                build scalable SaaS platforms, integrate AI capabilities, and create
                beautiful user experiences. I specialize in the modern JavaScript
                ecosystem, with deep expertise in React, Next.js, and Node.js.
              </p>
              <p>
                What sets me apart is my ability to bridge the gap between cutting-edge
                AI technology and practical business applications. I don't just write
                code—I architect solutions that drive growth and efficiency.
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Journey Timeline */}
      <Section className="bg-gradient-to-b from-purple-900/10 to-transparent" grid>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">My Journey</h2>
            <p className="text-xl text-muted-foreground">
              The path that led me here
            </p>
          </motion.div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard spotlight className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="text-3xl font-bold text-primary">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with daily
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <GlassCard key={skill.category} spotlight>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-muted/50 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Achievements */}
      <Section className="bg-gradient-to-b from-transparent to-purple-900/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
