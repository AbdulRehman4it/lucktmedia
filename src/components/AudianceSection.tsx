import React, { useRef, useEffect } from "react";
import linkedinBackground from "../assets/linkedin-background_Obszar-roboczy-1.webp";
import companyVideo from "../assets/animacja_ogolna_soundadded.mp4";

const AudianceSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch((err) => console.log(err));
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // video plays when 50% visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="audience-section">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-16 md:mt-24 lg:mt-24 2xl:mt-40">
        {/* Left Side Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left xl:pl-16 lg:pl-12 md:px-12 px-5 lg:px-0">
          <div className="flex justify-center lg:justify-start">
            <h2
              className="inline-block 
                text-xl sm:text-[28px] md:text-[34px] 
                font-[800] text-black bg-[#00FF99] 
               px-3 sm:px-5 py-3 sm:py-6
                rounded-lg "
            >
              Defining the audience
            </h2>
          </div>

          <p
            className="text-[#171717] 2xl:leading-10 lg:leading-[36px] leading-6 sm:leading-8 
              text-sm sm:text-lg lg:text-xl 2xl:text-[22px] pt-6"
          >
            The company’s target audience consisted of young individuals eager to
            work abroad. To effectively engage this demographic, we designed the
            company’s appearance to resonate with their aspirations and interests.
            Our approach involved creating dynamic and visually striking content
            that captures attention and aligns with the vibrant, adventurous
            spirit of young potential workers.
          </p>

          <div className="py-10">
            <img src={linkedinBackground} alt="LinkedIn Background" />
          </div>
        </div>

        {/* Right Side Video Box */}
        <div
          className="flex justify-center lg:justify-start mt-10 sm:mt-16 lg:mt-60  2xl:mt-80
          w-full lg:w-1/2"
        >
          <div
            className="bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 w-[90%] lg:w-full  
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] ml-auto"
          >
            <div
              className="absolute w-[90%] 
                 lg:left-[55%] lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[550px] xl:h-[750px]
                top-[-50px] sm:top-[-90px] md:top-[-120px] lg:top-[-170px] xl:top-[-200px] 2xl:-top-[400px] "
            >
              <video
                ref={videoRef}
                className="w-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={companyVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudianceSection;
