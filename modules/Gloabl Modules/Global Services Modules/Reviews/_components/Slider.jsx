"use client";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// components
import Card from "./Card";

// icons
import chevronIcon from "@/public/images/Icons/icon23.svg";

export default function Slider({ isRTL, lang, reviews }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(swiper?.realIndex);
  return (
    <div className="w-full flex justify-center items-center sm:gap-5 gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        type="button"
        className={`h-[250px] min-w-[50px] bg-[var(--main-orange-color)] flex justify-center items-center ${
          isRTL
            ? "rounded-r-[100px] rounded-l-[40px]"
            : "rounded-l-[100px] rounded-r-[40px]"
        } hover:opacity-[.9] duration-300`}
      >
        <Image
          src={chevronIcon}
          className={`w-[35px] ${isRTL ? "scale-x-1" : "scale-x-[-1]"}`}
          alt="chevron"
        />
      </button>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews?.map((item, key) => (
          <SwiperSlide key={key}>
            <Card lang={lang} active={key === activeIndex} review={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiper.slideNext()}
        type="button"
        className={`h-[250px] min-w-[50px] bg-[var(--main-orange-color)] flex justify-center items-center ${
          isRTL
            ? "rounded-r-[40px] rounded-l-[100px]"
            : "rounded-l-[40px] rounded-r-[100px]"
        } hover:opacity-[.9] duration-300`}
      >
        <Image
          src={chevronIcon}
          className={`w-[35px] ${isRTL ? "scale-x-[-1]" : "scale-x-1"}`}
          alt="chevron"
        />
      </button>
    </div>
  );
}
