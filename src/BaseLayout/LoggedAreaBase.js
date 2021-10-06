import React from "react";
import ErrorBoundary from "../Utils/ErrorBoundary";
import { useHistory } from "react-router-dom";
import { Footer } from "../components/others/Footer";
import { useTablet } from "../hooks/useMobile";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { NotShiftingFooter } from "../components/NotShiftingFooter";
import { MobileFooter } from "../components/others/MobileFooter";

const LoggedAreaBase = ({ children }) => {
  const history = useHistory();
  const tablet = useTablet();
  if (!sessionStorage.getItem("token")) {
    console.log("token not found");
    history.push("/login");
    return null;
  } else {
    console.log("token found");
    return (
      <div>
        <ResponsiveDrawer />
        <br />
        <br />
        <br />
        <ErrorBoundary>{children}</ErrorBoundary>
        {!tablet ? <Footer /> : <MobileFooter />}
      </div>
    );
  }
};

export default LoggedAreaBase;
