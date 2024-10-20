import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import HomeHeader from "./HomeHeader";
const Blog = () => {
  return (
    <Container fluid className="m-0 p-0">
      <HomeHeader />
      <div>
        <div className="bg overlay innerpage ">
          <div className="container ">
          <h1 className="text-center pad"><p className="">Our Blog</p></h1>
          </div>
        </div>
        <div className="site-section  ">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_1.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black" >
                    7 Factors for Choosing Between Two Jobs
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{" "}
                  <a href="#">2 Comments</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_2.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black" >
                    How to Write a Creative Cover Letter
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{" "}
                  <a href="#">2 Comments</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_4.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black " >
                    The Right Way to Quit a Job You Started
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{" "}
                  <a href="#">2 Comments</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_7.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black " >
                    7 Factors for Choosing Between Two Jobs
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{" "}
                  <a href="#">2 Comments</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_5.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black " >
                    How to Write a Creative Cover Letter
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{" "}
                  <a href="#">2 Comments</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <a href="blog-single.html">
                  <img
                    src="https://technext.github.io/jobboard/images/sq_img_6.jpg"
                    alt="Image"
                    class="img-fluid rounded mb-4"
                  ></img>
                </a>
                <h3>
                  <a href="blog-single.html" className="text-black " >
                    The Right Way to Quit a Job You Started
                  </a>
                </h3>
                <div>
                  April 15, 2019 <span class="mx-2">|</span>{""}
                  <a href="#">2 Comments</a>
                </div>
              </div>
            </div>
            <div class="row pagination-wrap mt-5"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
};
export default Blog;
