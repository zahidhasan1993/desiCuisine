import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../assets/1.jpg"
import pic2 from "../../assets/2.jpg"
import pic3 from "../../assets/3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div className="mt-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-96 h-52 md:w-[100%] md:h-[35rem] rounded-lg" src={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96 h-52 md:w-[100%] md:h-[35rem] rounded-lg" src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96 h-52 md:w-[100%] md:h-[35rem] rounded-lg" src={pic3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
