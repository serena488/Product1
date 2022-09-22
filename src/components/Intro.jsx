import { Container, Row, Col } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";
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
                <h1 className=" ">Cargo Transport Services</h1>
              </marquee>
              <marquee behavior="slide" direction="down">
                <p>
                  Lorem ipsum dolor sit am t, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
