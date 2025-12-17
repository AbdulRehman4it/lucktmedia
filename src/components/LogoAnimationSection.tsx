import React, { useRef, useEffect } from "react";
import LogoVideo from "../assets/finalanimacja.mp4"; // import your video

const LogoAnimationSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      { threshold: 0.5 } // play when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <section className="mt-10">
      <div className="flex flex-col lg:flex-row  2xl:gap-52 xl:gap-20 gap-10 lg:pl-10 xl:pl-16 md:px-12 lg:px-0">
        
        {/* Left side (text) */}
        <div className="lg:w-1/2 flex flex-col text-center pt-6 leading-[28px] lg:leading-[36px] px-5 md:px-0">
          
          {/* Heading */}
          <div className="flex justify-center lg:justify-start mb-4">
            <div className="xl:w-[350px] md:w-[260px] px-3 sm:px-5 py-3 sm:py-6 md:text-[29px] text-[22px] font-extrabold flex justify-center rounded-xl bg-[#00ff9c] xl:text-[39px]">
              <h2>logo animation</h2>
            </div>
          </div>
          
          {/* Normal text */}
          <p className="text-[#1b1b1b] order-1 leading-[28px] md:leading-[36px] xl:leading-[40px] text-sm md:text-xl lg:text-lg xl:text-xl pt-4 lg:text-start text-center">
            In today’s digital landscape, social media is dominated by video content.
            To stand out, your brand needs to be dynamic, memorable, and visually compelling. That’s why
            investing in logo animation is a game-changer. Social media thrives on videos, and a logo
            animation transforms any content into something visually striking and memorable. Whether it’s a
            video or a picture animation, you can easily edit it in a simple mobile app or social media’s
            built-in editor and finish it with your animated logo. This ensures your brand is always
            represented consistently and professionally across all platforms.
          </p>

          {/* Bold serif text */}
          <p className="font-bold pt-4 order-3 lg:order-2 md:leading-[36px] leading-[28px] text-am xl:leading-[40px] md:text-xl lg:text-lg xl:text-xl lg:text-start text-center">
            FitDieta’s house brand is all about healthy food, friendly vibes, and
            designs that look good enough to try the food. To capture this essence, we created a logo animation
            that extends the playful, tasty appeal of apples and carrots, making them look irresistibly
            bite-worthy!
          </p>
        </div>

        {/* Right side (video) */}
        <div className="lg:w-1/2  xl:px-0 ">
          <div className="pt-[22px] flex justify-end">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="2xl:w-[90%] rounded-lg"
              src={LogoVideo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoAnimationSection;
