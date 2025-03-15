import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Promo1 from "../../asset/promo1.png";
import Promo2 from "../../asset/promo2.png";
import style from './style.module.css'

export default function Promo() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className={style.promo}>
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={3}
    >
      <SwiperSlide>
        <img src={Promo1} alt="promo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Promo2} alt="promo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Promo1} alt="promo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Promo2} alt="promo" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
