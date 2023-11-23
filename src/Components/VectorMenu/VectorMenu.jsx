import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./vectorMenu.scss";
// function to set state of menu.
function VectorMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function menuClick() {
    setIsOpen(!isOpen);
    console.log("You clicked submit");
  }

  return (
    <>
      <button onClick={menuClick} className="vectorMenuContainer">
        MENU
      </button>
      <div className="menuContainer">
        {/* {isOpen && <div className="menu1">Hikes</div>} */}
        {/* <Link to="/reviews">
          {isOpen && <div className="menu2">Reviews</div>}
        </Link> */}
        <Link to="/main">{isOpen && <div className="menu3">Random</div>}</Link>
        <Link to="/grind">
          {isOpen && <div className="menu4">Grouse Grind</div>}
        </Link>
      </div>
    </>
  );
}

export default VectorMenu;
