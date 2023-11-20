import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";

function ReviewsPage() {
  return (
    <>
      <Nav />
      <Header />
      <Link to="/">
        <h1>Hello World</h1>
      </Link>
    </>
  );
}
export default ReviewsPage;
