"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "2rem",
            borderRadius: "16px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(100, 116, 139, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#e2e8f0",
            }}
          >
            My Journey
          </h3>
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
            }}
          >
            {personalInfo.about}
          </p>
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
            }}
          >
            Currently learning and building projects in Modern Web &amp; App Development,
            Agentic AI Engineering, and Open Source Development.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
            {["Next.js", "TypeScript", "Python", "FastAPI", "AI Agents", "React"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "6px",
                    background: "rgba(0, 102, 255, 0.1)",
                    border: "1px solid rgba(0, 102, 255, 0.15)",
                    color: "#00aaff",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(0, 102, 255, 0.3)" }}
              style={{
                padding: "1.5rem",
                borderRadius: "16px",
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(100, 116, 139, 0.1)",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #0066ff, #00aaff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginTop: "0.5rem",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
