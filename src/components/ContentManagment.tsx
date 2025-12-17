import React from "react";
// If you use an image
import postyImage1 from "../assets/konfa-01.webp";
// If you want video instead
// import postyVideo from "../assets/video/posty-flex.mp4";

const ContentManagment: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-20 mt-16 2xl:mt-36 ">
        {/* ================= Left Side Content ================= */}
        <div className="w-full lg:w-1/2 text-center px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
          {/* Section Title */}
          <div className="flex justify-center lg:justify-start">
            <h3 className="inline-block text-2xl md:text-4xl font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Content managment
            </h3>
          </div>

          {/* Paragraph Content */}
          <div>
            <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 
                       text-sm sm:text-base md:text-xl 
                       lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
              We manage and distribute content across multiple platforms, including Facebook, Instagram, Twitter, and TikTok, each with its own unique audience and engagement style. Recognizing the distinct characteristics of these platforms, we tailor our posts to resonate with the specific user base of each, ensuring maximum impact and relevance. Our content reaches a broad audience, being shared on profiles that boast over 700,000 followers.
              <br /><br />
              
                 To maintain our presence and effectiveness in these fast-paced social media environments, we stay consistently active by utilizing advanced tools like IMM for media monitoring.
              
            </p>
                 {/* 🔹 Sub Heading */}
        {/* <h2 className="text-center lg:text-center 
          text-[22px] sm:text-[32px] md:text-[40px] lg:text-[51px] 
          font-bold mt-10 sm:mt-16 md:mt-20 lg:mt-28">
         See the posts
          <span className="text-[#00FF9C] font-[300]">
           &nbsp; <i className="fa-solid fa-arrow-down"></i>
          </span> 
        </h2> */}
          </div>
        </div>

        {/* ================= Right Side Video/Image Box ================= */}
        <div className="flex justify-center md:justify-start mt-16 md:mt-44 w-full lg:w-1/2">
          <div
            className="bg-[#00FF9C] rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
                        rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
                        p-4 sm:p-6 lg:w-full w-[95%]  
                        relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] xl:h-[350px] 2xl:h-[450px] ml-auto"
          >
            {/* ✅ Image option */}
            <img
              src={postyImage1}
              alt="Content Managment"
              className="w-[350px] sm:w-[200px] md:w-[650px] lg:w-[400px] xl:w-[600px] 2xl:w-[800px] md:top-[-260px] lg:top-[-120px] xl:top-[-230px] 2xl:top-[-350px] -top-36 absolute right-[15px]"
            />

            {/* ✅ Video option (uncomment if you want video) */}
            {/*
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-[300px] sm:w-[200px] md:w-full md:top-[-160px] lg:top-[-200px] -top-5 absolute right-[15px] rounded-lg shadow-lg"
            >
              <source src={postyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentManagment;
