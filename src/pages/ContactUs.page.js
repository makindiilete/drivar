import React, { useEffect, useState } from "react";
import "../assets/css/ContactUs.page.css";
import { Button, Form, Input, Select } from "antd";
import google from "../assets/images/landing/Group 38.png";
import apple from "../assets/images/landing/app-store-badge.svg";

const { Option } = Select;

const ContactUsPage = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    category: "",
    complaint: "",
  });

  function handleChange(value, name) {}
  const handleSubmit = (data) => {
    console.log("Data submitted = ", data);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <div className="contact">
      <section className="contact__heading">
        <div className=" d-flex align-items-center h-100 position-relative ">
          <div className="contact__heading__content">
            <h2>
              Want to find out more? <br /> Get in touch with us.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="contact__heading__img" data-aos="fade-left" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="contact__form">
        <h2 className="text-center">Our Contact Details</h2>
        <hr />
        <br />
        <div className="row">
          <div className="col-md-6">
            <ul className="contact__form__list">
              <li>
                <p className="font-weight-bold">Email</p>
                <p className="primary-text">Contact@ryva.com</p>
              </li>
              <li>
                <p className="font-weight-bold">New driver registrations</p>
                <p className="primary-text">ryvaregistration@drivar.com</p>
              </li>
              <li>
                <p className="font-weight-bold">Training Office</p>
                <p>No. 363, Aazak Talogun Street.</p>
              </li>
              <li>
                <p className="font-weight-bold">Driver Training Time</p>
                <p>Mondays to Fridays: 9am to 4pm</p>
              </li>{" "}
              <li>
                <p className="font-weight-bold">In-Person support address</p>
                <p>Plot 1118, Block 25 Lalem St, Lekki Penninsula II, Lekki.</p>
              </li>{" "}
              <li>
                <p className="font-weight-bold">Office hours</p>
                <p>Mondays to Fridays: 9am to 4pm</p>
              </li>
            </ul>
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6 contact__form__reg ">
            <Form
              layout="vertical"
              scrollToFirstError
              onFinish={handleSubmit}
              className="w-100"
            >
              <div className="form-inline">
                <Form.Item
                  initialValue={user.firstName}
                  name="firstName"
                  label="First name"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChange(e.target.value, "firstName")}
                  />
                </Form.Item>
                <Form.Item
                  initialValue={user.lastName}
                  name="lastName"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChange(e.target.value, "lastName")}
                  />
                </Form.Item>
              </div>
              <div className="form-inline">
                <Form.Item
                  initialValue={user.email}
                  name="email"
                  label="Email Address"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                    {
                      type: "email",
                      message: "Invalid Email",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChange(e.target.value, "email")}
                  />
                </Form.Item>
                <Form.Item
                  initialValue={user.phoneNumber}
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChange(e.target.value, "lastName")}
                  />
                </Form.Item>
              </div>
              <div className=" form-block">
                <Form.Item
                  initialValue={user.category}
                  name="category"
                  label="Complaint Category"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select a complaint category"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="rider">Rider</Option>
                    <Option value="drive">Drive</Option>
                    <Option value="logistics">Logistics</Option>
                  </Select>
                </Form.Item>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
              <div className=" form-block">
                <Form.Item
                  initialValue={user.complaint}
                  name="complaint"
                  label="Complaint"
                  rules={[
                    {
                      required: true,
                      message: "Required Field",
                    },
                  ]}
                >
                  <Input.TextArea
                    maxLength={500}
                    rows={6}
                    onChange={(e) => handleChange(e.target.value, "email")}
                  />
                </Form.Item>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="submit-btn"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="contact__download d-flex align-items-center justify-content-center">
        <div>
          <h2 className="text-center">
            Download the Ryva <br /> app and get started.
          </h2>
          <br />
          <div className="d-flex justify-content-center">
            <img
              className="pr-3 playStoreImg"
              src={google}
              alt="google playstore"
            />
            <img className="appStoreImg" src={apple} alt="apple appstore" />
          </div>
        </div>
      </section>
      {/* /.contact__download */}
    </div>
  );
};

export default ContactUsPage;
