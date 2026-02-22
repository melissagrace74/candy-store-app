import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";
import { CandyProvider } from "./context/CandyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CandyProvider>
        <App />
      </CandyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
