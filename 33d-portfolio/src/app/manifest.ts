import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sadiq Khan - Full Stack Developer & AI Engineer",
    short_name: "Sadiq Khan",
    description:
      "Premium portfolio of Sadiq Khan — Full Stack Developer, AI Engineer, and Agentic AI Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a1a",
    theme_color: "#0a0a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
