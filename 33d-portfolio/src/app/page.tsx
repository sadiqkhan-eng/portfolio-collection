import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { AIShowcase } from "@/components/sections/ai-showcase";
import { GitHubStats } from "@/components/sections/github-stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AIShowcase />
      <GitHubStats />
      <Testimonials />
      <Contact />
    </>
  );
}
