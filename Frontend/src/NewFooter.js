import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";
import logo from "./Images/logo.jpg";
import { Container } from "react-bootstrap";
const NewFooter = () => {
  return (
    <Container fluid className="pt-4 m-auto p-auto" style={{ backgroundColor: "#07145c" }}>
      <Container className="text-white">
        <div className="row footer">
          <div className="col-lg-2 col-md-4 col-sm-12 mb-4">
            <img src={logo} alt="logo" height="110px"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 mb-1">
            <h5>
              <strong>Trending</strong>
            </h5>
            <ul>
              <li>
                <a href="###">Web Design</a>
              </li>

              <li>
                <a href="###"> Developers</a>
              </li>
              <li>
                <a href="###">Python</a>
              </li>
              <li>
                <a href="###">HTML5</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 mb-1">
            <h5>
              <strong>Company</strong>
            </h5>
            <ul>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <a href="###">Career</a>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <h5>
              <strong>Support</strong>
            </h5>
            <ul>
              <li>
                <a href="###">Support</a>
              </li>
              <li>
                <a href="###">Privacy</a>
              </li>
              <li>
                <a href="###"> Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4">
            <h5>
              <strong>Contact Us</strong>
            </h5>
            <div className="mb-4">
              <a href="###" className="me-3">
                <FaInstagram />
              </a>
              <a href="###" className="me-3">
                <FaTwitter />
              </a>
              <a href="###" className="me-3">
                <FaWhatsapp />
              </a>
              <a href="###">
                <FaMobileAlt />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="row bg-white text-center">
        <div className="col-12">
          <p>
            <small>Copyright ©2022 All rights reserved</small>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default NewFooter;
