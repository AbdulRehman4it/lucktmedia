import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Powerflameslider.css";
import { sliderConfig } from "../sliderConfig";
// Alag-alag imports
// import img1 from "../assets/product-photography (1).png";
import img2 from "../assets/product-photography (2).webp";
import img3 from "../assets/product-photography (3).webp";
import img4 from "../assets/product-photography (4).webp";
import img5 from "../assets/product-photography (5).webp";
import img6 from "../assets/product-photography (6).webp";
import img7 from "../assets/product-photography (7).webp";
import img8 from "../assets/product-photography (8).webp";
import img9 from "../assets/product-photography (9).webp";
// import img10 from "../assets/heart.png";
// import img11 from "../assets/thankyou.jpg";
// import img12 from "../assets/music.png";

const Powerflameslider: React.FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        {...sliderConfig}
        className="mySwiper w-full"
      >
        {/* <SwiperSlide><img src={img1} alt="slide1" /></SwiperSlide> */}
        <SwiperSlide><img src={img2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="slide5" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="slide6" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="slide7" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="slide8" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="slide9" /></SwiperSlide>
        {/* <SwiperSlide><img src={img10} alt="slide10" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="slide11" /></SwiperSlide>
        <SwiperSlide><img src={img12} alt="slide12" /></SwiperSlide> */}
      </Swiper>

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};

export default Powerflameslider;
