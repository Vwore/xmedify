import React from "react";
import styles from "./header.module.css";
import logo from "../../asset/logo.png";

export default function Header() {
  return (
    <div>
      <div className={styles.top}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className={styles.navbar}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navRight}>
          <div className={styles.navLink}>Find Doctors</div>
          <div className={styles.navLink}>Hospitals</div>
          <div className={styles.navLink}>Medicines</div>
          <div className={styles.navLink}>Surgeries</div>
          <div className={styles.navLink}>Software for Providers</div>
          <div className={styles.navLink}>Facilities</div>
          <div className={styles.navLink}>
            <button className={styles.bookingBtn}>My Bookings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
