import "./header.scss";
function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerContainer">
          <div className="headerContainer__logoTitleContainer">
            <div className="headerContainer__logoContainer">LOGO</div>
            <div className="headerContainer__titleContainer">TITLE</div>
          </div>
          <div className="headerContainer__buttonContainer">
            <div className="headerContainer__button1">BUT</div>
            <div className="headerContainer__button2">BUT</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
