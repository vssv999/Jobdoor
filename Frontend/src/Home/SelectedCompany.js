import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Image, Container, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const SelectedCompany = () => {
  const Params = useParams();
  const [data, setData] = useState([]);
  const fetchDetails = async () => {
    const response = await axios
      .get(`/CompanyDetails/${Params.id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    setData(response.data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Image
              className="mb-3 mt-5"
              src={data.image}
              alt={data.name}
              style={{ width: "80%", height: "80%" }}
            />
          </Col>
          <Col md={6}>
            <div className="details">
              <h2 className="mb-3 fs-3 text-center">{data.name}</h2>
              <p>{data.description}</p>
              <p>
                To know more ,
                <a
                  href={data.page}
                  target="_blank"
                  className="text-decoration-none"
                >
                  click here
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectedCompany;
