  import React, { useState } from "react";

  // Import your videos
  import powervideo2 from "../assets/SHW2.webm";
  import powervideo from "../assets/SHW1.webm";
   import powervideo3 from "../assets/SHW3.webm";
    // import powervideo4 from "../assets/PFW4.webm";

  const Sweetvideoslider: React.FC = () => {
    const videos = [powervideo2, powervideo, powervideo3]; // Add more if needed

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
      <section>
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 2xl:mt-56 mt-10 md:mt-16">

          {/* LEFT SIDE CONTENT */}
          <div className="lg:w-1/2 w-full text-center lg:text-left px-5 sm:px-8 md:px-12 xl:px-16 mb-10 md:mb-20 lg:mb-0">
            <p className="text-[#171717] 2xl:leading-10 lg:leading-[36px] leading-6 sm:leading-8 
                          text-sm sm:text-lg lg:text-xl 2xl:text-[22px] pt-6">
               We captured all the company’s key information within a beautiful, well-structured website that clearly communicates its values, products, and story. The design balances aesthetic appeal with functionality, ensuring an effortless user experience.  <br />
Built on a solid structure, the website not only showcases the company’s offerings but also serves as a powerful communication and sales tool, reflecting the essence of the brand.
An integrated online meeting booking feature further enhances accessibility, allowing customers to easily schedule consultations and connect directly with the company.
            </p>
          </div>

          {/* RIGHT SIDE VIDEO SLIDER */}
          <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start ">
            <div className="bg-[#00FF9C] 
                            rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
                            rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
                            p-4 sm:p-6 w-[90%] md:ml-20 ml-12 lg:ml-0 md:w-full  
                            relative h-[200px] sm:h-[350px] md:h-[300px] lg:h-[300px] 2xl:h-[420px]">

              {/* INNER VIDEO BOX */}
              <div className="absolute w-[90%] sm:w-[85%] 2xl:w-[80%] 
                              right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                              2xl:-top-20 md:-top-16 -top-10">
                <video
                  key={currentIndex}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={videos[currentIndex]} type="video/webm" />
                </video>
              </div>

            </div>
           
          </div>
           {/* SLIDER BUTTONS */}
              <div className="flex gap-14 pt-10 justify-center ">
                
                {/* Prev < */}
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center 
                            border-2 border-[#00FF9C] text-[#00FF9C] 
                            rounded-full bg-transparent hover:bg-[#00FF9C] hover:text-black 
                            transition duration-200 text-lg"
                ><i className="fa-solid fa-angle-left"></i>
                  {""}
                </button>

                {/* Next > */}
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center 
                            border-2 border-[#00FF9C] text-[#00FF9C] 
                            rounded-full bg-transparent hover:bg-[#00FF9C] hover:text-black 
                            transition duration-200 text-lg"
                ><i className="fa-solid fa-angle-right"></i>
                  {""}
                </button>

              </div>
          </div>
        </div>
      </section>
    );
  };

  export default Sweetvideoslider;
