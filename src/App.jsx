import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reviews" element={<ReviewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
