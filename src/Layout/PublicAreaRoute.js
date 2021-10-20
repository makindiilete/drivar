import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PublicAreaBase from "../BaseLayout/PublicAreaBase";
import { useTablet } from "../hooks/useMobile";

const PublicAreaRoute = ({ component: Component, ...rest }) => {
  //Store the link to localStorage
  localStorage.setItem("Link", rest.path);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
