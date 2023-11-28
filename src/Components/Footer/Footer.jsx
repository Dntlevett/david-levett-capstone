import "../Footer/footer.scss";

import twitter from "../..//assets/icons/twitter-icon.svg";
import fbook from "../../assets/icons/facebook-icon.svg";
import insta from "../../assets/icons/insta.svg";
import github from "../../assets/icons/github.svg";
import mohan from "../../assets/images/Mohan-muruge.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerHeader__textBox">
          <div className="footerHeader__iconContainer">
            <div>
              <Link to="https://facebook.com">
                <img
                  className="footerHeader__icon"
                  src={fbook}
                  alt="facebook icon"
                />
              </Link>
              <Link to="https://twitter.com">
                <img
                  className="footerHeader__icon"
                  src={twitter}
                  alt="twitter icon"
                />
              </Link>
              <Link to="https://help.instagram.com">
                <img
                  className="footerHeader__icon"
                  src={insta}
                  alt="instagram icon"
                />
              </Link>
            </div>
          </div>
          <div className="footerHeader__iconBox2">
            <Link to="https://github.com/Dntlevett">
              <img
                className="footerHeader__icon"
                src={github}
                alt="github icon"
              />
              {/* <img className="footerHeader__mohan" src={mohan} alt="mohan m" /> */}
            </Link>
          </div>
        </div>
        {/* <img className="footerHeader__mohan" src={mohan} alt="mohan m" /> */}
      </div>
    </>
  );
}
export default Footer;
