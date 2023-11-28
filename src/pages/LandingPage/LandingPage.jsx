import Landing from "../../Components/Landing/Landing";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Landing/landing.scss";
function LandingPage() {
  return (
    <>
      <div className="landingPageContainer">
        <Nav />
        <Landing />
      </div>
      <Footer />
    </>
  );
}
export default LandingPage;
