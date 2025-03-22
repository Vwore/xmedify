import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RegionDetail } from "../ContextProvider";
import axios from "axios";
import style from "./style.module.css";
import HospitalCard from "../HospitalCard/HospitalCard";

export default function SearchResult() {
  const [hospitals, setHospitals] = useState([]);
  const { state, city } = useContext(RegionDetail);
  console.log("context", state, city);
  // https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name> (e.g., https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA)

  const fetchHospitals = async ({ state, city }) => {
    try {
      const hospitalsRes = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      setHospitals(hospitalsRes.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchHospitals({ state, city });
  }, []);
  return (
    <div>
      <Header />
      <div className={style.searchResult}>
        <h1>
          {hospitals?.length} medical centers available in {city.toLowerCase()}
        </h1>
        <h4>
          Book appointments with minimum wait-time & verified doctor details
        </h4>
        <div className={style.cardContainer}>
          {hospitals.map((value) => (
            <HospitalCard detail={value} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
