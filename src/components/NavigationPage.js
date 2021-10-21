import React, { useContext, useEffect, useState } from "react";
import { MenuFoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/landing/logo.png";
import "../assets/css/NavigationPage.css";
import Fade from "react-reveal/Fade";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../routes";
import ceo from "../assets/images/Company/CEO.png";
import { AuthContext } from "../Utils/context";

const NavigationPage = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [active, setActive] = useState(null);

  console.log("Current user = ", user);

  useEffect(() => {
    setActive(location?.pathname);
  }, [location?.pathname]);

  return (
    <>
      <header>
        <nav className="nav collapsible">
          <span className="nav__items">
            <ul className="list nav__list collapsible__content nav__first__column position-relative">
              <span
                className="nav__toggler position-absolute"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {!isExpanded ? <MenuFoldOutlined /> : <CloseSquareOutlined />}
              </span>
              <li
                className="nav__item"
                onClick={() => {
                  history.push(routes.HOME);
                  setIsExpanded(!isExpanded);
                }}
              >
                <img src={logo} alt="home page logo" className="img-fluid" />
              </li>
              <Fade top>
                <li
                  className={`nav__item nav__item__company${
                    active === routes.COMPANY || active === routes.COMPANY_NOTES
                      ? " active"
                      : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(routes.COMPANY);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Company
                </li>
                <li
                  className={`nav__item${
                    active === routes.RIDE ? " active" : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(routes.RIDE);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Ride
                </li>
                <li
                  className={`nav__item${
                    active === routes.DRIVE ? " active" : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(routes.DRIVE);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Drive
                </li>
                <li
                  className={`nav__item${
                    active === routes.SHIP ? " active" : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(routes.SHIP);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Ship
                </li>
              </Fade>
            </ul>

            {!user ? (
              <Fade top>
                <ul
                  className="list nav__list collapsible__content nav__second__column"
                  id={!isExpanded && "isHidden"}
                >
                  <li
                    className="nav__item"
                    onClick={() => {
                      history.push(routes.LOGIN);
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    <FontAwesomeIcon icon={icons.faUser} className="mr-2" />
                    Login
                  </li>
                  <li
                    className="nav__item"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <a href="#download">
                      <Button type="primary">Sign Up</Button>
                    </a>
                  </li>
                </ul>
              </Fade>
            ) : (
              <>
                <Fade top>
                  <ul
                    className="list nav__list collapsible__content nav__second__column"
                    id={!isExpanded && "isHidden"}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <img src={ceo} className="img-fluid loggedInAvatar" />
                      <span className="ml-2">Michaelz Omoakin</span>{" "}
                      <FontAwesomeIcon
                        icon={icons.faCaretDown}
                        className="ml-1"
                      />
                    </div>
                  </ul>
                </Fade>
              </>
            )}
          </span>
        </nav>
      </header>
      <br />
      <br />
      <br />
    </>
  );
};

export default NavigationPage;
