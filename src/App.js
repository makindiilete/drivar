import "./App.less";
import NavigationPage from "./components/NavigationPage";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterPage from "./components/FooterPage";
import LoginPage from "./pages/Login.page";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavigationPage />
      {/*<LandingPage />*/}
      <LoginPage />
      <FooterPage />
    </div>
  );
}

export default App;
