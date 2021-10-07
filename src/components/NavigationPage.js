import React, { useState } from "react";
import { MenuFoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../assets/images/landing/logo.png";
import "../assets/css/NavigationPage.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const NavigationPage = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
              <li className="nav__item">
                <img src={logo} alt="home page logo" className="img-fluid" />
              </li>
              <Fade top>
                <li
                  className="nav__item nav__item__company"
                  id={!isExpanded && "isHidden"}
                >
                  Company
                </li>
                <li className="nav__item" id={!isExpanded && "isHidden"}>
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
                <li className="nav__item">
                  <FontAwesomeIcon icon={icons.faUser} className="mr-2" />
                  Login
                </li>
                <li className="nav__item">
                  <Button type="primary">Sign Up</Button>
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
