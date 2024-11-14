import "./App.css";
import Header from "./components/Header";
import Silder from "./components/Slider";
import Schedule from "./components/Schedule";
import Feature from "./components/Features";
import FunFact from "./components/FunFact";
import Choose from "./components/Choose";
import Callaction from "./components/CallActtion";
import PortFollo from "./components/PortPolio";
import Footer from "./components/Footer";
import NewLetters from "./components/NewsLetter";
import Appointment from "./components/Appointment";
import Clients from "./components/Clients";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Service from "./Service";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "magnific-popup/dist/magnific-popup.css";
import "normalize.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slicknav/dist/slicknav.min.css";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Silder />} />
        <Route path="/docters" element={<Callaction />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Schedule />
      <Feature />
      <FunFact />
      <Choose />
      <PortFollo />
      <Pricing />
      <Clients />
      <NewLetters />
      <Footer />
    </div>
  );
}

export default App;
