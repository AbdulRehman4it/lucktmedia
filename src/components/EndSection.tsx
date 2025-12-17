import React, { useState } from "react";
import ContactPopup from "./ContactPopup";

const EndSection: React.FC = () => {
   const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center">
      {/* Text */}
      <div className="w-full text-center font-[600] flex justify-center items-center px-4 sm:px-6 md:px-10 ">
        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] 
                     leading-[34px] sm:leading-[44px] md:leading-[54px] lg:leading-[61px] 
                     max-w-7xl text-[#fffff]">
          We hope you enjoyed reviewing our portfolio. If you need to see something more specific to your
          fields, please don’t hesitate to ask.
        </p>
      </div>

      {/* Thank you heading */}
      <h2 className="inline-block mt-8 sm:mt-20 bg-[#00FF9C] text-black font-[800] 
                     text-[20px] sm:text-[28px] md:text-[36px] lg:text-[43px] py-4 px-4 sm:px-6 
                     rounded-md text-center">
        Thank you for your time!
      </h2>

      {/* Contact Button */}
      <div className="text-center justify-center flex pt-6 sm:pt-8 lg:pt-14 px-4">
        <button
  onClick={() => setPopupOpen(true)}
  className="relative flex items-center justify-center rounded-lg border-4 border-black 
             px-4 sm:px-6 md:px-6 py-2 sm:py-5 font-worksans text-black 
             transition-all duration-500 group max-w-full
             hover:border-black hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)]"
>
  <span className="transition-all text-lg md:text-[22px] lg:text-3xl duration-500 font-semibold">
    Contact us
  </span>
</button>

      </div>
</div>
      {/* Contact Popup */}
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
};

export default EndSection;
