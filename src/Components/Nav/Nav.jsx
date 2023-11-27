import "./nav.scss";
import icon from "../../assets/icons/trekking.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  // // function to set state of menu.
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);
  // function to display menu on click
  function menuClick() {
    setIsOpen(!isOpen);
    setChange(!change);
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
          </div>
          <div className="headerContainer__buttonContainer">
            <p className="headerContainer__button1">Summit Selector</p>
          </div>
          <div className="headerContainer__menu"></div>
        </div>
        <div
          onClick={menuClick}
          className={`testContainer ${change ? "change" : ""}`}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className="menuContainer">
        <Link to="/main">
          {" "}
          {isOpen && <div className="menu3">Hike Selector</div>}
        </Link>
        <Link to="/grind">
          {isOpen && <div className="menu4">Grouse Grind Selector</div>}
        </Link>
      </div>
    </>
  );
}

export default Nav;
