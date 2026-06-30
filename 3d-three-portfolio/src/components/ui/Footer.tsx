"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        padding: "4rem 2rem 2rem",
        borderTop: "1px solid rgba(100, 116, 139, 0.1)",
        background: "rgba(2, 6, 23, 0.8)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #0066ff, #00aaff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              SK
            </div>
            <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Building modern web applications and intelligent AI systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00aaff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { href: personalInfo.github, label: "GitHub" },
                { href: personalInfo.linkedin, label: "LinkedIn" },
                { href: personalInfo.twitter, label: "Twitter" },
                { href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00aaff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(100, 116, 139, 0.1)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              background: "rgba(15, 23, 42, 0.6)",
              color: "#94a3b8",
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              transition: "all 0.2s",
            }}
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
