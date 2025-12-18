import React from "react";
import ProfileImg from "../assets/profile.webp"; 
import AbdulImg from "../assets/abdulrahman.webp";  
import KashanImg from "../assets/kishan.webp";
import LalaImg from "../assets/lala.webp";
import DamianImg from "../assets/damian.webp";

import "./text.css";
const AboutCeo: React.FC = () => {
  return (
    <section>
      <div className="aboutceo flex lg:flex-row flex-col-reverse 2xl:gap-32 xl:gap-28 gap-10 px-4 sm:px-8 md:px-16 lg:px-10 xl:px-28 lg:pt-28 pt-20">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center items-center">
            <img src={ProfileImg} alt="Profile" className="w-full" />
          </div>
          <p className="text-[#171717] lg:text-start text-center text-base md:text-lg 2xl:text-2xl
            leading-8 md:leading-9 xl:leading-10 2xl:leading-[45px] pt-6">
            Strategy making, execution, online marketing, graphic design, content creator
          </p>

          <p
            className="text-[#171717] lg:text-start text-center text-base md:text-lg 2xl:text-[26px]
            leading-8 md:leading-9 xl:leading-10 2xl:leading-[47px] block lg:hidden"
          >
            {/* <span className="xl:text-3xl text-2xl font-bold">
              I’m Patrycja Mackiel, and I will personally take care of your marketing.
            </span>{" "} */}
            <br />
            My passion is shaping perception, rebuilding and reimagining brands from the ground up, starting with a color, a meaning, and a story that lasts. That’s why I created Lucky Media - a space where strategy, design, and marketing come together to build brands that truly stand out in a world flooded with AI-generated content. I craft every brief, campaign, and strategy myself, supported by a team of exceptional specialists. At Lucky Media, you always work directly with me, because unforgettable brands are built with focus, vision, and true dedication. We’re not just a marketing agency - we’re your marketing team to take care of both, technical and visual matters.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center lg:justify-start">
            <h2
              className="text-xl md:text-3xl 2xl:text-[34px]
              font-bold text-black bg-[#00FF99] 
              px-3 md:px-5 py-3 md:py-5
              rounded-lg"
            >
              Hello there!
            </h2>
          </div>
          <div>

            <p className="xl:text-3xl text-2xl font-bold lg:text-start text-center pt-6 xl:leading-10">
              I’m Patrycja Mackiel, and I will personally take care of your marketing.
            </p>
          <p
            className="aboutceotext text-[#171717] lg:text-start text-center text-base md:text-lg 2xl:text-[22px]
            leading-8 md:leading-9 xl:leading-10 2xl:leading-[45px] pt-6 2xl:pt-10 lg:block hidden"
          >
            My passion is shaping perception, rebuilding and reimagining brands from the ground up, starting with a color, a meaning, and a story that lasts. That’s why I created Lucky Media - a space where strategy, design, and marketing come together to build brands that truly stand out in a world flooded with AI-generated content. I craft every brief, campaign, and strategy myself, supported by a team of exceptional specialists. At Lucky Media, you always work directly with me, because unforgettable brands are built with focus, vision, and true dedication. We’re not just a marketing agency - we’re your marketing team to take care of both, technical and visual matters.
          </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:gap-12 gap-10 px-4 sm:px-8 md:px-16 lg:px-10 xl:px-28 lg:pt-20 pt-10">
        {/* Abdul */}
        <div className="flex flex-col">
          <img src={AbdulImg} alt="Abdul Rehman" className="border-b-[5px] border-[#00FF99] rounded-xl" />
          <h3 className="text-[#171717] font-medium xl:text-[22px] text-lg mt-4">Abdul Rehman</h3>
          <p className="text-[#171717] xl:text-lg text-base">
            Full-stack developer <br /> Problem-solving mastermind
          </p>
        </div>

        {/* Kashan */}
        <div className="flex flex-col">
          <img src={KashanImg} alt="Kashan Bhatti" className="border-b-[5px] border-[#00FF99] rounded-xl" />
          <h3 className="text-[#171717] font-medium xl:text-[22px] text-lg mt-4">Kashan Bhatti</h3>
          <p className="text-[#171717] xl:text-lg text-base">
            Graphic, video & UX designer <br /> Reading people’s minds
          </p>
        </div>

        {/* Lala */}
        <div className="flex flex-col">
          <img src={LalaImg} alt="Lala Rukh" className="border-b-[5px] border-[#00FF99] rounded-xl" />
          <h3 className="text-[#171717] font-medium xl:text-[22px] text-lg mt-4">Lala Rukh</h3>
          <p className="text-[#171717] xl:text-lg text-base">
            Graphic designer <br /> Aesthetic Perfectionist
          </p>
        </div>

        {/* Damian */}
        <div className="flex flex-col">
          <img src={DamianImg} alt="Damian Junge" className="border-b-[5px] border-[#00FF99] rounded-xl" />
          <h3 className="text-[#171717] font-medium xl:text-[22px] text-lg mt-4">Damian Junge</h3>
          <p className="text-[#171717] xl:text-lg text-base">
            Sales & Billing <br /> Guardian of the calendar
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCeo;
