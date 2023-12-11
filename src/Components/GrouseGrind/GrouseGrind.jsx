import "./grouseGrind.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import elevationIcon from "../../assets/icons/stat-up.svg";

function GrouseGrind() {
  // set states to collect data for grouse grind time and first name,last name
  const [buttonClicked, setButtonClicked] = React.useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hikes, setHikes] = useState([]);
  // function to grab first name from input
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  // function to grab last name from input
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  // click handlers for each difficulty button
  const handleClickEasy = async (event) => {
    event.preventDefault();
    console.log("You clicked Easy");
    setButtonClicked("Easy");
    handleFormSubmit(event, "Easy");
  };
  const handleClickMed = (event) => {
    event.preventDefault();
    console.log("You clicked Medium");
    setButtonClicked("Medium");
    handleFormSubmit(event, "Medium");
  };
  const handleClickHard = (event) => {
    event.preventDefault();
    console.log("You clicked Hard");
    setButtonClicked("Hard");
    handleFormSubmit(event, "Hard");
  };
  // form submit function that uses the click handler buttons to submit the form. Still needs form validation
  const handleFormSubmit = async (event, buttonMode) => {
    event.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      button: buttonMode,
    };
    // still need to add try/catch block for these 2
    console.log(newUser);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/userpost`,
      {
        firstName: firstName,
        lastName: lastName,
        button: buttonMode,
      }
    );
  };
  // const displayHike = async (event,newUser);
  useEffect(() => {
    const fetchHikes = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/hikes`
        );
        setHikes(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchHikes();
  }, []);

  const filteredHikes = hikes.filter(
    (hike) => hike.difficulty === buttonClicked
  );

  const randomHikeDifficulty =
    filteredHikes[Math.floor(Math.random() * filteredHikes.length)];

  return (
    <>
      <div className="grouseGrindFormContainer">
        <h1 className="grouseGrindForm__title">
          Grouse Grind Time Hike Selector{" "}
          <img
            className="grouseGrindForm__elevationIcon"
            src={elevationIcon}
            alt="icon"
          />
        </h1>
        <p className="grouseGrindForm__introText">
          Enter your info and select your GrouseGrind time to have hikes at your
          skill level recommended.
        </p>

        <form onSubmit={handleFormSubmit} className="grouseGrindForm">
          <div className="grouseGrindForm__inputBox">
            <input
              value={firstName}
              onChange={handleFirstNameChange}
              className="grouseGrindForm__firstName"
              placeholder="Enter First Name"
            ></input>
            <input
              value={lastName}
              onChange={handleLastNameChange}
              className="grouseGrindForm__lastName"
              placeholder="Enter Last Name"
            ></input>
          </div>
          <div className="grouseGrindForm__buttonBox">
            <button
              onClick={handleClickEasy}
              className="grouseGrindForm__easyButton"
            >
              {" "}
              Less Than 2hr{" "}
            </button>
            <button
              onClick={handleClickMed}
              className="grouseGrindForm__mediumButton"
            >
              Less than 1.5hr
            </button>
            <button
              onClick={handleClickHard}
              className="grouseGrindForm__hardButton"
            >
              Less than 1hr
            </button>
          </div>
        </form>
      </div>
      {/* <div className="hikesByDifficulty">
        {filteredHikes.slice(0, 1).map((hike) => (
          <div className="hikesByDifficulty__hikeBox" key={hike.id}>
            <h2 className="hikesByDifficulty__hikeName">{hike.name}</h2>
            <p className="hikesByDifficulty__description">{hike.city}</p>
            <img
              className="hikesByDifficulty__hikeImage"
              src={`${process.env.REACT_APP_API_URL}/${hike.imagePath}`}
              alt="test"
            />
          </div>
        ))}
      </div> */}
      <div className="hikesByDifficulty">
        {randomHikeDifficulty ? (
          <div
            className="hikesByDifficulty__hikeBox"
            key={randomHikeDifficulty.id}
          >
            <h2 className="hikesByDifficulty__hikeName">
              {randomHikeDifficulty.name}
            </h2>
            <p className="hikesByDifficulty__description">
              {randomHikeDifficulty.city}
            </p>
            <img
              className="hikesByDifficulty__hikeImage"
              src={`${process.env.REACT_APP_API_URL}/${randomHikeDifficulty.imagePath}`}
              alt="test"
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
export default GrouseGrind;
