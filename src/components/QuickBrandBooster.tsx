import React from "react";
import fitdietaImg from "../assets/fitdieta.svg"; // ✅ import image


const QuickBrandBooster: React.FC = () => {
  return (
    <section id="fitdieta" className="w-full flex flex-col lg:flex-row mt-0">
      {/* ========== Left Side (Image Area) ========== */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 py-14 lg:px-20">
        <img
          src={fitdietaImg} // ✅ imported image use here
          alt="FitDieta Branding"
          className="max-w-[250px] sm:max-w-[300px] lg:max-w-full"
        />
      </div>

      {/* ========== Right Side (Content Area) ========== */}
      <div className="bg-black text-white w-full lg:w-1/2 
                      px-4 sm:px-8 md:px-10 
                      py-10 sm:py-16 md:py-24 
                      flex flex-col justify-center items-center pt-12 pb-20">
        
        {/* Heading */}
        <h2 className="px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black">
          Quick brand booster
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white xl:pt-16 pt-8">
          FitDieta has been a trusted provider of diet catering services for many years. 
          Our client needed a quick boost in engagement and online presence before selling 
          their “ready-made” business to a new owner. While their Google Ads and Meta Ads 
          campaigns were in place, we focused on crafting visually appealing, “tasty” layouts 
          that captured attention and enhanced the overall online experience, along with a 
          user-friendly website, where customers could place orders.
        </p>
      </div>
    </section>
  );
};

export default QuickBrandBooster;
