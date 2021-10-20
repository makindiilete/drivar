import "./App.less";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import PublicAreaRoute from "./Layout/PublicAreaRoute";
import LandingPage from "./pages/Landing.page";
import routes from "./routes";
import RidePage from "./pages/Ride.page";
import LoginPage from "./pages/Login.page";
import DrivePage from "./pages/Drive.page";
import ShipPage from "./pages/Ship.page";
import CompanyPage from "./pages/Company.page";
import CompanyNotesPage from "./pages/CompanyNotes.page";
import PrivacyPage from "./pages/Privacy.page";
import TermsPage from "./pages/Terms.page";
import HelpAreaRoute from "./Layout/HelpAreaRoute";
import HelpPage from "./pages/Help Center/Help.page";
import HelpLinkPage from "./pages/Help Center/HelpLink.page";
import ContactUsPage from "./pages/ContactUs.page";

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
          <PublicAreaRoute exact component={DrivePage} path={routes.DRIVE} />
          <PublicAreaRoute exact component={ShipPage} path={routes.SHIP} />
          <PublicAreaRoute
            exact
            component={CompanyPage}
            path={routes.COMPANY}
          />
          <PublicAreaRoute
            exact
            component={CompanyNotesPage}
            path={routes.COMPANY_NOTES}
          />
          <PublicAreaRoute
            exact
            component={PrivacyPage}
            path={routes.PRIVACY}
          />
          <PublicAreaRoute exact component={TermsPage} path={routes.TERMS} />
          <PublicAreaRoute
            exact
            component={ContactUsPage}
            path={routes.CONTACT_US}
          />
          <HelpAreaRoute
            exact
            component={HelpPage}
            path={`${routes.HELP_RIDE}/:tab`}
          />
          <HelpAreaRoute
            exact
            component={HelpLinkPage}
            path={`${routes.HELP_RIDE}/:tab/:title/:id`}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
