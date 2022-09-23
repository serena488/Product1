import React from "react";

import "../Footer.css";
import Img1 from "../assets/img/img_1.jpg";
import Img2 from "../assets/img/img_2.jpg";
import Img3 from "../assets/img/img_3.jpg";
import Img4 from "../assets/img/img_4.jpg";

export const Footer = () => {
  return (
    <section className="Footer" id="aboutus">
      <footer className="footer-32892 pb-0">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md pr-md-5 mb-4 mb-md-0">
                <h3>ABOUT US</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam itaque unde facere repellendus, odio et iste
                  voluptatum aspernatur ratione mollitia tempora eligendi maxime
                  est, blanditiis accusamus. Incidunt, aut, quis!
                </p>
                <ul className="list-unstyled quick-info mb-4">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-phone"></span> +1 291 3912
                      329
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-envelope"></span>{" "}
                      info@gmail.com
                    </a>
                  </li>
                </ul>

                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your e-mail"
                  />
                  <input
                    type="submit"
                    className="btn btn-submit"
                    value="Send"
                  />
                </form>
              </div>
              <div className="col-md mb-4 mb-md-0">
                <h3> LATEST TWEETS</h3>
                <ul className="list-unstyled tweets">
                  <li className="d-flex">
                    <div className="mr-4">
                      <span className="icon icon-twitter"></span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere unde omnis veniam porro excepturi.
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="mr-4">
                      <span className="icon icon-twitter"></span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere unde omnis veniam porro excepturi.
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="mr-4">
                      <span className="icon icon-twitter"></span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere unde omnis veniam porro excepturi.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-4 mb-md-0">
                <h3> INSTAGRAM</h3>
                <div className="row gallery">
                  <div className="col-6">
                    <a href="#">
                      <img src={Img4} alt="Image" className="img-fluid" />
                    </a>
                    <a href="#">
                      <img src={Img1} alt="Image" className="img-fluid" />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img src={Img2} alt="Image" className="img-fluid" />
                    </a>
                    <a href="#">
                      <img src={Img3} alt="Image" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="py-5 footer-menu-wrap d-md-flex align-items-center">
                  © 2020 Copyright: Some Rights Reserved (2009-2022) under
                  Creative Commons Attribution-NonCommercial-ShareAlike license
                  unless otherwise noted.
                  <div className="ps-4 site-logo-wrap ml-auto">
                    <a href="#" className="site-logo">
                      Truckage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
