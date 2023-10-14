import "../plan.css";
import { NavLink } from "react-router-dom";

import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark.esm";

import { RiArrowRightSFill } from "@react-icons/all-files/ri/RiArrowRightSFill.esm";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Row, Col } from "react-bootstrap";

export const Plan = () => {
  return (
    <section className="Plan" id="plan">
      <div className="container PlanContainer">
        <Row>
          <Col sm={12} md={4} xl={4} className="column">
            <div className=" bg-transparent m-2 ">
              <Col>
                <Row className="heading">
                  <h3>Silver Plan </h3>
                </Row>
                <Row className="body">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />{""}
                     You're The Boss!
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    No Forced Dispatch
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Payload & FSC = 100% Yours
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    We Negotiate Top Paying Rates
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Setup Paperwork
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Fax/Email Documents
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                  <NavLink
              id="pricing"
              to="/pricing#pricing"
              className="btn btn3" type="button">
              <RiArrowRightSFill /> READ MORE
            </NavLink>
                  
                  </p>
                </Row>
              </Col>
            </div>
          </Col>
          <Col sm={12} md={4} xl={4} className="column">
            <div className="bg-transparent m-2">
              <Col>
                <Row className="heading ">
                  <h3>Gold Plan</h3>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Fuel Advances
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Quick Pay
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Personal Dispatcher
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Limited Credit Checks
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Setup Paperwork
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Collection Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                  <NavLink
              id="pricing"
              to="/pricing#pricing"
              className="btn btn3" type="button">
              <RiArrowRightSFill /> READ MORE
            </NavLink>
                  </p>
                </Row>
              </Col>
            </div>
          </Col>

          <Col sm={12} md={4} xl={4} className="column">
            <div className=" bg-transparent m-2 ">
              <Col>
                <Row className="heading ">
                  <h3>Custom Plan</h3>
                </Row>
                <Row className="body text-center">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Detention Charges Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" /> No Forced
                    Dispatch
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Driver Director Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Quick Pay
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Insurance Certificate
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" /> Credit
                    Checks
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <NavLink
                    id="pricing"
                    to="/pricing#pricing"
                    className="btn btn3" type="button">
                    <RiArrowRightSFill /> READ MORE
                  </NavLink>
                  </p>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
