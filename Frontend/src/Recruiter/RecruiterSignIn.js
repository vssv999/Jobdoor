import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";
import NewFooter from "../NewFooter";
import HomeHeader from "../Home/HomeHeader"
import RL from "../Images/RL.png";

const RecruiterSignIn = () => {
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
    axios.post("/login/admin", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    });
  };
  if (auth) {
    return <Navigate to="/recruiter/profile" />;
  }
  return (
    <Container fluid className="m-0 p-0">
      <HomeHeader />
      <Container className="mb-5 mt-3">
        <Row>
          <Col lg={7}>
            <img src={RL} alt="jobimage" height="400px" width="600px" style={{borderRadius: "20px"}} />
          </Col>
          <Col lg={4}>
            <div
              className="p-3 mt-5 bg-white"
              style={{
                border: "2px solid black",
                boxShadow: "5px 10px 18px #888888",
                borderRadius: "20px",
              }}
            >
              <form onSubmit={submitHandler}>
                <h3 className="mb-3 text-center text-dark">Log-In</h3>
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handler}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handler}
                  />
                </div>
                <div className="text-center">
                  <center>
                  <Button
                    className="btn-primary rounded text-center "
                    type="submit"
                    value="Log-In"
                    variant="dark"
                  >
                    Log-In
                  </Button>
                  </center>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <NewFooter />
    </Container>
  );
};

export default RecruiterSignIn;
