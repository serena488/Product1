import React from "react";
import pricing from "../pricing.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle.esm";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign.esm";
import Img7 from "../assets/img/HelloAd.jpeg"

const Pricing = () => {
  return (

    <section className="Pricing">
      <div className="Pricingbanner">
        <h1>Our Packages</h1>
      </div><br /><br />
      <Container>
        <div color="red" className="container m-3   myS">

          <h2>Packages</h2>
          <p>Select the desired package from the following.

          </p>
        </div>
      </Container>
      <br />


      <div className="m-4">

        <Container className="text-center">
          <hr />

          <Row className="game1">
            <Col  ></Col>
            <Col ><h3>Silver Plan</h3></Col>
            <Col ><h3>Gold Plan</h3></Col>
            <Col ><h3>Custom Plan</h3></Col>
          </Row>
        </Container>


        <Container className="border text-center Page">

          <Row className="game1">
            <Col className="text-start">You're The Boss!</Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"> <FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">No Forced Dispatch</Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Payload & FSC = 100% Yours</Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">We Negotiate Top Paying Rates</Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Setup Paperwork</Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Fax/Email Documents</Col>
            <Col>Ltd.</Col>
            <Col className="game2">Ltd.</Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Credit Checks</Col>
            <Col >Ltd.</Col>
            <Col className="game2">Ltd.</Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Personal Dispatcher</Col>
            <Col ><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Quick Pay</Col>

            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Fuel Advances</Col>

            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">24/7 Dispatch Support</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Insurance Certificate</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Driver Director Assistance</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Negotiate Quick Pay Rates</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Factor Setup Assistance</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Collection Assistance</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Detention Charges Assistance</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Unused Truck Order Assistance</Col>

            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col>-</Col>
          </Row>
        </Container >

        <Container className="text-center ">
          <hr />
          <Row className="game2 ms-1">
            <Col className="text-start game5">
              <h5>Pricing / Plans </h5>
            </Col>
            <Col >
              <button className="btn btn3">
                <FaDollarSign /> <b>199</b>
              </button></Col>
            <Col className="game3">
              <button className="btn btn4">
                <FaDollarSign /> <b>299</b>
              </button></Col>
            <Col className="game2 ">
              <button className="btn btn3">
                <b>6% only</b>
              </button></Col>
          </Row>
          <hr />
        </Container>
      </div >

      <br /><br /><br />
    </section >
  );
};

export default Pricing;
