import React from "react";
import logoImg from "../assets/logo_blue_Obszar-roboczy-1-1.svg"; // 👈 image ko src/assets me rakho

const PermanentCooperation: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-10 sm:mt-16 md:mt-20 lg:mt-28">
      {/* 🔸 Left Side: Logo/Image */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <img src={logoImg} alt="Permanent Cooperation Logo" className="max-w-full h-auto" />
      </div>

      {/* 🔸 Right Side: Text Content */}
      <div className="bg-black/90 text-white w-full lg:w-1/2 px-5 md:px-10 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col justify-center items-center">
        {/* Subheading */}
        <h2
          className="inline-block rounded-md  
            px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black mt-8 "
        >
          Permanent cooperation
        </h2>

        {/* Paragraph */}
        <p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] 
            md:px-6 mt-12 mb-8"
        >
          We are glad to have the chance to collaborate for the past few years with FlexToday, one of the finest recruitment agencies. 
          Their meticulous and thorough approach to business growth is truly impressive.
          <br />
          No detail is overlooked at FlexToday. 
          We are grateful for the valuable insights we gain from them while providing{" "}
          <span className="text-[#00FF9C]">marketing services.</span>
        </p>
      </div>
    </section>
  );
};

export default PermanentCooperation;
