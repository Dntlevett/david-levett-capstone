import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [hikeData, setHikeData] = useState([]);
  const [currentHike, setCurrentHike] = useState(0);

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

  const selectRandomHike = () => {
    const randomIndex = Math.floor(Math.random() * hikeData.length);
    setCurrentHike(hikeData[randomIndex]);
  };
  return (
    <>
      <Header />
      <h1>hello world</h1>
      <div className="hikeSelector">
        {currentHike && (
          <li className="hikeSelector__hike">
            <li>{currentHike.name}</li>
            <li>{currentHike.city}</li>
            <li>{currentHike.province}</li>
            <li>{currentHike.distance}</li>
            <li>{currentHike.elevation}</li>
          </li>
        )}
      </div>
      <button onClick={selectRandomHike}>Select Random Hike</button>
    </>
  );
}

export default App;
