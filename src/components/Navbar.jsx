// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#FFB6C1", padding: "1rem" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "1rem",
          textDecoration: isActive ? "underline" : "none",
          color: "black",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        style={({ isActive }) => ({
          marginRight: "1rem",
          textDecoration: isActive ? "underline" : "none",
          color: "black",
        })}
      >
        Shop
      </NavLink>
      <NavLink
        to="/admin-portal"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
          color: "black",
        })}
      >
        Admin Portal
      </NavLink>
    </nav>
  );
}
