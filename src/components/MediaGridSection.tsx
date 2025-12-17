import React, { useEffect } from "react";
import AnimacjaStrona from "../assets/animacjastrona.mp4";
import FinalAnimacja from "../assets/finalanimacja.mp4";
import GridImage from "../assets/grafika.webp";

const MediaGridSection: React.FC = () => {

  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>("video.scroll-autoplay");

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
      { threshold: 0.5 } // 50% visibility
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <section>
      <div className="grid mt-[77px] md:grid-cols-2 lg:grid-cols-3 lg:px-3 xl:px-[44px] xl:py-[44px]">
        
        {/* First video */}
        <div className="px-5 lg:px-4">
          <video
            className="scroll-autoplay w-full max-w-[800px]"
            muted
            loop
            playsInline
            src={AnimacjaStrona}
          />
        </div>

        {/* Image */}
        <div className="px-5 lg:px-4 mt-6 md:mt-0">
          <img
            src={GridImage}
            alt="Media Grid"
            className="w-full"
          />
        </div>

        {/* Second video */}
        <div className="px-5 lg:px-4 mt-6 lg:mt-0">
          <video
            className="scroll-autoplay w-full max-w-[800px]"
            muted
            loop
            playsInline
            src={FinalAnimacja}
          />
        </div>

      </div>
    </section>
  );
};

export default MediaGridSection;
