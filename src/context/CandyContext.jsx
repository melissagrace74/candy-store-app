import { createContext, useState, useEffect } from "react";
import { getCandies } from "../api/candies.js";

export const CandyContext = createContext();

export function CandyProvider({ children }) {
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    fetchCandies();
  }, []);

  const fetchCandies = () => {
    getCandies()
      .then((res) => setCandies(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <CandyContext.Provider value={{ candies, setCandies, fetchCandies }}>
      {children}
    </CandyContext.Provider>
  );
}
