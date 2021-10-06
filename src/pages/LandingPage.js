import React from "react";
import "../assets/css/LandingPage.css";
import heroImage from "../assets/images/landing/Group 159.png";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";

const LandingPage = (props) => {
  return (
    <div>
      <div
        style={{ width: "100vw", backgroundColor: "#fff", height: "113px" }}
      ></div>
      <br />
      <br />
      <section className="landingPage">
        <div className="row content">
          <div className="col-md-6">
            <div className="text-content">
              <p className="primary-text">RIDE. DRIVE. SHIP.</p>
              <h1 className="heroText">
                Move easy with comfort at extreme low cost.
              </h1>
              <p className="text-dark-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium cumque ipsum iusto minus placeat, quidem ullam
                voluptatum? Dicta, doloribus id placeat quod reiciendis
                voluptates. Ducimus labore laborum non provident velit!
              </p>

              <div className="d-flex">
                <img className="pr-3 playStoreImg" src={google} />
                <img className="appStoreImg" src={apple} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={heroImage} alt="image" className="img-fluid" />
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </section>
    </div>
  );
};

export default LandingPage;
