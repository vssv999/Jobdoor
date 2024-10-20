import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Pulkit from "../Images/Pulkit.jpeg";
import Varun from "../Images/Varun.jpg";
import Sanjay from "../Images/Sanjay.jpg";
import SC from "../Images/SC.jpg";
import Tejaswi from "../Images/Tejaswi.jpg";
import Saranya from "../Images/Saranya.jpg";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import HomeHeader from "./HomeHeader";
const Aboutus = () => {
  return (
    <Container fluid className="m-0 p-0">
      <HomeHeader />
      <div>
        <div className="bg overlay innerpage">
          <div className="container ">
            <h1 className="text-center pad"><p className="">About us</p></h1>
          </div>
        </div>
        <div className="py-5 bg bg-image overlay-primary fixed">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 class="section-title mb-2 ">JobBoard Site Stats</h2>
                <p class="lead ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita unde officiis recusandae sequi excepturi corrupti.
                </p>
              </div>
            </div>
            <div className="row pb-0 block__19738 section-counter">
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number="1930">
                    1,930
                  </strong>
                </div>
                <span className="caption">Candidates</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number="54">
                    54
                  </strong>
                </div>
                <span className="caption">Jobs Posted</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number="120">
                    120
                  </strong>
                </div>
                <span className="caption">Jobs Filled</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <strong className="number" data-number="550">
                    550
                  </strong>
                </div>
                <span className="caption">Companies</span>
              </div>
            </div>
          </div>
        </div>
        <div classNameName="site-section">
          <div className="container">
            <div className="row align-items-center block__69944">
              <div className="col-md-6 mb-2">
                <img
                  src="https://technext.github.io/jobboard/images/sq_img_6.jpg"
                  className="img-fluid img-shadow"
                ></img>
              </div>
              <div className="col-md-6 ">
                <h2 className="section-title mb-3">
                  JobBoard For Freelancers, Web Developers
                </h2>
                <p className="lead">
                  The least pleasure will come when the pleasures will come to pass
                   pleasures such as pain, but do the physical
                   no one hates life less. It should be a pleasure.
                </p>
                <p>
                  The game of these must be taken into it, or it will never happen;
                   For they abandon the desire of life to choose the proper services
                   enhanced. Expedite those times to us here from
                   is our choice any more demanding?
                </p>
              </div>
              <div className="col-md-6 order-md-2 ml-md-auto mb-2">
                <img
                  src="https://technext.github.io/jobboard/images/sq_img_8.jpg"
                  className="img-fluid img-shadow"
                ></img>
              </div>
              <div className="col-md-6 ">
                <h2 className="section-title mb-3">JobBoard For Workers</h2>
                <p className="lead">
                  The least pleasure will come when the pleasures will come to pass
                   pleasures such as pain, but do the physical
                   no one hates life less. It should be a pleasure.
                </p>
                <p>
                  The game of these must be taken into it, or it will never happen;
                   For they abandon the desire of life to choose the proper services
                   enhanced. Expedite those times to us here from
                   is our choice any more demanding?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div classNameName="site-section ">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title mb-3">Our Team</h2>
              </div>
            </div>
            <div className="row align-items-center block__69944">
              <div className="col-md-6">
                <img src={Varun} className="img-fluid mb-4 rounded"></img>
              </div>
              <div className="col-md-6">
                <h3>SAI VARUN</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className=" social ">
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
                </div>
              </div>
              <div className="col-md-6 order-md-2 ml-md-auto">
                <img src={Pulkit} className="img-fluid mb-4 rounded" width="600px"></img>
              </div>
              <div className="col-md-6">
                <h3>PULKIT SHARMA</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className=" social ">
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
                </div>
              </div>
            </div>
            <div className="row align-items-center block__69944">
              <div className="col-md-6">
                <img src={Tejaswi} className="img-fluid mb-4 rounded"></img>
              </div>
              <div className="col-md-6">
                <h3>TEJASWI</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className=" social ">
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
                </div>
              </div>
              <div className="col-md-6 order-md-2 ml-md-auto">
                <img src={Sanjay} className="img-fluid mb-4 rounded"></img>
              </div>
              <div className="col-md-6">
                <h3>SANJAY S</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className="social ">
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
                </div>
              </div>
            </div>
            <div className="row align-items-center block__69944">
              <div className="col-md-6">
                <img src={SC} className="img-fluid mb-4 rounded"></img>
              </div>
              <div className="col-md-6">
                <h3>SRIKANTH</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className=" social ">
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
                </div>
              </div>
              <div className="col-md-6 order-md-2 ml-md-auto">
                <img src={Saranya} className="img-fluid mb-4 rounded" width="500px"></img>
              </div>
              <div className="col-md-6">
                <h3>SARANYA</h3>
                <p className="text-muted">Creative Director</p>
                <p>
                  When he is freed, as if he was chosen, and easily accepted, do they not know the hardships of accusing him of the pains that drive him free from the pain of his labors to the manner in which he must reject the pleasures of the pleasures? Or to just explain it, we can choose the main thing, or choose the most annoying thing?
                </p>
                <div className=" social ">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Aboutus;
