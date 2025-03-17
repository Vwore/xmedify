import React from "react";
import style from "./style.module.css";
import patient from "../../asset/family/patient.png";
import hospital from "../../asset/family/hospital.png";
import lab from "../../asset/family/laboratory.png";
import doctor from "../../asset/family/doctor.png";

export default function OurFamily() {
  return (
    <div className={style.Family}>
      <div className={style.left}>
        <div className={style.text1}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </div>
        <div className={style.text2}>Our Families</div>
        <div className={style.text3}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </div>
      </div>
      <div className={style.right}>
        <div className={`${style.card} ${style.card1}`}>
          <img className={style.cardImg} src={patient} alt="icon" />
          <div className={style.cardNum}>5000+</div>
          <div className={style.cardTitle}>Happy Patient</div>
        </div>

        <div className={`${style.card} ${style.card2}`}>
          <img className={style.cardImg} src={hospital} alt="icon" />
          <div className={style.cardNum}>200+</div>
          <div className={style.cardTitle}>Hospitals</div>
        </div>
        <div className={`${style.card} ${style.card3}`}>
          <img className={style.cardImg} src={lab} alt="icon" />
          <div className={style.cardNum}>1000+</div>
          <div className={style.cardTitle}>Laboratories</div>
        </div>
        <div className={`${style.card} ${style.card4}`}>
          <img className={style.cardImg} src={doctor} alt="icon" />
          <div className={style.cardNum}>700+</div>
          <div className={style.cardTitle}>Expert Doctors</div>
        </div>
      </div>
    </div>
  );
}
