import React from "react";
// If you use an image
import postyImage from "../assets/posty-flex.webp";
// If you want video instead
// import postyVideo from "../assets/video/posty-flex.mp4";

const PaidAds: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-16 2xl:mt-24 ">
        {/* ================= Left Side Content ================= */}
        <div className="w-full lg:w-1/2 text-center px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
          {/* Section Title */}
          <div className="flex justify-center lg:justify-start">
            <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Paid ads
            </h3>
          </div>

          {/* Paragraph Content */}
          <div>
            <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 
                       text-sm sm:text-base md:text-xl 
                       lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
              Paid advertising is a highly effective method for reaching and engaging with
              diverse professional groups through strategically targeted digital campaigns.
              <br />
              Our objective was to develop captivating advertisements that fostered
              engagement, meaningful discussions and attracted high-quality followers.
              <br />
              To achieve this, we meticulously crafted ads designed to resonate with our
              target audiences. By leveraging advanced targeting techniques, we ensured
              our messages reached the right people at the right time. Each ad was carefully
              designed to be visually appealing, informative, and relevant, sparking
              interest and prompting interaction.
              <br />
              <span className="text-black font-bold">
                Understand the importance of online presence and paid ads. <br />
                Contact us today!
              </span>
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="text-center flex justify-center lg:justify-start pt-6 sm:pt-8 lg:pt-10 mt-10 mb-10">
            <a href="https://calendly.com/hi-luckymedia/firstmeeting?month=2025-11">
            <button className="relative flex items-center justify-center rounded-xl border-[3px] border-black hover:border-transparent px-4 sm:px-6 py-3 font-worksans text-black transition-all duration-500 group">
              {/* Normal text */}
              <span className="transition-all text-[14px] sm:text-[18px] md:text-[24px] lg:text-[31px] duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold p-1">
                Let's talk about it!
              </span>
              {/* Hover text */}
              <span className="absolute opacity-0 font-semibold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[31px] transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] bg-white rounded-lg px-4 sm:px-6 py-2 border-[5px] border-black whitespace-nowrap">
                Book the meeting
              </span>
            </button>
            </a>
          </div>
        </div>

        {/* ================= Right Side Video/Image Box ================= */}
        <div className="flex justify-center md:justify-start mt-16 md:mt-44 w-full lg:w-1/2">
          <div
            className="bg-[#00FF9C] rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
                        rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
                        p-4 sm:p-6 w-[90%]  
                        relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] xl:h-[450px] ml-auto"
          >
            {/* ✅ Image option */}
            <img
              src={postyImage}
              alt="Paid Ads"
              className="pictorialimg w-[350px] sm:w-[200px] md:w-full md:top-[-160px] lg:top-[-100px] 2xl:top-[-230px] -top-20 absolute right-[15px]"
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

export default PaidAds;
