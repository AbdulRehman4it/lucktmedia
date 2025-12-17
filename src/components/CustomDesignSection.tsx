import React, { useRef, useEffect } from "react";
import CustomSlider from "./CustomSlider";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import menuVideo from "../assets/menu-unscreen.webm";
import animacjaVideo from "../assets/animacja_tlo.mp4";

const CustomDesignSection: React.FC = () => {
  const menuVideoRef = useRef<HTMLVideoElement>(null);
  const animacjaVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [menuVideoRef.current, animacjaVideoRef.current];

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
      { threshold: 0.5 } // Play when 50% visible
    );

    videos.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="bg-black flex flex-col lg:flex-row gap-[0px] py-20 mt-32">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3">
          {/* 🔹 Heading */}
          <div className="flex justify-center lg:justify-start xl:pl-16 lg:pl-12">
            <h3 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-4xl xl:text-[40px] font-[800] text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Custom design
            </h3>
          </div>

          {/* 🔹 book Video */}
          <div className="flex justify-start mt-24 sm:mt-20 md:mt-28 lg:mt-60">
            <div
              className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[85%] 
                          relative h-[180px] md:h-[290px] lg:h-[250px] 2xl:h-[330px]"
            >
              <div className="xl:top-[-90px] 2xl:-top-36 top-[-40px] top-[-30px] absolute -rotate-12 w-full ">
                <div className="lg:w-[165%] 2xl:-ml-32 lg:-ml-20">
                  <video
                    ref={menuVideoRef}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  >
                    <source src={menuVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔸 Right Side Content */}
        <div className="w-full lg:w-2/3 mt-16 lg:mt-0 px-5 md:px-0">
          {/* Swiper Slider */}
          <div className="xl:px-20 md:px-10 rounded-none ">
            <CustomSlider />
          </div>

          {/* 🔹 Description Video */}
          <div className="md:pt-20 ">
            <div className="xl:px-40 md:px-10">
              <video
                ref={animacjaVideoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={animacjaVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
