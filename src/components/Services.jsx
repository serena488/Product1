import React from "react";
import flight from "../assets/img/flight.png";
import truckno from "../assets/img/truckno.png";
import driving from "../assets/img/driving.png";
import delivery from "../assets/img/delivery.png";
import lowprice from "../assets/img/low-price.png";

import usa from "../assets/img/usa.png";

import { FaFax } from "@react-icons/all-files/fa/FaFax.esm";
import { FaDoorOpen } from "@react-icons/all-files/fa/FaDoorOpen.esm";

import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle.esm";

export const Services = () => {
  return (
    <section className="Services p-2" id="services">
      <div className="container p-2 mt-4 align-top myS">
        <h1>Our Services</h1>
        <p>
          At TDS, you call the shots – We Work for You! Just consider us your
          remote administrative team. You make the ultimate call on where to be
          dispatched; with our flat rate fee you you keep 100% of the payload.
          The only thing you have to worry about is the venues you choose &
          looking good doing it!
        </p>
      </div>
      <br />
      <br />

      <div className="container myContainer">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 justify-content-center fw-bold text-align-start flex-wrap myT">
          <div className="col">
            <img src={truckno} />
            <br />
            <div className="tabletext">
              No Forced <br />
              Dispatch
            </div>
          </div>

          <div className="clr text-center col">
            <img src={driving} />
            <br />
            <div className="tabletext">
              Personal
              <br />
              Dispatcher
            </div>
          </div>

          <div className="col">
            <img src={delivery} />
            <br />
            <div className="tabletext">
              100% <br />
              Payload
            </div>
          </div>

          <div className="clr col">
            <FaDoorOpen fontSize="5em" />
            <br />
            <div className="tabletext">
              Door To Door
              <br /> Services
            </div>
          </div>

          <div className="col">
            <img src={usa} />
            <br />
            <div className="tabletext">
              Service Avaliable <br />
              Across Country
            </div>
          </div>

          <div className="clr col">
            <AiFillDollarCircle fontSize="5em" />
            <br />
            <div className="tabletext">
              Unlimited Credit <br />
              Checks
            </div>
          </div>

          <div className="col">
            <FaFax fontSize="5em" />
            <br />
            <div className="tabletext">
              Fax/Email
              <br />
              Documents
            </div>
          </div>

          <div className="clr col">
            <img src={lowprice} />
            <br />
            <div className="tabletext">
              We Negotiate Top
              <br />
              Paying Rates
            </div>
          </div>

          <div className="col">
            <img src={flight} />
            <br />
            <div className="tabletext">
              24/7 Dispatch
              <br />
              Support
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="container p-2 mt-4 align-top myS">
        <h1>Our Plans</h1>
        <p>TDS provide its customers with following Packages</p>
      </div>
    </section>
  );
};
