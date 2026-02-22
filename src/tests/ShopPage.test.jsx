// src/tests/ShopPage.test.jsx
import { render, screen } from "@testing-library/react";
import ShopPage from "../pages/ShopPage.jsx";
import { CandyContext } from "../context/CandyContext.jsx";

const sampleCandies = [
  { id: 1, name: "Gummy Bears", description: "Chewy & sweet", origin: "USA", price: 5, aisle: "A1" },
  { id: 2, name: "Chocolate Bar", description: "Rich cocoa", origin: "Belgium", price: 3, aisle: "B2" },
];

describe("ShopPage", () => {
  it("renders candy names", () => {
    render(
      <CandyContext.Provider value={{ candies: sampleCandies }}>
        <ShopPage />
      </CandyContext.Provider>
    );
    expect(screen.getByText("Gummy Bears")).toBeInTheDocument();
    expect(screen.getByText("Chocolate Bar")).toBeInTheDocument();
  });

  it("renders candy descriptions and prices", () => {
    render(
      <CandyContext.Provider value={{ candies: sampleCandies }}>
        <ShopPage />
      </CandyContext.Provider>
    );
    expect(screen.getByText("Chewy & sweet")).toBeInTheDocument();
    expect(screen.getByText("$5.00")).toBeInTheDocument();
    expect(screen.getByText("Rich cocoa")).toBeInTheDocument();
    expect(screen.getByText("$3.00")).toBeInTheDocument();
  });
});