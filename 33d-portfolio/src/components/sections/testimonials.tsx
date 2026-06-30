"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParallaxTilt } from "@/components/animations/parallax-tilt";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Testimonials
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="word">What People Say</TextReveal>
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] marquee-pause">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
              <motion.div
                key={`${testimonial.id}-${i}`}
                className="w-[350px] shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ParallaxTilt strength={5} perspective={800}>
                  <Card glass className="p-6 h-full group">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="h-8 w-8 text-blue-500/30 mb-4 group-hover:text-blue-400/60 transition-colors" />
                    </motion.div>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-4">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-white/40">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ParallaxTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
