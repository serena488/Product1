import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail.esm";
import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook.esm";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter.esm";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram.esm";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube.esm";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Row, Col } from "react-bootstrap";

export const Strip = () => {
  return (
    <section className="Strip">
      <div id="STRIP">
        <Row className="text-align-top">
          <Col className="col-lg-4 col-md-5 col-sm-5">
            <a>
              <marquee
                className="marquee fw-bold"
                behavior="scroll"
                direction="left"
              >
                We are available 24/7 ! Hire Truckage Dispatch Services, the
                Best Truck Dispatching Services in USA, Offers Highly Paying
                Loads with No Capping.
              </marquee>
            </a>
          </Col>

          <Col className="col-lg-3 col-md-5 col-7 text-center">
            <MdCall />
            <a href="tel:+19804855274" className="fs-5 ms-1  text-white">+1 (980) 485-5274</a>
            
          </Col>
          <Col className="col-lg-3 col-md-5 col-12">
            <MdEmail />
            <a href="mailto:truckage.dispatch@gmail.com" className="fs-5 ms-2  text-white ">
              truckage.dispatch@gmail.com
            </a>
          </Col>

          <Col className=" col-lg-2 col-md-5 col-12 text-center">
            <a className="fs-5 me-2 text-white">
              <FaYoutube />
            </a>
            <a className="fs-5 me-2  text-white">
              <FaTwitter />
            </a>
            <a
              type="button"
              href="https://www.facebook.com/Tds.dispatchservices"
              className="fs-5 me-2  text-white"
            >
              <FaFacebook />
            </a>
            <a className="fs-5 me-2  text-white"
            href="https://instagram.com/truckage_dispatch?igshid=YmMyMTA2M2Y=">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/truckage-dispatch-services/" className="fs-5 me-2  text-white">
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};
