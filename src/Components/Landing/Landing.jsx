import { Link } from "react-router-dom";
import "./landing.scss";
// import mountain from "../../assets/images/tommhoi.jpeg";

function Landing() {
  return (
    <>
      <div className="landingPageWrapper">
        <div className="landingPageWrapper__titleBox">
          <h1 className="landingPageWrapper__title">Summit Selector</h1>
        </div>
        <div className="landingPageWrapper__leadInfoContainer">
          <p className="landingPageWrapper__leadInfo">
            Ready for your next adventure?
          </p>
        </div>
        <div className="landingPageWrapper__buttonContainer">
          <Link to="/main">
            <h2 className="landingPageWrapper__button">Welcome</h2>
          </Link>
        </div>
        {/* <p className="landingPageWrapper"></p> */}
        {/* <img className="landingImage" src="" alt="tommhoi" /> */}
        {/* <section className="image"></section> */}
      </div>
    </>
  );
}

export default Landing;
