import HeroSection from "@/components/home/HeroSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ObjectionHandlingSection from "@/components/home/ObjectionHandlingSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompaniesSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <HowItWorksSection />
      <ObjectionHandlingSection />
      <FinalCtaSection />
    </main>
  );
}

