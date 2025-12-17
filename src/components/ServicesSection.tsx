import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className=" mt-16 sm:mt-32">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row flex-wrap items-center md:items-start justify-between gap-6 ltext-center lg:text-left mb-28 sm:pt-8 2xl:pt-12 px-4 sm:px-8 md:px-16 lg:px-10 xl:px-28">
        <div>
          <h2 className="bg-[#00FF9C] text-black text-[48px] sm:text-[40px] font-semibold md:text-[50px] lg:text-[51px] px-3 py-1 rounded-lg inline-block mt-8 lg:mt-0">
            Services
          </h2>
        </div>

        <div className="">
          <p className="text-black font-semibold text-sm sm:text-lg leading-[28px] sm:leading-[34px] md:text-start text-center px-16 md:px-0">
            Our possibilities are not confined to a framework. Let’s <br className="md:block hidden" /> talk and
            find the perfect fit for your needs.
          </p>
        </div>

        <div className="lg:mt-6 xl:mt-0">
            <a href="https://8hnya0u21xs.typeform.com/to/UNfLKWnc?typeform-source=luckymedia.marketing">
          <button className="relative flex items-center justify-center rounded-lg border-[5px] border-black hover:border-transparent px-4 sm:px-6 py-3 text-white transition-all duration-500 group  bg-black hover:bg-white group-hover:bg-transparent">
            {/* Normal text */}
            <span className="transition-all text-sm sm:text-xl md:text-2xl duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold p-1">
              Get a service quote within
              <br className="hidden lg:block 2xl:hidden" />
              24 hours!
            </span>

            {/* Hover text */}
            <span className="absolute opacity-0 font-semibold text-[12px] sm:text-[20px] md:text-[26px] lg:text-[23px] transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] bg-black group-hover:bg-transparent text-black rounded-lg px-4 sm:px-6 py-2 border-[5px] border-black whitespace-nowrap">
              Fill out the brief
            </span>
          </button>
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-12 mt-10 2xl:px-48 xl:px-40 md:px-10 px-5">
  {[
    {
      frontBg: "bg-white",
      backBg: "bg-black",
      arrowBg: "bg-black",
      title: "Detailed strategy",
      desc: "Marketing should be based on a strategy that is understood and supported by the entire team. We’ll develop a plan that helps meet your business goals. Our prepared strategy not only includes milestones but also precisely defined tools. As industry specialists, we advise against investing in random and short-term actions."
    },
    {
      frontBg: "bg-black",
      backBg: "bg-black",
      arrowBg: "bg-[#00FF9C]",
      title: "Corporate branding",
      desc: "The primary goal of marketing is brand recognition. A consistent visual style is necessary. Is it possible that customers, upon seeing a specific color, think of your product? Yes! This is precisely what visual identity is responsible for. We’ll create for you a unique logo and brand style that you can use for everything you create."
    },
    {
      frontBg: "bg-black",
      backBg: "bg-black",
      arrowBg: "bg-[#00FF9C]",
      title: "Website solutions",
      desc: "The website is the face of the company. Whether you need a simple page, complex website or a mobile app you can rely on us. We’ll take care of optimizing your site’s presence on Google and all necessary integrations. We’ll ensure that the content on your site aligns with artificial intelligence and search engine algorithms."
    },
    {
      frontBg: "bg-white",
      backBg: "bg-black",
      arrowBg: "bg-black",
      title: "Online advertising",
      desc: "For some companies, social media is a matter of image, while for others, it’s the main sales channel. We’ll tailor a plan to you so that the cost of managing social media aligns with its objectives. We’ll create a balanced plan for paid ads and organic posts. We’ll ensure that your company’s social media looks consistent and appealing."
    }
  ].map((card, index) => (
    <div
      key={index}
      className="w-full h-[500px] [perspective:1000px] md:p-6 py-6 group"
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div
          className={`absolute w-full h-full ${card.frontBg} rounded-[40px] 
${index === 0 || index === 3 ? "shadow-[0_15px_0px_-5px_rgba(0,0,0,1)]" : ""} 
flex flex-col items-center justify-center gap-6 [backface-visibility:hidden] border border-black`}

        >
          <div className={`w-16 h-16 ${card.arrowBg} rounded-full flex items-center justify-center`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-8 h-8 ${index === 1 || index === 2 ? "text-black" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7m10 0v10"
              />
            </svg>
          </div>
          <h3 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold text-[#00ff9c] text-center leading-[64px]">
            {card.title}
          </h3>
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full ${card.backBg} rounded-[40px] text-white p-6 sm:p-8 flex items-center justify-center text-center text-[16px] sm:text-[20px] md:text-[24px] leading-[38px] sm:leading-[34px] md:leading-[38px] [backface-visibility:hidden] [transform:rotateY(180deg)]`}
        >
          <p>{card.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

export default ServicesSection;