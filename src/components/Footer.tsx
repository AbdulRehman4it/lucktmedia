import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/kwadrat-na-strone-01.png"; // import the logo
// import linkdin from "../assets/linkedin_250544.svg"

const Footer: React.FC = () => {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const togglePolicy = (policy: string) => {
    setOpenPolicy(openPolicy === policy ? null : policy);
  };

  return (
    <footer className="bg-[#00FF9C] text-black pt-20 pb-8 px-4 sm:px-8 md:px-16 lg:px-10 xl:px-28">
      <div className="max-w-full flex flex-col sm:flex-row flex-wrap justify-between gap-8">
        {/* Logo + Social */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="mb-4">
            <img className="w-[223px] sm:w-[137px] rounded-lg" src={logo} alt="Logo" />
          </div>
          <div className="flex gap-3 flex-wrap justify-center sm:justify-start pt-4">
            {/* <a href="https://www.linkedin.com/company/lucky-media-marketing/ " target="_blank" rel="">
    <img
      src={linkdin}
      alt="LinkedIn"
      className="w-6 h-6"  // 🔥 FIX ADDED HERE
    />
  </a> */}
            {/* <a href="#" className="text-black hover:text-gray-700">
              <i className="fa-brands fa-facebook text-[28px]"></i>
            </a> */}
            <a href="https://www.linkedin.com/company/lucky-media-marketing/ " className="text-black">
              <i className="fa-brands fa-linkedin-in text-lg"></i>
            </a>
            <span className="text-lg"> Follow us!</span>
          </div>
        </div>

        {/* Timings */}
        <div className="text-center sm:text-left text-[14px]">
          <h3 className="font-bold text-[26px]">We are open!</h3>

          {/* Large screen */}
          <div className="hidden sm:flex gap-10 items-center pt-6">
            <div className="flex justify-center sm:justify-start">
              <p className="font-bold">Monday -&nbsp;</p>
              <p className="font-bold">Friday</p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <p>08:00 -&nbsp;</p>
              <p>16:00</p>
            </div>
          </div>

          {/* Small screen */}
          <div className="block sm:hidden mb-6">
            <div className="flex gap-4 justify-center sm:justify-start mt-6">
              <p className="font-bold">Monday - Friday</p>
              <p>08:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left text-[14px]">
  <div className="mb-3">
    <p className="font-bold flex justify-center sm:justify-start items-center gap-2">
      <i className="fa-regular fa-envelope-open"></i> E-mail us here:
    </p>

    {/* Email Clickable */}
    <a
      href="mailto:hi@luckymedia.marketing"
      className="break-all hover:underline"
    >
      hi@luckymedia.marketing
    </a>
  </div>

  <div className="mb-3">
    <p className="font-bold flex justify-center sm:justify-start items-center gap-2 mt-4">
      <i className="fa-brands fa-whatsapp"></i> WhatsApp/call here:
    </p>

    {/* WhatsApp Clickable */}
    <a
      href="https://wa.me/48533630356"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      +48 533 630 356
    </a>
  </div>
</div>

        {/* Links with Smooth Dropdown */}
        <div className="flex flex-col gap-4 text-center sm:text-left w-full sm:w-auto">
          {/* Privacy Policy */}
          <div>
            <a
              href="#"
              className="font-bold cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                togglePolicy("privacy");
              }}
            >
              Privacy policy
            </a>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openPolicy === "privacy" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 shadow text-sm leading-6 ">
                By providing us with any <br /> information, you agree to <br /> the processing of data in accordance <br /> with the <Link to="/Privacy" className="font-bold cursor-pointer">
            Privacy policy
          </Link>
              </div>
            </div>
          </div>

          {/* Cookies Policy */}
          <div>
            <a
              href="#"
              className="font-bold cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                togglePolicy("cookies");
              }}
            >
              Cookies policy
            </a>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openPolicy === "cookies" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 text-sm leading-6">
                Get to know why we ask you to <br /> accept our <Link to="/Cookies" className="font-bold cursor-pointer">
            Cookies policy
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 px-4">
        All rights reserved: Lucky Media www.luckymedia.marketing ©
      </div>
    </footer>
  );
};

export default Footer;
