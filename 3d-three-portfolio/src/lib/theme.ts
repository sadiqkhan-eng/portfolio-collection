import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-geist-sans)" },
        body: { value: "var(--font-geist-sans)" },
        mono: { value: "var(--font-geist-mono)" },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "#020617",
      color: "#e2e8f0",
      fontFamily: "body",
    },
  },
});

export const system = createSystem(defaultConfig, config);
