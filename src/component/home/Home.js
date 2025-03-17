import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import styles from "./home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Promo from "../Promo/Promo";
import Specialisation from "../Specialisation/Specialisation";
import MedicalSpecialist from "../MedicalSpecialist/MedicalSpecialist";
import Information from "../Info/Information";
import Blog from "../Blog/Blog";
import OurFamily from "../OurFamily/OurFamily";
import Faq from "../FAQ/Faq";
import Footer from "../Footer/Footer";

export default function Home({ prop }) {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <SearchBar />
      <Promo />
      <Specialisation />
      <MedicalSpecialist />
      <Information />
      <Blog />
      <OurFamily />
      <Faq />
      <Footer />
    </div>
  );
}
