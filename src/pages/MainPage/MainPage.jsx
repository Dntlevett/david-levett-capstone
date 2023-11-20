import Nav from "../../Components/Nav/Nav";
import VectorMenu from "../../Components/VectorMenu/VectorMenu";
import Header from "../../Components/Header/Header";
import axios from "axios";
import "../../App.scss";
import mountain from "../../assets/images/tommhoi.jpeg";
import React, { useState, useEffect } from "react";
function MainPage() {
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
      <div className="navVectorContainer">
        <Nav />
        <VectorMenu />
      </div>

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
export default MainPage;
