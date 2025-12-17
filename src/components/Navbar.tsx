import React, { useState } from "react";
import logo from "../assets/logo-svg.png";
import { NavLink } from "react-router-dom"; // 👈 NavLink use karenge
import ContactPopup from "./ContactPopup";

const Navbar: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {/* Custom CSS for Text Shadow & Active Link */}
      <style>{`
        .hover-text-shadow-up:hover {
          text-shadow: 0 -5px 4px #00ff9c;
        }

        /* Active link style */
        .active-link {
          color: #00ff9c !important;
          
          ;
        }
      `}</style>

      <header className="w-full px-4 sm:px-8 md:px-16 xl:px-28 py-8 flex flex-col lg:flex-row justify-between gap-10 bg-black md:bg-white items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-black w-full lg:w-1/3 px-4 lg:px-[60px] py-1 lg:py-2 xl:py-1 rounded-[10px] justify-center">
          <img className="w-[200px]" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="border-[1px] border-[#00FF9C] outline outline-2 outline-black w-full lg:w-1/3 px-[10px] sm:px-[30px] md:px-[30px] lg:px-[10px] py-[15px] rounded-[10px] bg-black justify-center flex">
          <ul className="flex gap-5 lg:gap-6 text-sm md:text-base text-center lg:text-left">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-sm transition duration-300 hover-text-shadow-up ${
                    isActive ? "active-link" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-[14px] transition duration-300 hover-text-shadow-up ${
                    isActive ? "active-link" : "text-white"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <button
                onClick={() => setPopupOpen(true)}
                className="text-white text-[14px] transition duration-300 hover-text-shadow-up"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a
          href="tel:+48 533 630 356"
          className="bg-[#00FF9C] w-full lg:w-1/3 text-base lg:text-[20px] text-[20px] text-black font-bold px-10 lg:px-6 xl:px-10 py-4 rounded-[10px] text-center"
        >
          Contact us today!{" "}
          <i className="fa-solid fa-phone lg:text-lg text-sm"></i>
        </a>
      </header>

      {/* Contact Popup */}
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

export default Navbar;
