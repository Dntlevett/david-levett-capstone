import axios from "axios";
import "../Main/main.scss";
// import mountain from "../../assets/images/tommhoi.jpeg";
import React, { useState, useEffect } from "react";
// import GrouseGrind from "../../Components/GrouseGrind/GrouseGrind";

function Main() {
  const [hikeData, setHikeData] = useState([]);
  const [currentHike, setCurrentHike] = useState(null);

  useEffect(() => {
    const getHikeData = async () => {
      try {
        // const response = await axios.get(`http://localhost:8081/hikes`);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/hikes`
        );

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
      <div className="appWrapper">
        <div className="hikeSelector">
          {currentHike && (
            <ul className="hikeSelector__hike">
              <li>
                <img
                  className="hikeSelector__image"
                  src={`http://localhost:8081/${currentHike.imagePath}`}
                ></img>

                {/* <img src={mountain} alt="test" /> */}
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
export default Main;
