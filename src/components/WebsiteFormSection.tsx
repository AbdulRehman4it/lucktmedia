import React, { useRef, useEffect } from "react";
import websiteImage from "../assets/screeny-1280x853.webp";
import applyFormVideo from "../assets/worktodaytypeform.mp4";

const WebsiteFormSection: React.FC = () => {
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
    <section className="md:pt-36 pt-28 lg:px-16 md:px-12 px-5">
      <div className="flex flex-col lg:flex-row w-full gap-10 xl:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="text-center items-center flex lg:justify-start justify-center mb-10">
            <h2 className="bg-[#00FF9C] text-black font-bold text-xl sm:text-2xl md:text-[34px] 
                          px-3 sm:px-5 py-3 sm:py-6 rounded-md mb-4">
              Website & apply form
            </h2>
          </div>
          <div className="flex justify-center">
            <img 
              className="rounded-[30px] w-full sm:w-[90%] md:w-full" 
              src={websiteImage} 
              alt="Website Screenshot" 
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 mt-10 md:mt-0">
          <p className="text-[#171717] leading-[36px] 
            text-sm sm:text-lg md:text-xl 
            text-center lg:text-start px-2 sm:px-4 md:px-0 mb-6">
            We designed a light and user-friendly website for a recruitment agency, emphasizing readability and a transparent hiring process. The site features a custom application form that integrates seamlessly with lead management tools, streamlining the recruitment workflow. This tailored solution not only enhances the user experience but also ensures efficient data handling, making it easier for the agency to manage and process applications with ease.
          </p>

          <div className="xl:pt-16 pt-10">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
            >
              <source src={applyFormVideo} type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebsiteFormSection;
