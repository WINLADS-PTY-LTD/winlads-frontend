import "./Home.css";
// import Footer from "../../components/Footer/footer";
import Footer from "../../components/footerSection/Footer";
import Showcase2 from "../../components/showcase/Showcase2";
import WelcomeHome2 from "../../components/Welcomehome/WelcomeHome2";
import Service from "../../components/Service/Service";
import Youtube from "../../components/youtube/Youtube"
import Benifit from "../../components/benifit/Benifit";
import Gallery2 from "../../components/Gallery/Gallery2";
import ChoosePlane from "../../components/choosePlane/ChoosePlane";

const Home = () => {
  return (
    <div>
      <Showcase2 />
      <WelcomeHome2 />
      <Service/>
      <Youtube/>
      <Benifit/>

      <Gallery2/>
      

      <ChoosePlane/>


      <Footer />


    </div>
  );
};

export default Home;
