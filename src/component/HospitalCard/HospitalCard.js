import React from "react";
import style from "./style.module.css";
import icon from "../../asset/HospIcon.png";
import likeIcon from "../../asset/likeIcon.png";

export default function HospitalCard({ detail }) {
  console.log(detail);
  return (
    <div className={style.card}>
      <div className={style.icon}>
        <img src={icon} alt="hospital" />
      </div>
      <div className={style.detail}>
        <div className={style.name}>{detail["Hospital Name"]}</div>
        <div className={style.address}>
          {detail.City}, {detail.State}
        </div>
        <div className={style.type}>{detail["Hospital Type"]} </div>
        <div className={style.detail}>Free Consultation fee at clinic</div>
        <div className={style.like}>
          <img src={likeIcon} />
        </div>
      </div>
      <div className={style.booking}>
        <div className={style.booking}>Available Today</div>
        <button className={style.bookingBtn}>Book FREE Center Visit</button>
      </div>
    </div>
  );
}
