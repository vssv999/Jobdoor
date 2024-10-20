import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleClose, handleShow } from "../Reducer/Reduce";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

import HomeHeader from "./HomeHeader";
import Offer from "./Offer";
import RedLink from "./RedLink";
import Footer from "./Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.details.name);
  const image = useSelector((state) => state.details.image);
  const page = useSelector((state) => state.details.page);
  const description = useSelector((state) => state.details.description);

  const show = useSelector((state) => state.details.show);
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");
  const fetchDetails = async () => {
    const response = await axios.get("/CompanyDetails").catch((err) => {
      console.log("Err", err);
    });
    setState(response.data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <Container fluid className="m-0 p-0">
        <HomeHeader />
        <Carousel fade>
          <Carousel.Item>
            <img
              src="https://c.pxhere.com/images/d8/6a/d521f6d5612afb7daa968827a775-1573329.jpg!d"
              className="carimage darken-image"
              alt="photoslider1"
              width="1400"
              height="600"
            />
            <Carousel.Caption lg={12} md={12}>
              <p className="carcap">
                <br />
                <strong>Jobdoor</strong>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/videoblocks-creative-business-team-meeting-happy-people-working-in-modern-office-late-at-night_skxhdiwtb_thumbnail-1080_01.png"
              alt="Second slide"
              width="1400px"
              height="600px"
            />
            <Carousel.Caption>
              <h1>Blog</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://storage.googleapis.com/website-production/uploads/2016/08/X-Ways-Agencies-Get-Clients-to-Pay-On-Time.jpg"
              alt="Third slide"
              width="1400px"
              height="600px"
            />
            <Carousel.Caption>
              <h1>About Us</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="mb-5">
          <h3 className="fw-bold mb-4 text-center text-white m-3">
            Top companies
          </h3>
          <div className="text-center">
            <input
              type="text"
              className="w-25 mb-3 py-2 ps-3"
              style={{ borderRadius: "5px" }}
              onChange={(e) => setInput(e.target.value)}
              placeholder="SEARCH"
            />
          </div>
          <Row>
            {state.filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, index) => {
                return (
                  <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
                    <Card
                      className="h-100 mb-3"
                      style={{
                        overflow: "hidden",
                        border: "none",
                      }}
                    >
                      <Card.Img
                        className="homecards"
                        variant="top"
                        src={item.image}
                        height="300px"
                      />
                      <Card.Body
                        className="text-center"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <Card.Title className="mb-3 text-dark fw-bolder">
                          {item.name}
                        </Card.Title>
                        <Button
                          variant="dark"
                          onClick={(e) => dispatch(handleShow(item))}
                          className="fw-bold fs-6"
                        >
                          Know More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
        {/* <Offer /> */}
        {/* <RedLink /> */}
        <Footer />
      </Container>

      <Modal show={show} onHide={(e) => dispatch(handleClose())}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="h-100 mb-3">
            <Card.Img variant="top" src={image} height="185px" />
            <Card.Body className="">
              <Card.Title className="mb-3 lh-base fs-6">
                {description}
              </Card.Title>
              <p>
                To know more ,
                <a href={page} target="_blank" className="text-decoration-none">
                  click here
                </a>
              </p>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={(e) => dispatch(handleClose())}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
