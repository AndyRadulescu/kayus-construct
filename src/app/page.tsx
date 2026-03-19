import { Navbar } from "@app/components/layout/Navbar";
import { Footer } from "@app/components/layout/Footer";
import { HeroSlider } from "@app/components/sections/HeroSlider";
import { StatsSection } from "@app/components/sections/StatsSection";
import { AboutSection } from "@app/components/sections/AboutSection";
import { ServicesSection } from "@app/components/sections/ServicesSection";
import { PortfolioSection } from "@app/components/sections/PortfolioSection";
import { ProcessSection } from "@app/components/sections/ProcessSection";
import { TestimonialsSection } from "@app/components/sections/TestimonialsSection";
import { ContactSection } from "@app/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <Navbar />
      
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
