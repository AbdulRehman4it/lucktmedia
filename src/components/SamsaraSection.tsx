import React from "react";

// Import images
import img1 from "../assets/thali_offer_Obszar-roboczy-1.webp";
import img2 from "../assets/WhatsApp-Image-2020-12-19-at-18.17.27.webp";
import img3 from "../assets/Screenshot-2024-08-19-175827.webp";
import img4 from "../assets/152409888_261929842113353_1177262274334337968_n.webp";

// Import video
import videoFile from "../assets/handicraftsmonth.mp4";

const SamsaraSection: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="w-full flex flex-col lg:flex-row">

        {/* Left Side (Images Grid) */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10 space-y-4">

        <div className="md:w-1/2 w-full flex md:flex-row flex-col gap-4">
    <img
                src={img1}
                alt="Gallery 1"
                className=""
              />
    <img
                src={img2}
                alt="Gallery 2"
                className=""
              />
  </div>
  <div className="md:w-1/2 w-full flex md:flex-row flex-col gap-4">
    <img
                src={img3}
                alt="Gallery 1"
                className=""
              />
    <img
                src={img4}
                alt="Gallery 2"
                className=""
              />
  </div>
          {/* <div className="max-w-6xl mx-auto grid grid-cols-1 grid-cols-2 gap-4">

           
            <div className="relative group overflow-hidden">
              <img
                src={img1}
                alt="Gallery 1"
                className="w-full h-48 sm:h-80 object-cover transition duration-500 group-hover:brightness-75"
              />
            </div>

            
            <div className="relative group overflow-hidden">
              <img
                src={img2}
                alt="Gallery 2"
                className="w-full h-48 sm:h-80 object-cover transition duration-500 group-hover:brightness-75"
              />
            </div>

          
            <div className="relative group overflow-hidden">
              <img
                src={img3}
                alt="Gallery 3"
                className="w-full h-48 sm:h-80 object-cover transition duration-500 group-hover:brightness-75"
              />
            </div>

            
            <div className="relative group overflow-hidden">
              <img
                src={img4}
                alt="Gallery 4"
                className="w-full h-48 sm:h-80 object-cover transition duration-500 group-hover:brightness-75"
              />
            </div>

          </div> */}
        </div>

        {/* Right Side Video Box */}
        <div className="flex justify-center lg:justify-start mt-10 sm:mt-16 md:mt-20 2xl:mt-72 w-full lg:w-1/2">
          <div className=" md:block hidden bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 lg:w-full w-[90%] 
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[550px] ml-auto">

            {/* Inner Video Box */}
            <div className="absolute w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-[55%] lg:-translate-x-1/2 
                h-[280px] md:h-[360px] lg:h-[450px] 2xl:h-[700px] 
                 lg:-top-20 2xl:-top-60 -top-2">

              <video
                className="object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoFile} type="video/mp4" />
              </video>

            </div>
          
          </div>
            <div className="md:hidden block">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoFile} type="video/mp4" />
              </video>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SamsaraSection;
