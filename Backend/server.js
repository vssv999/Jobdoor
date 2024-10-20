const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const middleware = require("./middleware");
const recruiter = require("./Model/RecruiterModel");
const applicant = require("./Model/ApplicantModel");
const Details = require("../frontend/src/Home/Details");
const addjob = require("./Model/AddjobModel");
const appliedjob = require("./Model/AppliedJobsModel");
const fs = require("fs");
const app = express();

mongoose
  .connect("mongodb+srv://vssv1399:varun@cluster0.xuscqh6.mongodb.net/")
  .then(() => console.log("DB connected..."));

app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  return res.send("Api working...");
});

app.get("/CompanyDetails", (req, res) => {
  res.type("json").send(JSON.stringify(Details, null, 4) + "\n");
});

app.post("/register/admin", async (req, res) => {
  try {
    const { username, email, mobile, company, password, confirmpassword } =
      req.body;
    const exist = await recruiter.findOne({ email });
    if (exist) {
      return res.status(400).send("User already registered");
    }
    if (password != confirmpassword) {
      return res.status(403).send("Password invalid");
    }
    let newUser = new recruiter({
      username,
      email,
      mobile,
      company,
      password,
      confirmpassword,
    });
    newUser.save();
    return res.status(200).send("User registered");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/login/admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await recruiter.findOne({ email });
    if (!exist) {
      return res.status(400).send("User not exist");
    }
    if (exist.password != password) {
      return res.status(400).send("Password invalid");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtPassword", { expiresIn: 360000000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/recruiter/profile", middleware, async (req, res) => {
  try {
    let exist = await recruiter.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/recruiter/addjob", middleware, async (req, res) => {
  try {
    const exist = await recruiter.findById(req.user.id);
    const { company, name, role, skills, exp, salary } = req.body;
    let newUser = new addjob({
      company,
      name,
      role,
      skills,
      exp,
      salary,
      jobProvider: exist._id,
    });
    newUser.save();
    return res.status(200).send("job added");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/Ind-Addedjob", middleware, async (req, res) => {
  try {
    let totjobs = await addjob.find();
    let jobs = totjobs.filter(
      (job) => job.jobProvider.toString() === req.user.id.toString()
    );
    return res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.delete("/delete-job/:id", middleware, async (req, res) => {
  try {
    const id = req.params.id;
    let deletejob = await addjob.findByIdAndDelete(id);
    let totjobs = await addjob.find();
    let jobs = totjobs.filter(
      (job) => job.jobProvider.toString() === req.user.id.toString()
    );
    return res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});
app.post("/register/applicant", async (req, res) => {
  try {
    const { username, email, mobile, skills, password, confirmpassword } =
      req.body;
    const exist = await applicant.findOne({ email });
    if (exist) {
      return res.status(400).send("User already registered");
    }
    if (password != confirmpassword) {
      return res.status(403).send("Password invalid");
    }
    let newUser = new applicant({
      username,
      email,
      mobile,
      skills,
      password,
      confirmpassword,
    });
    newUser.save();
    return res.status(200).send("User registered");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/login/applicant", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await applicant.findOne({ email });
    if (!exist) {
      return res.status(400).send("User not exist");
    }
    if (exist.password != password) {
      return res.status(400).send("Password invalid");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtPassword", { expiresIn: 360000000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/applicant/profile", middleware, async (req, res) => {
  try {
    let exist = await applicant.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/alljobs", middleware, async (req, res) => {
  try {
    let alljobs = await addjob.find();
    return res.json(alljobs);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/applied-jobs", middleware, async (req, res) => {
  try {
    const exist = await applicant.findById(req.user.id);
    const { company, name, role, skills, exp, salary } = req.body;
    let newjob = new appliedjob({
      company,
      name,
      role,
      skills,
      exp,
      salary,
      applicantID: exist._id,
    });
    newjob.save();
    return res.status(200).send("job applied");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/my-applied-jobs", middleware, async (req, res) => {
  try {
    // let
    let allappliedjob = await appliedjob.find();
    let myjobs = allappliedjob.filter(
      (job) => job.applicantID.toString() === req.user.id.toString()
    );
    return res.status(200).json(myjobs);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/update-profile", middleware, async (req, res) => {
  try {
    let user = await applicant.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          mobile: req.body.mobile,
          skills: req.body.skills,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword,
        },
      },
      {
        new: true,
      }
    );
    console.log(user);
    return res.status(200).send("Profile updated");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/update-profile-rec", middleware, async (req, res) => {
  try {
    let user = await recruiter.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          mobile: req.body.mobile,
          company: req.body.company,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword,
        },
      },
      {
        new: true,
      }
    );
    console.log(user);
    return res.status(200).send("Profile updated");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.listen(5000, () => console.log("server running..."));
