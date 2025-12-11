import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GeographySection from "@/components/GeographySection";
import SymbolsSection from "@/components/SymbolsSection";
import MapsSection from "@/components/MapsSection";
import DemographicsSection from "@/components/DemographicsSection";
import BibliographySection from "@/components/BibliographySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GeographySection />
        <SymbolsSection />
        <MapsSection />
        <DemographicsSection />
        <BibliographySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
