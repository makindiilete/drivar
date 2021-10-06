import React from "react";
import { Route } from "react-router-dom";
import PublicAreaBase from "../BaseLayout/PublicAreaBase";
import { MobileFooter } from "../components/others/MobileFooter";
import { NotShiftingFooter } from "../components/NotShiftingFooter";
import { useTablet } from "../hooks/useMobile";

const PublicAreaRoute = ({ component: Component, ...rest }) => {
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
            {tablet ? (
              <div style={{ marginTop: "20px" }}>
                <MobileFooter />
              </div>
            ) : (
              <div style={{ marginTop: "50px" }}>
                <NotShiftingFooter />
              </div>
            )}
          </PublicAreaBase>
        );
      }}
    />
  );
};

export default PublicAreaRoute;
