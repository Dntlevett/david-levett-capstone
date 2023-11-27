import "../Footer/footer.scss";
import icon2 from "../../assets/icons/check.svg";
import twitter from "../..//assets/icons/twitter-icon.svg";
import fbook from "../../assets/icons/facebook-icon.svg";
import insta from "../../assets/icons/insta.svg";
import github from "../../assets/icons/github.svg";
function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerHeader__textBox">
          <div className="footerHeader__iconContainer">
            {/* <img src={icon2} alt="icon2" /> */}
            <div>
              <img
                className="footerHeader__icon"
                src={fbook}
                alt="facebook icon"
              />
              <img
                className="footerHeader__icon"
                src={twitter}
                alt="twitter icon"
              />
              <img
                className="footerHeader__icon"
                src={insta}
                alt="instagram icon"
              />
            </div>
          </div>
          <div className="footerHeader__iconBox2">
            <img
              className="footerHeader__icon"
              src={github}
              alt="github icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
