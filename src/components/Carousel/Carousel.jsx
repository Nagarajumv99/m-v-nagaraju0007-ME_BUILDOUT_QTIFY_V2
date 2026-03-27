import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LeftNavButton from "../LeftNavButton/LeftNavButton";
import RightNavButton from "../RightNavButton/RightNavButton";
import { Navigation } from "swiper/modules";

const Carousel = ({ data, renderItem }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div style={{ position: "relative", padding:"0px 30px"}}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1440: { slidesPerView: 7 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <div ref={prevRef} style={{ position: "absolute", left: 0, top: "40%", zIndex:999 }}>
        <LeftNavButton />
      </div>
      <div ref={nextRef} style={{ position: "absolute", right: 0, top: "40%", zIndex:999 }}>
        <RightNavButton />
      </div>
    </div>
  );
};

export default Carousel;