import React from "react";
import { ReactComponent as Logo } from "../assets/images/errorBoundary.svg";

const NetworkErrorComponent = (props) => {
  const style = {
    marginLeft: "50%",
    marginRight: "50%",
    marginTop: "150px",
    transform: "translateX(-50%)",
    width: "200px",
    height: "200px",
  };
  return (
    <div>
      <div className="logo-wrapper">
        <Logo style={style} />
      </div>
      <div>
        {" "}
        <h5 style={{ textAlign: "center" }}> {props?.errorMessage}</h5>
      </div>
    </div>
  );
};

export default NetworkErrorComponent;
