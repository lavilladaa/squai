import { useState } from "react";
import type { Lang } from "@/lib/content";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhySquaiSection from "@/components/WhySquaiSection";
import SquadSection from "@/components/SquadSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const SectionDivider = () => <div className="section-divider w-full" />;

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <SectionDivider />
      <ProblemSection lang={lang} />
      <SectionDivider />
      <ServicesSection lang={lang} />
      <SectionDivider />
      <HowItWorksSection lang={lang} />
      <SectionDivider />
      <IndustriesSection lang={lang} />
      <SectionDivider />
      <WhySquaiSection lang={lang} />
      <SectionDivider />
      <SquadSection lang={lang} />
      <SectionDivider />
      <CtaSection lang={lang} />
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
};

export default Index;
