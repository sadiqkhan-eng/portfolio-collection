"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    rating: 5,
    content: "Exceptional work! The AI integration transformed our workflow and saved us 40% in operational costs. The attention to detail and technical expertise is outstanding.",
    image: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    rating: 5,
    content: "Delivered a beautiful, performant SaaS platform ahead of schedule. The code quality and architecture decisions were top-notch. Highly recommend!",
    image: "👨‍💻",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GrowthHub",
    rating: 5,
    content: "Best developer we've worked with. Built our entire platform from scratch with modern tech stack. The result exceeded all expectations.",
    image: "👩‍🚀",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-gradient-to-b from-purple-900/10 to-transparent">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            What <GradientText>Clients Say</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.id} spotlight>
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
