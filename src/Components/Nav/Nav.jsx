import "./nav.scss";
function nav() {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerContainer">
          <div className="headerContainer__logoTitleContainer">
            <p className="headerContainer__logoContainer">Intent</p>
            <p className="headerContainer__titleContainer">2</p>
          </div>
          <div className="headerContainer__buttonContainer">
            <p className="headerContainer__button1">Upload</p>
            <p className="headerContainer__button2">Reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default nav;
