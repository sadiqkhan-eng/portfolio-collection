"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="A showcase of my recent work"
      />

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "8px",
              border:
                activeCategory === cat
                  ? "1px solid rgba(0, 102, 255, 0.4)"
                  : "1px solid rgba(100, 116, 139, 0.15)",
              background:
                activeCategory === cat
                  ? "rgba(0, 102, 255, 0.15)"
                  : "rgba(15, 23, 42, 0.4)",
              color: activeCategory === cat ? "#00aaff" : "#94a3b8",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, borderColor: "rgba(0, 102, 255, 0.3)" }}
            layout
            className="project-card"
            style={{
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(100, 116, 139, 0.1)",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "border-color 0.3s, transform 0.3s",
            }}
          >
            {/* Image */}
            {project.image && (
              <div
                className="project-image-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="project-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.4) 50%, transparent 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    padding: "1.25rem",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.625rem",
                    }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: "0.5rem 1.1rem",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          padding: "0.5rem 1.1rem",
                          borderRadius: "8px",
                          background: "rgba(0, 102, 255, 0.8)",
                          backdropFilter: "blur(8px)",
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.375rem",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
              {/* Category badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "6px",
                  background: "rgba(0, 102, 255, 0.1)",
                  color: "#0066ff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "0.875rem",
                }}
              >
                {project.category}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#e2e8f0",
                  marginBottom: "0.625rem",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  marginBottom: "1.25rem",
                }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "0.2rem 0.6rem",
                      borderRadius: "4px",
                      background: "rgba(100, 116, 139, 0.1)",
                      color: "#64748b",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(100, 116, 139, 0.1)",
                }}
              >
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(100, 116, 139, 0.1)",
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 102, 255, 0.15)";
                    e.currentTarget.style.color = "#00aaff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(100, 116, 139, 0.1)";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  GitHub
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "rgba(0, 102, 255, 0.15)",
                      color: "#00aaff",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      transition: "all 0.2s",
                    }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-card:hover .project-image-wrapper img {
          transform: scale(1.08);
        }
        @media (max-width: 768px) {
          .project-overlay {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
