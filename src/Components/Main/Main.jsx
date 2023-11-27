import axios from "axios";
import "../Main/main.scss";
import React, { useState, useEffect } from "react";

function Main() {
  const [hikeData, setHikeData] = useState([]);
  const [currentHike, setCurrentHike] = useState(null);

  useEffect(() => {
    const getHikeData = async () => {
      try {
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
    setCurrentHike({ ...hikeData[randomIndex], number: randomIndex + 1 });
  };
  return (
    <>
      <div className="appWrapper">
        <div className="hikeSelector">
          {currentHike && (
            <ul className="hikeSelector__hike">
              <p className="hikeSelector__introText">
                Press the button below to cycle through random hikes in the
                Lower Mainland. Happy Hiking!{" "}
              </p>
              <li>
                <img
                  className="hikeSelector__image"
                  src={`${process.env.REACT_APP_API_URL}/${currentHike.imagePath}`}
                ></img>
              </li>

              <li className="hikeSelector__hikeName">{currentHike.name}</li>
              <div className="hikeSelector__detailsContainer">
                <div>
                  <li className="hikeSelector__hikeCity">{currentHike.city}</li>
                  <li>{currentHike.province}</li>
                </div>
                <div>
                  {" "}
                  <li className="hikeSelector__hikeDetail1">
                    Distance: {currentHike.distance}
                  </li>
                  <li className="hikeSelector__hikeDetail2">
                    {" "}
                    Elevation: {currentHike.elevation}
                  </li>
                </div>
              </div>
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
