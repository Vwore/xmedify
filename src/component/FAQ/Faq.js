import React from "react";
import style from "./style.module.css";
import img from "../../asset/Faq.png";
import plus from "../../asset/plus.png";
import smile from '../../asset/smiley.png'

export default function Faq() {
  return (
    <div className={style.faq}>
      <div className={style.heading1}>Get Your Answer</div>
      <div className={style.heading2}>Frequently Asked Questions</div>
      <div className={style.container}>
        <div className={style.containerLeft}>
          <img src={img} alt="" className={style.image} />
          <div className={style.happyCard}>
            <img src={smile} />
            <div className={style.cardContainer}>
              <div className={style.cardtext1}>84k+</div>
              <div className={style.cardtext2}>Happy Patients</div>
            </div>
          </div>
        </div>
        <div className={style.containerRight}>
          <div className={style.question}>
            Why choose our medical for your family?
            <img src={plus} />
          </div>
          <div className={style.question}>
            Why we are different from others? <img src={plus} />
          </div>
          <div className={style.question}>
            Trusted & experience senior care & love
            <img src={plus} />
          </div>
          <div className={style.question}>
            How to get appointment for emergency <br />
            cases?
            <img src={plus} />
          </div>
        </div>
      </div>
    </div>
  );
}
