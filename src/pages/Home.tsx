import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LuckyMediaSection from "../components/LuckyMediaSection";
import AboutCeo from "../components/AboutCeo"
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import StepsSection from "../components/StepsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
             <HeroSection />
             <LuckyMediaSection />
              <AboutCeo />
               <ServicesSection />
                 <PortfolioSection />
                  <StepsSection />
                  <ContactSection />
                   <Footer />
                   <ScrollToTopButton />
    </>
  );
};

export default Home;
