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
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/hikes`
      );
      setHikes(response.data);
    };
    fetchHikes();
  }, []);
  const filteredHikes = hikes.filter(
    (hike) => hike.difficulty === buttonClicked
  );
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
          Enter Your first name, last name and click your grouse grind time
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
              // use this below instead of having multiple click grouse grind buttons in order to submit the form and deliver grouse time as well
              // onClick={() => handleClickEasy(2)}
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
      <div className="hikesByDifficulty">
        {filteredHikes.slice(0, 3).map((hike) => (
          <div key={hike.id}>
            <h2>{hike.name}</h2>
            {/* <p>{hike.imagePath}</p> */}
            <img
              className="hikesByDifficulty__hikeImage"
              src={`http://localhost:8081/${hike.imagePath}`}
              alt="test"
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default GrouseGrind;
