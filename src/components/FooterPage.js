import React from "react";
import "../assets/css/FooterPage.css";
import footerImage from "../assets/images/landing/logo.png";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";
import { useHistory } from "react-router-dom";
import routes from "../routes";

const FooterPage = (props) => {
  const history = useHistory();
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
              <li>Sign up to ride</li>
              <li>Why use Drivar app</li>
              <li>How it works</li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">DRIVER</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>Sign up to ride</li>
              <li>Why use Drivar app</li>
              <li>How it works</li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">LOGISTICS</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>Sign up to ride</li>
              <li>Why use Drivar app</li>
              <li>How it works</li>
            </ul>
          </div>
        </section>

        <section className="collapsible collapsible--expanded footer__section">
          <header className="collapsible__header">
            <h3 className="collapsible__heading footer__heading">DRIVAR</h3>
          </header>
          <div className="collapsible__content">
            <ul className="list">
              <li>About Company</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li onClick={() => history.push(routes.PRIVACY)}>
                Privacy Policy
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
