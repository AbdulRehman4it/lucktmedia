import React from "react";
import iconLucky from "../assets/iconlucky.svg";
import icon3 from "../assets/icon-3.svg";

const LuckyMediaSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-10 xl:px-28 pt-[120px] pb-10 sm:py-20 md:py-24 mt-20 sm:mt-[150px] md:mt-[300px]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-20 items-center">
        
        {/* Left side */}
        <div className="text-center lg:text-left">
          <h2>
          <span className="bg-[#00FF9C] text-black text-[35px] sm:text-[14px] md:text-[50px] lg:text-[51px] font-[600] px-3 py-1 rounded-md inline-block">
            Lucky Media
          </span>
          </h2>
          <p className="font-[700] mt-4 text-[20px] leading-[34px] sm:text-[22px] sm:leading-[34px] md:text-[28px] md:leading-[50px] lg:text-[32px] lg:leading-[72px]">
            You may not believe in luck,<br />
            but this isn’t just a chance meeting.<br className="2xl:block hidden" /> Welcome to a world where art
            meets digital precision.
          </p>
            <a href="https://calendly.com/hi-luckymedia/firstmeeting">
          <button className="mt-10 border-[5px] border-black bg-white text-black px-4 sm:px-5 py-3 sm:py-4 rounded-xl transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-sm sm:text-base md:text-xl">
            Schedule an online meeting
          </button>
          </a>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-12">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] 2xl:rounded-3xl rounded-2xl p-4 sm:p-6 2xl:p-7 text-start">
            <div className="justify-start flex mt-5">
              <img
                src={iconLucky}
                alt="Lucky Icon"
                className="w-[55px] sm:w-[35px] lg:w-[47px]"
              />
            </div>
            <h3 className="font-bold text-[20px] sm:text-[22px] md:text-2xl 2xl:text-3xl mt-4 mb-8 xl:leading-[44px]">
              Why is it worth it?
            </h3>
            <p className="luckymediatext text-[#D9D9D9] font-light text-base lg:text-sm lg:leading-7 xl:text-base 2xl:text-sm mt-2 leading-[32px] xl:leading-[32px] md:leading-9 2xl:leading-9">
              In our monthly subscription, we provide your company with the
              services of a marketing specialist, web developer, graphic
              designer, and copywriter at affordable price. Remember, marketing
              is one of the key pillars of every successful business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] 2xl:rounded-3xl rounded-2xl p-4 sm:p-6 2xl:p-7 text-start">
            <div className="justify-start flex mt-5">
              <img
                src={icon3}
                alt="Work Ethic Icon"
                className="w-[55px] sm:w-[35px] lg:w-[47px]"
              />
            </div>
            <h3 className="font-bold mt-4 text-[20px] sm:text-[22px] md:text-2xl 2xl:text-3xl mb-8 xl:leading-[44px]">
              Our work ethic
            </h3>
            <p className="luckymediatext text-[#D9D9D9] font-light text-base lg:text-sm lg:leading-7 xl:text-base 2xl:text-sm mt-2 leading-[32px] xl:leading-[32px] md:leading-9 2xl:leading-9">
              You’re the expert in your product, and we’re here for marketing.
              You don’t need to keep up with the latest trends or speak
              marketing jargon. We stay ahead of the game, so you can rely on
              us. We’ll explain everything, so you know what you’re paying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LuckyMediaSection;
