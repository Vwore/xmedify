import React from "react";
import style from "./style.module.css";
import d1 from "../../asset/d1.png";
import d2 from "../../asset/d2.png";
import d3 from "../../asset/d3.png";
import d4 from "../../asset/d4.png";
import d5 from "../../asset/d5.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const doctors = [
  { name: "Dr. Lesley Hull", specialisation: "Medicine", img: d1 },
  { name: "Dr. Ahmad Khan", specialisation: "Neurologist", img: d2 },
  { name: "Dr. Heena Sachdeva", specialisation: "Orthopadics", img: d3 },
  { name: "Dr. Ankur Sharma", specialisation: "Medicine", img: d4 },
  { name: "Dr. Ahmad Stevens", specialisation: "Neurologist", img: d5 },
];

export default function MedicalSpecialist() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className={style.medicalSpecialist}>
      <div className={style.heading}>Our Medical Specialists</div>
      <div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={4}
        >
          {doctors.map((val) => (
            <SwiperSlide>
              <div className={style.card}>
                <div className={style.image}>
                  <img src={val.img} style={{ width: "90%", height: "90%" }} />
                </div>
                <div className={style.name}>{val.name}</div>
                <div className={style.speciality}>{val.specialisation}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
