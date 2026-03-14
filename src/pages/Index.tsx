import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import AudienceFitSection from "@/components/AudienceFitSection";
import AudienceSection from "@/components/AudienceSection";
import RoutineSection from "@/components/RoutineSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import SourcesSection from "@/components/SourcesSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <AudienceFitSection />
        <AudienceSection />
        <RoutineSection />
        <SolutionsSection />
        <BenefitsSection />
        <TrustSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FooterSection />
      <SourcesSection />
      <CookieBanner />
    </>
  );
};

export default Index;
