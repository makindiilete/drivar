import React from "react";
import "../assets/css/CompanyPage.css";
import hero_one from "../assets/images/Company/Family-2.png";
import left_card_img from "../assets/images/Company/Group 17.svg";
import right_card_img from "../assets/images/Company/Ellipse 1.svg";
import media_image_one from "../assets/images/Company/pexels-pixabay-164634.png";
import media_image_two from "../assets/images/Company/Delivery-man.png";
import media_image_three from "../assets/images/Company/Driver.png";
import { Button } from "antd";
import routes from "../routes";
import { useHistory } from "react-router-dom";

const CompanyPage = (props) => {
  const history = useHistory();
  return (
    <div className="company">
      <div className="container">
        <h2 className="company__heading">
          We ensure you are always <br /> on time and never miss <br /> those
          important moments.
        </h2>
        <br />
        <br />
        <br />
      </div>
      <div className="company__hero-area-one">
        <img src={hero_one} className="img-fluid" />
      </div>
      {/* /.company__hero-area-one */}
      <br />
      <br />
      <div className="container">
        <h2>
          About <span className="primary-text">Us</span>
        </h2>
        <p>
          The age of the ‘Sharing Economy’ is an approach towards a better world
          with consumption shifting from individual basis to collective basis
          saving significant energy/resources and controlling pollution. The
          world recently has seen some great initiative on sharing economy
          ranging from cab sharing to home sharing to workplace sharing. These
          businesses are continuously moving from heavy asset models to light
          asset models tapping the emerging technologies to create a win-win
          situation for everyone. Ryva is one such initiative in the logistics
          and courier space to maximize utilization of the un-utilized carrying
          capacity of the millions of travelers commuting daily using various
          modes of transportation. <br /> <br /> Ryva is bringing a unique and
          innovative platform to connect these travelers with the people who
          want to parcel their items thereby creating a social community
          platform where people will be connected with other building trust
          factors and informed about others travelling plans. This unique
          community will create ample opportunities for people to earn and save
          money as carriers and senders.
        </p>
        <br />
        <br />
        <br />
        <h2>
          Our Shared <span className="secondary-text">Beliefs</span>
        </h2>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <p className="font-weight-bolder">
              A Deep-Rooted Passion for Quality
            </p>
            <p>
              The passion for quality is the key driver to our success. Quality
              is the keyword that runs through our organization. We strive to
              exceed the expectations of our clients.
            </p>
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <p className="font-weight-bolder">Driven to Innovate</p>
            <p>
              We are driven to innovate and conjure up ideas that inspire our
              mission and goals. We believe in finding creative solutions
              outside of the proverbial box.
            </p>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
        <br />
        <div className="row">
          <div className="col-md-6">
            <p className="font-weight-bolder">Continuous Pivoting</p>
            <p>
              We are committed to continuous pivoting. We actively seek feedback
              from those we serve and use it to enhance our customer experience.
            </p>
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <p className="font-weight-bolder">
              Ethics, Diversity, and Integrity
            </p>
            <p>
              We nurture honesty and integrity in everything that we do. We
              aspire to be communicative, transparent, and empathetic. We
              maintain high standards of governance, personal integrity,
              confidentiality, and ethical behavior. We are here to amplify your
              voice and needs.
            </p>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      <br />
      <br />
      <br />
      {/* <div className="company__hero-area-two">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center company__hero-area-two__heading">
              <div>
                <h2 className="text-white">
                  A Letter from <br /> our CEO.
                </h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et.
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="rider__hero-area__btn"
                  onClick={() => history.push(routes.COMPANY_NOTES)}
                >
                  Read Ken's Letter
                </Button>
              </div>
            </div>
             /.col-md-4
          </div>
           /.row
        </div>
         /.container
      </div>
      <br />
      <br />
      <br />
      <div className="company__stats">
        <div className="container">
          <h2 className="text-center">
            <span className="primary-text">Ryva</span> in numbers.
          </h2>
          <hr
            style={{
              border: "1px solid grey",
              width: "10%",
              marginTop: "3rem",
            }}
          />
          <br />
          <br />
          <div className="company__stats__card">
            <h3 className="font-weight-bolder">
              +1500 <small>Employees</small>
            </h3>
            <h3 className="font-weight-bolder">
              32 <small>States covered</small>
            </h3>
            <h3 className="font-weight-bolder">
              +80M <small>Active users</small>
            </h3>
            <h3 className="font-weight-bolder">
              +10M <small>Goods & Cargo delivered</small>
            </h3>
            <img
              src={left_card_img}
              className="company__stats__card__left-img"
            />
            <img
              src={right_card_img}
              className="company__stats__card__right-img"
            />
          </div>
           /.company__stats__card
          <h2 className="company__stats__heading">
            Keep up with the latest <br /> about
            <span className="secondary-text"> Ryva.</span>
          </h2>
          <br />
          <div className="company__stats__media">
            <div className="row">
              <div className="col-md-4">
                <img src={media_image_one} className="img-fluid" />
                <br />
                <br />
                <div className="company__stats__media__title">
                  <p className="font-weight-bolder">
                    Ryva fleet increases by 10 fold
                  </p>
                  <p className="company__stats__media__date">3 days Ago</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-md-4">
                <img src={media_image_two} className="img-fluid" />
                <br />
                <br />
                <div className="company__stats__media__title">
                  <p className="font-weight-bolder">
                    Ryva Expands Logistics service
                  </p>
                  <p className="company__stats__media__date">3 days Ago</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-md-4">
                <img src={media_image_three} className="img-fluid" />
                <br />
                <br />
                <div className="company__stats__media__title">
                  <p className="font-weight-bolder">More Drivers join Ryva</p>
                  <p className="company__stats__media__date">3 days Ago</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
              </div>
               /.col-md-4
            </div>
             /.row
          </div>
           /.company__stats__media
        </div>
         /.container
      </div>*/}
      {/* /.company__stats */}
    </div>
  );
};

export default CompanyPage;
