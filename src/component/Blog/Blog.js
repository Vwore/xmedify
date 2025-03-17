import React from "react";
import style from "./style.module.css";
import detox from "../../asset/detox.png";
import author from "../../asset/rebeccaLee.jpeg";

export default function Blog() {
  return (
    <div className={style.blog}>
      <div className={style.heading1}>Blog & News</div>
      <div className={style.heading2}>Read Our Latest News</div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img src={detox} className={style.image} />
          </div>
          <div className={style.details}>Medical | March 31, 2022</div>
          <div className={style.title}>
            6 Tips To Protect Your Mental Health <br />
            When You’re Sick
          </div>
          <div className={style.author}>
            <img src={author} className={style.authorImg} />
            Rebecca Lee
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img src={detox} className={style.image} />
          </div>
          <div className={style.details}>Medical | March 31, 2022</div>
          <div className={style.title}>
            6 Tips To Protect Your Mental Health <br />
            When You’re Sick
          </div>
          <div className={style.author}>
            <img src={author} className={style.authorImg} />
            Rebecca Lee
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img src={detox} className={style.image} />
          </div>
          <div className={style.details}>Medical | March 31, 2022</div>
          <div className={style.title}>
            6 Tips To Protect Your Mental Health <br />
            When You’re Sick
          </div>
          <div className={style.author}>
            <img src={author} className={style.authorImg} />
            Rebecca Lee
          </div>
        </div>
      </div>
    </div>
  );
}
