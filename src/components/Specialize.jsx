import { Row, Col, Container } from "react-bootstrap";
import "../specialize.css";
import $ from "jquery";
import Reefer from "../assets/img/img.jpg";
import Step from "../assets/img/step-deck.jpg";
import Flatbed from "../assets/img/flatbed.jpg";
import Dryvan from "../assets/img/dry-van.jpg";
import Poweronly from "../assets/img/power-only.jpg";
import Box from "../assets/img/box.jpg";

$("figure").mouseleave(function () {
  $(this).removeClass("hover");
});

export const Specialize = () => {
  return (
    <section className="Specialize" id="specialize">
      <div className="container">
        <div className="products-heading">
          <p>OUR SPECIALIZATION</p>
          <h2>We are Specialized in...</h2>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Reefer} className="img1" alt="sample33" />
                <figcaption>
                  <h2>
                    <span> Refeer</span>
                  </h2>
                </figcaption>
                <a href="/">{""}</a>
              </figure>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Step} alt="sample33" />
                <figcaption>
                  <h2>
                    Step <span> Deck</span>
                  </h2>
                </figcaption>
                <a href="/">{""}</a>
              </figure>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Dryvan} alt="sample33" />
                <figcaption>
                  <h2>
                    Dry <span> Van</span>
                  </h2>
                </figcaption>
                <a href="/">{""}</a>
              </figure>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Poweronly} alt="sample33" />
                <figcaption>
                  <h2>
                    Power <span> Only</span>
                  </h2>
                </figcaption>
                <a href="/">{""}</a>
              </figure>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Flatbed} alt="sample33" />
                <figcaption>
                  <h2>
                    Flat <span> Bed</span>
                  </h2>
                </figcaption>
                <a href="/">{""}</a>
              </figure>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <figure className="snip1104 red">
                <img src={Box} alt="sample33" />
                <figcaption>
                  <h2>
                    Box <span> Truck</span>
                  </h2>
                </figcaption>
                <a  href="/">{""}</a>
              </figure>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
