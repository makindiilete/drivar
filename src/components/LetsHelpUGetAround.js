import React from "react";
import heroImageTwo from "../assets/images/landing/Group 63.png";
import lowestFare from "../assets/images/landing/Group 60.svg";
import alwaysOnTime from "../assets/images/landing/Group 48.svg";
import { Button } from "antd";
import "../assets/css/LandingPage.css";

const LetsHelpUGetAround = (props) => {
  return (
    <section className="landingPage landingPageTwo">
      <div className="row content">
        <div className="col-md-6">
          <img
            src={heroImageTwo}
            alt="hero lady"
            className="img-fluid heroTwo"
            data-aos="fade-right"
          />
        </div>
        <div className="col-md-6">
          <div className="text-content">
            <p className="primary-text">RIDE WITH DRIVAR</p>
            <h2 className="heroText text-dark">
              Let’s help you get around smoothly, easy & safely.
            </h2>
            <p className="text-dark-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium cumque ipsum iusto minus placeat, quidem ullam
              voluptatum? Dicta, doloribus id placeat quod reiciendis
              voluptates. Ducimus labore laborum non provident velit!
            </p>

            <div className="lowestFare">
              <img src={lowestFare} alt="Lowest Fare" />
              <small>Lowest fare rates on the market</small>
            </div>

            <div className="alwaysOnTime">
              <img
                src={alwaysOnTime}
                alt="Always on time riders"
                className="mr-3"
              />
              <small>Always on time riders</small>
            </div>

            <Button size="large" className="learnMore">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsHelpUGetAround;
