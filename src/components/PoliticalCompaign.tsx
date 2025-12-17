import React from "react";
import PoliticalSlider from "./PoliticalSlider";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import Bookimg from "../assets/ulotka2-01-980x766.webp";


const PoliticalCompaign: React.FC = () => {
  return (
    <section>
      <div className="bg-black flex flex-col lg:flex-row py-20 mt-16">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h3 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-4xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Political campaign
            </h3>
          </div>

          {/* Mobile Video Mockup */}
          <div className="flex justify-start mt-28 lg:mt-32">
            <div
              className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[90%] 
                          relative h-[220px] md:h-[460px] lg:h-[220px] 2xl:h-[330px]"
            >
               <div className="xl:top-[-90px] top-[-50px] absolute">
          <img src={Bookimg} alt="grid-img-1" />
        </div>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content */}
        <div className="w-full lg:w-2/3 mt-24 lg:mt-0 md:px-4 px-5">
          {/* Swiper Slider */}

          <PoliticalSlider />

          {/* Description */}
          <div className="text-center flex justify-center mt-10">
            <p className="text-white text-[15px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[36px] text-center md:w-[80%]">
              Photo shoots, graphics and written content – Conducting a political campaign is uniquely challenging, where every word and image must be carefully crafted, knowing that even the smallest misstep can be used against you. In politics, precision is key—every message must be clear, strategic, and aligned with the party’s values. We must understand the issues and the audience, ensuring that every piece of content strengthens the campaign’s position while avoiding potential pitfalls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticalCompaign;
