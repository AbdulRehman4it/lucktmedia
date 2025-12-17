import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./CustomSlider.css";


// Images import
import slider2Img1 from "../assets/salider1 (1).webp";
import slider2Img2 from "../assets/salider1 (2).webp";
import slider2Img3 from "../assets/salider1 (3).webp";
import slider2Img4 from "../assets/salider1 (4).webp";
import slider2Img5 from "../assets/salider1 (5).webp";
import slider2Img6 from "../assets/salider1 (6).webp";

const SocialMediaSlider: React.FC = () => {
  return (
    <div className="custom-slider-container">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="custom-slider"
      >
        <SwiperSlide>
          <img src={slider2Img1} className="custom-slide-img" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2Img2} className="custom-slide-img" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2Img3} className="custom-slide-img" alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2Img4} className="custom-slide-img" alt="slide4" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={slider2Img5} className="custom-slide-img" alt="slide4" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={slider2Img6} className="custom-slide-img" alt="slide4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SocialMediaSlider;
