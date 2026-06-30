"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

const iconMap: Record<string, string> = {
  Monitor: "🖥️",
  Server: "⚙️",
  Brain: "🧠",
  Wrench: "🛠️",
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skills.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            whileHover={{ y: -4, borderColor: "rgba(0, 102, 255, 0.3)" }}
            style={{
              padding: "1.75rem",
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(100, 116, 139, 0.1)",
              backdropFilter: "blur(10px)",
              transition: "border-color 0.3s, transform 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{iconMap[category.icon] || "📦"}</span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#e2e8f0",
                }}
              >
                {category.title}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.375rem",
                    }}
                  >
                    <span style={{ color: "#cbd5e1", fontSize: "0.875rem", fontWeight: 500 }}>
                      {skill.name}
                    </span>
                    <span style={{ color: "#64748b", fontSize: "0.8rem" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      borderRadius: "2px",
                      background: "rgba(100, 116, 139, 0.15)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                        ease: "easeOut",
                      }}
                      style={{
                        height: "100%",
                        borderRadius: "2px",
                        background: "linear-gradient(90deg, #0066ff, #00aaff)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
