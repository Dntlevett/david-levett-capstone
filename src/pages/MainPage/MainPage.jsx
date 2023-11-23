import Nav from "../../Components/Nav/Nav";
import VectorMenu from "../../Components/VectorMenu/VectorMenu";
import Header from "../../Components/Header/Header";
// import axios from "axios";
import "../../App.scss";
// import mountain from "../../assets/images/tommhoi.jpeg";
// import React, { useState, useEffect } from "react";

import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <>
      <div className="navVectorContainer">
        <Nav />
        <VectorMenu />
      </div>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default MainPage;
