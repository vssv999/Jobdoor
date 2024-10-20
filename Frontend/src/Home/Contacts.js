import React from "react";
import { Container } from "react-bootstrap";
import HomeHeader from "../Home/HomeHeader";
import Footer from "./Footer";
import Manoj from "../Images/Manoj.jpg"
import Sanket from "../Images/Sanket.jpg"

const Contacts = () => {
    return (
        <Container fluid className="m-0 p-0">
            <HomeHeader />
            <div >
                <div className="bgco overlay innerpage ">
                    <div className="container">
                        <h1 className="text-center pad text-white fw-bolder">Contact Us</h1>
                    </div>
                </div>

                <div className="site-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <form action="#">

                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label class="text-black" for="fname">First Name</label>
                                            <input type="text" id="fname" class="form-control"></input>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="text-black" for="lname">Last Name</label>
                                            <input type="text" id="lname" class="form-control"></input>
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Email</label>
                                            <input type="email" id="email" class="form-control"></input>
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="subject">Subject</label>
                                            <input type="subject" id="subject" class="form-control"></input>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="Send Message" class="btn btn-primaryy btn-md text-white"></input>
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div class="col-lg-5 ml-auto">
                                <div class="p-4 mb-3 bg-white">
                                    <p class="mb-0 font-weight-bold">Address</p>
                                    <p class="mb-4">Cognizant, Block 1, Dlf Building, Gachibowli, Hyderabad - 500032</p>

                                    <p class="mb-0 font-weight-bold">Phone</p>
                                    <p class="mb-4"><a href="#">+91 9876543210</a></p>

                                    <p class="mb-0 font-weight-bold">Email Address</p>
                                    <p class="mb-0"><a href="#">jobdoor@gmail.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade">
            <h2 class="section-title mb-3">Happy Candidates Says</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="block__87154 bg-white rounded">
              <blockquote>
                <p>“Ipsum harum assumenda in eum vel eveniet numquam cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit”</p>
              </blockquote>
              <div class="block__91147 d-flex align-items-center">
                <figure class="mr-4">
                <img src={Sanket} alt="Image" className="img-fluid"></img>

                    </figure>
                <div>
                  <h3>Sanket Sanjay</h3>
                  <span class="position">React Developer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="block__87154 bg-white rounded">
              <blockquote>
                <p>“Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit”</p>
              </blockquote>
              <div class="block__91147 d-flex align-items-center">
                <figure class="mr-4">
                    <img src={Manoj} alt="Image" className="img-fluid"></img>
                </figure>
                <div>
                  <h3>Manoj Kumar Reddy</h3>
                  <span class="position">Web Designer</span>
                </div>
              </div>
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

export default Contacts;