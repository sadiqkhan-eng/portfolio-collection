"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "10px",
    border: "1px solid rgba(100, 116, 139, 0.15)",
    background: "rgba(15, 23, 42, 0.6)",
    color: "#e2e8f0",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? Let's work together"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          padding: "2.5rem",
          borderRadius: "20px",
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid rgba(100, 116, 139, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: "center",
              padding: "3rem 1rem",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(0, 255, 136, 0.1)",
                border: "2px solid rgba(0, 255, 136, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "1.5rem",
              }}
            >
              ✓
            </div>
            <h3 style={{ color: "#e2e8f0", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Message Sent!
            </h3>
            <p style={{ color: "#94a3b8" }}>
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(0, 102, 255, 0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(100, 116, 139, 0.15)")}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(0, 102, 255, 0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(100, 116, 139, 0.15)")}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              style={{ ...inputStyle, marginBottom: "1rem" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0, 102, 255, 0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(100, 116, 139, 0.15)")}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              style={{ ...inputStyle, marginBottom: "1.5rem", resize: "vertical" as const }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0, 102, 255, 0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(100, 116, 139, 0.15)")}
            />

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                border: "none",
                background: status === "loading"
                  ? "rgba(0, 102, 255, 0.5)"
                  : "linear-gradient(135deg, #0066ff, #0052cc)",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                boxShadow: "0 4px 20px rgba(0, 102, 255, 0.3)",
                transition: "all 0.3s",
              }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        )}

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(100, 116, 139, 0.1)",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00aaff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00aaff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00aaff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
