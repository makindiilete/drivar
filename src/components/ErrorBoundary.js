import * as React from "react";
// import SentryLogger from "../Utils/Sentry";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import NetworkErrorComponent from "./NetworkErrorComponent";
import "../assets/css/errorBoundary.css";

const renderTime = (value) => {
  if (value.remainingTime === 0) {
    return <div className="text-success">Redirecting to home</div>;
  }

  return (
    <div className="timer">
      <div className="text text-muted">Remaining</div>
      <div className="text value text-success">{value.remainingTime}</div>
      <div className="text text-muted">seconds</div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    localStorage.setItem("Error_Boundary", JSON.stringify(error));
    // You can also log the error to an error reporting service
    //Logging the error to sentry
    // const sentry = new SentryLogger();
    // sentry.capture_error(error);
    /*    setTimeout(() => {
      this.setState({ hasError: false });
      window.location.href = "/";
    }, 15000);*/
  }

  render() {
    if (process.env.NODE_ENV !== "development" && this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className="mt-5" style={{ height: "72vh" }}>
            <NetworkErrorComponent />
            <div className="text-center">
              <p className="text-danger">
                <strong> Oops! Something Went Wrong. </strong>
              </p>
              <div className="timer-wrapper">
                <CountdownCircleTimer
                  isPlaying
                  durationSeconds={15}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  duration={15}
                  onComplete={() => (window.location.href = "/")}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>
              <p>{/*<strong> Redirecting you to dashboard. </strong>*/}</p>
              <button
                className="btn btn-success"
                onClick={() => (window.location.href = "/")}
              >
                Back To Home
              </button>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
