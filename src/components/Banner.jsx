import React from "react";

import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { BsFillCalendarFill } from "@react-icons/all-files/bs/BsFillCalendarFill.esm";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe.esm";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow.esm";
import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="Banner" id="contact">
      <div className="container BannerContainer">
        <Container>
          <Row>
            <Col sm={12} md={6} xl={4}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <MdCall
                    className="pt-2 mt-2 my-2"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>CALL CENTER</h4>
                  <p>Give us a free call +1 (980) 485-5274</p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} xl={4}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <BsFillCalendarFill
                    className="pt-2 mt-2 my-2"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>WORKING HOURS</h4>
                  <p>Mon-Sat: 7AM-5PM Sunday: 9AM-3PM</p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} xl={4}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <FaLocationArrow
                    className="pt-2 mt-2 my-2"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>OUR LOCATION</h4>
                  <p>
                    300 Kansas Ave, <br />
                    New Jersey, United States
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
