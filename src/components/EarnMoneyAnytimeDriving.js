import React from "react";
import landingPageThreeIconOne from "../assets/images/driver/Group 644.svg";
import landingPageThreeIconTwo from "../assets/images/landing/Group 61.svg";
import landingPageThreeIconThree from "../assets/images/landing/Group 62.svg";
import primaryLine from "../assets/images/landing/primaryLine.svg";
import { Button } from "antd";
import heroImageThree from "../assets/images/landing/Group 160.png";
import "../assets/css/LandingPage.css";

const EarnMoneyAnytimeDriving = (props) => {
  return (
    <section className="landingPage landingPageThree">
      <div className="row content">
        <div className="col-md-6">
          <div className="text-content">
            <p className="primary-text">RIDE WITH RYVA</p>
            <h2 className="heroText text-dark">
              Earn money anytime driving with Ryva
            </h2>
            <p className="text-dark-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <br />
            <br />
            <div className="media">
              <img
                className="d-flex mr-3"
                data-src="holder.js/64x64?theme=sky"
                alt="64x64"
                src={landingPageThreeIconOne}
              />
              <div className="media-body">
                <h5 className="mt-0 font-weight-bolder">Reliable earnings</h5>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </div>
            </div>
            <br />
            <div className="media">
              <img
                className="d-flex mr-3"
                data-src="holder.js/64x64?theme=sky"
                alt="64x64"
                src={landingPageThreeIconTwo}
              />
              <div className="media-body">
                <h5 className="mt-0 font-weight-bolder">A flexible schedule</h5>
                Be your own boss and drive whenever it works for you.
              </div>
            </div>

            <br />
            <div className="media">
              <img
                className="d-flex mr-3"
                data-src="holder.js/64x64?theme=sky"
                alt="64x64"
                src={landingPageThreeIconThree}
              />
              <div className="media-body">
                <h5 className="mt-0 font-weight-bolder">Get paid promptly</h5>
                Cash out your earnings whenever, wherever, however you want.
              </div>
            </div>
            <br />

            <div>
              <span>
                <img
                  src={primaryLine}
                  className="landingPage__about_line"
                  data-aos="fade-right"
                />
              </span>
              <Button type="primary" size="large" className="applyToDrive">
                Apply to drive
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={heroImageThree}
            alt="hero lady"
            className="img-fluid heroTwo"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default EarnMoneyAnytimeDriving;
