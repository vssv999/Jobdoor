import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { applyJob } from "../Reducer/Reduce";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import ApplicantNavbar from "./ApplicantNavbar";
import NewFooter from "../NewFooter";

const JobsAvailable = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/alljobs", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const applyJob = (item) => {
    axios
      .post("/applied-jobs", item, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => alert(res.data));
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/applicant" />;
  }
  return (
    <Container fluid className="m-0 p-0">
      <ApplicantNavbar />
      <Container>
        <h3 className="mb-5 text-danger mt-4">
          <strong>Available jobs :</strong>
        </h3>
        <Row>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <Col lg={6} className="mb-3" key={index}>
                  <Card
                    className="w-75 mb-4"
                    style={{
                      boxShadow: "5px 10px 18px #888888",
                      borderRadius: "20px",
                    }}
                  >
                    <Card.Header>
                      <strong>{item.company}</strong>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <p>
                          <strong>Job : </strong>
                          {item.name}
                        </p>
                        <p>
                          <strong>Role : </strong>
                          {item.role}
                        </p>
                        <p>
                          <strong>Skills required : </strong>
                          {item.skills}
                        </p>
                        <p>
                          <strong>Experience : </strong>
                          {item.exp} yrs
                        </p>
                        <p>
                          <strong>Salary : </strong>
                          {item.salary}/-
                        </p>
                        <br></br>
                      </Card.Text>
                      <Button
                        variant="primary"
                        // onClick={(e) => dispatch(applyJob(item))}
                        onClick={(e) => applyJob(item)}
                      >
                        Apply
                      </Button>
                      {/* {apply == false ? (
                        <Link
                          to={"/applicant/applied-jobs"}
                          className="text-decoration-none"
                        >
                          <Button
                            variant="primary"
                            onClick={setApply(true)}
                          >
                            Apply
                          </Button>
                        </Link>
                      ) : (
                        <Link
                          to={"/applicant/applied-jobs"}
                          className="text-decoration-none"
                        >
                          <Button variant="success" onClick={setApply(false)}>
                            Applied
                          </Button>
                        </Link>
                      )} */}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h6 className="text-center">N0 jobs available</h6>
          )}
        </Row>
      </Container>
      <NewFooter/>
    </Container>
  );
};

export default JobsAvailable;
