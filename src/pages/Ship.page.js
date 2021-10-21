import React from "react";
import "../assets/css/ShipPage.css";
import trackImage from "../assets/images/ship-page/track-image.png";
import heroImage from "../assets/images/ship-page/Group 165/Group-165-big.png";
import firstIcon from "../assets/images/ship-page/Group 139.svg";
import secondIcon from "../assets/images/ship-page/Group 140.svg";
import thirdIcon from "../assets/images/ship-page/Group 149.svg";
import { Button } from "antd";
import HowShippingWorks from "../components/HowShippingWorks";
import Accordion from "../components/Accordion";
import DownloadTheApp from "../components/DownloadTheApp";
import heroImageFive from "../assets/images/ship-page/Group-166.png";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";
import "../assets/css/LandingPage.css";

const ShipPage = (props) => {
  return (
    <>
      <div className="shipping">
        <section className="shipping__hero-area">
          <div className="row h-100">
            <div className="col-md-6  d-flex align-items-center">
              <div className="shipping__hero-area__heading">
                <h2>
                  Move goods and <br /> precious cargo delivered <br /> safely
                  and timely.
                </h2>
                <Button
                  type="primary"
                  size="large"
                  className="rider__hero-area__btn"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <img
                src={heroImage}
                className="shipping__hero-area__image img-fluid"
              />
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </section>
        {/* /.shipping__hero-area */}
        <section className="shipping__tracking">
          <div className="container">
            <h2>
              Track goods and cargo <br /> on the go.
            </h2>
            <img
              src={trackImage}
              className="shipping__hero-area__image img-fluid"
            />
            <div className="shipping__list-icon">
              <div className="row">
                <div className="col-md-4">
                  <img src={firstIcon} className="shipping__list-icon__icons" />
                  <p className="font-weight-bolder">
                    Shipping at your finger tips
                  </p>
                  <p>
                    Order our shipping services with just a click of a button on
                    your smartphone. It’s as easy as it comes.
                  </p>
                </div>
                {/* /.col-md-4 */}
                <div className="col-md-4">
                  <img
                    src={secondIcon}
                    className="shipping__list-icon__icons"
                  />
                  <p className="font-weight-bolder">The Ryva Shipping</p>
                  <p>
                    We ship both locally and internationally. Those packages you
                    want to send, Ryva has got you covered.
                  </p>
                </div>
                {/* /.col-md-4 */}
                <div className="col-md-4">
                  <img src={thirdIcon} className="shipping__list-icon__icons" />
                  <p className="font-weight-bolder">Fast & On Time</p>
                  <p>
                    Our shipping and delivery are fast, reliable and always on
                    time.
                  </p>
                </div>
                {/* /.col-md-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.shipping__list-icon */}
            <HowShippingWorks />
          </div>
          {/* /.container */}
          <section className=" landingPageFive shipping" id="download">
            <div className="row content">
              <div className="col-md-6">
                <img
                  src={heroImageFive}
                  alt="hero lady"
                  className="img-fluid mobilePhone shipping"
                  data-aos="fade-right"
                />
              </div>
              <div className="col-md-6 downloadTheApp shipping">
                <div className="text-content" style={{ marginRight: "10rem" }}>
                  <h2 className="heroText">
                    Earn Money with <br /> Ryva Shipping
                  </h2>
                  <p className="text-dark-medium">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                  <Button type="primary" size="large">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <Accordion title="Top Questions from Shipping partners." />
            <DownloadTheApp />
          </div>
        </section>
        {/* /.tracking */}
      </div>
    </>
  );
};

export default ShipPage;
