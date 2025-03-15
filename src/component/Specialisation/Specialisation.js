import React from "react";
import style from "./style.module.css";
import dentistry from "../../asset/Dentistry.png";
import PrimaryCare from "../../asset/PrimaryCare.png";
import Cardiology from "../../asset/Cardiology.png";
import MRI from "../../asset/MRIResonance.png";
import BloodTest from "../../asset/BloodTest.png";
import Piscology from "../../asset/Piscologist.png";
import Xray from "../../asset/xray.png";

const specialisation = [
  { name: "Dentistry", img: dentistry },
  { name: "Primary Care", img: PrimaryCare },
  { name: "Cardiology", img: Cardiology },
  { name: "MRI Resonance", img: MRI },
  { name: "Blood Test", img: BloodTest },
  { name: "Piscologist", img: Piscology },
  { name: "Laboratory", img: dentistry },
  { name: "X-Ray", img: Xray },
];

export default function Specialisation() {
  return (
    <div className={style.specialisation}>
      <div className={style.heading}> Find by specialisation</div>
      <div className={style.container}>
        {specialisation.map((value) => (
          <div className={style.card}>
            <img src={value.img} alt="img" />
            <p>{value.name}</p>
          </div>
        ))}
      </div>
      <div className={style.viewAll}><button className={style.btn}>View All</button></div>
    </div>
  );
}
