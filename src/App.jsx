import "./App.scss";
import Landing from "./Components/Landing/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage.jsx";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reviews" element={<ReviewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
