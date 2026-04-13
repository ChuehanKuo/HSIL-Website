import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import WinnersSection from "@/components/WinnersSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import OrganizersSection from "@/components/OrganizersSection";
import JudgingSection from "@/components/JudgingSection";
import PipelineSection from "@/components/PipelineSection";
import ThemeSection from "@/components/ThemeSection";
import ScheduleSection from "@/components/ScheduleSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <SmoothScroll />
    <ScrollProgress />
    <Navbar />
    <main>
      <HeroSection />
      <WinnersSection />
      <AboutSection />
      <GallerySection />
      <ThemeSection />
      <ScheduleSection />
      <JudgingSection />
      <PipelineSection />
      <OrganizersSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
