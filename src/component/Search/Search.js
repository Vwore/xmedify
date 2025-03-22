import React, { useContext, useEffect, useState } from "react";
import styles from "./search.module.css";
import axios from "axios";
import { RegionDetail } from "../ContextProvider";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Search() {
  const [states, setStates] = useState([]);
  const [showState, setShowState] = useState(false);
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
      
      <FormControl style={{ width: "200px" }}>
        <InputLabel id="demo-simple-select-label">Select State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="state"
          value={state}
          label="State"
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          {states?.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ width: "200px" }}>
        <InputLabel id="select-city">Select City</InputLabel>
        <Select
          labelId="select-city"
          id="city"
          value={city}
          label="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          {cities?.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Link to="/search">
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </Link>
    </div>
  );
}
