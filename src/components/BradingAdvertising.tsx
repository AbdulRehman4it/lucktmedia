import React from "react";

import KonfederacjaImg from "../assets/blackwhite-480x471.png"; // Import local image

const BradingAdvertising: React.FC = () => {
  return (
    <section id="samsara" className="lg:mt-24 mt-16">
      <div className="flex lg:flex-row flex-col bg-black">

        {/* Left side */}
        <div className="bg-[#00ff9c] lg:w-1/2 flex justify-center items-center px-8 py-20 xl:py-36">
          <img
            className="xl:w-[350px] w-[200px] "
            src={KonfederacjaImg} // Use imported image
            alt="Konfederacja"
          />
        </div>

        {/* Right side */}
        <div className="bg-[#171717] flex flex-col justify-center lg:w-1/2 2xl:py-36 py-20">
          <div className="flex justify-center">
            <div className="px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black">
                <h3>
               Branding & Advertising
              </h3>
            </div>
          </div>

          <div className="text-center lg:leading-[41px] leading-9 xl:px-20 lg:px-10 px-5 xl:pt-16 pt-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white">
              Samsara Butique&Restaurant took us on a real adventure to India! We had so much fun playing with colours while creating their visuals, prints and advertisements. If you ever look for the best indian food, you know where to find it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BradingAdvertising;
