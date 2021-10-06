import React from "react";
import { Route } from "react-router-dom";
import PublicAreaBase from "../BaseLayout/PublicAreaBase";
import { MobileFooter } from "../components/others/MobileFooter";
import { NotShiftingFooter } from "../components/NotShiftingFooter";
import { useTablet } from "../hooks/useMobile";

const AuthAreaRoute = ({ component: Component, ...rest }) => {
  console.log("props = ", rest);
  //Store the link to localStorage
  localStorage.setItem("Link", rest.path);
  const tablet = useTablet();

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

export default AuthAreaRoute;
