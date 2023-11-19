import "./App.scss";
import axios from "axios";
import mountain from "./assets/images/tommhoi.jpg";

import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav.jsx";
import Header from "./Components/Header/Header.jsx";
function App() {
  const [hikeData, setHikeData] = useState([]);
  const [currentHike, setCurrentHike] = useState(null);

  useEffect(() => {
    const getHikeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/hikes`);
        setHikeData(response.data);
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setCurrentHike({
          ...response.data[randomIndex],
          number: randomIndex + 1,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getHikeData();
  }, []);

  const selectRandomHike = () => {
    const randomIndex = Math.floor(Math.random() * hikeData.length);
    // setCurrentHike(hikeData[randomIndex]);
    setCurrentHike({ ...hikeData[randomIndex], number: randomIndex + 1 });
  };
  return (
    <>
      <Nav />
      <Header />
      <div className="appWrapper">
        <div className="hikeSelector">
          {currentHike && (
            <ul className="hikeSelector__hike">
              <li className="hikeSelector__image">
                <img src={mountain} alt="test" />
              </li>
              <li>{currentHike.name}</li>
              <li>{currentHike.city}</li>
              <li>{currentHike.province}</li>
              <li>Total distance: {currentHike.distance}</li>
              <li> Elevation: {currentHike.elevation}</li>
            </ul>
          )}
          <button className="hikeSelector__button" onClick={selectRandomHike}>
            Select Random Hike
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
