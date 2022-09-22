import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail.esm";
import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook.esm";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter.esm";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram.esm";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube.esm";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest.esm";
import { Row, Col } from "react-bootstrap";

export const Strip = () => {
  return (
    <section className="Strip">
      <div id="STRIP">
        <Row>
          <Col className="col-lg-4 col-md-6 col-sm-6 me-5">
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

          <Col className="col-lg-3 col-md-5 col-sm-6">
            <MdCall />
            <a className="fs-5 ms-1 text-white">+1 (980) 485-5274</a>
          </Col>

          <Col className=" col-lg-0 float-left">
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
