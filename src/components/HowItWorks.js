import React from "react";
import "../assets/css/HowItWorks.css";
import arrow from "../assets/images/landing/SVG/arrow.svg";
import createAcct from "../assets/images/landing/man (1).svg";
import bookOrRide from "../assets/images/landing/Group 109.svg";
import meetDriver from "../assets/images/landing/Group 4339.svg";
import seeRide from "../assets/images/landing/Group 162.svg";
import sitRelax from "../assets/images/landing/Group 163.svg";
import rating from "../assets/images/landing/Group 117.svg";
// import "../assets/css/LandingPage.css";

const HowItWorks = (props) => {
  return (
    <section className="howItWorks">
      <div className="container">
        <div className="row content">
          <div className="col-md-6">
            <h2>
              How it Works<span className="primary-text">.</span>
            </h2>
            Knowing how easy it is too move from place to place or move your
            packages gives the best of mind that you or your package is in the
            safest possible hands as Ryva’s.
          </div>
          <div className="col-md-6" />
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={createAcct}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">Reliable earnings</h5>
              <small>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </small>
            </div>
          </div>
          <div className="col-md-4 arrow">
            <img src={arrow} className="directionArrow" />
          </div>
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={bookOrRide}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">
                Book a ride or shipping
              </h5>
              <small>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </small>
            </div>
          </div>
          {/* /.col-md-4 */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 media" />

          <div className="col-md-4 " />
          <div className="col-md-4 arrow">
            <img src={arrow} className="directionArrow arrowDown" />
          </div>
          {/* /.col-md-4 */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={meetDriver}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">
                Meet your ride/shipping driver
              </h5>
              <small>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </small>
            </div>
          </div>
          <div className="col-md-4 arrow">
            <img src={arrow} className="directionArrow arrowLeft" />
          </div>
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={seeRide}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">See Ride Details</h5>
              <small>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </small>
            </div>
          </div>
          {/* /.col-md-4 */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 arrow">
            <img src={arrow} className="directionArrow arrowDown" />
          </div>
          <div className="col-md-4" />

          <div className="col-md-4 " />

          {/* /.col-md-4 */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={sitRelax}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">
                Sit back, Let us handle your ride/package
              </h5>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </small>
            </div>
          </div>
          <div className="col-md-4 arrow">
            <img src={arrow} className="directionArrow" />
          </div>
          <div className="col-md-4 media">
            <img
              className="mr-3 howItWorksIcons"
              src={rating}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">Rate your trip</h5>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </small>
            </div>
          </div>
          {/* /.col-md-4 */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
