import { Col, Container, Row } from "react-bootstrap";
import "../about.css"

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
        </Container>

      </div>
    </section>)
}

export default About;