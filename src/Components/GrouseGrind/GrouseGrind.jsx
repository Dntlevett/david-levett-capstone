import "./grouseGrind.scss";
import axios from "axios";
import React, { useState } from "react";

function GrouseGrind() {
  // set states to collect data for grouse grind time and first name,last name
  const [buttonClicked, setButtonClicked] = React.useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

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

  //       try {
  //         // const result = await db.select("*").from("user_selection");
  //         // console.log(result);
  //       } catch (error) {
  //         console.log(error);
  //       }
  // //     };
  // grindButton();
  // function YourComponent() {
  //     const handleClick = async () => {
  //       try {
  //         // Replace with your actual query
  //         const result = await db.select('*').from('your_table');
  //         console.log(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  // <button onClick={handleClick}></button>
  // onClick={handleClick}

  return (
    <>
      <div className="grouseGrindFormContainer">
        <form onSubmit={handleFormSubmit} className="grouseGrindForm">
          <input
            value={firstName}
            onChange={handleFirstNameChange}
            className="grouseGrindForm__firstName"
          ></input>
          <input
            value={lastName}
            onChange={handleLastNameChange}
            className="grouseGrindForm__lastName"
          ></input>
          <button
            // use this below instead of having multiple click grouse grind buttons in order to submit the form and deliver grouse time as well
            // onClick={() => handleClickEasy(2)}
            onClick={handleClickEasy}
            className="grouseGrindForm__easyButton"
          >
            {" "}
            2hr{" "}
          </button>
          <button
            onClick={handleClickMed}
            className="grouseGrindForm__mediumButton"
          >
            1.5hr
          </button>
          <button
            onClick={handleClickHard}
            className="grouseGrindForm__hardButton"
          >
            1hr
          </button>
        </form>
      </div>
    </>
  );
}
export default GrouseGrind;
