import React from "react";
import brandImg from "../assets/Rectangle-340.webp"; // 👈 image ko src/assets me rakho

const BrandConsistency: React.FC = () => {
  return (
    <section>
      <div>
        {/* 🔸 Heading */}
        <div className="text-center w-full items-center justify-center flex mt-10 sm:mt-16 md:mt-20 lg:mt-28">
          <h2
            className="text-center bg-[#00FF9C] text-black font-[800] 
              text-[20px] sm:text-[28px] md:text-[38px] lg:text-[50px] 
              py-2 px-4 rounded-lg mb-4 
              w-auto sm:w-[400px] md:w-[550px] lg:w-[750px]"
          >
            Brand consistency is a key!
          </h2>
        </div>

        {/* 🔸 Description */}
        <p
          className="text-center 
            text-sm sm:text-[20px] md:text-2xl  
            px-4 sm:px-10 md:px-20 
            leading-[26px] sm:leading-[32px] md:leading-[38px] lg:leading-[45px] 
            mt-6 sm:mt-8 md:mt-10 text-[#171717]"
        >
          All design elements work harmoniously to present a <br className="md:block hidden" /> consistent and professional brand image.
        </p>
      </div>

      {/* 🔸 Image */}
      <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20">
        <img src={brandImg} alt="Brand consistency" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default BrandConsistency;
