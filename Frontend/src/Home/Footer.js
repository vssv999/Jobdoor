import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";
import logo from "../Images/logo.jpg";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid className="pt-4" style={{ backgroundColor: "#07145c" }}>
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
                <a href="###">Graphic Design</a>
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
              <li>
                <a href="###">CSS3</a>
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
                <a href="###">Blog</a>
              </li>
              <li>
                <a href="###">Resources</a>
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
              <div className="mt-2">
                <h5>
                  <strong>Recruiter Login</strong>
                </h5>
                <li>
                  <Link
                    to={"/login/recruiter"}
                    className="nav-link text-white"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register/recruiter"}
                    className="nav-link text-white"
                  >
                    Signup
                  </Link>
                </li>
              </div>
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
            <div>
              <h5>
                <strong>Applicant Login</strong>
              </h5>
              <li>
                <Link
                  to={"/login/applicant"}
                  className="nav-link text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/register/applicant"}
                  className="nav-link text-white"
                >
                  Signup
                </Link>
              </li>
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
export default Footer;
