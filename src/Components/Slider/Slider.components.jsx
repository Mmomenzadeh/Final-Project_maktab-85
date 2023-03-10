import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectCoverflow } from "swiper";

import "../../Assets/Styles/Components/Slider/index.scss";

export const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.uplooder.net/img/image/73/d0699b45abed988d27ccd1a65a65891a/کنسول.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.uplooder.net/img/image/59/edd04537384e22d65a3022b8f735dbf6/22b9006f6908606e9b5732dbb2392944db5ef12f-1660459495.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
