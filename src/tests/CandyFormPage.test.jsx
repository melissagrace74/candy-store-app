import { render, screen } from "@testing-library/react";
import CandyFormPage from "../pages/CandyFormPage.jsx";
import { CandyContext } from "../context/CandyContext.jsx";
import { vi } from "vitest";

describe("CandyFormPage", () => {
  it("renders the candy form fields", () => {
    render(
      <CandyContext.Provider value={{ addCandy: vi.fn() }}>
        <CandyFormPage />
      </CandyContext.Provider>
    );

    expect(screen.getByPlaceholderText(/Candy Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Origin/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Price/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Aisle/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Add Candy/i })).toBeInTheDocument();
  });
});