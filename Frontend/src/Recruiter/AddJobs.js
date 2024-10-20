import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdAccountCircle } from "react-icons/md";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Navigate } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RecruiterNavbar from "./RecruiterNavbar";
import NewFooter from "../NewFooter";
// import { setToken } from "../Reducer/Reduce";

const AddJobs = () => {
  const [data, setData] = useState({
    company: "",
    name: "",
    role: "",
    skills: "",
    exp: "",
    salary: "",
  });
  const { company, name, role, skills, exp, salary } = data;
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
    if (Object.keys(errors).length === 0 && submitForm) {
      axios
        .post("/recruiter/addjob", data, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => alert(res.data));
      setData({
        company: "",
        name: "",
        role: "",
        skills: "",
        exp: "",
        salary: "",
      });
    }
  }, [errors]);
  const Validate = () => {
    const err = {};
    if (!company) {
      err.company = "Please enter the company-name";
    }
    if (!name) {
      err.name = "Please enter job name";
    }
    if (!role) {
      err.role = "Please enter the role";
    }
    if (!skills) {
      err.skills = "Please enter required skills";
    }
    if (!exp) {
      err.exp = "Please enter required exp";
    }
    if (!salary) {
      err.salary = "please enter salary";
    }
    return err;
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/recruiter" />;
  }

  return (
    <Container fluid className="m-0 p-0">
      <RecruiterNavbar />
      <center>
        <form
          className="registerForm"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h3 className="text-white">Add Job</h3>
          <input
            className="mb-2 bg-light w-25  py-2 text-center"
            type="text"
            name="company"
            placeholder="company"
            value={company}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.company}</p>
          <input
            className="mb-2 bg-light w-25  py-2 text-center"
            type="text"
            name="name"
            placeholder="Job name"
            value={name}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.name}</p>
          <select
            className="form-select mb-2 bg-light w-25  py-2 mb-2"
            name="role"
            aria-label="Default select example"
            placeholder="select role"
            onChange={(e) => handler(e)}
          >
            <option value="select-role">select role</option>

            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Intern">Intern</option>
          </select>
          <p>{errors.role}</p>
          <input
            className="mb-2 bg-light w-25 py-2 text-center mt-2"
            type="text"
            name="skills"
            placeholder="skills"
            value={skills}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.skills}</p>
          <input
            className="mb-2 bg-light w-25  py-2 text-center"
            type="number"
            name="exp"
            placeholder="exp"
            value={exp}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.exp}</p>
          <input
            className="mb-4 bg-light w-25  py-2 text-center"
            type="number"
            name="salary"
            placeholder="salary"
            value={salary}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.salary}</p>
          <Button
            className="w-25 mb-5"
            type="submit"
            value="addjob"
            variant="dark"
          >
            Add Job
          </Button>
        </form>
      </center>
      <NewFooter />
    </Container>
  );
};

export default AddJobs;
