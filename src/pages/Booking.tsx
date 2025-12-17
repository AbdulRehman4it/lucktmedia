import React from "react";
import Navbar from "../components/Navbar";
import Bookingform from "../components/Bookingform";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
const Booking: React.FC = () => {
  return (
    <>
      <Navbar />
          <Bookingform />
                   <Footer />
                   <ScrollToTopButton />
    </>
  );
};

export default Booking;
