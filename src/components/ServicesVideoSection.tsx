import React, { useEffect } from "react";

// 🔹 Import videos from assets
import video1 from "../assets/cookies.mp4";
import video2 from "../assets/santa_video.mp4";
import video3 from "../assets/yung-candidtes_soundadded.mp4";
import video4 from "../assets/dpd1.mp4";
import video5 from "../assets/ingram_nowe_czerwiec.mp4";

const VideoGrid: React.FC = () => {
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
      { threshold: 0.5 } // play when 50% visible
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, []);

  const videos = [video1, video2, video3, video4, video5];

  return (
    <section className="bg-[#00FF9C] px-5 xl:px-10 py-20 2xl:px-14">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10">
        {videos.map((vid, index) => (
          <div key={index}>
            <video
              className="scroll-autoplay w-full h-full object-cover"
              muted
              loop
              playsInline
              src={vid}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
