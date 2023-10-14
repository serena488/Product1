import { Container, Row, Col } from "react-bootstrap";

import "animate.css";

import React from "react";
import { Test } from "../components/test";

export const Intro = () => {
  return (
    <section className="intro" id="home">
      <Container>
        <Row>
          <Col
            className="text-white"
          
            sm={12}
            md={6}
            xl={5}
          >
            <div className="container game">
              
                <h1>Dispatch Services</h1>
          
              
                <p>
                  If you’re looking for the best dispatch service for owner
                  operators & independent truckers, you’ve come to the right
                  place. Truckage Dispatch Services is a professional trucking
                  dispatch provider, serving the continental U.S. & North
                  America. We understand the pain & frustration of many truck
                  drivers & owner operators.
                </p>
          

            <div>
                <a
                  type="button"
                  href="https://api.whatsapp.com/send?phone=19804855274"
                  className="btn btn1"
                >
                  Contact Us
                </a>
                <button className="btn btn2">Discover More</button>
                </div>

            </div>
          </Col>
          <Col sm={0} md={0} xl={0}></Col>
          <Col sm={12} md={5} xl={6}>
            <Test className="p-2  m-4" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
