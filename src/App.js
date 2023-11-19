import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";
import React, { useState, useEffect } from "react";

// function App() {
//   const [hikeData, setHikeData] = useState();

//   useEffect(() => {
//     const getHikeData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/hikes`);
//         setHikeData(response.data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };
//     getHikeData();
//   }, []);
function App() {
  const [hikeData, setHikeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getHikeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/hikes`);
        setHikeData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getHikeData();
  }, []);

  const nextHike = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevHike = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <>
      <Header />
      <div>
        <h1>hello world</h1>
        {hikeData.length > 0 && (
          <li>
            {hikeData[currentIndex].name}
            {hikeData[currentIndex].city}
            {hikeData[currentIndex].province}
            {hikeData[currentIndex].distance}
            {hikeData[currentIndex].elevation}
          </li>
        )}
      </div>
      <button onClick={prevHike} disabled={currentIndex === 0}>
        Previous
      </button>
      <button
        onClick={nextHike}
        disabled={currentIndex === hikeData.length - 1}
      >
        Next
      </button>
    </>
  );
}

export default App;
