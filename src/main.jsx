import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Construction from "./pages/Construction.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/construction" element={<Construction />} />
        <Route path="*" element={<Navigate to="/construction" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);