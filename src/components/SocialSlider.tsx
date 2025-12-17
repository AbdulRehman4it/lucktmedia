import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./SocialSlider.css";
import { sliderConfig } from "../sliderConfig";
// Alag-alag imports
import img1 from "../assets/walentynki.webp";
import img2 from "../assets/employ.webp";
import img3 from "../assets/scannenenwerken.webp";
import img4 from "../assets/forklift.webp";
import img5 from "../assets/hiringmachanic.webp";
import img6 from "../assets/catline.webp";
import img7 from "../assets/Heartbeat.webp";
import img8 from "../assets/loading.webp";
import img9 from "../assets/industrial.webp";
import img10 from "../assets/heart.webp";
import img11 from "../assets/thankyou.webp";
import img12 from "../assets/music.webp";

const SocialSlider: React.FC = () => {
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
        <SwiperSlide><img src={img7} alt="slide7" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="slide8" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="slide9" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="slide10" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="slide11" /></SwiperSlide>
        <SwiperSlide><img src={img12} alt="slide12" /></SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};

export default SocialSlider;
