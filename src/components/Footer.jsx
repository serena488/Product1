import React from "react";

import "../Footer.css";
import Img1 from "../assets/img/img_1.jpg";
import Img2 from "../assets/img/img_2.jpg";
import Img3 from "../assets/img/img_3.jpg";
import Img4 from "../assets/img/img_4.jpg";
import Img5 from "../assets/img/louis-06.png";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook.esm";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter.esm";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram.esm";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube.esm";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Row, Col, Container } from "react-bootstrap";
import { RiArrowRightSFill } from "@react-icons/all-files/ri/RiArrowRightSFill.esm";

export const Footer = () => {
  return (
    <section className="Footer">
      
        <footer className="footer-32892 pb-0">
          <div className="site-section">
            <div className="container">
              <div className="Img5 my-4">
                <img src={Img5} />
              </div>

              <div className="row">
                <div className="col-md pr-md-5 mb-4 m-2 mb-md-0">
                  <h3>ABOUT US</h3>
                  <p className="mb-4">
                    We are Truckage Dispatch Services. Experienced trucking
                    company operating in 48 U.S continental states. We are an
                    Illinois asset based over the road transportation company.
                    We service all 48 states, and specialize in expedite full
                    truckload and LTL freight. We are a service based company,
                    we sell our transportation services to shippers, customers,
                    brokers, etc. We also can provide dedicated service for your
                    dedicated lanes if needed.
                  </p>
                  <ul className="list-unstyled quick-info mb-4 fs-2">
                    <li>
                      <u><b>Call:</b></u> +1 (980) 485-5274
                      
                    </li>
                    <li>
                     <u><b>Email:</b></u> truckage.dispatch@gmail.com
                    </li>
                  </ul>

                  
                </div>
                <div className="col-md mb-4 m-2 mb-md-0">
                  <h3> LATEST TWEETS</h3>

                  <ul className="list-unstyled tweets">
                    <li className="d-flex">
                      <div className="mr-4">
                        <span className="icon icon-twitter"></span>
                      </div>

                      <div>
                        <RiArrowRightSFill fontSize="25px" color="orangered" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facere unde omnis veniam porro excepturi.
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="mr-4">
                        <span className="icon icon-twitter"></span>
                      </div>
                      <div>
                        <RiArrowRightSFill fontSize="25px" color="orangered" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facere unde omnis veniam porro excepturi.
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="mr-4">
                        <span className="icon icon-twitter"></span>
                      </div>
                      <div>
                        <RiArrowRightSFill fontSize="25px" color="orangered" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facere unde omnis veniam porro excepturi.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-4 m-2 mb-md-0">
                  <h3> INSTAGRAM</h3>
                  <div className="row gallery">
                    <div className="col-6">
                      <a href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
                        <img src={Img4} alt="Image" className="img-fluid" />
                      </a>
                      <a href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
                        <img src={Img1} alt="Image" className="img-fluid" />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
                        <img src={Img2} alt="Image" className="img-fluid" />
                      </a>
                      <a href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
                        <img src={Img3} alt="Image" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>

                <h3 className="text-start mt-4 ms-4">Follow Us</h3>
                <hr />
                <Container className="followup">
                  <Row className="followdown">
                    <a href="https://www.facebook.com/Tds.dispatchservices" className="btn btn5">
                      <FaFacebook
                        
                        className="btncolor"
                        fontSize="24px"
                      />
                    </a>

                    <buttons className="btn btn5">
                      <FaTwitter className="btncolor" fontSize="24px" />
                    </buttons>

                    <a className="btn btn5"
                    href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
                      <FaInstagram className="btncolor" fontSize="24px" />
                    </a>

                    <buttons className="btn btn5">
                      <FaYoutube className="btncolor" fontSize="24px" />
                    </buttons>

                    <a href="https://www.linkedin.com/company/truckage-dispatch-services/" className="btn btn5">
                      <FaLinkedin className="btncolor" fontSize="24px" />
                    </a>
                  </Row>
                </Container>

                <hr />

                <div className="col-12">
                  <div className="py-5 footer-menu-wrap d-md-flex align-items-center">
                    © 2020 Copyright: Some Rights Reserved (2009-2022) under
                    Creative Commons Attribution-NonCommercial-ShareAlike
                    license unless otherwise noted.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      
    </section>
  );
};
