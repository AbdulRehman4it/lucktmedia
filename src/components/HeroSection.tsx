import React, { useRef, useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/Animation-1716206787868.json";

const HeroSection: React.FC = () => {
  const lottieRef = useRef<any>(null);
  const [frame, setFrame] = useState(0);
  const [isForward, setIsForward] = useState(false); // forward ya reverse track karne ke liye

  const totalFrames = animationData.op; // total frames count

  // Hover pe forward play
  const handleMouseEnter = () => {
    if (lottieRef.current) {
      setIsForward(true);
      setFrame(0);
      lottieRef.current.stop();
      lottieRef.current.play();
    }
  };

  // Hover hataate hi reverse play
  const handleMouseLeave = () => {
    if (lottieRef.current) {
      setIsForward(false);
      setFrame(totalFrames);
    }
  };

  // Reverse animation ka logic
  useEffect(() => {
    if (!isForward && lottieRef.current) {
      const interval = setInterval(() => {
        setFrame((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          lottieRef.current.goToAndStop(prev, true);
          return prev - 1;
        });
      }, 1000 / 50); // 60 FPS for smooth reverse
      return () => clearInterval(interval);
    }
  }, [isForward]);

  // Page load pe reverse se start
  useEffect(() => {
    handleMouseLeave();
  }, []);

  return (
    <section>
      <div className="w-full text-center">
        <div className="pt-10 sm:pt-20 lg:pt-[150px] flex justify-center">
          <h1 className="text-center text-[28px] sm:text-3xl lg:text-[62px] font-[600] leading-[35px] sm:leading-[38px] lg:leading-[62px] px-4 sm:px-10 md:px-20 lg:px-52">
            Looking for a remote <br />
            <span className="text-[#00ff9c]">marketing team<br /></span>
            to fully support your business?
          </h1>
        </div>

        <div className="pt-10 sm:pt-16 lg:pt-20 mb-16 items-center flex justify-center">
          <h2 className="text-center rounded-md px-5 py-4 text-[15px] md:text-[3vw] lg:text-[42px] font-bold leading-tight bg-[#00FF9C]">
            We'll bring luck to your company
          </h2>
        </div>

        {/* Lottie Animation */}
        <div
          className="w-full flex justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[680px]">
            <Lottie
              ref={lottieRef}
              play={isForward}
              loop={false}
              animationData={animationData}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
        </div>

        <div className="text-center justify-center flex pt-6 sm:pt-8 lg:pt-10">
          <a href="https://8hnya0u21xs.typeform.com/to/UNfLKWnc?typeform-source=luckymedia.marketing">
            <button className="relative flex items-center justify-center rounded-[16px] border-[3px] border-black hover:border-transparent px-4 sm:px-6 py-3 font-worksans text-black transition-all duration-500 group ">
              <span className="transition-all text-sm sm:text-xl md:text-[26px] lg:text-3xl duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold p-1">
                Get a service quote within 24 hours!
              </span>

              <span className="absolute opacity-0 font-semibold text-sm sm:text-xl md:text-[26px] lg:text-3xl transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] bg-white rounded-lg px-4 sm:px-6 py-2 border-[5px] border-black whitespace-nowrap ">
                Fill out the brief
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
