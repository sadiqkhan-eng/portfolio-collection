"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

const companies = [
  { name: "Next.js", logo: "▲" },
  { name: "Vercel", logo: "▲" },
  { name: "OpenAI", logo: "◆" },
  { name: "Stripe", logo: "S" },
  { name: "AWS", logo: "☁" },
  { name: "MongoDB", logo: "M" },
];

export function TrustSection() {
  return (
    <Section className="py-16 border-t border-border/50">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Technologies & Tools
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {company.logo}
                </div>
                <span className="text-sm text-muted-foreground">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
