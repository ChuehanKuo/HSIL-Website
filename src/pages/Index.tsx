import Navbar from "@/components/Navbar";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import WinnersSection from "@/components/WinnersSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import ScheduleSection from "@/components/ScheduleSection";
import JudgingSection from "@/components/JudgingSection";
import PipelineSection from "@/components/PipelineSection";
import OrganizersSection from "@/components/OrganizersSection";
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
      <TestimonialSection />
      <GallerySection />
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
