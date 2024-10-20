import React, { useState, useEffect } from "react";
import { Container, Navbar, Button, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import NewFooter from "../NewFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecruiterReg = () => {
  const [popup, setPopup] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    company: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, mobile, company, password, confirmpassword } = data;
  const [errors, setErrors] = useState([]);
  const [submitForm, setSubmit] = useState(false);
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(Validate(data));
    setSubmit(true);
  };
  useEffect(() => {
    async function fetchData() {
      if (Object.keys(errors).length === 0 && submitForm) {
        try {
          const res = await axios.post("/register/admin", data);
          toast.success("Registered successfully. Login !!!", {
            position: "top-center",
          });
        } catch (err) {
          if (err.response.status === 400) {
            toast.error(err.response.data, {
              position: "top-center",
            });
          }
        }
        setData({
          ...data,
          username: "",
          email: "",
          mobile: "",
          company: "",
          password: "",
          confirmpassword: "",
        });
      }
    }
    fetchData();
  }, [errors]);
  const Validate = () => {
    const err = {};
    if (!username) {
      err.username = "Please enter the User-name";
    }
    if (!email) {
      err.email = "Please enter Email";
    } else if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    ) {
      err.email = "Invaild email.";
    }
    if (!mobile) {
      err.mobile = "Please enter the Phone number";
    } else if (mobile.length != 10) {
      err.mobile = "Phone number should be 10 digits.";
    }
    if (!company) {
      err.company = "Please enter the Company name";
    }
    if (!password) {
      err.password = "Please enter the Password";
    } else if (password.length < 5) {
      err.password = "Password must have min 5 char";
    }
    if (password != confirmpassword) {
      err.confirmpassword = "Invalid Password";
    }
    return err;
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="mb-4"
        style={{ backgroundColor: "#07145c" }}
      >
        <Container fluid>
          <Link to={"/"} className="text-decoration-none">
            <Navbar.Brand className="text-white fw-bold ms-4">
              Jobdoor
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to={"/login/recruiter"} className="nav-link text-white">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <center>
        <form
          className="registerForm"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h3>Recruiter Registration</h3>
          <input
            className="mb-2 bg-light w-25 rounded-pill py-2 text-center"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.username}</p>
          <input
            className="mb-2 bg-light w-25 rounded-pill py-2 text-center"
            type="email"
            name="email"
            placeholder="example@abc.com"
            value={email}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.email}</p>
          <input
            className="mb-2 bg-light w-25 rounded-pill py-2 text-center"
            type="number"
            name="mobile"
            placeholder="xxx-xxx-xxxx"
            value={mobile}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.mobile}</p>
          <input
            className="mb-2 bg-light w-25 rounded-pill py-2 text-center"
            type="company"
            name="company"
            placeholder="Company name"
            value={company}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.company}</p>
          <input
            className="mb-2 bg-light w-25 rounded-pill py-2 text-center"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.password}</p>
          <input
            className="mb-4 bg-light w-25 rounded-pill py-2 text-center"
            type="password"
            name="confirmpassword"
            placeholder="Confirm-password"
            value={confirmpassword}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.confirmpassword}</p>
          <Button
            className="w-25 btn-primary rounded mb-3"
            type="submit"
            value="Register"
          >
            Register
          </Button>
        </form>
      </center>
      <NewFooter />
      <ToastContainer />
    </div>
  );
};
export default RecruiterReg;
