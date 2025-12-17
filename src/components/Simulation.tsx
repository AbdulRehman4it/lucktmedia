import React, { useEffect, useRef } from "react";
import artworkVideo from "../assets/Artwork-1.webm"; // ✅ Import video

const Simulation: React.FC = () => {
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
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <section className="mt-16 lg:mt-0 px-5 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side (Video Section) */}
        <div className="lg:w-1/2">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] xl:text-5xl 
            font-extrabold gap-4 text-center hidden"
          >
            See the simulation{" "}
            <span className="text-[#00FF9C] font-light">
              <i className="fa-solid fa-arrow-down"></i>
            </span>
          </h2>

          <div className="w-full -mt-28 lg:-mt-16 xl:-mt-24 2xl:-mt-28">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="w-full rounded-lg"
              src={artworkVideo}
            />
          </div>
        </div>

        {/* Right Side (Text Content) */}
        <div className="lg:w-1/2 text-center">
          <p
            className="text-[#1b1b1b] text-sm sm:text-base md:text-xl 
            leading-[28px] sm:leading-[32px] md:leading-[36px] 
            lg:px-10 md:px-9"
          >
            Our website creation process begins with a detailed brief to understand
            your vision, goals, and target audience. We then move into discussions,
            where we collaborate closely with you to refine ideas and ensure
            alignment. With a clear direction, we create a project plan that outlines
            the design and functionality, bringing your vision to life. Once the plan
            is finalized, we move into the development phase, building a website that
            is both visually appealing and highly functional. Throughout the process,
            our focus is on delivering a site that meets your needs and exceeds your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Simulation;
