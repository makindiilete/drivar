import React, { useState } from "react";
import { MenuFoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../assets/images/landing/logo.png";
import "../assets/css/NavigationPage.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import routes from "../routes";

const NavigationPage = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

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
                onClick={() => history.push(routes.HOME)}
              >
                <img src={logo} alt="home page logo" className="img-fluid" />
              </li>
              <Fade top>
                <li
                  className="nav__item nav__item__company"
                  id={!isExpanded && "isHidden"}
                >
                  Company
                </li>
                <li
                  className="nav__item"
                  id={!isExpanded && "isHidden"}
                  onClick={() => history.push(routes.RIDE)}
                >
                  Ride
                </li>
                <li className="nav__item" id={!isExpanded && "isHidden"}>
                  Drive
                </li>
                <li className="nav__item" id={!isExpanded && "isHidden"}>
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
                  onClick={() => history.push(routes.LOGIN)}
                >
                  <FontAwesomeIcon icon={icons.faUser} className="mr-2" />
                  Login
                </li>
                <li className="nav__item">
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
