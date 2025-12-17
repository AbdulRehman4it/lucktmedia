import React, { useState } from "react";

// Import images
import flameImg from "../assets/flame.svg";
import sweethomeImg from "../assets/sweethome.svg";
import logozImg from "../assets/logoz.svg";
import xImg from "../assets/x.svg";
import fitImg from "../assets/fit.svg";
import selfImg from "../assets/self.svg";
import konfedImg from "../assets/konfed.svg";
import samsaraImg from "../assets/samsara.svg";
import workImg from "../assets/work.svg";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "powerflame", label: "flame", img: flameImg, className: "" },
    { id: "sweethome", label: "sweethome", img: sweethomeImg, className: "" },
    { id: "torbaz", label: "torbaz", img: logozImg, className: "" },
    { id: "x", label: "x", img: xImg, className: "" },
    { id: "fitdieta", label: "fit", img: fitImg, className: "" },
    { id: "selflob", label: "selflob", img: selfImg, className: "" },
    { id: "konfed", label: "konfed", img: konfedImg, className: "" },
    { id: "samsara", label: "samsara", img: samsaraImg, className: "" },
    { id: "worktoday", label: "worktoday", img: workImg, className: "" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Open Button */}
      {!isOpen && (
        <button
          className="fixed top-1/2 -translate-y-1/2 z-[9999] bg-[#00FF9C] text-black px-2 py-1 text-2xl rounded"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-40 shadow-2xl transform bg-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9999]`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-3 bg-white border-b">
          <button
            className="bg-[#00FF9C] text-black px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items with Scroll */}
        <ul className="flex flex-col overflow-y-auto h-[calc(100%-60px)]">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`flex flex-col items-center justify-center text-center gap-1 px-4 py-6 ${section.className}`}
            >
              <img src={section.img} alt={section.label} className="object-contain" />
              {/* <span className="text-sm font-semibold">{section.label}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
