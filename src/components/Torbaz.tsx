import React, { useEffect } from "react";

import Torbazslider from "./Torbazslider";
// import SocialSlider from "./SocialSlider";

import torbaImage from "../assets/tarbo.svg"; // ✅ React me image import karna best hai
import torbazvideo from "../assets/Branding Video.mp4";
import torbazimg from "../assets/torbazimg.webp";
import Torbavideo from "../assets/Website Video torbaz.webm";
import torbapost from "../assets/Post video torbaz.mp4";
import torbazad from "../assets/Przykład1.mp4";
import videoresult from "../assets/Video Results.mp4";
import accountdetail from "../assets/accountdetail.webp";
import graph from "../assets/attachment 1.webp";
import point from "../assets/point table.webp";
import logoanimation from "../assets/Logo Animation.webm";

const Sweethome: React.FC = () => {

  // ✅ FIXED: Universal scroll-based autoplay (TSX safe)
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(".autoplay-video");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((v) => observer.observe(v));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section id="torbaz" className="w-full flex flex-col lg:flex-row mt-20 sm:mt-16 md:mt-20 lg:mt-28">
      {/* 🔸 Left Side: Image */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 py-16 md:py-16 lg:p-14">
        <img
          src={torbaImage}
          alt=""
          className="w-[254px] md:w-[300px]"
        />
      </div>

      {/* 🔸 Right Side: Text Content */}
      <div className="bg-black text-white w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
        {/* Subheading */}
        <h2
          className="inline-block rounded-md 
          px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black lg:mt-12 mt-10"
        >
          Starter pack
        </h2>

        {/* Paragraph */}
        <p
          className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 
          text-sm sm:text-lg md:text-xl lg:text-2xl 
          leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[41px] mb-10"
        >
          We launched Torba z Logo, a new brand offering custom-printed bags. As part of the launch, we built a complete digital presence - including comprehensive branding design, a modern website, and social media and Google Ads campaigns that introduced the brand to the market with consistency and impact.
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
            px-5 sm:px-10 md:px-20 lg:px-[120px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[43px] 
            mt-6 mb-20 sm:mt-8 md:mt-10"
        >
          Competition in this sector is high, so we focused on creating a memorable brand that stands out at <br className="2xl:block hidden" /> first glance. The design is cheerful, light, and instantly recognizable, leaving a lasting impression.
        </p>
      </div>

{/* images  */}
      <div className="">
        <div className="flex md:flex-row flex-col">
        <video
                      className="autoplay-video w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src={torbazvideo}
                        type="video/mp4"
                      />
                    </video>
        </div>
      </div>
</section>

{/* logo animation  */}
 <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-20 2xl:mt-36 xl:mt-28">
            {/* ================= Left Side Content ================= */}
            <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
                  Logo Animation
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                  To bring the identity to life, we developed a short animated sequence that showcases the logo’s flexibility and motion, reflecting the brand’s playful personality. We believe that logo animation strongly enhances a brand’s visual presence - it’s a simple yet powerful way to make any content more memorable and professional-looking. This approach is especially effective for brands without dedicated social media managers, helping them elevate even the simplest self-published content.
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
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px] ml-auto 2xl:mt-48"
          >
            {/* 🔹 Inner Video Box */}
            <div
              className="absolute 2xl:w-[700px] xl:w-[480px] lg:w-[380px] w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[480px] 2xl:h-[780px] 
                top-[-90px] sm:top-[-90px] md:top-[-150px] lg:top-[-220px] xl:top-[-220px] 2xl:-top-[80%]
               "
            >
              <video
                className="2xl:ml-6 autoplay-video 2xl:w-[95%] h-auto object-cover lg:rounded-[40px] rounded-2xl"
                
                muted
                loop
                playsInline
              >
                <source
                  src={logoanimation}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
          </div>
        </section>

{/* new website desihn   */}
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:my-64 xl:my-52">
            {/* ================= Left Side Content ================= */}

            <div className="flex justify-start mt-24 md:mt-44 w-full lg:w-1/2">
                      <div
                        className="bg-[#00FF9C] rounded-tr-[40px] sm:rounded-tr-[50px] md:rounded-tr-[60px] 
                                    rounded-br-[40px] sm:rounded-br-[50px] md:rounded-br-[60px] 
                                    p-4 sm:p-6 lg:w-[100%] w-[95%]  
                                    relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px]"
                      >
                        {/* ✅ Image option */}
                        <img
                          src={torbazimg}
                          alt="Paid Ads"
                          className="torbazimg w-[350px] md:w-[650px] lg:w-full md:top-[-160px] xl:-top-72 2xl:-top-80 -top-20 absolute right-1"
                        />
                      </div>
                    </div>
    
            {/* ================= Right Side Video/Image Box ================= */}
             <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pr-12 xl:pr-16 md:mt-36 mt-20 lg:mt-0">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg lg:leading-[44px]">
                  New website designs
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                 We designed a light, modern website that reflects the brand’s cheerful and welcoming style. For the client, it was important that the site be built on WordPress and WooCommerce to avoid unnecessary development costs and ensure easy future management. Despite the inclusion of complex pricing modules, we successfully integrated all required features while keeping the site efficient, user-friendly, and fully scalable.
                </p>
              </div>
             
            </div>
          </div>
        </section>


      {/* paragraph and laptop video  */}

      <section>
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 2xl:mt-80 mt-10 md:mt-16">
              {/* 🔸 Left Side Content */}
              <div className="lg:w-1/2 w-full text-center lg:text-left px-5 sm:px-8 md:px-12 xl:px-16 mb-10 md:mb-20 lg:mb-0">
                {/* 🔹 Description */}
                <p
                  className="text-[#171717] 2xl:leading-10 lg:leading-[36px] leading-6 sm:leading-8 
                    text-sm sm:text-lg lg:text-xl 2xl:text-[22px] pt-6"
                >
                  In our approach, we focused on creating a simplified ordering system. We noticed that competitors often use overly complicated processes, making it difficult for clients to understand pricing, bag types, and customization options. Our solution was a streamlined, step-by-step order flow, where users can quickly choose between main product options, see the price calculated instantly, upload their logo, and simply wait for a confirmation call.
                </p>
              </div>
      
              {/* 🔸 Right Side Video Box */}
              <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
                {/* 🔹 Video Container */}
                <div
                  className="bg-[#00FF9C] 
                    rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
                    rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
                    p-4 sm:p-6 w-[90%] md:ml-20 ml-12 lg:ml-0 md:w-full  
                    relative h-[200px] sm:h-[350px] md:h-[300px] lg:h-[300px] 2xl:h-[420px]"
                >
                  {/* 🔹 Inner Video Box */}
                  <div
                    className="absolute w-[90%] sm:w-[85%] 2xl:w-[80%] 
                      right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                      2xl:-top-20 md:-top-16 -top-10"
                  >
                    <video
                      className="autoplay-video w-full h-full object-cover"
                      
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src={Torbavideo}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* Online presence scetion  */}
          <section>
      <div className="margin bg-black flex flex-col lg:flex-row py-20 mt-16 lg:mt-24 2xl:mt-40">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3 2xl:w-2/5">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h2 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-4xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
             Social Media Designs
            </h2>
          </div>

          {/* sweethome Ad video Video Mockup */}
          <div className="flex justify-center md:justify-start mt-28 lg:mt-32 2xl:mt-40 2xl:mb-20">
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
                className="torbazvideo autoplay-video lg:w-full  md:w-3/4 w-full rounded-xl -mt-14 md:-mt-14 lg:-mt-16 2xl:-mt-28 md:ml-10 lg:ml-0"
              >
                <source src={torbapost} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content */}
        <div className="w-full lg:w-2/3 2xl:w-3/5 mt-40 lg:mt-0 md:px-4 px-5">
          {/* Swiper Slider */}
          <Torbazslider />

          {/* Description */}
          <div className="text-center flex justify-center mt-10">
            <p className="text-white text-[15px] sm:text-lg md:text-xl leading-[28px] md:leading-[36px] text-center md:w-[80%]">
             We made sure that social media ads stayed consistent with the brand identity, reinforcing the message of affordable pricing and a simple, effortless ordering process. We also created dedicated ad variations targeting different business sectors, ensuring the message and visuals resonated with each audience group.
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
                  We created versatile ad campaigns focused on B2B lead generation and sales, combining Meta Ads and Google Ads to effectively reach business clients. Our approach relied on continuous optimization, testing creatives, audiences, and cost efficiency to maximize ROI.
