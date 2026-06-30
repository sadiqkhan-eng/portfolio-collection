"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { ParallaxScroll } from "@/components/animations/parallax-scroll";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NodeGraph } from "@/components/three/node-graph";
import {
  Bot,
  Network,
  Workflow,
  Cpu,
  Database,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents built with LangGraph for complex task execution and decision making.",
    color: "from-blue-500 to-cyan-500",
    glow: "#3b82f6",
  },
  {
    icon: Network,
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation pipelines for accurate, context-aware AI responses.",
    color: "from-purple-500 to-pink-500",
    glow: "#8b5cf6",
  },
  {
    icon: Workflow,
    title: "MCP Integrations",
    description: "Model Context Protocol implementations for standardized AI tool interactions.",
    color: "from-green-500 to-emerald-500",
    glow: "#10b981",
  },
  {
    icon: Cpu,
    title: "LLM Applications",
    description: "Production-ready applications powered by large language models and fine-tuned APIs.",
    color: "from-orange-500 to-yellow-500",
    glow: "#f59e0b",
  },
  {
    icon: BrainCircuit,
    title: "Workflow Automation",
    description: "Intelligent automation pipelines combining AI agents with traditional workflows.",
    color: "from-red-500 to-pink-500",
    glow: "#ef4444",
  },
  {
    icon: Database,
    title: "Vector Databases",
    description: "High-performance vector search and semantic retrieval using Pinecone, Weaviate, and Qdrant.",
    color: "from-teal-500 to-cyan-500",
    glow: "#14b8a6",
  },
];

export function AIShowcase() {
  return (
    <SectionWrapper id="ai-showcase">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Engineering
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="character">AI & Agentic Systems</TextReveal>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Building intelligent systems that learn, reason, and act autonomously
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiFeatures.map((feature) => (
              <motion.div key={feature.title} whileHover={{ y: -5 }}>
                <Card glass glow className="p-5 h-full group">
                  <motion.div
                    className={`h-10 w-10 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <feature.icon className="h-full w-full text-white" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          <ParallaxScroll speed={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Card glass className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-purple-400" />
                  AI Node Architecture
                </h3>
                <NodeGraph />
              </Card>
            </motion.div>
          </ParallaxScroll>
        </div>
      </Container>
    </SectionWrapper>
  );
}
