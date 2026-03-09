import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyShipDirect from "@/components/WhyShipDirect";
import FocusedOnSenegal from "@/components/FocusedOnSenegal";
import WhatYouCanShip from "@/components/WhatYouCanShip";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QuoteSection from "@/components/QuoteSection";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[--color-bg]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <HowItWorks />
      <WhyShipDirect />
      <FocusedOnSenegal />
      <WhatYouCanShip />
      <Testimonials />
      <FAQ />
      <QuoteSection />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
