import React from "react";
import Navbar from "../components/Navbar";
import CookiesSection from "../components/CookiesSection";  // capital letter import
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Cookies: React.FC = () => {
  return (
    <>
      <Navbar />
      <CookiesSection />   {/* Ab yeh work karega */}       
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Cookies;
