import React from "react";
import Search from "../Search/Search";
import style from "./searchBar.module.css";
import Doctor from "../../asset/Doctor2.png";
import Lab from "../../asset/ae.png";
import Hospital from "../../asset/Hospital.png";
import Capsule from "../../asset/Capsule.png";
import Ambulance from "../../asset/Ambulance.png";

const boxes = [
  { name: "Doctors", img: Doctor },
  { name: "Labs", img: Lab },
  { name: "Hospitals", img: Hospital },
  { name: "Medical Store", img: Capsule },
  { name: "Ambulance", img: Ambulance },
];

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Search />
      </div>
      <div className={style.text}>You may be looking for</div>
      <div className={style.cardDisplay}>{boxes.map((value)=>(<div className={style.card}>
        {<img src={value.img} alt="icon" />}
        {value.name}
      </div>))}</div>
    </div>
  );
}
