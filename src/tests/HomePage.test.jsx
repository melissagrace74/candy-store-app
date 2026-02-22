import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage.jsx";

describe("HomePage", () => {
  it("renders welcome message", () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Sweet Candy Shop/i)).toBeInTheDocument();
  });

  it("renders a header with a rainbow gradient", () => {
    render(<HomePage />);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle("color: rgb(255, 111, 145)"); // keep original style check
  });
});