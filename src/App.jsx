// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import AdminPortalPage from "./pages/AdminPortalPage.jsx";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", // soft gray background for all pages
      }}
    >
      {/* Gradient Header */}
      <header
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "linear-gradient(90deg, #ff6f91, #ffd166, #06d6a0, #4dd0e1)", // rainbow gradient
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h1>Sweet Candy Shop</h1>
        <nav>
          <Link
            to="/"
            style={{
              margin: "0 1rem",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Home
          </Link>
          <Link
            to="/shop"
            style={{
              margin: "0 1rem",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Shop
          </Link>
          <Link
            to="/admin"
            style={{
              margin: "0 1rem",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Admin Portal
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin" element={<AdminPortalPage />} />
      </Routes>
    </div>
  );
}