import React, { useRef, useEffect } from "react";

import Sweethomeslider from "./Sweethomeslider";
import Sweetvideoslider from "./Sweetvideoslider";
// import SocialSlider from "./SocialSlider";

import powerImage from "../assets/sweet.svg"; // ✅ React me image import karna best hai
import sweetimg from "../assets/branddesignsweethome2.webp";
import sweetimg1 from "../assets/branddesignsweethome.webp";
import sweetimg11 from "../assets/sweethomedesignimg.webp";
// import sweetvideo from "../assets/SHW1.webm";
import Sweetad from "../assets/sweethomead video.mp4";
import Onlinecampain from "../assets/onlinecampain.webp";
import advetiseimg1 from "../assets/advertisments (1).webp";
import advetiseimg2 from "../assets/advertisments (3).webp";
import advetiseimg3 from "../assets/advertisments (2).webp";

const Sweethome: React.FC = () => {
  //  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
  const videos = document.querySelectorAll(".autoplay-video");

  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;

      if (entry.isIntersecting) {
        video.play().catch((e) => console.log("Video play error:", e));
      } else {
        video.pause();
      }
    });
  }, options);

  videos.forEach((video) => observer.observe(video));

  return () => observer.disconnect();
}, []);
  
  return (
    <>
    <section id="sweethome" className="w-full flex flex-col lg:flex-row mt-20 sm:mt-16 md:mt-20 lg:mt-28">
      {/* 🔸 Left Side: Image */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 py-16 md:py-16 lg:p-14">
        <img
          src={powerImage}
          alt="Online Advertising"
          className="w-[254px] md:w-auto"
        />
      </div>

      {/* 🔸 Right Side: Text Content */}
      <div className="bg-black/90 text-white w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
        {/* Subheading */}
        <h2
          className="inline-block rounded-md 
          px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black mt-16"
        >
          Brand launch
        </h2>

        {/* Paragraph */}
        <p
          className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 
          text-sm sm:text-lg md:text-xl lg:text-2xl 
          leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[41px] mb-10"
        >
          Sweet Home is a modern real estate company focused on connecting families with affordable housing solutions. <br /> Our collaboration covered every aspect of their digital identity - from name, logo and branding to website, ads, and social media design. The goal was to create a trustworthy and warm aesthetic that reflects both professionalism and a human touch.
        </p>
      </div>
    </section>
    
    {/* new website desihn Branding & Visual System */}
<section>
      <div>
        {/* 🔸 Heading */}
        <div className="text-center w-full items-center justify-center flex mt-10 sm:mt-16 md:mt-20 lg:mt-28">
          <h2
            className="text-center bg-[#00FF9C] text-black font-[800] 
              text-[25px] sm:text-[32px] md:text-[40px] lg:text-[50px] 
              py-2 px-4 rounded-lg mb-4"
          >
            Branding & Visual System
          </h2>
        </div>

        {/* 🔸 Description */}
        <p
          className="text-center 
            text-sm sm:text-lg md:text-xl lg:text-2xl
            px-5 sm:px-10 md:px-20 lg:px-[120px] 2xl:px-44
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[43px] mt-6 mb-20 sm:mt-8 md:mt-10 max-w-8xl"
        >
          The visual system captures the essence of a sweet home, warm, safe, and full of life. Inspired by honey tones, bee  motifs, and the hexagon structure, the design reflects a space that feels cozy, welcoming, and harmonious.
        </p>
      </div>

{/* images  */}
      <div className="">
        <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
            <img src={sweetimg} alt="" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full">
            <img src={sweetimg1} alt="" className="w-full" />
        </div>
        </div>
      </div>
</section>

{/* new website desihn   */}
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:my-64 xl:my-52">
            {/* ================= Left Side Content ================= */}

            <div className="flex justify-start mt-16 md:mt-44 w-full lg:w-1/2">
                      <div
                        className="bg-[#00FF9C] rounded-tr-[40px] sm:rounded-tr-[50px] md:rounded-tr-[60px] 
                                    rounded-br-[40px] sm:rounded-br-[50px] md:rounded-br-[60px] 
                                    p-4 sm:p-6 lg:w-[100%] w-[95%]  
                                    relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px]"
                      >
                        {/* ✅ Image option */}
                        <img
                          src={sweetimg11}
                          alt="Paid Ads"
                          className="w-[350px] md:w-[650px] lg:w-full md:top-[-160px] xl:-top-72 2xl:-top-80 -top-20 absolute right-1"
                        />
                      </div>
                    </div>
    
            {/* ================= Right Side Video/Image Box ================= */}
             <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pr-12 xl:pr-16 md:mt-36 mt-20 lg:mt-0">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg lg:leading-[44px]">
                  New website design
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                  We designed a bright, intuitive website experience that simplifies property exploration and communication. <br /> Each page was structured to make browsing easy - from property listings and about pages to service details and inquiry forms. The design language combines clean layouts, calm earthy tones, and subtle motion to give the brand a reliable, elegant feel.
                </p>
              </div>
             
            </div>
          </div>
        </section>


      {/* paragraph and laptop video  */}
          <Sweetvideoslider/>
     

{/* Online presence scetion  */}
          <section>
      <div className="bg-black flex flex-col lg:flex-row 2xl:items-center py-20 mt-16 lg:mt-24 2xl:mt-40">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3 2xl:w-2/5">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h2 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-4xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
             Social Media
            </h2>
          </div>

          {/* sweethome Ad video Video Mockup */}
          <div className="flex justify-center md:justify-start mt-28 lg:mt-32 2xl:mt-56 2xl:mb-28">
            <div
              className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 lg:w-[85%] md:w-[70%] mr-20 md:mr-0
                          relative h-[180px] sm:h-[220px] md:h-[300px] lg:h-[220px] 2xl:h-[340px]"
            >
              <video
              
                loop
                muted
                playsInline
                className="autoplay-video lg:w-full w-3/4 rounded-xl -mt-12 md:-mt-24 lg:-mt-16 xl:-mt-20 2xl:-mt-40 md:ml-10 lg:ml-0 "
              >
                <source src={Sweetad} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content */}
        <div className="w-full lg:w-2/3 2xl:w-3/5 mt-40 lg:mt-0 md:px-4 px-5">
          {/* Swiper Slider */}
          <Sweethomeslider />

          {/* Description */}
          <div className="text-center flex justify-center mt-10">
            <p className="text-white text-[15px] sm:text-lg md:text-xl leading-[28px] md:leading-[36px] text-center md:w-[80%]">
             Sweet Home’s social media branding was built on clarity, tone, and emotional resonance. Each post blends informative property visuals with messaging that feels conversational and helpful rather than overly promotional.
            </p>
          </div>
        </div>
      </div>
    </section>


