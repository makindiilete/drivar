import React from "react";
import "../../src/assets/css/UsingRyvaApp.css";
import logoOne from "../assets/images/landing/Group 64.svg";
import logoTwo from "../assets/images/landing/Group 128.svg";
import logoThree from "../assets/images/landing/Group 4341.svg";

const UsingRyvaApp = (props) => {
  return (
    <section className="usingRyvaApp">
      <div className="container">
        <h2 className="text-center heading">
          Using <span className="tertiary-text">Ryva</span> app
        </h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src={logoOne}
              className="logo"
              alt="All New Way Of Moving & Sending Items"
            />
            <p>
              <strong>All New Way Of Moving & Sending Items</strong>
            </p>
            <ul className="list-item">
              <li>Convenient and Economical.</li>
              <li>Maximum utilization of your carrying capacity.</li>
              <li>Earn every time you travel.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={logoTwo} className="logo" alt="Parcel/Deliver Goods" />
            <p>
              <strong>Parcel/Deliver Goods</strong>
            </p>
            <ul className="list-item">
              <li>
                So you have empty boot or travel luggage space? There are people
                to reward you.
              </li>
              <li>
                Send and receive goods through our trusted community of
                travelers.
              </li>
              <li>
                Post your travel plan easy and quick with pickup and delivery
                dates.
              </li>
              <li>
                Our innovative Profile Trust Factor ensures only trustworthy
                people.
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={logoThree} className="logo" alt="Secure And Safe" />
            <p>
              <strong>Secure And Safe</strong>
            </p>
            <ul className="list-item">
              <li>Our platform is equipped with secure verification systems</li>
              <li>Rating and reviews improves trust and security</li>
            </ul>
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default UsingRyvaApp;
