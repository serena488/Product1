import { Col, Container, Row } from "react-bootstrap";
import "../about.css";
import Jango from "../assets/img/jango-truck.jpg";
import Jangol from "../assets/img/jangol-truck.jpg";
import { GiCutDiamond } from "@react-icons/all-files/gi/GiCutDiamond.esm";

const About = () => {
  return (
    <section className="About" id="aboutus">
      <div className="Aboutbanner">
        <h1>Who are We...</h1>
      </div>
      <div className="container">
        <div className="container p-2 mt-4 align-top myS">
          <p className="text-orangered">ABOUT US</p>

          <h2>About Our Comapany</h2>
        </div>
        <Container className="mt-4">
          <hr />
          <Row className="mt-4 my-4">
            <Col sm={12} md={5} sm={5}> <p>We have multiple dispatch service plans to choose from.
              Imagine never having to endlessly search load boards or fill out and fax paperwork again. We take care of the busy work so you can do what your paid to do – drive.
              Bottom line, our dispatch services help save truckers time & money.
              We provide options on our flat-rate fees. You know what you want so we provide three separate plans to choose from.
              A Paperwork only, Basic and Professional plan.
              So why pay another trucking dispatch service 10% or more on every load? Because of this,
              Truckage Dispatch Services came up with a ‘one stop shop’ for all your trucking dispatch needs.</p></Col>
            <Col sm={12} md={7} sm={7} ><img className="jango" src={Jango} /></Col>
          </Row>
          <Row className="mt-4 my-4">
            <Col sm={12} md={7} sm={7}>
              <img src={Jangol} ></img>
            </Col>
            <Col sm={12} md={5} sm={5}>
              <div className="container p-2 mt-4 my-2 align-top myS">
                <h3>Our Mission</h3>
              </div>
              <hr />
              <p>Our mission at Truckage Dispatch is to provide an unparalleled level of service to our clients by building
                strong relationships with our clients and aiding them in running a prosperous business.</p></Col>
          </Row>
          <Row className="mt-4 my-4 text-center">
            <GiCutDiamond className="mt-4 my-4" fontSize="8em" color="orangered" /><br />
            <h1>Our Core Values</h1>
            <p>We deliver the competitive advantage you need while eliminating the uncertainty and complexity of your freight delivery. Our service allows you to focus on your business.
              Truckage dispatcher is assigned to every relationship, becoming a single point of contact</p>
            
          </Row>
        </Container>

      </div>
    </section>)
}

export default About;