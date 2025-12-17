import React, { useRef, useEffect } from "react";

// 🔹 Import images
import Img1 from "../assets/selflabimg1.webp";
import Img2 from "../assets/selfflab2.webp";
import Img3 from "../assets/selflab3.webp";
import Img4 from "../assets/selflab4.webp";
import Banner from "../assets/poprawny-banner-01.webp";

// 🔹 Import video
import VideoFile from "../assets/animacja-koty (1).mp4";

const ZrobBatanoiSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="lg:flex lg:flex-row flex-col">
        {/* 🔹 Left Side Grid */}
        <div className="grid grid-cols-2 lg:w-1/2 w-full lg:bg-white bg-[#00ff9c] lg:pt-0 py-14 2xl:px-16 md:px-12 px-5">
          <div className="mr-1 md:mr-3">
            <img src={Img1} alt="grid-img-1" />
          </div>
          <div className="mt-0 ml-1 md:ml-3 md:mt-0">
            <img src={Img2} alt="grid-img-2" />
          </div>
          <div className="mt-3 mr-1 md:mr-3">
            <img src={Img3} alt="grid-img-3" />
          </div>
          <div className="mt-3 ml-1 md:ml-3">
            <img src={Img4} alt="grid-img-4" />
          </div>
        </div>

        {/* 🔹 Right Side Video Box */}
        <div className="flex justify-center lg:justify-start mt-20 sm:mt-16 md:mt-20 w-full lg:w-1/2">
          <div
            className="bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 lg:w-full w-[90%] 
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[550px] ml-auto"
          >
            {/* Inner Video */}
            <div
              className="absolute w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-[55%] lg:-translate-x-1/2 
                h-[180px] sm:h-[280px] md:h-[360px] lg:h-[450px] 2xl:h-[700px] 
                lg:-top-20 -top-2"
            >
              <video
                ref={videoRef}
                className="w-full h-[300px] md:h-full object-cover -mt-12 md:-mt-0"
                muted
                loop
                playsInline
              >
                <source src={VideoFile} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Banner */}
      <div className="flex justify-center pt-24 px-5 py-3 md:pt-16">
        <img src={Banner} alt="bottom-banner" />
      </div>
    </section>
  );
};

export default ZrobBatanoiSection;
