import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router";
import RecruiterNavbar from "./RecruiterNavbar";
import NewFooter from "../NewFooter";

const MyJobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    alljobs();
  }, []);

  const alljobs = () => {
    axios
      .get("/Ind-Addedjob", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const deleteJob = async (id) => {
    console.log(id);
    await axios
      .delete(`/delete-job/${id}`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/recruiter" />;
  }
  return (
    <Container fluid className="m-0 p-0">
      <RecruiterNavbar />
      <Container>
        <h3 className="mb-5 text-danger mt-4">
          <strong>Newly added jobs :</strong>
          
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
                      <h2><strong>{item.company}</strong></h2>
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
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => deleteJob(item._id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h6>no jobs added</h6>
          )}
        </Row>
      </Container>
      <NewFooter/>
    </Container>
  );
};

export default MyJobs;
