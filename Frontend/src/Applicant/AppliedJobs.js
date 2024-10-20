import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router";
import ApplicantNavbar from "./ApplicantNavbar";
import NewFooter from "../NewFooter";

const AppliedJobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/my-applied-jobs", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/applicant" />;
  }
  return (
    <Container fluid className="m-0 p-0">
      <ApplicantNavbar />
      <Container className="mb-5 text-white">
        <h3 className="mb-5 text-center text-danger mt-4">
          <strong>Applied jobs :</strong>
        </h3>
        <Row>
          {data.length > 0 ? (
            <Col className="mb-3 text-center">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Job type</th>
                    <th>Skills</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.company}</td>
                        <td>{item.name}</td>
                        <td>{item.skills}</td>
                        <td>{item.salary}/-</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          ) : (
            <h5 className="text-center text-danger">No jobs applied !</h5>
          )}
        </Row>
      </Container>
      <NewFooter />
    </Container>
  );
};

export default AppliedJobs;
