"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative w-full mt-0 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://static.pw.live/production-gurukulam/static/images/landing-page/PW_Varanasi_Banner2.jpg"
            alt="banner 1"
            width={1229}
            height={440}
            className="object-cover w-full h-[440px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://static.pw.live/production-gurukulam/static/images/landing-page/PW_Varanasi_Banner1.jpg"
            alt="banner 0"
            width={1229}
            height={440}
            className="object-cover w-full h-[440px] cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