{/* Ad Performance & Results section  */}
     <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:mt-24">
            {/* ================= Left Side Content ================= */}
            <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
                  Online campaign
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                  As part of the digital marketing setup, we launched online lead generation campaigns that encouraged potential clients to sign up and express interest directly through our ads. To support this, we developed automated email campaigns designed to nurture those leads and maintain consistent engagement with new clients.
Each ad and email template was carefully customized to reflect Sweet Home’s brand language - featuring warm colors, structured layouts, and concise messaging that communicates trust and professionalism.
The automation flow includes personalized welcome emails sent to every new subscriber, guiding them to an integrated calendar booking system where they can easily schedule their first consultation.
                </p>
              </div>
             
            </div>
    
            {/* ================= Right Side Video/Image Box ================= */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-10 sm:mt-16 md:mt-28 lg:mt-44 2xl:mt-56 ">
          {/* 🔹 Video Container */}
          <div
            className="bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 w-[90%] 2xl:w-full  
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px] ml-auto 2xl:mt-48 md:mt-40"
          >
            {/* 🔹 Inner Video Box */}
            <div
              className="absolute 2xl:w-[700px] xl:w-[480px] lg:w-[380px] w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[480px] 2xl:h-[780px] 
                top-[-60px] sm:top-[-90px] md:top-[-250px] lg:top-[-120px] xl:top-[-220px] 2xl:-top-[100%]
               "
            >
              <img src={Onlinecampain} alt="" />
            </div>
          </div>
        </div>
          </div>
        </section>


        <section className="xl:pt-24 md:pt-16 pt-36 px-5 sm:px-12 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row 2xl:gap-14 gap-8">
            <div>
              <img src={advetiseimg1} alt="" />
            </div>
            <div>
              <img src={advetiseimg2} alt="" />
            </div>
            <div>
              <img src={advetiseimg3} alt="" />
            </div>
          </div>
        </section>
    </>
  );
};

export default Sweethome;
