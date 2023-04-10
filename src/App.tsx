import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import TopBanner from "./components/TopBanner/TopBanner";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import "./App.scss";

export default function App() {
  return (
    <div>
      <TopBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="store" />} />
          <Route path="store" element={<MainPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <BottomBanner />
    </div>
  );
}
