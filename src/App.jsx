import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
// import ReviewsPage from "./pages/ReviewsPage/ReviewsPage.jsx";
import GrouseGrindPage from "./pages/GrouseGrindPage/GrouseGrindPage.jsx";
import AllHikesPage from "./pages/AllHikesPage/AllHikesPage.jsx";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/grind" element={<GrouseGrindPage />} />
          <Route path="/hikes" element={<AllHikesPage />} />
          {/* <Route path="/reviews" element={<ReviewsPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
