import "./App.less";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import PublicAreaRoute from "./Layout/PublicAreaRoute";
import LandingPage from "./pages/Landing.page";
import routes from "./routes";
import RidePage from "./pages/Ride.page";
import LoginPage from "./pages/Login.page";

AOS.init();

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicAreaRoute exact component={LandingPage} path={routes.HOME} />
          <PublicAreaRoute exact component={LoginPage} path={routes.LOGIN} />
          <PublicAreaRoute exact component={RidePage} path={routes.RIDE} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
