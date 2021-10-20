import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import HelpAreaBase from "../BaseLayout/HelpAreaBase";

const HelpAreaRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <HelpAreaBase>
            <Component {...matchProps} />
          </HelpAreaBase>
        );
      }}
    />
  );
};

export default HelpAreaRoute;
