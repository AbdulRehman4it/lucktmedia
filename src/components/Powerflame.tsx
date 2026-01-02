import React, { useEffect, useRef } from "react";
import Powerflameslider from "./Powerflameslider";
import Powervideoslider from "./Powervideoslider";

import powerImage from "../assets/powerrrflame.svg";
import powerimg from "../assets/powerflameimg.webp";

import videoMockup from "../assets/PV Main.mp4";
import video1 from "../assets/PV 1.mp4";
import video2 from "../assets/PV2.mp4";
import video3 from "../assets/PV3.mp4";
import video4 from "../assets/PV4.mp4";
import video5 from "../assets/PV Main.mp4";
import advideo from "../assets/advertisment-format.mp4";

import postimg1 from "../assets/ttt.webp";
import postimg2 from "../assets/ads-result (1).webp";
import postimg4 from "../assets/Ads results (2).webp";
import postimg5 from "../assets/Ads results (3).webp";
import postimg6 from "../assets/Ads results (4).webp";
import postimg7 from "../assets/ad result 5.webp";
import postimg8 from "../assets/ads-result (6).webp";
import postimg9 from "../assets/Ads results (7).webp";

import emailimg from "../assets/email.webp";

const Powerflame: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
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

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLVideoElement) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="powerflame" className="w-full flex flex-col lg:flex-row mt-20 sm:mt-16 md:mt-20 lg:mt-28">
        <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 py-16 md:py-16 lg:p-14">
          <img src={powerImage} alt="Online Advertising" className="w-[254px] md:w-[400px]" />
        </div>

        <div className="bg-black text-white w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
          <h2 className="inline-block rounded-md px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black mt-10">
            Permanent cooperation
          </h2>

          <p className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 text-sm sm:text-lg md:text-xl lg:text-2xl leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[41px] mb-10">
            We partnered with Power Flame to rebuild their brand from the ground up - starting with a cohesive marketing strategy, complete rebranding, online campaigns, and sales outsourcing. Our unusual approach to an everyday product turned something as ordinary as heating pellets into a distinct and memorable brand that stood out in the market - achieving visible success within just six months.
          </p>
        </div>
      </section>

      {/* 🔹 New Website Design */}
      <section>
        <div className="text-center w-full flex justify-center items-center mt-10 sm:mt-16 md:mt-20 lg:mt-28">
          <h2 className="text-center bg-[#00FF9C] text-black font-[800] text-[25px] sm:text-[32px] md:text-[40px] lg:text-[50px] py-2 px-4 rounded-lg mb-4">
            New website design
          </h2>
        </div>

        <p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl px-5 sm:px-10 md:px-20 lg:px-[120px] 2xl:px-48 leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[43px] mt-6 mb-20 sm:mt-8 md:mt-10 max-w-8xl">
          A memorable, informative, and conversion-driven design. Built to highlight Power Flame’s expertise with clear structure, solid content, and a professional visual identity that builds trust and recognition.
        </p>

        <div>
          <img src={powerimg} className="w-full" alt="" />
        </div>
      </section>

      {/* 🔹 Laptop/Slider Video Section */}
      <Powervideoslider />

      {/* 🔹 Online Presence Section */}
      <section className="margin bg-black flex flex-col lg:flex-row py-20 md:pb-20 mt-16 lg:mt-24 2xl:mt-40">
        <div className="w-full lg:w-1/3 2xl:w-2/5">
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h2 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-5xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Online presence
            </h2>
          </div>
          <div className="flex justify-center md:justify-start mt-28 lg:mt-32">
            <div className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] p-4 sm:p-6 lg:w-[85%] md:w-[70%] mr-20 md:mr-0 h-[180px] md:h-[320px] lg:h-[220px] 2xl:h-[340px]">
            
              <video
                ref={addToRefs}
                muted
                loop
                playsInline
                className="lg:w-full powerflamevideo md:w-2/3 rounded-xl 2xl:-mt-24 md:-mt-20 -mt-14"
                src={videoMockup}
              />
           
            </div>
          </div>
        </div>
         <p className="text-white text-[15px] sm:text-lg md:text-xl leading-[28px] md:leading-[36px] text-center pt-24 px-5 block lg:hidden">
              We placed strong emphasis on building a consistent and recognizable online presence. From the start, we created a cohesive visual identity supported by product photoshoots and video recordings, which we continue to use across all social media channels. This unified approach not only strengthens brand recognition but also drives sales, proving how much consistency in visual communication truly matters. By taking a unique approach to a routine product, we turned heating pellets into a strong, recognizable brand with clear market differentiation.
            </p>

        <div className="w-full lg:w-2/3 2xl:w-3/5 md:mt-24 mt-20 lg:mt-0 md:px-4 px-5">
          <Powerflameslider />
          <div className="text-center flex justify-center mt-10 2xl:mt-0">
            <p className="text-white text-[15px] sm:text-lg md:text-xl leading-[28px] md:leading-[36px] text-center md:w-[80%] hidden lg:block">
              We placed strong emphasis on building a consistent and recognizable online presence. From the start, we created a cohesive visual identity supported by product photoshoots and video recordings, which we continue to use across all social media channels. This unified approach not only strengthens brand recognition but also drives sales, proving how much consistency in visual communication truly matters. By taking a unique approach to a routine product, we turned heating pellets into a strong, recognizable brand with clear market differentiation.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Video Grid Section */}
      <section className="bg-[#00FF9C] px-5 xl:px-10 2xl:py-28 py-20 2xl:px-14">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10">
          {[video1, video2, video3, video4, video5].map((vid, i) => (
            <video
              key={i}
              ref={addToRefs}
              muted
              loop
              playsInline
              className="xl:rounded-[30px] rounded-[20px]"
              src={vid}
            />
          ))}
        </div>
      </section>
      {/* 🔹 Ad Performance Section */}
      <section>
        <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:mt-24">
          <div className="w-full lg:w-1/2 text-center px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
            <div className="flex justify-center lg:justify-start">
              <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg 2xl:leading-[44px] lg:leading-[44px]">
                Ads Performance
              </h3>
            </div>

            <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10 text-sm sm:text-base md:text-xl 2xl:text-2xl lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
              We ran campaigns across Facebook, Instagram, Google, and TikTok, tailoring content to match the interests and behavior of Power Flame’s audience. Our organic TikTok videos went viral, building strong brand awareness, while paid campaigns on Facebook and Google generated significant sales and traffic. We also managed the Google Merchant Center, ensuring seamless product visibility across all channels. This strategic, audience-focused approach proved that the right message, delivered on the right platforms - truly hits.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-10 sm:mt-16 md:mt-28 lg:mt-44 2xl:mt-56">
            <div className="bg-[#00FF9C] rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] p-4 sm:p-6 w-[90%] 2xl:w-full relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px] ml-auto 2xl:mt-48">
              <div className="absolute 2xl:w-[700px] xl:w-[480px] lg:w-[380px] w-[90%] right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 h-[200px] sm:h-[280px] md:h-[460px] lg:h-[480px] 2xl:h-[780px] top-[-40px] sm:top-[-90px] md:top-[-120px] lg:top-[-220px] xl:top-[-220px] 2xl:-top-[100%]">
                <video
                  ref={addToRefs}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover lg:rounded-[40px] rounded-2xl"
                  src={advideo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Post Section */}
      <section className="px-6 xl:pt-20 pt-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 2xl:gap-10">
          {[postimg1, postimg2, postimg4, postimg5, postimg6, postimg7, postimg8, postimg9].map((img, i) => (
            <a key={i} href="" target="_blank" rel="">
              <img src={img} alt={`post-${i + 1}`} className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid" />
            </a>
          ))}
        </div>
      </section>

      {/* 🔹 Branding Text */}
      <section>
        <div className="bg-black mt-28">
          <p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-10 md:px-16 lg:px-20 2xl:px-36 py-8 sm:py-12 md:py-16 lg:py-24 text-white leading-10 sm:leading-[34px] md:leading-[42px] lg:leading-[50px]">
            In the end, every number here reflects a creative decision that worked - transforming visuals into measurable business results. These outcomes aren’t just data points; they’re proof of strategy, consistency, and design thinking applied with purpose. Each campaign insight helps us refine, evolve, and push the boundaries of what effective visual communication can achieve.
          </p>
        </div>
      </section>

      {/* 🔹 Email Campaign Section */}
      <section>
        <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:mt-24">
          <div className="w-full lg:w-1/2 text-center px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
            <div className="flex justify-center lg:justify-start">
              <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
                Email Campaigns
              </h3>
            </div>

            <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10 text-sm sm:text-base md:text-xl 2xl:text-2xl lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
              We developed and managed B2C email and SMS campaigns in Poland, leveraging a large, pre-built database of potential customers to deliver personalized, high-converting messages. Our targeted SMS outreach allowed us to reach audiences instantly with timely offers and product updates. <br />
              In addition, we executed numerous email campaigns for the Dutch and Belgian markets, adapting content and tone to each region’s preferences. This strategic approach ensured consistent communication, strong engagement, and measurable sales growth across all markets.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-5">
            <img src={emailimg} alt="Email Campaign" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Powerflame;
