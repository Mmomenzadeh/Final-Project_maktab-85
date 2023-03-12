import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination } from "swiper";
import "../../Assets/Styles/Components/Slider/index.scss";

export const Slider = () => {
  return (
    <div className="slider-container ">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        
        className="mySwiper"
      >
        <SwiperSlide>
          1
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </div>
  );
};
