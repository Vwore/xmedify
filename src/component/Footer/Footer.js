import React from "react";
import style from "./style.module.css";
import logo from "../../asset/MedifyLogo.png";
import pinterest from "../../asset/pinterest.png";
import facebook from "../../asset/facebook.png";
import youtube from "../../asset/youtube.png";
import twitter from "../../asset/twitter.png";
import arrow from "../../asset/arrow.png";

const links = [
  "About Us",
  "Orthology",
  "About Us",
  "Our Pricing",
  "Neurology",
  "Our Pricing",
  "Our Gallery",
  "Dental Care",
  "Our Gallery",
  "Appointment",
  "Opthalmology",
  "Appointment",
  "Privacy Policy",
  "Cardiology",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.main}>
        <div className={style.icons}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.social}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={pinterest} alt="pinterest" />
          </div>
        </div>
        <div className={style.links}>
          {links.map((value) => (
            <div className={style.link}>
              <div>
                <img src={arrow} />
              </div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.copyright}>
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </div>
    </div>
  );
}
