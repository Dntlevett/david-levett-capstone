// import "../../styles/styles.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AllHikes/allHikes.scss";

function AllHikes() {
  const [hikeData, setHikeData] = useState([]);
  const [easyIndex, setEasyIndex] = useState(0);
  const [mediumIndex, setMediumIndex] = useState(0);
  const [hardIndex, setHardIndex] = useState(0);

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

  const easyHikes = hikeData.filter((hike) => hike.difficulty === "Easy");
  const mediumHikes = hikeData.filter((hike) => hike.difficulty === "Medium");
  const hardHikes = hikeData.filter((hike) => hike.difficulty === "Hard");

  return (
    <>
      <h1>Test</h1>
      <div>
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
      <div>
        <h2>Medium Hikes</h2>
        {mediumHikes[mediumIndex] && <p>{mediumHikes[mediumIndex].location}</p>}
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
      <div>
        <h2>Hard Hikes</h2>
        {hardHikes[hardIndex] && <p>{hardHikes[hardIndex].location}</p>}
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
