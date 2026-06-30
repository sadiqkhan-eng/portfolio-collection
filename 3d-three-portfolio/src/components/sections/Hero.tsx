"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(0, 170, 255, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            background: "rgba(0, 102, 255, 0.1)",
            border: "1px solid rgba(0, 102, 255, 0.2)",
            marginBottom: "2rem",
            fontSize: "0.85rem",
            color: "#00aaff",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00ff88",
              boxShadow: "0 0 8px #00ff88",
              animation: "pulse 2s infinite",
            }}
          />
          Available for new projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0066ff 0%, #00aaff 50%, #0066ff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            fontWeight: 500,
            color: "#94a3b8",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "#64748b",
            maxWidth: "650px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}
        >
          {personalInfo.tagline}. Building scalable web applications, intelligent AI
          systems, and modern digital experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #0066ff, #0052cc)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              boxShadow: "0 4px 20px rgba(0, 102, 255, 0.3)",
              transition: "box-shadow 0.3s",
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "12px",
              background: "rgba(100, 116, 139, 0.1)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              color: "#e2e8f0",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href={personalInfo.resumeUrl}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "12px",
              background: "rgba(0, 170, 255, 0.1)",
              border: "1px solid rgba(0, 170, 255, 0.2)",
              color: "#00aaff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          {[
            { href: personalInfo.github, label: "GitHub", icon: "GH" },
            { href: personalInfo.linkedin, label: "LinkedIn", icon: "LI" },
            { href: personalInfo.twitter, label: "Twitter", icon: "TW" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(100, 116, 139, 0.1)",
                border: "1px solid rgba(100, 116, 139, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 700,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 102, 255, 0.4)";
                e.currentTarget.style.color = "#0066ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.15)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ color: "#475569", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "10px",
            border: "2px solid rgba(100, 116, 139, 0.3)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "3px",
              height: "8px",
              borderRadius: "2px",
              background: "#0066ff",
            }}
          />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>
    </section>
  );
}
