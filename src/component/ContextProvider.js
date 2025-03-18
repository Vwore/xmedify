import { createContext, useState } from "react";

// Create Context
export const RegionDetail = createContext();

export const DetailProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <RegionDetail.Provider value={{ city, setCity, state, setState }}>
      {children}
    </RegionDetail.Provider>
  );
};
