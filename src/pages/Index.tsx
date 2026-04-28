import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import PhotoMarquee from "@/components/PhotoMarquee";
import PhotoMarquee2 from "@/components/PhotoMarquee2";
import WinnersSection from "@/components/WinnersSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import ScheduleSection from "@/components/ScheduleSection";
import JudgingSection from "@/components/JudgingSection";
import MediaSection from "@/components/MediaSection";
import PipelineSection from "@/components/PipelineSection";
import OrganizersSection from "@/components/OrganizersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <PhotoMarquee />
      <AboutSection />
      <TestimonialSection />
      <WinnersSection />
      <GallerySection />
      <ScheduleSection />
      <PhotoMarquee2 />
      <JudgingSection />
      <OrganizersSection />
      <MediaSection />
      <PipelineSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
