import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import './HomePage.css';

const HomeHeader = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#07145c" }}
      >
        <Container>
          <Navbar.Brand className="logo text-white fw-bold fs-1 pt-3">
            <p>Jobdoor</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to={"/"} className="nav-link text-white navbeauty">
                Home
              </Link>
              <Link to={"/about-us"} className="nav-link text-white navbeauty">
                About Us
              </Link>
              <Link to={"/Contacts"} className="nav-link text-white navbeauty">
                Contact
              </Link>
              <Link to={"/blog"} className="nav-link text-white navbeauty">
                Blog
              </Link>
              <Dropdown className="ms-2 me-2">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to={"/login/applicant"}
                      className="dropdowns text-decoration-none"
                    >
                      Applicant
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={"/login/recruiter"}
                      className="dropdowns text-decoration-none"
                    >
                      Recruiter
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Register
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to={"/register/applicant"}
                      className="dropdowns text-decoration-none"
                    >
                      Applicant
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={"/register/recruiter"}
                      className="dropdowns text-decoration-none"
                    >
                      Recruiter
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeHeader;
