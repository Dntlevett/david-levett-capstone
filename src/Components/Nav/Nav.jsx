import "./nav.scss";
import icon from "../../assets/icons/trekking.svg";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

// const trigger = document.querySelector(".btn-menu");
// // const nav = document.querySelector('.full-screen-nav');
// // const backdrop = document.querySelector('.backdrop');

// // trigger.addEventListener("click", () => nav.classList.add("btn-menu"));
// // backdrop.addEventListener("click", () => nav.classList.remove("open-nav"));

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function menuClick() {
    setIsOpen(!isOpen);
    console.log("You clicked submit");
  }
  return (
    <>
      <div className="headerWrapper">
        <div className="headerContainer">
          <div className="headerContainer__logoTitleContainer">
            <div className="headerContainer__logoContainer">
              <Link to="/">
                <img
                  className="headerContainer__logoImage"
                  src={icon}
                  alt="test"
                />
              </Link>
            </div>
            {/* <p className="headerContainer__titleContainer">2</p> */}
          </div>
          <div className="headerContainer__buttonContainer">
            <p className="headerContainer__button1">Summit Selector</p>
            {/* <button class="btn-menu">Menu</button> */}
          </div>
          <div className="headerContainer__menu"></div>
        </div>
        <div onClick={menuClick} className="testContainer">
          <div className="test"></div>
          <div className="test"></div>
          <div className="test"></div>
        </div>
      </div>
    </>
  );
}

export default Nav;
