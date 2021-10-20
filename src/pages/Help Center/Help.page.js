import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { Input, Space } from "antd";
import "../../assets/css/HelpPage.css";
import routes from "../../routes";
import group16 from "../../assets/images/help/Group 169.svg";

const { TabPane } = Tabs;
const { Search } = Input;

const HelpPage = (props) => {
  let location = useLocation();
  const { pathname } = location;
  const current = pathname.split("/");
  const history = useHistory();
  const [path, setPath] = useState("1");
  console.log(location.pathname);
  useEffect(() => {
    switch (location.pathname) {
      case "/helpRide/ride":
        setPath("1");
        break;
      case "/helpRide/drive":
        setPath("2");
        break;
      default:
        setPath("3");
    }
  }, [location]);

  function callback(key) {
    console.log(key);
  }

  const handleSwitch = (val) => {
    switch (val) {
      case "1":
        history.push(`${routes.HELP_RIDE}/ride`);
        break;
      case "2":
        history.push(`${routes.HELP_RIDE}/drive`);
        break;
      default:
        history.push(`${routes.HELP_RIDE}/logistics`);
        break;
    }
  };

  const onSearch = (value) => console.log(value);

  const content = () => {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className=" help__tabs__item ">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3>Using the app</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva basics`
                      )
                    }
                  >
                    Ryva basics
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Customer App`
                      )
                    }
                  >
                    Ryva Customer App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Driver App`
                      )
                    }
                  >
                    Ryva Driver App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/How to update the app`
                      )
                    }
                  >
                    How to update the app
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            {/* /.col-md-4 */}
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3>Using the app</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva basics`
                      )
                    }
                  >
                    Ryva basics
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Customer App`
                      )
                    }
                  >
                    Ryva Customer App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Driver App`
                      )
                    }
                  >
                    Ryva Driver App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/How to update the app`
                      )
                    }
                  >
                    How to update the app
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            {/* /.col-md-4 */}
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3>Using the app</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva basics`
                      )
                    }
                  >
                    Ryva basics
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Customer App`
                      )
                    }
                  >
                    Ryva Customer App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Ryva Driver App`
                      )
                    }
                  >
                    Ryva Driver App
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/How to update the app`
                      )
                    }
                  >
                    How to update the app
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Profile and account</h3>
                <ul className="help__tabs__list">
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/How to create a Ryva account`
                      )
                    }
                  >
                    How to create a Ryva account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Update your account`
                      )
                    }
                  >
                    Update your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Delete your account`
                      )
                    }
                  >
                    Delete your account
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Profile and account/Protect personal information`
                      )
                    }
                  >
                    Protect personal information
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `${location.pathname}/Using the app/Fixing app issues`
                      )
                    }
                  >
                    Fixing app issues
                  </li>
                </ul>
              </div>
            </div>
            {/* /.col-md-4 */}
          </div>
          {/* /.row */}
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  };

  return (
    <div className="help">
      <div className="help__heading position-relative">
        <div>
          <h2>Having issues?</h2>
          <h2>We are here to help.</h2>
          <div className="help__heading__search">
            <Search
              placeholder="Find answers to your Questions"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </div>
        <img
          src={group16}
          className="img-fluid position-absolute help__heading__img"
          style={{ bottom: "-35%", right: "7%" }}
        />
      </div>
      <div className="help__heading__tabs">
        <Tabs activeKey={path} onChange={(val) => handleSwitch(val)}>
          <TabPane
            tab="Ride"
            key="1"
            onClick={() => window.alert("U clicked me")}
          >
            {content()}
          </TabPane>
          <TabPane tab="Drive" key="2">
            {content()}
          </TabPane>
          <TabPane tab="Logistics" key="3">
            {content()}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default HelpPage;
