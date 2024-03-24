"use client";
import { useState } from "react";
import Image from "next/image";
import "@/styles/swiper.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Member from "./Member";

// icons
import chevronIcon from "@/public/images/Icons/icon23.svg";

export default function TeamSlider({ lang, isRTL, team }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="lg:h-[350px] h-auto flex lg:items-center items-start lg:gap-5 gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        type="button"
        className={`lg:hidden lg:h-full h-[250px] lg:min-w-[80px] sm:min-w-[60px] min-w-[50px] bg-[var(--main-blue-color)] flex justify-center items-center ${
          isRTL
            ? "rounded-r-[100px] rounded-l-[40px]"
            : "rounded-l-[100px] rounded-r-[40px]"
        } hover:opacity-[.9] duration-300 mb-[34px] relative top-[50px]`}
      >
        <Image
          src={chevronIcon}
          className={`lg:w-[70px] w-[50px] ${
            isRTL ? "scale-x-1" : "scale-x-[-1]"
          }`}
          alt="chevron"
        />
      </button>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
        grabCursor={true}
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {team?.map((item, key) => (
          <SwiperSlide key={key}>
            <Member lang={lang} member={item} isRTL={isRTL} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiper.slideNext()}
        type="button"
        className={`lg:h-full h-[250px] lg:min-w-[80px] sm:min-w-[60px] min-w-[50px] lg:bg-[var(--main-orange-color)] bg-[var(--main-blue-color)] flex justify-center items-center ${
          isRTL
            ? "rounded-r-[40px] rounded-l-[100px]"
            : "rounded-l-[40px] rounded-r-[100px]"
        } hover:opacity-[.9] duration-300 mb-[34px] relative top-[50px] lg:top-0`}
      >
        <Image
          src={chevronIcon}
          className={`lg:w-[70px] w-[50px] ${
            isRTL ? "scale-x-[-1]" : "scale-x-1"
          }`}
          alt="chevron"
        />
      </button>
    </div>
  );
}
