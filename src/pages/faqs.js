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

                        <Accordion.Item eventKey="0">

                            <Accordion.Header><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />: Do I need to fill out the contract to start working with you?
                            </h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                                Yes, the contract is mandatory to start working with us, it’s a super easy contract and sheet
                                which you need to fill out, as per the details that you will mention we’ll find you the loads
                                accordingly

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header ><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />:  What happens If I don’t want to take the load that you have offered?</h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                                We know that you may not like every load, and you don’t need to stick with that since we are not
                                forcing you to take the load as there is no forced dispatch, we will start finding you another load
                                that is acceptable to you.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header ><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />:  Do I need to fill out any broker-created packages for brokers I have never done business
                                with before?</h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                                No, you just need to sit and relax, we will fill all the packages for you on your behalf.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header ><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />: Do you have any knowledge of what brokers are legit (Good or Bad)?</h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                            We only do business with brokers who are reputable and who we know will pay you.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header ><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />: What do you require from me to start working?</h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                                We just need three documents from your side, a copy of your proof of insurance, your W9, your
                                Mc authority paper, and a Complete carrier agreement.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header ><h5><FaQuora className="me-2" color="orangered" fontSize="27px" />: How can I get paid?</h5></Accordion.Header>
                            <Accordion.Body className="bodys">
                                If you have a factoring company that is great and if not, the broker will pay you directly using
                                quick pay, and how quickly you get paid it depends upon the broker.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>

            </Container>
        </section>)
}

export default FAQS;