import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
// import Services from "../components/sections/Services";
import PoliticalCampaign from "../components/sections/PoliticalCampaign";
import DigitalMarketing from "../components/sections/DigitalMarketing";
import ITServices from "../components/sections/ITServices";
import Process from "../components/sections/Process";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
// import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      <PoliticalCampaign />
      <DigitalMarketing />
      <ITServices />
      <Process />
      <WhyChooseUs />
      {/* <Statistics /> */}
      <Testimonials />
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
};

export default Home;