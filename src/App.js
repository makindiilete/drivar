import "./App.less";
import LandingPage from "./pages/LandingPage";
import NavigationPage from "./components/NavigationPage";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterPage from "./components/FooterPage";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavigationPage />
      <LandingPage />
      <FooterPage />
    </div>
  );
}

export default App;
