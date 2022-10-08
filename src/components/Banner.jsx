import React from "react";

import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { BsFillCalendarFill } from "@react-icons/all-files/bs/BsFillCalendarFill.esm";
import { RiPinDistanceFill } from "@react-icons/all-files/ri/RiPinDistanceFill.esm";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow.esm";
import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="Banner" id="contact">
      <div className="container BannerContainer">
        
          <Row>
            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <MdCall
                    className="pt-2 mt-2 my-2 icon"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>CALL CENTER</h4>
                  <p>
                    Give us a free call <br />
                    +1 (980) 485-5274
                  </p>
                </Col>
              </Row>
            </Col>

            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <BsFillCalendarFill
                    className="pt-2 mt-2 my-2 icon"
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
            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <FaLocationArrow
                    className="pt-2 mt-2 my-2 icon"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>OUR LOCATION</h4>
                  <p>
                    473 Mundet Place, <br />
                    Hillside, NJ, US
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <RiPinDistanceFill
                    className="pt-2 mt-2 my-2 icon"
                    color="orangered"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>Long Distance</h4>
                  <p>Long Distance move for OTR Carriers.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        
      </div>
    </section>
  );
};
