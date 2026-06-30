"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: "center",
        marginBottom: "4rem",
      }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          display: "inline-block",
          padding: "0.375rem 1rem",
          borderRadius: "9999px",
          background: "rgba(0, 102, 255, 0.1)",
          border: "1px solid rgba(0, 102, 255, 0.2)",
          color: "#0066ff",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {title}
      </motion.span>
      {subtitle && (
        <p
          style={{
            color: "#64748b",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0.75rem auto 0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
