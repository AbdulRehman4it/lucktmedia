import React from "react";
import SelfLabImage from "../assets/selflab.svg"

const SelfLabSection: React.FC = () => {
  return (
    <section id="selflob" className="mt-[90px] mb-24">
      <div className="lg:flex">

        {/* Left side */}
        <div className="bg-[#00ff9c] lg:w-1/2 flex flex-col justify-center items-center py-20 2xl:py-36">
          <img
            className="w-1/2"
            src={SelfLabImage} // Use imported image
            alt="Self Lab"
          />
        </div>

        {/* Right side */}
        <div className="bg-[#171717] lg:w-1/2 lg:py-[88px] py-20 2xl:py-36">
          <div className="flex justify-center">
            <div className="px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black">
              <h2>
              Social media look
              </h2>
            </div>
          </div>

          <div className="text-center px-5 md:px-12 xl:px-20 ">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white pt-12">
              A company specializing in medical and veterinary equipment, we’ve collaborated
              on multiple brands with them. For their latest venture—an online shop selling tests for
              animals—we were thrilled to support their online sales efforts with our custom videos and
              graphics. We really embraced the animal vibe, making this project both fun and rewarding!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SelfLabSection;
