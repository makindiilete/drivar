import React from "react";
import { Route } from "react-router-dom";
import PublicAreaBase from "../BaseLayout/PublicAreaBase";
import { useTablet } from "../hooks/useMobile";

const PublicAreaRoute = ({ component: Component, ...rest }) => {
  //Store the link to localStorage
  localStorage.setItem("Link", rest.path);

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <PublicAreaBase>
            <Component {...matchProps} />
          </PublicAreaBase>
        );
      }}
    />
  );
};

export default PublicAreaRoute;
