import React from "react";
import Navbar from "../components/Navbar";
import PrivacySection from "../components/PrivacySection";  // capital letter import
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Privacy: React.FC = () => {
  return (
    <>
      <Navbar />
      <PrivacySection />   {/* Ab yeh work karega */}       
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Privacy;
