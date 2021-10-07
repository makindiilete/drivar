import React from "react";
import heroImageFive from "../assets/images/landing/Drivar-Mockup.png";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";
import "../assets/css/LandingPage.css";

const DownloadTheApp = (props) => {
  return (
    <section className="container landingPage landingPageFive">
      <div className="row content">
        <div className="col-md-6">
          <img
            src={heroImageFive}
            alt="hero lady"
            className="img-fluid heroTwo"
            data-aos="fade-right"
          />
        </div>
        <div className="col-md-6 downloadTheApp">
          <div className="text-content">
            <h2 className="heroText">
              Download the <span className="tertiary-text">Ryva</span> app and
              get started.
            </h2>
            <p className="text-dark-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
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
      </div>
    </section>
  );
};

export default DownloadTheApp;
