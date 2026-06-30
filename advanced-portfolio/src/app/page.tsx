import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
