import React, { useEffect } from "react";
import ErrorBoundary from "../Utils/ErrorBoundary";
import NavigationPage from "../components/NavigationPage";
import FooterPage from "../components/FooterPage";

const PublicAreaBase = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavigationPage />
      <ErrorBoundary>{children}</ErrorBoundary>
      <FooterPage />
    </div>
  );
};

export default PublicAreaBase;
