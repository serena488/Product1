import React from "react";


import { RiPinDistanceFill } from "@react-icons/all-files/ri/RiPinDistanceFill.esm";
import { FaCalendarAlt, FaHeadphonesAlt, FaSearchLocation} from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="Banner" id="contact">
      <div className="container BannerContainer">
        
          <Row>
            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <FaHeadphonesAlt
                    className="pt-2 mt-2 my-2 icon"
                    color="#262262"
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
                  <FaCalendarAlt
                    className="pt-2 mt-2 my-2 icon"
                    color="#262262"
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
                  <FaSearchLocation
                    className="pt-2 mt-2 my-2 icon"
                    color="#262262"
                    fontSize="5em"
                  />
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <h4>TRIP PLANNING</h4>
                  <p>
                    Efficient <br />
                    Trip Planning
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <RiPinDistanceFill
                    className="pt-2 mt-2 my-2 icon"
                    color="#262262"
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
