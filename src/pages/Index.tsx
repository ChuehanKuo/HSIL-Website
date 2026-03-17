import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlowchartSection from "@/components/FlowchartSection";
import HighlightsSection from "@/components/HighlightsSection";
import ThemeSection from "@/components/ThemeSection";
import ScheduleSection from "@/components/ScheduleSection";
import JudgingSection from "@/components/JudgingSection";
import EligibilitySection from "@/components/EligibilitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <FlowchartSection />
      <HighlightsSection />
      <ThemeSection />
      <ScheduleSection />
      <JudgingSection />
      <EligibilitySection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
