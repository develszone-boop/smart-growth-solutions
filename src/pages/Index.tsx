import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
