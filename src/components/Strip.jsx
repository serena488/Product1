import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail.esm";
import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook.esm";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter.esm";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram.esm";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube.esm";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest.esm";
import { Row, Col, Container } from "react-bootstrap";

export const Strip = () => {
  return (
    <section className="Strip">
      <div id="STRIP">
        <Row>
          <Col className="col-lg-5 col-md-5 col-sm-6">
            <a>
              <marquee
                className="marquee fw-light"
                behavior="scroll"
                direction="left"
              >
                We are available 24/7 ! Hire the most trusted (Truckage Dispatch
                Services) Vehicle Shipping Company with confidence to ship your
                car across the United States.
              </marquee>
            </a>
          </Col>
          <Col className="col-lg-2 col-md-5 col-sm-6">
            <MdCall />
            <a className="fs-5 text-white">+923004283213</a>
          </Col>
          <Col className="col-lg-3 col-md-5 col-sm-0">
            <MdEmail />
            <a className="fs-5 ms-1 text-white">info@shipmentshub.com</a>
          </Col>
          <Col className=" col-lg-2 col-md-5 col-sm-0">
            <a className="fs-5 me-2 text-white">
              <FaYoutube />
            </a>
            <a className="fs-5 me-2  text-white">
              <FaTwitter />
            </a>
            <a className="fs-5 me-2  text-white">
              <FaFacebook />
            </a>
            <a className="fs-5 me-2  text-white">
              <FaInstagram />
            </a>
            <a className="fs-5 me-2  text-white">
              <FaPinterest />
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};
