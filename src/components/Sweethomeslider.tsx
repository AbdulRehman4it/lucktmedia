import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Sweethomeslider.css";
import { sliderConfig } from "../sliderConfig";
// Alag-alag imports
import img1 from "../assets/socialmedia-posts (1).webp";
import img2 from "../assets/socialmedia-posts (2).webp";
import img3 from "../assets/socialmedia-posts (3).webp";
import img4 from "../assets/socialmedia-posts (4).webp";
import img5 from "../assets/socialmedia-posts (5).webp";
import img6 from "../assets/socialmedia-posts (6).webp";


const Sweethomeslider: React.FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        {...sliderConfig}
        className="mySwiper w-full"
      >
        <SwiperSlide><img src={img1} alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="slide5" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="slide6" /></SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};

export default Sweethomeslider;
