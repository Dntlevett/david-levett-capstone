import React, { useState } from "react";
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
        {isOpen && <div className="menu1">Hikes</div>}
        {isOpen && <div className="menu2">Reviews</div>}
        {isOpen && <div className="menu3">Random</div>}
        {isOpen && <div className="menu4">Grouse Grind</div>}
      </div>
    </>
  );
}

export default VectorMenu;
