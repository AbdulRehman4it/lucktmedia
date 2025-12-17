import React from "react";
import fit8Img from "../assets/fit8-01.webp"; // ✅ Import image

const NewWebsite: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
        
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center w-full px-5 sm:px-12 md:px-16">
          
          {/* Title */}
          <div className="flex justify-center lg:justify-start">
            <h2
              className="inline-block 
              text-xl sm:text-4xl md:text-[45px] lg:text-5xl xl:text-[40px]
              font-extrabold text-black bg-[#00ff99] 
              px-3 sm:px-5 py-3 sm:py-6 rounded-lg mb-10"
            >
              New website
            </h2>
          </div>

          {/* Paragraph */}
          <div>
            <p
              className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 
              text-sm sm:text-base md:text-xl 
              text-center lg:text-start"
            >
              A clean, bright design that leads customers directly to ordering
              their diet plan. We focused on clear, concise information, making
              it easy for users to find key details about diets, prices, and
              delivery options. Developed with Elementor and custom code, the
              website allows the company owner to easily update essential
              content. Our aim is to make our clients more self-sufficient,
              reducing their reliance on us—unless, of course, they prefer to
              rely on us.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
          <img src={fit8Img} alt="New Website Preview" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default NewWebsite;
