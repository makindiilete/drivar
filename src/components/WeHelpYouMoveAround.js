import React from "react";
import blueLine from "../assets/images/landing/blueline.svg";
import primaryLine from "../assets/images/landing/primaryLine.svg";
import "../assets/css/LandingPage.css";

const WeHelpYouMoveAround = (props) => {
  return (
    <section className="landingPage__about">
      <h2 className="landingPage__about_heading">
        We help you <span className="secondary-text"> move around.</span>
      </h2>
      <h2 className="landingPage__about_heading">
        <span>
          <img
            src={blueLine}
            className="landingPage__about_line"
            data-aos="fade-right"
          />
        </span>
        <span className="tertiary-text">move your packages.</span>
      </h2>

      <h2 className="landingPage__about_heading">
        <span>
          <img
            src={primaryLine}
            className="landingPage__about_line"
            data-aos="fade-right"
          />
        </span>
        make money
      </h2>
      <p className="landingPage__about_content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        dolorem doloribus dolorum eveniet facere illo illum, in iusto laudantium
        minus non nostrum perspiciatis quis sequi, totam? Adipisci amet, autem
        eum eveniet facilis, iure magnam maiores maxime quas, quidem
        reprehenderit saepe soluta vel. Adipisci, aliquam aspernatur enim
        perspiciatis rerum totam voluptatibus?
      </p>
    </section>
  );
};

export default WeHelpYouMoveAround;
