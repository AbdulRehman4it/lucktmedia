import React from "react";

import KonfederacjaImg from "../assets/konfederacja.svg"; // Import local image

const PublicRelationSection: React.FC = () => {
  return (
    <section id="konfed" className="lg:mt-24 mt-16">
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
        <div className="bg-[#171717] lg:w-1/2 2xl:py-36 py-20">
          <div className="flex justify-center">
            <div className="px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px]">
                <h2>
              Public relations
              </h2>
            </div>
          </div>

          <div className="text-center lg:leading-[41px] leading-9 xl:px-20 lg:px-10 px-5 xl:pt-16 pt-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white">
              We were thrilled to be part of a parliamentary campaign for one of the leading parties in the Polish government. Our online advertising efforts helped promote a party member who secured a seat in Parliament with impressive vote numbers. Our collaboration continues to this day, as we create and distribute content across all social media platforms, consistently achieving outstanding audience engagement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PublicRelationSection;
