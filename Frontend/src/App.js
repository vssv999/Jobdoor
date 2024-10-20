import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home/HomePage";
import HomePageUser from "./Applicant/HomePage";
import HomePageRecruiter from "./Recruiter/HomePage";
import RecruiterSignIn from "./Recruiter/RecruiterSignIn";
import UserSignIn from "./Applicant/UserSignIn";
import UserReg from "./Applicant/UserReg";
import RecruiterReg from "./Recruiter/RecruiterReg";
import RecruiterProfile from "./Recruiter/RecruiterProfile";
import AddJobs from "./Recruiter/AddJobs";
import Employees from "./Recruiter/Employees";
import MyJobs from "./Recruiter/MyJobs";
import UserProfile from "./Applicant/UserProfile";
import AppliedJobs from "./Applicant/AppliedJobs";
import Aboutus from "./Home/Aboutus";
import JobsAvailable from "./Applicant/JobsAvailable";
import Blog from "./Home/Blog";
import UpdateProfile from "./Applicant/UpdateProfile";
import UpdateProfile1 from "./Recruiter/UpdateProfile";
import Contacts from "./Home/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/applicant/homepage" element={<HomePageUser />}></Route>
        <Route
          path="/recruiter/homepage"
          element={<HomePageRecruiter />}
        ></Route>
        <Route path="/about-us" element={<Aboutus />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/register/recruiter" element={<RecruiterReg />}></Route>
        <Route path="/login/recruiter" element={<RecruiterSignIn />}></Route>
        <Route path="/recruiter/profile" element={<RecruiterProfile />}></Route>
        <Route path="/recruiter/add-jobs" element={<AddJobs />}></Route>
        <Route path="/recruiter/employees" element={<Employees />}></Route>
        <Route path="/recruiter/my-jobs" element={<MyJobs />}></Route>
        <Route path="/register/applicant" element={<UserReg />}></Route>
        <Route path="/login/applicant" element={<UserSignIn />}></Route>
        <Route path="/applicant/profile" element={<UserProfile />}></Route>
        <Route path="/applicant/all-jobs" element={<JobsAvailable />}></Route>
        <Route path="/applicant/applied-jobs" element={<AppliedJobs />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
        <Route path="/updateProfile1" element={<UpdateProfile1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
