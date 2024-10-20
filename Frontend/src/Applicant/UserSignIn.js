import React, { useState } from "react";
import { Navigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";
import NewFooter from "../NewFooter";
import HomeHeader from "../Home/HomeHeader"

const UserSignIn = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/login/applicant", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    });
  };
  if (auth) {
    return <Navigate to="/applicant/profile" />;
  }
  return (
    <Container fluid className="m-0 p-0">
      <HomeHeader />
      <Container className="mb-5 mt-3">
        <div className="row">
          <div className="col lg-7 xs-12">
            <img
              src="https://th.bing.com/th/id/R.6cf65a5127b94d08e2dd1034bf35492a?rik=gOXF1gXiBk%2bLRg"
              alt="jobimage"
              width="450px"
              className="applicant-logo mt-3"
            />
          </div>
          <div className="col lg-4 xs-12">
            <div
              className="p-3 mt-5 bg-white"
              style={{
                border: "2px solid black",
                boxShadow: "5px 10px 18px #888888",
                borderRadius: "20px",
              }}
            >
              <form onSubmit={submitHandler}>
                <h3 className="mb-3 text-center">Log-In</h3>
                <div class="input-group mb-3">
                  <div class="input-group-text">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    onChange={handler}
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-text">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    onChange={handler}
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <center>
                  <Button
                    className="btn-dark rounded "
                    type="submit"
                    value="Log-In"
                  >
                  Log-In
                  </Button>
                  </center>
                </div>
              </form>
            </div>
          </div>
          </div>
      </Container>
      <NewFooter />
    </Container>
  );
};

export default UserSignIn;
