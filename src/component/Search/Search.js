import React from "react";
import styles from './search.module.css'

export default function Search() {
  return (
    <div className={styles.search}>
      <input className={styles.input} placeholder="State"></input>
      <input className={styles.input} placeholder="City"></input>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}
