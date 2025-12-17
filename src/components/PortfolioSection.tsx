import React from "react";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import animationData from "../assets/Animation-1716207706875.json"; // JSON path

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="mt-60">
      <h2 className="md:hidden block text-center">
        <span className="bg-[#00FF9C] text-black text-[51px] sm:text-[40px] md:text-[51px] lg:text-[51px] font-bold px-3 py-1 rounded-[20px] inline-block mb-6">
          Portfolio
        </span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[320px] h-[320px] md:w-[650px] md:h-[650px]">
            <Lottie loop play animationData={animationData} />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div>
            <h2 className="md:block hidden">
              <span className="bg-[#00FF9C] text-black text-[51px] font-bold px-3 py-1 rounded-[20px] inline-block mb-6">
                Portfolio
              </span>
            </h2>

            <p className="font-[700] mt-4 text-[20px] leading-[30px] sm:text-[34px] sm:leading-[44px] md:text-[47px] md:leading-[70px] mb-6 sm:px-[36px] px-[36px] md:px-0 lg:pr-[60px]">
              At Lucky Media, we have no boundaries. Our pool of talent and tools
              allows us to tackle the biggest challenges.
            </p>

            {/* ✅ Button navigates to /portfolio */}
            <button
              onClick={() => navigate("/portfolio")}
              className="mt-2 border-[5px] border-black bg-[#171717] text-white px-4 sm:px-5 py-3 sm:py-4 rounded-lg transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-[17px] sm:text-[18px] md:text-[20px] mb-24"
            >
              Discover our portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
