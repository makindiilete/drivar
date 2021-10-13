import React from "react";
import "../assets/css/LandingPage.css";
import MoveWithComfort from "../components/MoveWithComfort";
import WeHelpYouMoveAround from "../components/WeHelpYouMoveAround";
import SignUpToRideCards from "../components/SignUpToRideCards";
import HowItWorks from "../components/HowItWorks";
import UsingRyvaApp from "../components/UsingRyvaApp";
import DownloadTheApp from "../components/DownloadTheApp";

const LandingPage = (props) => {
  return (
    <>
      <MoveWithComfort />
      <WeHelpYouMoveAround />
      <SignUpToRideCards />
      <HowItWorks />
      <UsingRyvaApp />
      <DownloadTheApp />
    </>
  );
};

export default LandingPage;
