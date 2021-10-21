import React, { useContext, useEffect, useState } from "react";
import "../assets/css/NavigationPage.css";
import { useHistory, useLocation } from "react-router-dom";
import { CloseSquareOutlined, MenuFoldOutlined } from "@ant-design/icons";
import routes from "../routes";
import logo from "../assets/images/landing/logo.png";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { Button, Dropdown, Menu } from "antd";
import { AuthContext } from "../Utils/context";
import ceo from "../assets/images/Company/CEO.png";
import iconOne from "../assets/images/nav/map-with-a-location-pointer-svgrepo-com.svg";
import iconTwo from "../assets/images/nav/Group 3018.svg";
import iconThree from "../assets/images/nav/Group 3014.svg";

const { Item, Divider } = Menu;

const HelpNavigation = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();
  let location = useLocation();
  const { pathname } = location;
  const current = pathname.split("/")[2];

  const [active, setActive] = useState(null);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setActive(location?.pathname);
  }, [location?.pathname]);

  const menu = (
    <Menu>
      <Item key="0">
        <div className="media">
          <img src={iconOne} className="d-flex mr-3" alt="" />
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
          <img src={iconTwo} className="d-flex mr-3" alt="" />
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
          <img src={iconThree} className="d-flex mr-3" alt="" />
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
          <span className="nav__items nav__items__help">
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
                    active === `${routes.HELP_RIDE}/ridee` ? " active" : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(`${routes.HELP_RIDE}/ride`);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Ryva Help Center
                </li>
                <li
                  className={`nav__item${
                    active === `${routes.HELP_RIDE}/ride` || current === "ride"
                      ? " active"
                      : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(`${routes.HELP_RIDE}/ride`);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Ride
                </li>
                <li
                  className={`nav__item${
                    active === `${routes.HELP_RIDE}/drive` ||
                    current === "drive"
                      ? " active"
                      : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(`${routes.HELP_RIDE}/drive`);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Drive
                </li>
                <li
                  className={`nav__item${
                    active === `${routes.HELP_RIDE}/logistics` ||
                    current === "logistics"
                      ? " active"
                      : ""
                  } `}
                  id={!isExpanded && "isHidden"}
                  onClick={() => {
                    history.push(`${routes.HELP_RIDE}/logistics`);
                    setIsExpanded(!isExpanded);
                  }}
                >
                  Logistics
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

export default HelpNavigation;
