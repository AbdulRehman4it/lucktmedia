import React, { useRef, useEffect } from "react";

// Import videos
import tuktukVideo from "../assets/tuktuk.mp4";
import reviewVideo from "../assets/100_review.mp4";
import animationVideo from "../assets/animation.mp4";
import likesVideo from "../assets/100likes-size.mp4";

const VideoAdvertising: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
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

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLVideoElement) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <section className="bg-[#00FF9C] px-10 py-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <video
            ref={addToRefs}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            src={tuktukVideo}
          />
        </div>

        <div>
          <video
            ref={addToRefs}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            src={reviewVideo}
          />
        </div>

        <div>
          <video
            ref={addToRefs}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            src={animationVideo}
          />
        </div>

        <div>
          <video
            ref={addToRefs}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            src={likesVideo}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoAdvertising;
