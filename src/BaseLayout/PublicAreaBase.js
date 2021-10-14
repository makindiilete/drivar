import React from "react";
import ErrorBoundary from "../Utils/ErrorBoundary";
import NavigationPage from "../components/NavigationPage";
import FooterPage from "../components/FooterPage";

const PublicAreaBase = ({ children }) => {
  return (
    <div>
      <NavigationPage />
      <ErrorBoundary>{children}</ErrorBoundary>
      <FooterPage />
    </div>
  );
};

export default PublicAreaBase;
