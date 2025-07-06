import Navbar from "./component/Navbar";
import Landing_page from "./component/Landing_page";
import Offer from "./component/Offer";
import Demo from "./component/Demo";
import Footer from "./component/Footer";
import Trial from "./component/Trial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing_page />
      <Offer />
      <Demo />
      <Trial/>
      <Footer/>
    </>
  );
}
