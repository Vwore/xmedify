import React, { useState } from "react";
import style from "./style.module.css";
import icon from "../../asset/HospIcon.png";
import likeIcon from "../../asset/likeIcon.png";
import { useScrollTrigger } from "@mui/material";
import BookingPanel from "./BookingPanel/BookingPanel";
import { format } from "date-fns";

export default function HospitalCard({ detail, isBooked = false }) {
  console.log(detail);
  const [showBookingPanel, setShowBookingPanel] = useState(false);
  return (
    <>
      <div className={style.card}>
        <div className={style.cardDisplay}>
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
          {isBooked ? (
            <div className={style.bookingDetail}>
              <div className={style.bookingTime}>{detail.time}</div>
              <div className={style.bookingDate}>
                {format(detail.date, "dd/MM/yy")}
              </div>
            </div>
          ) : (
            <div className={style.booking}>
              <div className={style.booking}>Available Today</div>
              <button
                className={style.bookingBtn}
                onClick={() => {
                  console.log("book");
                  setShowBookingPanel(!showBookingPanel);
                }}
              >
                Book FREE Center Visit
              </button>
            </div>
          )}
        </div>
        {showBookingPanel ? <BookingPanel detail={detail} /> : null}
      </div>
    </>
  );
}
