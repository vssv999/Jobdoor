import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Offer = () => {
  return (
    <div
      className="container-fluid pb-5 pt-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-2">Claim Your Offer</h1>
            <p className="mb-5 body-pic">
              <em>
                Hello, We have a special ongoing offer for our new customers to
                avail 25% OFF & 100% Cashback on their first assignment with us.
                We are committed to delivering the premium service despite an
                affordable price. Enter your phone number below to get the
                coupon code. (We do not spam)
              </em>
            </p>
            <h5 className="body-pic">
              <strong>Susan White</strong>
            </h5>
            <p className="text-primary body-pic">
              <strong>Head of Sales Department</strong>
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              <span className="text-primary h1">25% OFF & 100% Cashback</span>{" "}
              on
            </p>
            <p className="fs-6 mb-3">your First order !</p>
            <p className="fs-6">
              Type your whatsapp number to get an exclusive code.
            </p>
            <form className="d-flex">
              <div className="input-group mb-3">
                <span className="input-group-text">+1</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your number"
                />
                <button className="px-5 btn btn-success">
                  <FaWhatsapp
                    style={{ marginRight: "3px", marginBottom: "2px" }}
                  />
                  Get Number
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
