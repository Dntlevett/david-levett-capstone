import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import GrouseGrind from "../../Components/GrouseGrind/GrouseGrind";
import VectorMenu from "../../Components/VectorMenu/VectorMenu";
import Footer from "../../Components/Footer/Footer";

function GrouseGrindPage() {
  return (
    <>
      <div className="navVectorContainer">
        <Nav />
        {/* <VectorMenu /> */}
      </div>
      <Header />
      <GrouseGrind />
      <Footer />
    </>
  );
}
export default GrouseGrindPage;
