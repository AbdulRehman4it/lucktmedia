import React from "react";

const WorkShowcase: React.FC = () => {
  return (
    <section id="home">
      <div>
        {/* 🔸 Main Heading */}
        <div className="px-4 sm:px-10 md:px-20  pt-10 sm:pt-20 lg:pt-[90px]">
          <h1
            className="text-center justify-center 
              text-[72px] sm:text-[32px] md:text-[42px] lg:text-[72px] 
              font-bold
              leading-[75px] sm:leading-[42px] md:leading-[55px] lg:leading-[80px]"
          >
            See our work
          </h1>
        </div>


        {/* 🔸 Subheading */}
        <div className="flex justify-center pt-10 text-center">
          <h2
            className="rounded-md p-4 
              text-sm sm:text-2xl md:text-[32px] lg:text-5xl 
              font-bold 
              leading-[20px] sm:leading-[35px] md:leading-[45px] lg:leading-[65px] 
              bg-[#00FF9C]"
          >
            We are fortunate to have wonderful clients!
          </h2>
        </div>

        <div>
          <p
          className="text-center 
            text-sm sm:text-lg md:text-xl lg:text-2xl
            px-5 sm:px-10 md:px-20 lg:px-[120px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[43px] 
            mt-6 sm:mt-8 md:mt-10"
        >
          We’ve successfully executed numerous online campaigns across various
          industries, specializing in comprehensive marketing strategies that
          engage your target audience and deliver measurable results. Our
          approach focuses on selecting the best tools to meet your business
          needs, ensuring your marketing funnel flows seamlessly from start to
          finish. While our clients’ advertising strategies, results and budgets
          are confidential, we’re excited to discuss how we can create tailored
          solutions for your business.
        </p>
        </div>

        {/* 🔸 Call-to-Action Button */}
        <div className="text-center justify-center flex pt-8 sm:pt-8 lg:pt-12">
            <a href="https://8hnya0u21xs.typeform.com/to/UNfLKWnc?typeform-source=luckymedia.marketing">
          <button
            className="relative flex items-center justify-center rounded-xl border-[3px] border-black hover:border-transparent 
              px-3 sm:px-6 py-2 font-worksans text-black transition-all duration-500 group"
          >
            {/* Normal text */}
            <span
              className="transition-all 
                text-[12px] sm:text-[18px] md:text-[24px] lg:text-[31px]
                duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold p-1"
            >
              Get your marketing package today
            </span>

            {/* Hover text */}
            <span
              className="absolute opacity-0 font-semibold 
                text-[12px] sm:text-[18px] md:text-[24px] lg:text-[31px] 
                transition-all duration-500 group-hover:opacity-100 
                group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] bg-white rounded-lg 
                px-3 sm:px-6 py-2 border-[5px] border-black whitespace-nowrap"
            >
              Fill out the brief
            </span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
