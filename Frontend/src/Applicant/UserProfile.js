import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdAccountCircle } from "react-icons/md";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import NewFooter from "../NewFooter";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import Pulkit from "../Images/Pulkit.jpeg";
import ApplicantNavbar from "./ApplicantNavbar";

const UserProfile = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("/applicant/profile", {
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
      {data && (
        <>
          <ApplicantNavbar />
          <Container className="container bg-white mt-5 mb-5">
            <br></br>
            <div className="circle">
              <img src={Pulkit} alt="Image" className="img-fluid"></img>
              <ul className="social">
                <a href="# " className="text-center">
                  <span className="text-center fs-3">
                    <FaFacebook />
                  </span>{" "}
                </a>
                <a href="# " className="text-center">
                  <span className="text-center fs-3">
                    <IoLogoTwitter />
                  </span>{" "}
                </a>
                <a href="# " className="text-center">
                  <span className="text-center fs-3">
                    <BsInstagram />
                  </span>{" "}
                </a>
                <a href="# " className="text-center">
                  <span className="text-center fs-3">
                    <TiSocialLinkedin />
                  </span>{" "}
                </a>
              </ul>
            </div>
            <div className="roundedd">
                <div className="col-md-6 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile:</h4>
                    </div>

                    <div>
                    <h6 className="mt-2 tl">Username</h6>
                    <div className="card col-md-12">
                      <div className="card-body p-2 tl">{data.username}</div>
                    </div>
                    </div>

                    <div className="row mt-3">
                    <h6 className="mt-2 tl">Mobile No.</h6>
                    <div className="card col-md-12">
                      <div className="card-body p-2 tl">{data.mobile}</div>
                    </div>
                    <h6 className="mt-2 tl">Email</h6>
                    <div class="card col-md-12">
                      <div class="card-body p-2 tl">{data.email}</div>
                    </div>
                    <h6 className="mt-2 tl">Skills</h6>
                    <div class="card col-md-12">
                      <div class="card-body p-2 tl">{data.skills}</div>
                    </div>
                     
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="India"></input></div>
                      <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="Hyderabad"></input></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                    <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience"></input></div> <br></br>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="Heighest education" ></input></div><br></br>
                    <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" ></input></div>
                  </div>
                </div>
              </div>
            <Link to={"/updateProfile"}>
              <center>
              <Button type="button" variant="dark" className="mb-5">
                Update
              </Button>
              </center>
            </Link>
          </Container>
        </>
      )}
      <NewFooter />
    </Container>
  );
};

export default UserProfile;


