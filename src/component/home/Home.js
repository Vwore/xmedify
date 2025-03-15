import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import styles from "./home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Promo from "../Promo/Promo";

export default function Home({ prop }) {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <SearchBar />
      <Promo />
    </div>
  );
}
