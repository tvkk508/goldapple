import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import RoutineSection from "@/components/RoutineSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <AudienceSection />
        <RoutineSection />
        <SolutionsSection />
        <BenefitsSection />
        <TrustSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
