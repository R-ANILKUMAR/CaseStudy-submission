// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/static/images/offers/offer1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/static/images/offers/offer2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/static/images/offers/offer3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/static/images/offers/offer4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/static/images/offers/offer5.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
