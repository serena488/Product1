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
            className=" text-start text-white m-1  py-4"
            sm={12}
            md={5}
            xl={7}
          >
            <div className="container">
              <marquee behavior="slide" direction="down" delay="2s">
                <h1 className=" ">Dispatch Services</h1>
              </marquee>
              <marquee behavior="slide" direction="down">
                <p>
                  If you’re looking for the best dispatch service for owner
                  operators & independent truckers, you’ve come to the right
                  place. Truckage Dispatch Services is a professional trucking
                  dispatch provider, serving the continental U.S. & North
                  America. We understand the pain & frustration of many truck
                  drivers & owner operators.
                </p>
              </marquee>

              <marquee className="mt-4" behavior="slide" direction="down">
                <button className="btn btn1">Contact Us </button>
                <button className="btn btn2">Discover More</button>
              </marquee>
            </div>
          </Col>
          <Col sm={12} md={5} xl={5}>
            <Test className="p-2  m-2" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
