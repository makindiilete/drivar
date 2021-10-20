import React, { useEffect } from "react";
import ErrorBoundary from "../Utils/ErrorBoundary";
import { useHistory } from "react-router-dom";
import { useTablet } from "../hooks/useMobile";

const LoggedAreaBase = ({ children }) => {
  const history = useHistory();
  const tablet = useTablet();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!sessionStorage.getItem("token")) {
    console.log("token not found");
    history.push("/login");
    return null;
  } else {
    console.log("token found");
    return (
      <div>
        {/*<ResponsiveDrawer />*/}
        <br />
        <br />
        <br />
        <ErrorBoundary>{children}</ErrorBoundary>
        {/*{!tablet ? <Footer /> : <MobileFooter />}*/}
      </div>
    );
  }
};

export default LoggedAreaBase;
