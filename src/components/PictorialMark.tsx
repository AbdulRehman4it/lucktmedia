import React, { useRef, useEffect } from "react";
import pictorialLogo from "../assets/logo_x_1080x1080_Obszar-roboczy-1-150x150.webp";
import pictorial from "../assets/pictorialmarkvideo.mp4"; // apna image assets folder me rakho

const PictorialMark: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer options
    const options = {
      root: null, // viewport
      threshold: 0.5, // 50% of video should be visible to play
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch((e) => console.log("Video play error:", e));
        } else {
          video.pause();
        }
      });
    }, options);

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="x">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-16 md:mt-24 lg:mt-32 2xl:mt-20">
        {/* Left Side Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left px-5 sm:px-8 md:px-12 xl:px-16">
          <div className="flex justify-center lg:justify-start">
            <h3
              className="inline-block 
                text-2xl sm:text-[28px] md:text-4xl xl:text-[50px] 
                font-[800] text-black bg-[#00FF99] 
                px-3 sm:px-5 py-2 sm:py-6 
                rounded-lg text-center lg:text-start"
            >
              Pictorial mark
            </h3>
          </div>

          <div className="my-6 flex lg:justify-start justify-center items-center pt-6">
            <img
              src={pictorialLogo}
              alt="Logo"
              className="w-32 h-32 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full"
            />
          </div>

          <p
            className="text-[#171717] 2xl:leading-10 lg:leading-[36px] leading-6 sm:leading-8 
              text-sm sm:text-lg lg:text-xl 2xl:text-[22px] pt-6"
          >
            It’s a simplified logo that identify the company. We decided for “X”
            before Elon Musk did it. The letter “X” is a powerful symbol. It is
            universally recognized for marking choices in voting or
            decision-making. On maps, “X” signifies key locations or hidden
            treasures, evoking discovery and adventure. By incorporating “X,” we
            create a meaningful and memorable visual identity, guiding our
            customers to their goals. Also, we connected it with arrows that
            signify action.
          </p>
        </div>

        {/* Right Side Video Box */}
        <div className="flex justify-center lg:justify-start mt-10 sm:mt-16 md:mt-20 w-full lg:w-1/2 2xl:mt-56">
          <div
            className="bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 w-[90%] 2xl:w-full  
              relative h-[200px] sm:h-[350px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] ml-auto 2xl:mt-48 md:my-28 my-10 lg:my-0"
          >
            <div
              className="absolute w-[90%] sm:w-[85%] 2xl:w-[80%] 
                right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[550px] 2xl:h-[850px] 
                top-[-60px] sm:top-[-90px] md:top-[-120px] lg:-top-[80px] xl:top-[-170px] 2xl:-top-80
                "
            >
              <video
                ref={videoRef}
                className="w-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={pictorial} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictorialMark;
