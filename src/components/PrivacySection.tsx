import React, { useRef, useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/wGrPQIOLdV.json";

const PrivacySection: React.FC = () => {
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
           Your personal and business<br />  confidential data <br /> <span className="text-[#00ff9c]">stays with us.</span>
          </h1>
        </div>

        <div className="pt-10 sm:pt-16 lg:pt-20 items-center flex justify-center">
          <h2 className="text-center rounded-md px-5 py-4 text-[15px] md:text-[3vw] lg:text-[42px] font-bold leading-tight bg-[#00FF9C]">
            We are protecting your data
          </h2>
        </div>

        {/* Lottie Animation */}
        <div
          className="w-full flex justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="">
            <Lottie className=""
              ref={lottieRef}
              play={isForward}
              loop={false}
              animationData={animationData}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
        </div>

        <div className="text-center justify-center flex pb-10">
          <a href="/Privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
  <button className="mt-10 border-[5px] border-black bg-white text-black px-4 sm:px-5 py-4 sm:py-6 md:rounded-2xl rounded-xl transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-lg md:text-3xl mb-10 font-medium">
    Download our privacy policy
  </button>
</a>

        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
