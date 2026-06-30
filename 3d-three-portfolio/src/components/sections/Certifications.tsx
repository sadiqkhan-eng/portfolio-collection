"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Certifications"
        subtitle="Professional certifications and achievements"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: "rgba(0, 102, 255, 0.3)" }}
            style={{
              padding: "1.75rem",
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(100, 116, 139, 0.1)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #0066ff, #00aaff)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  padding: "0.2rem 0.6rem",
                  borderRadius: "4px",
                  background: "rgba(0, 102, 255, 0.1)",
                  color: "#0066ff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {cert.category}
              </span>
              <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{cert.date}</span>
            </div>

            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: "0.5rem",
              }}
            >
              {cert.title}
            </h3>

            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Issued by {cert.issuer}
            </p>

            <motion.a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#00aaff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Verify →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
