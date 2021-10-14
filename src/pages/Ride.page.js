import React from "react";
import { Button } from "antd";
import "custom-react-accordion/dist/Accordion.css";
import "../assets/css/Rider.page.css";
import car from "../assets/images/rider/Group-76.png";
import cardIconOne from "../assets/images/rider/Group 64.svg";
import cardIconTwo from "../assets/images/rider/Group 79.svg";
import cardIconThree from "../assets/images/rider/Group 78.svg";
import cardIconFour from "../assets/images/rider/Group 80.svg";
import HowItWorks from "../components/HowItWorks";
import DownloadTheApp from "../components/DownloadTheApp";
import Accordion from "../components/Accordion";

const RidePage = (props) => {
  return (
    <div className="rider">
      <section className="rider__hero-area">
        <div className="container">
          <h2 className="rider__hero-area__heading">
            Journey freely <br /> anytime. You have the <br /> power with{" "}
            <span className="primary-text">Ryva.</span>
          </h2>
          <Button type="primary" size="large" className="rider__hero-area__btn">
            Sign Up
          </Button>
        </div>
        {/* /.container */}
      </section>

      <section className="rider__why">
        <div className="container">
          <div className="rider__why__heading">
            <h2 className="text-center">
              Why use <span className="tertiary-text">Ryva</span> app
            </h2>
            <p className="text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, <br /> totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta <br /> sunt explicabo. Nemo enim ipsam voluptatem qui.
            </p>
          </div>
          <div className="rider__why__grid">
            <div className="row">
              <div className="col-md-4 d-flex flex-column justify-content-around">
                <div className="rider__why__card">
                  <img src={cardIconOne} className="rider__why__card__icon" />
                  <p className="font-weight-bolder">Rides on Demand</p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                <div className="rider__why__card">
                  <img src={cardIconTwo} className="rider__why__card__icon" />
                  <p className="font-weight-bolder">
                    An easy way to get around
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                {/* /.card__container */}
              </div>
              {/* /.col-md-4 */}
              <div className="col-md-4">
                <img src={car} className="img-fluid" data-aos="zoom-in" />
              </div>
              {/* /.col-md-4 */}
              <div className="col-md-4 d-flex flex-column justify-content-around">
                <div className="rider__why__card">
                  <img src={cardIconThree} className="rider__why__card__icon" />
                  <p className="font-weight-bolder">Budget-friendly options</p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                <div className="rider__why__card">
                  <img src={cardIconFour} className="rider__why__card__icon" />
                  <p className="font-weight-bolder">Amazing bonuses</p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
              </div>
              {/* /.col-md-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.rider__why__grid */}
        </div>
        {/* /.container */}
      </section>
      <HowItWorks />
      <Accordion />
      <DownloadTheApp />
    </div>
  );
};

export default RidePage;
