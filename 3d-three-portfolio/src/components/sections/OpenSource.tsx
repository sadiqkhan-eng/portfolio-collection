"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const githubStats = [
  { label: "Repositories", value: "20+" },
  { label: "Stars Earned", value: "50+" },
  { label: "Contributions", value: "200+" },
  { label: "Followers", value: "100+" },
];

const topRepos = [
  { name: "agentic-assistant", description: "AI assistant with OpenAI Agents SDK", stars: 15, language: "Python" },
  { name: "restaurant-platform", description: "Full-stack restaurant management", stars: 12, language: "TypeScript" },
  { name: "logistics-system", description: "End-to-end logistics platform", stars: 10, language: "TypeScript" },
  { name: "ai-car-security", description: "AI-powered vehicle security", stars: 8, language: "Python" },
  { name: "portfolio-template", description: "Modern developer portfolio", stars: 20, language: "TypeScript" },
];

export default function OpenSource() {
  const contributionGrid = useMemo(() => {
    let seed = 777;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    return Array.from({ length: 364 }).map(() => {
      const intensity = rand();
      if (intensity > 0.7) return "rgba(0, 102, 255, 0.6)";
      if (intensity > 0.5) return "rgba(0, 102, 255, 0.35)";
      if (intensity > 0.3) return "rgba(0, 102, 255, 0.15)";
      return "rgba(100, 116, 139, 0.08)";
    });
  }, []);

  return (
    <section
      id="opensource"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Open Source"
        subtitle="Contributions and community involvement"
      />

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {githubStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3, borderColor: "rgba(0, 102, 255, 0.3)" }}
            style={{
              padding: "1.5rem",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(100, 116, 139, 0.1)",
              textAlign: "center",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #0066ff, #00aaff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.value}
            </div>
            <div style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.375rem" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contribution graph placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          padding: "2rem",
          borderRadius: "16px",
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid rgba(100, 116, 139, 0.1)",
          marginBottom: "3rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#e2e8f0",
            marginBottom: "1.5rem",
          }}
        >
          Contribution Activity
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(52, 1fr)",
            gap: "2px",
          }}
          className="contribution-grid"
        >
          {contributionGrid.map((bg, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "2px",
                  background: bg,
                }}
              />
            ))}
        </div>
      </motion.div>

      {/* Top repos */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "1.25rem",
        }}
      >
        Top Repositories
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {topRepos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={`https://github.com/sadiq-khan/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3, borderColor: "rgba(0, 102, 255, 0.3)" }}
            style={{
              padding: "1.25rem",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(100, 116, 139, 0.1)",
              textDecoration: "none",
              display: "block",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "0.5rem",
              }}
            >
              <h4 style={{ color: "#00aaff", fontSize: "0.95rem", fontWeight: 600 }}>
                {repo.name}
              </h4>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  color: "#fbbf24",
                  fontSize: "0.8rem",
                }}
              >
                ★ {repo.stars}
              </span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
              {repo.description}
            </p>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                background: "rgba(100, 116, 139, 0.1)",
                color: "#64748b",
                fontSize: "0.75rem",
              }}
            >
              {repo.language}
            </span>
          </motion.a>
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contribution-grid {
            grid-template-columns: repeat(26, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
