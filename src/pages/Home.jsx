import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import AboutPreview from "../components/home/AboutPreview";
import ServicesTabsSection from "../components/home/ServicesTabsSection";
import QuoteCTA from "../components/home/QuoteCTA";
import TestimonialSection from "../components/home/TestimonialSection";
import DomesticSection from "../components/home/DomesticSection";
import RoadBanner from "../components/home/RoadBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <ServicesTabsSection />
      <QuoteCTA />
      <TestimonialSection />
      <DomesticSection />
      <RoadBanner />
    </div>
  );
}