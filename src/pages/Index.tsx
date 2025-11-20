import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Features />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
