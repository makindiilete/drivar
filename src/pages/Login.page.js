import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";
import "../assets/css/Login.page.css";
import logo from "../assets/images/login/login icon.svg";
import mobile from "../assets/images/landing/Drivar-Mockup.png";
import "../assets/css/LandingPage.css";

const LoginPage = (props) => {
  const [user, setUser] = useState({
    phoneNumber: "",
    password: "",
  });

  function handleChange(value, name) {
    if (name === "phoneNumber") {
      let newState = { ...user };
      newState.phoneNumber = value;
      setUser(newState);
    } else {
      let newState = { ...user };
      newState.password = value;
      setUser(newState);
    }
  }
  const handleLogin = (data) => {
    console.log("Data submitted = ", data);
  };

  return (
    <section id="login" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 imageLeft col">
            <div className="content">
              <img src={mobile} className="mobile img-fluid" />
              <div className="text">
                <h2>
                  Get the best out <br />
                  of <span className="primary-text"> Ryva.</span>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
                <div className="d-flex">
                  <img
                    className="pr-3 playStoreImg"
                    src={google}
                    alt="google playstore"
                  />
                  <img
                    className="appStoreImg"
                    src={apple}
                    alt="apple appstore"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 imageRight">
            <div className="form-heading">
              <img
                src={logo}
                className="mr-2 img-fluid"
                style={{ width: "30px" }}
              />
              <h3>Login</h3>
            </div>
            <br />
            <Form layout="vertical" scrollToFirstError onFinish={handleLogin}>
              <Form.Item
                initialValue={user.phoneNumber}
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e.target.value, "phoneNumber")}
                />
              </Form.Item>

              <Form.Item
                initialValue={user.password}
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  onChange={(e) => handleChange(e.target.value, "password")}
                />
              </Form.Item>
              <p className="text-right">Forgot Password</p>
              <Button
                type="primary"
                size="large"
                className="btn btn-block"
                htmlType="submit"
              >
                Login in to your account
              </Button>
            </Form>
          </div>
        </div>
      </div>
      {/* /.container */}
    </section>
  );
};

export default LoginPage;
