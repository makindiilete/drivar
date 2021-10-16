import React from "react";
import "../assets/css/HowItWorks.css";
import createAcct from "../assets/images/landing/man (1).svg";
import arrow from "../assets/images/landing/SVG/arrow.svg";
import bookOrRide from "../assets/images/ship-page/Group 109.svg";
import meetDriver from "../assets/images/landing/Group 4339.svg";
import sitRelax from "../assets/images/ship-page/icon-3.png";
import seeRide from "../assets/images/ship-page/icon-5.png";
import rating from "../assets/images/ship-page/icon-6.png";

const HowShippingWorks = (props) => {
  return (
    <section className="howItWorks shipping">
      <div className="container">
        <h2 className="text-center">
          How <span className="tertiary-text">Ryva</span> Shipping Works.
        </h2>
        <p className="text-center">
          Ship packages across the country and across the world with Ryva <br />{" "}
          and make money while shipping.
        </p>
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
              <h5 className="mt-0 font-weight-bolder">Create an Account</h5>
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
              src={bookOrRide}
              alt="Generic placeholder image"
            />
            <div className="media-body">
              <h5 className="mt-0 font-weight-bolder">
                Enter your shipment & Pickup destination
              </h5>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
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
              <h5 className="mt-0 font-weight-bolder">Meet your driver</h5>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
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
              <h5 className="mt-0 font-weight-bolder">
                See Shipping Ride Details
              </h5>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
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
              <h5 className="mt-0 font-weight-bolder">Ship your package</h5>
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
              <h5 className="mt-0 font-weight-bolder">
                Make money off your extra shipping space
              </h5>
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

export default HowShippingWorks;
