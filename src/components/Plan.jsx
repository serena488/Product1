import "../plan.css";

import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark.esm";

import { RiArrowRightSFill } from "@react-icons/all-files/ri/RiArrowRightSFill.esm";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Row, Col, Container } from "react-bootstrap";

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
                    <GiCheckMark fontSize="25px" color="orangered" />
                    You're The Boss!
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    No Forced Dispatch
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Payload & FSC = 100% Yours
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    We Negotiate Top Paying Rates
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Setup Paperwork
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Fax/Email Documents
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <button className="btn btn3">
                      <RiArrowRightSFill /> READ MORE
                    </button>
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
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Request Fuel Advances
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Request Quick Pay
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Personal Dispatcher
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Limited Credit Checks
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Setup Paperwork
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Collection Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <button className="btn btn3">
                      <RiArrowRightSFill /> READ MORE
                    </button>
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
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Detention Charges Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" /> No Forced
                    Dispatch
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Driver Director Assistance
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Request Quick Pay
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" />
                    Request Insurance Certificate
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <GiCheckMark fontSize="25px" color="orangered" /> Credit
                    Checks
                  </p>
                </Row>
                <Row className="body hidden-mobile">
                  <p>
                    <button className="btn btn3">
                      <RiArrowRightSFill /> READ MORE
                    </button>
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
