import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ProblemsSection } from "@/components/sections/problems-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </div>
  );
}