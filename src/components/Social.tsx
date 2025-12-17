import React from "react";
import SocialMediaSlider from "./SocialMediaSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

import "./Social.css";

// Import images
// bn
import phoneImg2 from "../assets/gta-0111.webp";
import sliderImg1 from "../assets/4-salider (1).webp";
import sliderImg2 from "../assets/4-salider (2).webp";
import sliderImg3 from "../assets/4-salider (3).webp";
import sliderImg4 from "../assets/4-salider (4).webp";
import sliderImg5 from "../assets/4-salider (5).webp";
import sliderImg6 from "../assets/4-salider (7).webp";


const Social: React.FC = () => {
  return (
    <section>
      <div className="bg-black flex flex-col lg:flex-row py-16 2xl:py-24 mt-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/3">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h2 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-4xl xl:text-[44px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Social media
            </h2>
          </div>

          {/* Mobile Video (Phone Mockup Style) */}
          <div className="flex justify-start mt-16 sm:mt-20 md:mt-28 lg:mt-60">
            <div className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[85%] 
                          relative h-[220px] md:h-[460px] lg:h-[220px] 2xl:h-[400px]">
              {/* Rotated Phone Frames */}
              <div>
                {/* <div className="relative -rotate-12 xl:-right-10 lg:-right-5 -right-2">
                  <img
                    src={phoneImg1}
                    alt="Phone 1"
                    className="md:w-[200px] w-[120px] h-[250px] md:h-[450px] 2xl:w-[250px] 2xl:h-[580px] object-cover animate-down"
                  />
                </div> */}
                <div className="absolute -rotate-12 lg:-top-28 2xl:-top-40 lg:-right-10 2xl:-right-24 right-10 -top-8">
                  <img
                    src={phoneImg2}
                    alt="Phone 2"
                    className="md:w-[450px] lg:w-[350px] w-[240px] h-[290px] md:h-[450px] 2xl:w-[550px] 2xl:h-[780px] object-cover animate-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-2/3 mt-52 lg:mt-0 px-4">
          {/* First Swiper with Coverflow & Autoplay */}
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={800}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide><img src={sliderImg1} alt="Slide 1" width="100%" /></SwiperSlide>
            <SwiperSlide><img src={sliderImg2} alt="Slide 2" width="100%" /></SwiperSlide>
            <SwiperSlide><img src={sliderImg3} alt="Slide 3" width="100%" /></SwiperSlide>
            <SwiperSlide><img src={sliderImg4} alt="Slide 4" width="100%" /></SwiperSlide>
            <SwiperSlide><img src={sliderImg5} alt="Slide 5" width="100%" /></SwiperSlide>
            <SwiperSlide><img src={sliderImg6} alt="Slide 6" width="100%" /></SwiperSlide>
          </Swiper>

          {/* Description */}
          <div className="text-center flex justify-center mt-8">
            <p className="text-white text-sm sm:text-lg md:text-xl leading-[36px] sm:leading-[28px] lg:leading-[36px] text-center md:w-[80%] w-full pb-10">
              Our vibrant social media posts are crafted to captivate and engage
              the right audience. With a focus on tailored content, we ensure
              each post resonates, driving engagement and results. One of our
              favourite campaigns not only hit the mark but also garnered
              congratulations for our marketing team directly from the audience,
              affirming our dedication to create content that truly connects.
            </p>
          </div>

          {/* Second Swiper */}
          <div className="2xl:px-40 xl:px-20 md:px-10">
            <SocialMediaSlider />
          </div>
          {/* <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="mySwiper2 overflow-hidden"
          >
            <SwiperSlide><img src={slider2Img1} alt="Slider 1" className="w-full h-[400px] object-cover" /></SwiperSlide>
            <SwiperSlide><img src={slider2Img2} alt="Slider 2" className="w-full h-[400px] object-cover" /></SwiperSlide>
            <SwiperSlide><img src={slider2Img3} alt="Slider 3" className="w-full h-[400px] object-cover" /></SwiperSlide>
            <SwiperSlide><img src={slider2Img4} alt="Slider 4" className="w-full h-[400px] object-cover" /></SwiperSlide>
            <SwiperSlide><img src={slider2Img5} alt="Slider 5" className="w-full h-[400px] object-cover" /></SwiperSlide>
            <SwiperSlide><img src={slider2Img6} alt="Slider 6" className="w-full h-[400px] object-cover" /></SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Social;
