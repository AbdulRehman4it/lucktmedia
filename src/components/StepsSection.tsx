import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/5.png";

const StepsSection: React.FC = () => {
  return (
    <section className="py-10 md:px-5 md:py-14 lg:py-16">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-[55px] font-bold">Steps</h2>
        <p className="mt-4 text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-[34px] text-center px-4 sm:px-10 md:px-20 lg:px-48">
          We believe in keeping things straightforward! A solid plan is the
          foundation of everything we do. <br className="xl:block hidden" /> While some say they prefer practice
          over theory, we know one cannot exist without the other. <br className="xl:block hidden"/> Together,
          they create the perfect synergy for success.
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 justify-center items-center lg:mt-10 mt-[136px] 2xl:px-48 xl:px-40 md:px-10 px-5">
        {/* Step 1 */}
        <div
          className="bg-black text-[#D9D9D9] p-6 2xl:p-10 rounded-[20px] w-full lg:w-1/2 relative overflow-hidden bg-cover bg-right md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <p className="leading-[36px] sm:leading-[42px] md:leading-[46px] lg:leading-[48px] text-xl sm:text-[22px] md:text-2xl lg:text-[27px] 2xl:pb-56 xl:pb-40 pb-36">
            Together, we prepare a solid <br className="xl:block hidden" />
            brief so we don’t overlook <br className="xl:block hidden"/>
            important matters.
          </p>
          {/* <span className="block text-right text-[140px] sm:text-[160px] md:text-[180px] lg:text-[150px] 2xl:text-[180px] font-normal leading-none text-white mt-6 sm:mt-0">
            01
          </span> */}
        </div>

        {/* Step 2 */}
        <div
          className="bg-[#00FF9C] text-black p-6 2xl:p-10 rounded-[20px] w-full lg:w-1/2 relative overflow-hidden bg-cover bg-right md:bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${img2})` }}
        >
          <p className="leading-[36px] sm:leading-[42px] md:leading-[46px] lg:leading-[48px] text-xl sm:text-[22px] md:text-2xl lg:text-[27px] 2xl:pb-56 xl:pb-40 pb-36">
            We outline a detailed action <br className="xl:block hidden"/>
            plan for you, so you’re always up <br className="2xl:block hidden"/>
            to date.
          </p>
          {/* <span className="block text-right text-[140px] sm:text-[160px] md:text-[180px] lg:text-[150px] 2xl:text-[180px] font-[400] leading-none text-white mt-6 sm:mt-0">
            02
          </span> */}
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 justify-center items-center mt-10 2xl:px-48 xl:px-40 md:px-10 px-5">
        {/* Step 3 */}
        <div
          className="bg-[#00FF9C] text-black p-6 2xl:p-10 rounded-[20px] w-full lg:w-1/2 overflow-hidden bg-cover bg-left md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <p className="text-right leading-[36px] sm:leading-[42px] md:leading-[46px] lg:leading-[48px] text-xl sm:text-[22px] md:text-2xl lg:text-[27px] 2xl:pb-56 xl:pb-40 pb-36">
            We’ll present initial designs and <br className="2xl:block hidden" />
            ideas for your <br className="xl:block hidden" /> review.
          </p>
          {/* <span className="block text-left text-[140px] sm:text-[160px] md:text-[180px] lg:text-[150px] 2xl:text-[180px] font-[400] leading-none text-white mt-6">
            03
          </span> */}
        </div>

        {/* Step 4 */}
        <div
          className="bg-black text-gray-300 p-6 2xl:p-10 rounded-[20px] w-full lg:w-1/2 relative overflow-hidden bg-cover bg-left md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <p className="text-right leading-[36px] sm:leading-[42px] md:leading-[46px] lg:leading-[48px] text-xl sm:text-[22px] md:text-2xl lg:text-[27px] 2xl:pb-56 xl:pb-40 pb-36">
            We bring ideas to life and never <br className="2xl:block hidden" /> let
            the competition rest!<br className="xl:block hidden" /> 🙂
          </p>
          {/* <span className="block text-left lg:right-0 text-[140px] sm:text-[160px] md:text-[180px] lg:text-[150px] 2xl:text-[180px] font-[400] leading-none text-white mt-6">
            04
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
