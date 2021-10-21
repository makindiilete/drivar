import React, { useContext, useEffect, useState } from "react";
import { MenuFoldOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "../assets/css/NavigationPage.css";
import Fade from "react-reveal/Fade";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../routes";
import { AuthContext } from "../Utils/context";
import logo from "../assets/images/landing/logo.png";
import ceo from "../assets/images/Company/CEO.png";
import iconOne from "../assets/images/nav/map-with-a-location-pointer-svgrepo-com.svg";
import iconTwo from "../assets/images/nav/Group 3018.svg";
import iconThree from "../assets/images/nav/Group 3014.svg";

const { Item, Divider } = Menu;

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

  const menu = (
    <Menu>
      <Item key="0">
        <div className="media">
          <img
            src={iconOne}
            className="d-flex mr-3"
            alt=""
            style={{ paddingTop: "0.8rem" }}
          />
          <div className="media-body">
            <small className="mt-0 font-weight-bold">
              Track my rides & Delivery
            </small>
            <br />
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr,
              sed diam nonumy.
            </small>
          </div>
        </div>
      </Item>
      <Divider />
      <Item key="1">
        <div className="media">
          <img
            src={iconTwo}
            className="d-flex mr-3"
            alt=""
            style={{ paddingTop: "0.8rem" }}
          />
          <div className="media-body">
            <small className="mt-0 font-weight-bold">Account Settings</small>
            <br />
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr,
              sed diam nonumy.
            </small>
          </div>
        </div>
      </Item>
      <Divider />
      <Item key="3" onClick={() => setUser(null)}>
        <div className="media">
          <img
            src={iconThree}
            className="d-flex mr-3"
            alt=""
            style={{ paddingTop: "0.8rem" }}
          />
          <div className="media-body">
            <small className="mt-0 font-weight-bold">Logout</small>
            <br />
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr,
              sed diam nonumy.
            </small>
          </div>
        </div>
      </Item>
    </Menu>
  );

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
                  >
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <div className="cursor">
                        <img
                          src={ceo}
                          className="img-fluid loggedInAvatar"
                          alt=""
                        />
                        <span className="ml-2">Michaelz Omoakin</span>{" "}
                        <FontAwesomeIcon
                          icon={icons.faCaretDown}
                          className="ml-1"
                        />
                      </div>
                    </Dropdown>
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
