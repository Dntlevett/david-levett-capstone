// import "../../styles/styles.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AllHikes/allHikes.scss";

function AllHikes() {
  // main hike data state
  const [hikeData, setHikeData] = useState([]);

  // set easy, hard and medium states for onclick buttons

  const [easyIndex, setEasyIndex] = useState(0);
  const [mediumIndex, setMediumIndex] = useState(0);
  const [hardIndex, setHardIndex] = useState(0);

  // get hike data...could be mounted higher up in pages file and brought in through partials keep things dry
  useEffect(() => {
    const getHikeData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/hikes`
        );
        setHikeData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching requested data", error);
      }
    };
    getHikeData();
  }, []);
  // filter hikes based on difficulty
  const easyHikes = hikeData.filter((hike) => hike.difficulty === "Easy");
  const mediumHikes = hikeData.filter((hike) => hike.difficulty === "Medium");
  const hardHikes = hikeData.filter((hike) => hike.difficulty === "Hard");

  return (
    <>
      <h1>Choose a hike based on difficulty</h1>
      <div className="hikesContainer">
        <h2>Easy Hikes</h2>
        {easyHikes[easyIndex] && (
          <ul>
            <li>{easyHikes[easyIndex].name}</li>
            <li>{easyHikes[easyIndex].city}</li>
            <li>{easyHikes[easyIndex].distance}</li>
            <li>{easyHikes[easyIndex].elevation}</li>
            <img
              className="hikesImage"
              src={`${process.env.REACT_APP_API_URL}/${easyHikes[easyIndex].imagePath}`}
              alt={easyHikes[easyIndex].name}
            />
          </ul>
        )}
        <button
          onClick={() =>
            setEasyIndex(easyIndex > 0 ? easyIndex - 1 : easyHikes.length - 1)
          }
        >
          Previous
        </button>
        <button
          onClick={() => setEasyIndex((easyIndex + 1) % easyHikes.length)}
        >
          Next
        </button>
      </div>
      <div className="hikesContainer , hikesMedium">
        <h2>Medium Hikes</h2>
        {mediumHikes[mediumIndex] && (
          <ul>
            <li>{mediumHikes[mediumIndex].name}</li>
            <li>{mediumHikes[mediumIndex].city}</li>
            <li>{mediumHikes[mediumIndex].distance}</li>
            <li>{mediumHikes[mediumIndex].elevation}</li>
            <img
              className="hikesImage"
              src={`${process.env.REACT_APP_API_URL}/${mediumHikes[mediumIndex].imagePath}`}
              alt={mediumHikes[mediumIndex].name}
            />
          </ul>
        )}
        <button
          onClick={() =>
            setMediumIndex(
              mediumIndex > 0 ? mediumIndex - 1 : mediumHikes.length - 1
            )
          }
        >
          Previous
        </button>
        <button
          onClick={() => setMediumIndex((mediumIndex + 1) % mediumHikes.length)}
        >
          Next
        </button>
      </div>
      <div className="hikesContainer">
        <h2>Hard Hikes</h2>
        {hardHikes[hardIndex] && (
          <ul>
            <li>{hardHikes[hardIndex].name}</li>
            <li>{hardHikes[hardIndex].city}</li>
            <li>{hardHikes[hardIndex].distance}</li>
            <li>{hardHikes[hardIndex].elevation}</li>
            <img
              className="hikesImage"
              src={`${process.env.REACT_APP_API_URL}/${hardHikes[hardIndex].imagePath}`}
              alt={hardHikes[hardIndex].name}
            />
          </ul>
        )}
        <button
          onClick={() =>
            setHardIndex(hardIndex > 0 ? hardIndex - 1 : hardHikes.length - 1)
          }
        >
          Previous
        </button>
        <button
          onClick={() => setHardIndex((hardIndex + 1) % hardHikes.length)}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default AllHikes;
