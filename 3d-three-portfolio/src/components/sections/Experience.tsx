"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  const education = experiences.filter((e) => e.type === "education");
  const work = experiences.filter((e) => e.type === "experience");

  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Experience & Education"
        subtitle="My professional journey"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Work Experience */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#e2e8f0",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#0066ff",
              }}
            />
            Work Experience
          </motion.h3>

          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "15px",
                top: "8px",
                bottom: "8px",
                width: "2px",
                background: "rgba(100, 116, 139, 0.15)",
              }}
            />

            {work.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  position: "relative",
                  paddingLeft: "2.5rem",
                  marginBottom: i < work.length - 1 ? "2rem" : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#0066ff",
                    border: "3px solid #020617",
                  }}
                />

                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "12px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(100, 116, 139, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "0.5rem",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}>
                      {exp.title}
                    </h4>
                    <span
                      style={{
                        color: "#0066ff",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: "#00aaff", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    {exp.company}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#e2e8f0",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00aaff",
              }}
            />
            Education
          </motion.h3>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "15px",
                top: "8px",
                bottom: "8px",
                width: "2px",
                background: "rgba(100, 116, 139, 0.15)",
              }}
            />

            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  position: "relative",
                  paddingLeft: "2.5rem",
                  marginBottom: i < education.length - 1 ? "2rem" : 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#00aaff",
                    border: "3px solid #020617",
                  }}
                />

                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "12px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(100, 116, 139, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "0.5rem",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}>
                      {edu.title}
                    </h4>
                    <span
                      style={{
                        color: "#00aaff",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p style={{ color: "#0066ff", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    {edu.company}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
