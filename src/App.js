import NavBar from "./Pages/NavBar/NavBar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import OurServices from "./Pages/OurServices/OurServices";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Benefits from "./Pages/Benefits/Benefits";
import Clients from "./Pages/Clients/Clients";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OurServices />
      <AboutPage />
      <Benefits />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
