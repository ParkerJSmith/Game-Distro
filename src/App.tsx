import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import GamePage from "./pages/GamePage/GamePage";
import TopBanner from "./components/TopBanner/TopBanner";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import "./App.scss";

export default function App() {
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <TopBanner languageSelect={setLanguage} language={language} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="store" />} />
          <Route path="store" element={<MainPage language={language} />} />
          <Route path="game" element={<GamePage language={language} />} />
          <Route path="*" element={<NoPage language={language} />} />
        </Routes>
      </BrowserRouter>
      <BottomBanner />
    </div>
  );
}
