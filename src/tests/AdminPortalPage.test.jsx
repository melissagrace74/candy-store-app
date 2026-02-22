import { render, screen, fireEvent } from "@testing-library/react";
import AdminPortalPage from "../pages/AdminPortalPage.jsx";
import { CandyContext } from "../context/CandyContext.jsx";
import { vi } from "vitest";

const sampleCandies = [
  { id: 1, name: "Gummy Bears", description: "Chewy & sweet", origin: "USA", price: 5, aisle: "A1" },
];

describe("AdminPortalPage", () => {
  it("renders candy list", () => {
    render(
      <CandyContext.Provider value={{ candies: sampleCandies, setCandies: vi.fn() }}>
        <AdminPortalPage />
      </CandyContext.Provider>
    );

    expect(screen.getByText("Gummy Bears")).toBeInTheDocument();
  });

  it("calls deleteCandy when delete button is clicked", () => {
    const mockDelete = vi.fn();
    render(
      <CandyContext.Provider value={{ candies: sampleCandies, setCandies: vi.fn() }}>
        <AdminPortalPage deleteCandyOverride={mockDelete} />
      </CandyContext.Provider>
    );

    fireEvent.click(screen.getByText(/Delete/i));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});