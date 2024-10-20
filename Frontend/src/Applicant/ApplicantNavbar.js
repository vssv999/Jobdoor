import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

const ApplicantNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#07145c" }}
    >
      <Container>
      <Navbar.Brand className="logo text-white fw-bold fs-1">
            <p>Jobdoor</p>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
          <Nav.Item className="nav-link text-white mt-2">
              <Link to={"/applicant/homepage"} className="text-decoration-none text-white">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link text-white mt-2">
              <Link to={"/applicant/profile"} className="text-decoration-none text-white">
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link text-white mt-2">
              <Link to={"/applicant/all-jobs"} className="text-decoration-none text-white">
                All Jobs
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link mt-2">
              <Link
                to={"/applicant/applied-jobs"}
                className="text-decoration-none text-white"
              >
                Applied Jobs
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to={"/login/applicant"}>
                <Button variant="light" onClick={() => localStorage.removeItem("token")}>
                  Logout
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ApplicantNavbar;
