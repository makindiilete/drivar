import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../assets/images/landing/logo.png";
import "../assets/css/NavigationPage.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../routes";

const NavigationPage = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const [active, setActive] = useState(null);

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
                    active === routes.COMPANY ? " active" : ""
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
