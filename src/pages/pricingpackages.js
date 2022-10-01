import React from "react";
import pricing from "../pricing.css"
import { Row, Col, Container } from "react-bootstrap";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle.esm";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign.esm";

const Pricing = () => {
  return (
    <section id="aboutus" className="Pricing">
      <div className="container p-2 mt-4 align-top myS">
        <h1>Our Packages</h1>
        <p>

        </p>
      </div>
      <div className=" border m-4">
        <Container className=" text-center">
          <Row className="game1">
            <Col  ></Col>
            <Col ><h3>Custom Plan</h3></Col>
            <Col ><h3>Silver Plan</h3></Col>
            <Col ><h3>Gold Plan</h3></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">You're The Boss!</Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"> <FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">No Forced Dispatch</Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Payload & FSC = 100% Yours</Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">We Negotiate Top Paying Rates</Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Setup Paperwork</Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Fax/Email Documents</Col>
            <Col className="game2">Ltd.</Col>
            <Col>Ltd.</Col>
            <Col className="game2">Ltd.</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Credit Checks</Col>
            <Col className="game2"></Col>
            <Col >Ltd.</Col>
            <Col className="game2">Ltd.</Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Personal Dispatcher</Col>
            <Col className="game2"></Col>
            <Col ><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Quick Pay</Col>
            <Col className="game2"></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Fuel Advances</Col>
            <Col className="game2"></Col>
            <Col><FaCheckCircle fontSize="1em" color="orangered" /></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">24/7 Dispatch Support</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Request Insurance Certificate</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Driver Director Assistance</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Negotiate Quick Pay Rates</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Factor Setup Assistance</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Collection Assistance</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Detention Charges Assistance</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Unused Truck Order Assistance</Col>
            <Col className="game2"></Col>
            <Col></Col>
            <Col className="game2"><FaCheckCircle fontSize="1em" color="orangered" /></Col>
          </Row>
          <Row className="game1">
            <Col className="text-start">Pricing / Plans</Col>
            <Col className="game2">
              <button className="btn btn3">
                <FaDollarSign /> 99
              </button></Col>
            <Col className="game3">
              <button className="btn btn4">
                <FaDollarSign /> 199
              </button></Col>
            <Col className="game2 ">
              <button className="btn btn3">
                <FaDollarSign /> 299
              </button></Col>
          </Row>
        </Container >
      </div >

    </section >
  );
};

export default Pricing;
