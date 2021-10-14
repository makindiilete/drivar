import React from "react";
import { Button } from "antd";
import EarnMoneyAnytimeDriving from "../components/EarnMoneyAnytimeDriving";
import "../assets/css/Driver.page.css";
import Accordion from "../components/Accordion";
import DownloadTheApp from "../components/DownloadTheApp";
import phone from "../assets/images/driver/1x/imageLeft-8.png";

const DrivePage = (props) => {
  return (
    <div className="driver">
      <EarnMoneyAnytimeDriving />
      <section className="driver__app">
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={phone} className=" driver__app_image img-fluid" />
            </div>
            <div className="col-md-6 driver__app__text">
              <h2>The Driver app.</h2>
              <p>
                Make money in your free time, on your own terms, on the road on
                the platform with Ryva. Easy to use and reliable. Built from the
                ground up, for drivers, with drivers.
              </p>
            </div>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </section>
      <Accordion />
      <DownloadTheApp />
    </div>
  );
};

export default DrivePage;
