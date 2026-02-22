// src/context/CandyContext.jsx
import { createContext, useState, useEffect } from "react";

export const CandyContext = createContext();

const defaultCandies = [
  { id: 1, name: "Rainbow Lollipops", description: "Sweet, colorful lollipops for everyone!", origin: "USA", price: 2.5, aisle: "Aisle 1" },
  { id: 2, name: "Chocolate Truffles", description: "Rich, creamy, and perfect for chocolate lovers.", origin: "Belgium", price: 5.0, aisle: "Aisle 2" },
  { id: 3, name: "Gummy Bears", description: "Chewy, fruity, and colorful bears.", origin: "Germany", price: 3.0, aisle: "Aisle 3" },
  { id: 4, name: "Cotton Candy", description: "Fluffy and sweet pink clouds of fun!", origin: "USA", price: 1.5, aisle: "Aisle 1" },
  { id: 5, name: "Sour Worms", description: "Tangy and chewy worms to tickle your taste buds.", origin: "Mexico", price: 3.25, aisle: "Aisle 3" },
  { id: 6, name: "Caramel Chews", description: "Soft, buttery caramel that melts in your mouth.", origin: "France", price: 4.0, aisle: "Aisle 2" },
  { id: 7, name: "Peppermint Swirls", description: "Cool, refreshing, and perfectly minty.", origin: "USA", price: 2.75, aisle: "Aisle 4" },
  { id: 8, name: "Chocolate-Covered Almonds", description: "Crunchy almonds dipped in smooth chocolate.", origin: "Italy", price: 6.0, aisle: "Aisle 2" },
];

export function CandyProvider({ children }) {
  const [candies, setCandies] = useState(defaultCandies);

  // Optional: fetch live candies from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/candies")
      .then((res) => res.json())
      .then((data) => setCandies(data)) // or setCandies(data.candies) if fetching full db.json
      .catch((err) => console.error("Failed to fetch candies, using defaults:", err));
  }, []);

  return (
    <CandyContext.Provider value={{ candies, setCandies }}>
      {children}
    </CandyContext.Provider>
  );
}