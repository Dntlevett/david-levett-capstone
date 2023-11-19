import "./App.scss";
import axios from "axios";
// import defaultMountain from "./assets/images/tommhoie.jpg";

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
            <li className="hikeSelector__hike">
              <li className="hikeSelector__image">
                {/* <img src={defaultMountain} alt="" /> */}
              </li>
              <li>{currentHike.name}</li>
              <li>{currentHike.city}</li>
              <li>{currentHike.province}</li>
              <li>{currentHike.distance}</li>
              <li>{currentHike.elevation}</li>
            </li>
          )}
          <button onClick={selectRandomHike}>Select Random Hike</button>
        </div>
      </div>
    </>
  );
}

export default App;
