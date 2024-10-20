import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import axios from "axios";
import NewFooter from "../NewFooter";
import ApplicantNavbar from "./ApplicantNavbar";

const UpdateProfile = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    skills: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, mobile, skills, password, confirmpassword } = data;
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
        .post("/update-profile", data, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => alert(res.data));
      setData({
        ...data,
        username: "",
        email: "",
        mobile: "",
        skills: "",
        password: "",
        confirmpassword: "",
      });
    }
  }, [errors]);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login/applicant" />;
  }
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
    if (!skills) {
      err.skills = "Please enter skills";
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
      <ApplicantNavbar />
      <center>
        <form
          className="registerForm"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h3>Update Profile</h3>
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
            type="skills"
            name="skills"
            placeholder="skills..separate with(,)"
            value={skills}
            onChange={(e) => handler(e)}
          />
          <br />
          <p>{errors.skills}</p>
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
            value="update"
          >
            Update
          </Button>
        </form>
      </center>
      <NewFooter />
    </div>
  );
};

export default UpdateProfile;
