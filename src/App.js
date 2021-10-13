import "./App.less";
import LandingPage from "./pages/LandingPage";
import NavigationPage from "./components/NavigationPage";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterPage from "./components/FooterPage";
import HowItWorks from "./components/HowItWorks";
import UsingRyvaApp from "./components/UsingRyvaApp";
import MoveWithComfort from "./components/MoveWithComfort";
AOS.init();

function App() {
  return (
    <div className="App">
      <NavigationPage />
      <MoveWithComfort />
      <FooterPage />
    </div>
  );
}

export default App;
