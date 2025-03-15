import React from "react";
import style from "./style.module.css";
import tickIcon from "../../asset/tick.png";
import patient1 from "../../asset/patient1.png";
import patient2 from "../../asset/patient2.png";

export default function Information() {
  return (
    <div className={style.info}>
      <div className={style.left}>
        <img src={patient1} className={style.patient1} />
        <img src={patient2} className={style.patient2} />
      </div>
      <div className={style.right}>
        <div className={style.text1}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </div>
        <div className={style.text2}>
          <span style={{ color: "#1B3C74" }}>Patient</span>{" "}
          <span style={{ color: "#2AA7FF" }}>Caring</span>
        </div>
        <div className={style.text3}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </div>
        <div className={style.bullet}>
          <img src={tickIcon} />
          Stay Updated About Your Health
        </div>
        <div className={style.bullet}>
          <img src={tickIcon} />
          Check Your Results Online
        </div>
        <div className={style.bullet}>
          <img src={tickIcon} />
          Manage Your Appointments
        </div>
      </div>
    </div>
  );
}
