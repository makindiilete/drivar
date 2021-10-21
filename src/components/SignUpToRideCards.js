import React from "react";
import { Button } from "antd";
import firstCar from "../assets/images/landing/kisspng-mid-size-car-2009-toyota-camry-2010-toyota-camry-5ae488da723324.1045384415249266824678.png";
import secondCar from "../assets/images/landing/SVG/cardGroup.png";
import "../assets/css/LandingPage.css";

const SignUpToRideCards = (props) => {
  return (
    <section className="landingPage__cards">
      <div className="container-md">
        <div className="row">
          <div className="col-md-6 position-relative">
            <div className="landingPage__card ">
              <h2 className="text-center">
                Sign up to Ride with{" "}
                <span className="secondary-text">Drivar</span>
              </h2>
              {/*<p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam consequuntur corporis culpa dignissimos harum labore
                laudantium, nesciunt optio quam quasi quo, reiciendis saepe
                similique voluptatum!
              </p>*/}
              <p className="text-center">
                <Button
                  type="primary"
                  size="large"
                  style={{ marginTop: "9rem" }}
                >
                  Sign Up
                </Button>
              </p>
            </div>
            <img
              src={firstCar}
              className="firstCar img-fluid"
              data-aos="fade-right"
            />
          </div>
          {/* /.col-md-6 */}

          <div className="col-md-6 position-relative">
            <div className="landingPage__card ">
              <h2 className="text-center">
                Sign up to Drive or Deliver with{" "}
                <span className="primary-text">Drivar</span>{" "}
              </h2>
              <br />
              <br />
              <p className="text-center">
                <Button type="primary" size="large">
                  Sign Up
                </Button>
              </p>
              <img
                src={secondCar}
                className="secondCar img-fluid"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
    </section>
  );
};

export default SignUpToRideCards;
