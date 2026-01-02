import React from "react";

import KonfederacjaImg from "../assets/black1.svg"; // Import local image

const WorkToday: React.FC = () => {
  return (
    <section id="worktoday" className="lg:mt-24 mt-16">
      <div className="flex lg:flex-row flex-col bg-black">

        {/* Left side */}
        <div className="bg-[#00ff9c] lg:w-1/2 flex justify-center items-center px-8 py-12 md:px-[px] md:py-[55px]">
          <img
            className="md:w-[390px] xl:w-[450px] 2xl:w-[600px]"
            src={KonfederacjaImg} // Use imported image
            alt="Konfederacja"
          />
        </div>

        {/* Right side */}
        <div className="bg-black lg:w-1/2 2xl:py-36 py-20">
          <div className="flex justify-center">
            <div className="px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black">
                <h2>
              Permament cooperation
              </h2>
            </div>
          </div>

          <div className="text-center lg:leading-[41px] leading-9 xl:px-20 lg:px-10 px-5 xl:pt-16 pt-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white">
              We led the complete process of refining the company’s image and workflow. Our expertise covered graphic design, website development, marketing automation, SEO activities and lead generation. We enhanced social media engagement through buzz marketing, meta ads and google ads. We also focused on optimizing their recruitment processes by utilizing a robust database of candidates and implementing effective mailing&SMS campaigns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkToday;
