import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TopBanner from "./components/TopBanner/TopBanner";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <TopBanner />
        <Routes>
          <Route path="store" element={<MainPage />} />
        </Routes>
      <BottomBanner />
    </BrowserRouter>
  );
}
