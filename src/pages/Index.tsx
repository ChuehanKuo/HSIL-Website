import UrgencyBanner from "@/components/UrgencyBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlowchartSection from "@/components/FlowchartSection";
import HighlightsSection from "@/components/HighlightsSection";
import ThemeSection from "@/components/ThemeSection";
import ScheduleSection from "@/components/ScheduleSection";
import JudgingSection from "@/components/JudgingSection";
import PipelineSection from "@/components/PipelineSection";
import PartnersSection from "@/components/PartnersSection";
import EligibilitySection from "@/components/EligibilitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <UrgencyBanner />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <FlowchartSection />
      <HighlightsSection />
      <ThemeSection />
      <ScheduleSection />
      <JudgingSection />
      <PipelineSection />
      <PartnersSection />
      <EligibilitySection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
