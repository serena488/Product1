import Girl from "../assets/img/girl.jpg";
import Girl2 from "../assets/img/allison.jpg";
import Girl3 from "../assets/img/lau keith.jpg";
import Girl4 from "../assets/img/allef Shafak.jpg";
import Boy from "../assets/img/boy.jpg";
import { FaStar } from "@react-icons/all-files/fa/FaStar.esm";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft.esm";

export const Testimon = () => {
  return (
    <section className="Testimon p-2" id="testimon">
      <div className="container mt-4 my-4 p-2 ">
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
                  <img src={Boy} />
                  <h5>Johny Slam</h5>
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
                  “TDS team is a very professional dispatch team ever whom I'm
                  working with they have plan trip for me and find me good
                  paying loads, Highly recommended "
                  <br />
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

              <Carousel.Item>
                <div className="mytext">
                  <FaQuoteLeft
                    color="orangered"
                    className="float-start"
                    fontSize="2em"
                  />
                  <br />
                  <br />
                  “Just a quick note to acknowledge the outstanding service
                  supplied by Cornelius Sindhu with his follow up on e-mails,
                  bills of lading, requests for pricing and his amazing pursuit
                  of late freight forwarders. It is a pleasure to work with
                  him."
                  <br />
                  <br />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <br />
                  <br />
                  <img src={Girl2} />
                  <h5>Debora Wolf</h5>
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
                  “You sent me some of the most hardworking, friendly, quick on
                  their feet individuals that I’ve ever met in my life. If I get
                  married one day, those 6 guys will be my groomsmen!”. (A text
                  message sent by a new TDS customer regarding one of our
                  project installation crews)."
                  <br />
                  <br />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <FaStar color="orangered" fontSize="1em" />
                  <br />
                  <br />
                  <img src={Girl4} />
                  <h5>Elif Shafak</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};
