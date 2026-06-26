import { HeroSection } from "@/components/home/HeroSection";
import { BrandLogos } from "@/components/home/BrandLogos";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <ServicesPreview />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <CtaSection />
    </>
  );
}
