import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

const RecruiterNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#07145c", color: "white" }}
    >
      <Navbar.Brand className="logo text-white fw-bold fs-1 ps-4">
        <p>Jobdoor</p>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Item className="nav-link mt-2">
              <Link
                to={"/recruiter/homepage"}
                className="text-decoration-none text-white"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link mt-2">
              <Link
                to={"/recruiter/profile"}
                className="text-decoration-none text-white"
              >
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link mt-2">
              <Link
                to={"/recruiter/add-jobs"}
                className="text-decoration-none text-white"
              >
                Add Jobs
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link mt-2">
              <Link
                to={"/recruiter/my-jobs"}
                className="text-decoration-none text-white"
              >
                My Jobs
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to={"/login/recruiter"}>
                <Button
                  onClick={() => localStorage.removeItem("token")}
                  variant="dark"
                >
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

export default RecruiterNavbar;
