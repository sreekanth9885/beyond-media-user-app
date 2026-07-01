// src/App.tsx

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageLoader from "./components/extras/PageLoader";
import ScrollProgress from "./components/extras/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/extras/BackToTop";
import FloatingWhatsApp from "./components/extras/FloatingWhatsApp";
import FloatingCall from "./components/extras/FloatingCall";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PoliticalCampaignPage from "./pages/PoliticalCampaignPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import ITServicesPage from "./pages/ITServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Portfolio from "./components/sections/Portfolio";

// Pages


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <div
            className="min-h-screen font-inter"
          >
            <ScrollProgress />

            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/political-campaigns"
                element={<PoliticalCampaignPage />}
              />
              <Route
                path="/digital-marketing"
                element={<DigitalMarketingPage />}
              />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="*" element={<NotFound />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>

            <Footer />
            <BackToTop />
            <FloatingWhatsApp />
            <FloatingCall />
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;