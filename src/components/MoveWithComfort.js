import React from "react";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";
import heroImage from "../assets/images/landing/Group 159.png";
import "../assets/css/LandingPage.css";

const MoveWithComfort = (props) => {
  return (
    <div className="container">
      <section className="landingPage">
        <div className="row content">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text-content">
              <p className="primary-text">RIDE. DRIVE. SHIP.</p>
              <h2 className="heroText">
                Move with comfort <br /> and at ease
              </h2>
              <p className="text-dark-medium">
                Ryva connects people and businesses to reliable delivery
                partners that provide quick, cheap and delightful experiences.
                We are committed to bringing transparency, efficiency and speed,
                connecting everyone and everything.
              </p>

              <div className="d-flex">
                <img
                  className="pr-3 playStoreImg"
                  src={google}
                  alt="google playstore"
                />
                <img className="appStoreImg" src={apple} alt="apple appstore" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={heroImage}
              alt="hero lady"
              className="img-fluid heroLady"
              data-aos="fade-left"
            />
          </div>
          {/* /.col-md-6 */}
        </div>
      </section>
    </div>
  );
};

export default MoveWithComfort;
