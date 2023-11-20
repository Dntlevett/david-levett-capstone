import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage.jsx";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reviews" element={<ReviewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
