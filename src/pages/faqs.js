import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { FaQuora } from "@react-icons/all-files/fa/FaQuora";

import "../faqs.css";


const FAQS = () => {
    return (
        <section className="FAQSS" >
            <div className="Faqs">
                <div className="Faqsbanner">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <Container>
                
                <div className="container p-2 mt-4 align-top my-4 myS">
                    <p>FAQ's</p>
                    <h2>Let's Solve your Queries...</h2>
                </div>
                <hr className="my-4" />
                <Container className="border text-center mt-4">
                    
                <Accordion flush className="mt-4 my-4">

                    <Accordion.Item  eventKey="0">

                        <Accordion.Header><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item  eventKey="1">
                        <Accordion.Header ><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item  eventKey="2">
                        <Accordion.Header ><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header ><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item  eventKey="4">
                        <Accordion.Header ><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item  eventKey="5">
                        <Accordion.Header ><h4><FaQuora className="me-2" color="orangered" fontSize="27px" />: Accordion Item</h4></Accordion.Header>
                        <Accordion.Body className="bodys">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Container>

            </Container>
        </section>)
}

export default FAQS;