import "../Footer/footer.scss";
import icon2 from "../../assets/icons/check.svg";
function Footer() {
  return (
    <>
      <div className="footerHeaderContainer">
        {/* <h4 className="footerHeader">Brought to you by:</h4> */}
        <div className="footerHeader__textBox">
          {/* <span>Brought to you by:</span> */}
          {/* SASS, KNEX.JS, REACT.JS, NODE.JS */}
          <span className="footerHeader__text">
            <img src={icon2} alt="icon2" />
            {/* Special thanks to SASS, KNEX.JS, REACT.JS, NODE.JS, JS, CSS, HTML5 and BrainStation */}
          </span>
        </div>
      </div>
    </>
  );
}
export default Footer;
