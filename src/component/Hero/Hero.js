import React from "react";
import styles from "./hero.module.css";
import Doctor from "../../asset/doctor.png";
import Search from "../Search/Search";

export default function Hero() {
  return (
   
      <div className={styles.hero}>
        <div>
          <div>
            <span className={styles.text}> Skip the travel! Find Online</span>{" "}
            <br />
            <span className={styles.text1}>Medical </span>{" "}
            <span className={styles.text2}>Centers</span>
          </div>
          <div className={styles.text3}>
            Connect instantly with a 24x7 specialist or choose to <br /> video
            visit a particular doctor.
          </div>
          <button className={styles.findBtn}>Find Centers</button>
        </div>
        <div>
          {/* <img className={styles.doctor} src={Doctor} alt="doctor" /> */}
        </div>
      </div>
    
  );
}