On Meta, we generated a steady flow of high-quality leads at low cost, while Google Ads, optimized for both sales and visibility, successfully competed with high-budget advertisers.
With a CTR above 9% and strong engagement metrics, the campaigns proved that smart optimization and cohesive creative direction can drive results even in a competitive market.
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
              relative h-[200px] md:h-[300px] 2xl:h-[420px] ml-auto 2xl:my-48 my-20 md:mt-0"
          >
            {/* 🔹 Inner Video Box */}
            <div
              className="absolute 2xl:w-[700px] xl:w-[480px] lg:w-[380px] w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[480px] 2xl:h-[780px] 
                top-[-50px] md:top-[-120px] xl:top-[-120px] 2xl:top-[-220px] flex justify-center
               "
            >
              <video
                className="autoplay-video 2xl:w-[500px] w-[280px] md:h-full h-[480px] object-cover lg:rounded-[40px] rounded-2xl -mt-20 md:-mt-0"
                
                muted
                loop
                playsInline
              >
                <source
                  src={videoresult}
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
          </div>
        </section>


        <section className="xl:pt-24 md:pt-32 pt-36 px-5 sm:px-12 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row 2xl:gap-20 gap-6">
            <div className="md:w-2/3 w-full">
            <div>
              <img src={accountdetail} className="w-full" alt="" />
              </div>
              <div className="pt-6 2xl:pt-20">
              <img src={graph} className="w-full" alt="" />
              </div>

            </div>
            <div className="md:w-1/3 w-full">
            <div>
              <img src={point} className="w-full" alt="" />
              </div>
              <div className="pt-6 2xl:pt-20">
              <video
                className="object-cover lg:rounded-[40px] rounded-2xl border-[4px] border-[#00FF9C]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src={torbazad}
                  type="video/mp4"
                />
              </video>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Sweethome;
