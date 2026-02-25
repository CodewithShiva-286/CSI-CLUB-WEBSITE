import { useState, useCallback } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import MissionVision from "@/components/sections/MissionVision";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import EventsPreview from "@/components/sections/EventsPreview";
import ImpactSection from "@/components/sections/ImpactSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <MissionVision />
        <ActivitiesSection />
        <EventsPreview />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
