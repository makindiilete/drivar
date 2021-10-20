import React, { useEffect } from "react";
import HelpNavigation from "../components/HelpNavigation";
import ErrorBoundary from "../Utils/ErrorBoundary";
import FooterPage from "../components/FooterPage";

const HelpAreaBase = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HelpNavigation />
      <ErrorBoundary>{children}</ErrorBoundary>
      <FooterPage />
    </div>
  );
};

export default HelpAreaBase;
