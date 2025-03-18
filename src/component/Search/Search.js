import React, { useContext, useEffect, useState } from "react";
import styles from "./search.module.css";
import axios from "axios";
import { RegionDetail } from "../ContextProvider";
import { Link } from "react-router-dom";

export default function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const { state, setState, city, setCity } = useContext(RegionDetail);
  const fetchState = async () => {
    try {
      const state = await axios.get(
        "https://meddata-backend.onrender.com/states"
      );
      // console.log(state);
      setStates(state.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCities = async () => {
    const cities = await axios.get(
      `https://meddata-backend.onrender.com/cities/${state} `
    );
    console.log(2, cities);
    setCities(cities.data);
  };

  useEffect(() => {
    fetchState();
  }, []);

  useEffect(() => {
    if (state !== "") {
      console.log(1);
      fetchCities();
    }
  }, [state]);

  return (
    <div className={styles.search}>
      <div id="state">
        <select
          name="state"
          className={styles.input}
          placeholder="Select State"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value={""} disabled>
            Select State
          </option>
          {states?.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>
      <div id="city">
        {state ? (
          <select
            className={styles.input}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value={""}>Select City</option>
            {cities?.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        ) : (
          <select className={styles.input} disabled>
            <option>Select City</option>
          </select>
        )}
      </div>
      <Link to='/search'>
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </Link>
    </div>
  );
}
