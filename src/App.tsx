// src/App.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLoader from './components/extras/PageLoader';
import ScrollProgress from './components/extras/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import PoliticalCampaign from './components/sections/PoliticalCampaign';
import DigitalMarketing from './components/sections/DigitalMarketing';
import Portfolio from './components/sections/Portfolio';
import ITServices from './components/sections/ITServices';
import Process from './components/sections/Process';
import Industries from './components/sections/Industries';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Statistics from './components/sections/Statistics';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackToTop from './components/extras/BackToTop';
import FloatingWhatsApp from './components/extras/FloatingWhatsApp';
import FloatingCall from './components/extras/FloatingCall';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>
      
      <div className="bg-primary text-white min-h-screen font-inter">
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <PoliticalCampaign />
          <DigitalMarketing />
          <ITServices />
          <Portfolio />
          <Process />
          {/* <Features /> */}
          <Industries />
          <WhyChooseUs />
          <Statistics />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>ds
        
        <Footer />
        <BackToTop />
        <FloatingWhatsApp />
        <FloatingCall />
      </div>
    </>
  );
};

export default App;