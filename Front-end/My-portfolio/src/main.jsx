import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext"; // ✅ Import Theme Context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* ✅ Wrap with ThemeProvider */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
