import React from "react";
import "../assets/css/FooterPage.css";
import footerImage from "../assets/images/landing/logo.png";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";

const FooterPage = (props) => {
  return (
    <div className="footerClass">
      <div className=" footer__sections">
        <section className="footer__brand">
          <img src={footerImage} alt="" className="img-fluid" />
          <br />
          <small className="footer__copyright text-sm-center">
            Drivar Group
          </small>
          <br />
          <small className="footer__copyright text-sm-center">
            Copyright {new Date().getFullYear()}{" "}
          </small>
        </section>
        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">RIDER</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>
                <a href="#">Sign up to ride</a>
              </li>
              <li>
                <a href="#">Why use Drivar app</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">DRIVER</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>
                <a href="#">Sign up to ride</a>
              </li>
              <li>
                <a href="#">Why use Drivar app</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">LOGISTICS</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>
                <a href="#">Sign up to ride</a>
              </li>
              <li>
                <a href="#">Why use Drivar app</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">DRIVAR</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>
                <a href="#">About Company</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer__brand">
          <div className="footer__brand_images">
            <img
              src={google}
              alt=""
              className="footer__brand__image mr-2 pb-md-3 "
            />
            <img src={apple} alt="" className="footer__brand__image" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterPage;
