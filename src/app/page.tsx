import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

import ProblemSection from "@/components/ProblemSection";
import VisionSection from "@/components/VisionSection";
import SolutionSection from "@/components/SolutionSection";
import AuthoritySection from "@/components/AuthoritySection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        <ProblemSection />
        <VisionSection />
        <SolutionSection />
        <AuthoritySection />
        <SocialProofSection />
        <OfferSection />
        <FormSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
