"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Testimonials"
        subtitle="What others say about my work"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          padding: "2.5rem",
          borderRadius: "20px",
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid rgba(100, 116, 139, 0.1)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Quote mark */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1.5rem",
            fontSize: "4rem",
            lineHeight: 1,
            color: "rgba(0, 102, 255, 0.15)",
            fontWeight: 800,
            fontFamily: "Georgia, serif",
          }}
        >
          &ldquo;
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.25rem",
              marginBottom: "1.5rem",
            }}
          >
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <span key={i} style={{ color: "#fbbf24", fontSize: "1.1rem" }}>
                ★
              </span>
            ))}
          </div>

          {/* Text */}
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            {testimonials[active].text}
          </motion.p>

          {/* Author */}
          <div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0066ff, #00aaff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 0.75rem",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              {testimonials[active].author[0]}
            </div>
            <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}>
              {testimonials[active].author}
            </p>
            <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
              {testimonials[active].role}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: active === i ? "#0066ff" : "rgba(100, 116, 139, 0.3)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
