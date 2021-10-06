import React from "react";
import ErrorBoundary from "../Utils/ErrorBoundary";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

const PublicAreaBase = ({ children }) => {
  return (
    <div>
      <ResponsiveDrawer />
      <br />
      <br />
      <br />
      {/*<div>{children}</div>*/}
      <ErrorBoundary>{children}</ErrorBoundary>
      {/*<Footer />*/}
    </div>
  );
};

export default PublicAreaBase;
