import React from "react";
import heroImageFour from "../assets/images/landing/Group 161.png";
import { Button } from "antd";
import "../assets/css/LandingPage.css";

const HaveYourGoodsAndPreciousCargo = (props) => {
  return (
    <section className="landingPage landingPageFour">
      <div className="row content">
        <div className="col-md-6">
          <img
            src={heroImageFour}
            alt="hero lady"
            className="img-fluid heroTwo"
            data-aos="fade-right"
          />
        </div>
        <div className="col-md-6">
          <div className="text-content">
            <p className="primary-text">SHIP WITH DRIVAR</p>
            <h2 className="heroText text-dark">
              Have your goods and precious cargo delivered safely and timely.
            </h2>
            <p className="text-dark-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <Button size="large" className="learnMore">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveYourGoodsAndPreciousCargo;
