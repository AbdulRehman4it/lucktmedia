import React from "react";

const BrandingExcellence: React.FC = () => {
  return (
    <section>
      <div className="bg-[#171717] mt-28">
        {/* ================= Branding Text Content ================= */}
        <p
          className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl 
                     px-4 sm:px-10 md:px-16 lg:px-20 
                     py-8 sm:py-12 md:py-16 lg:py-24 
                     text-white leading-[43px] sm:leading-[34px] md:leading-[42px] lg:leading-[50px]"
        >
          Branding excellence at every touchpoint. At <span className="font-semibold">FlexToday</span>, branding
          isn’t just a priority; it’s a passion. From the office space to the meticulous details in documents and
          folders, every aspect of the company’s presentation is crafted in a unified style. Even WhatsApp communication
          reflects the commitment to a cohesive brand experience. We are proud to play our little role in creating this
          exceptional brand!
        </p>
        {/* ================= End Branding Text Content ================= */}
      </div>
      
    </section>
  );
};

export default BrandingExcellence;
