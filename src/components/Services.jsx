import React from "react";
import flight from "../assets/img/flight.png";
import delivery from "../assets/img/delivery.png";
import Girl from "../assets/img/girl.jpg";
import usa from "../assets/img/usa.png";
import Boy from "../assets/img/boy.jpg";
import { Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft.esm";
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight.esm";
import { FaStar } from "@react-icons/all-files/fa/FaStar.esm";
import { FaTruck } from "@react-icons/all-files/fa/FaTruck.esm";
import { FaDoorOpen } from "@react-icons/all-files/fa/FaDoorOpen.esm";
import { RiShip2Fill } from "@react-icons/all-files/ri/RiShip2Fill.esm";
import { FaMotorcycle } from "@react-icons/all-files/fa/FaMotorcycle.esm";
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle.esm";
import Carousel from "react-bootstrap/Carousel";

export const Services = () => {
  return (
    <section className="Services p-2">
      <div className="container p-2 mt-4 align-top myS">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit am t, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <br />
      <br />

      <div className="container myContainer">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 justify-content-center fw-bold text-align-start flex-wrap myT">
          <div className="col">
            <img src={delivery} />
            <br />
            <div className="tabletext">
              No Forced <br />
              Dispatch
            </div>
          </div>

          <div className="clr text-center col">
            <FaTruck fontSize="7em" color=" rgb(235, 232, 232)" />
            <br />
            <div className="tabletext">
              Personal
              <br />
              Dispatcher
            </div>
          </div>

          <div className="col">
            <img src={delivery} />
            <br />
            <div className="tabletext">
              Classic Vehicle <br />
              Transport
            </div>
          </div>

          <div className="clr col">
            <FaDoorOpen fontSize="7em" />
            <br />
            <div className="tabletext">
              Door To Door Auto
              <br /> Transport
            </div>
          </div>

          <div className="col">
            <img src={usa} />
            <br />
            <div className="tabletext">
              Service Avaliable <br />
              Across Country
            </div>
          </div>

          <div className="clr col">
            <AiFillDollarCircle fontSize="7em" />
            <br />
            <div className="tabletext">
              Unlimited Credit <br />
              Checks
            </div>
          </div>

          <div className="col">
            <RiShip2Fill fontSize="7em" />
            <br />
            <div className="tabletext">
              Boat Shipping <br /> Transport Services
            </div>
          </div>

          <div className="clr col">
            <FaMotorcycle fontSize="7em" />
            <br />
            <div className="tabletext">
              We Negotiate Top
              <br />
              Paying Rates
            </div>
          </div>

          <div className="col">
            <img src={flight} />
            <br />
            <div className="tabletext">
              24/7 Dispatch
              <br />
              Support
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 my-4 p-2">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="container p-2 my-4 m-1 align-top myS">
              <p className="text-orangered">OUR TESTIMONIAL</p>
              <h1>What customers think about us</h1>
              <p>
                They Trusted Us. We are happy because we have <br />
                happy customers.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Carousel className="myB">
              <Carousel.Item>
                <div className="mytext">
                  <FaQuoteLeft
                    color="orangered"
                    className="float-start"
                    fontSize="2em"
                  />
                  <br />
                  <br /> <br />
                  “TDS team is a very professional dispatch team ever whom I'm
                  working with they have plan trip for me and find me good
                  paying loads, Highly recommended "
                  <br />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <br />
                  <br />
                  <img src={Boy} />
                  <h5>Johny Aslam</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="mytext">
                  <FaQuoteLeft
                    color="orangered"
                    className="float-start"
                    fontSize="2em"
                  />
                  <br />
                  <br />
                  Truckage Dispatch is Awesome- This company is everything a
                  truck driver should expect from a dispatch company. They
                  negotiate with the brokers to get great rates, they call you
                  to offer loads for the next day and they handle getting
                  revised rate confirmation for detention pay & lay overs. I'm
                  glad to have them working for our company!
                  <br />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <br />
                  <br />
                  <img src={Girl} />
                  <h5>Mia Manissa</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};
