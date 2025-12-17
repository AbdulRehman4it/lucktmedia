import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Alag-alag imports (14 images)
import img1 from "../assets/flextoday-02 (1).webp";
import img2 from "../assets/flextoday-02 (2).webp";
// import img3 from "../assets/flextoday-02 (3).webp";
import img4 from "../assets/flextoday-02 (4).webp";
import img5 from "../assets/flextoday-02 (5).webp";
import img6 from "../assets/flextoday-02 (6).webp";
import img7 from "../assets/flextoday-02 (7).webp";
import img8 from "../assets/flextoday-02 (1).webp";
import img9 from "../assets/flextoday-02 (2).webp";
// import img10 from "../assets/flextoday-02 (3).webp";
import img11 from "../assets/flextoday-02 (4).webp";
import img12 from "../assets/flextoday-02 (5).webp";
import img13 from "../assets/flextoday-02 (6).webp";
import img14 from "../assets/flextoday-02 (7).webp";

const images: string[] = [
  img1, img2,  img4, img5, img6, img7,
  img8, img9,  img11, img12, img13, img14
];

const getSlidesPerView = (width: number): number => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  if (width < 1440) return 4;
  return 6;
};

const Slider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(getSlidesPerView(window.innerWidth));

  // Responsive resize
  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (): void => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = (): void => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="xl:mx-28 md:mx-10">
      <div className="relative w-full overflow-hidden mt-20 mb-10">
        <div className="flex items-center justify-center gap-4 relative">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 border-2 border-[#00ff99] text-[#00ff99] rounded-full flex items-center justify-center z-[9999] bg-transparent"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Container */}
          <div className="flex w-full justify-center relative h-56 2xl:h-96">
            {images.map((img, index) => {
              let offset = (index - current) % images.length;
              if (offset > images.length / 2) offset -= images.length;
              if (offset < -images.length / 2) offset += images.length;

              const absOffset = Math.abs(offset);
              const scale = 1 - absOffset * 0.15; // gradually smaller side slides
              const translateX = offset * 160;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex: 100 - absOffset
                  }}
                  animate={{
                    transform: `translateX(${translateX}px) scale(${scale})`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="w-auto h-52 2xl:h-[350px] object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 border-2 border-[#00ff99] text-[#00ff99] rounded-full flex items-center justify-center z-[9999] bg-transparent"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
