import React from "react";
import { Route } from "react-router-dom";
import LoggedAreaBase from "../BaseLayout/LoggedAreaBase";

const LoggedAreaRoute = ({ component: Component, ...rest }) => {
  //Store the link to localStorage
  localStorage.setItem("Link", rest.path);

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <LoggedAreaBase>
            <Component {...matchProps} />
          </LoggedAreaBase>
        );
      }}
    />
  );
};

export default LoggedAreaRoute;
