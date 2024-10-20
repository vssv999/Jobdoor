import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RedLink = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#d4765d" }}>
      <div className="container text-center pt-3 pb-5 text-white">
        <h4>We offer the lowest price</h4>
        <h5 className="mb-3">
          <em>Get the best assignment help from us at pocket-friendly price</em>
        </h5>
        <button type="button" className="btn btn-light btn-lg">
          <Link
            to={"/register/applicant"}
            className="text-decoration-none text-danger"
          >
            Register as Applicant
          </Link>
          <FaAngleRight color="#d4765d" />
        </button>
      </div>
    </div>
  );
};

export default RedLink;
