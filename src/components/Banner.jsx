import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
import { MdCall } from "@react-icons/all-files/md/MdCall.esm";
import { BsFillCalendarFill } from "@react-icons/all-files/bs/BsFillCalendarFill.esm";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe.esm";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow.esm";

export const Banner = () => {
  return (
    <section className="Banner" id="contact">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 fw-bold">
        <div className="col p2  text-align-center">
          <table className="table">
            <th>
              <td className="align-top">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                    <MdCall color="orangered" fontSize="5em" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>CALL CENTER</h4>
                    <p>
                      Give us a free call
                      <br />
                      +92 3004283213
                    </p>
                  </div>
                </div>
              </td>
            </th>
          </table>
        </div>

        <div className="col p2  text-align-center">
          <table className="table">
            <th>
              <td className="align-top">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                    <BsFillCalendarFill color="orangered" fontSize="5em" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>WORKING HOURS</h4>
                    <p>
                      Mon-Sat: 7AM-5PM <br /> Sunday: 9AM-3PM
                    </p>
                  </div>
                </div>
              </td>
            </th>
          </table>
        </div>

        <div className="col p2  text-align-center">
          <table className="table">
            <th>
              <td className="align-top">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                    <FaLocationArrow color="orangered" fontSize="5em" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>OUR LOCATION</h4>
                    <p>
                      300 Kansas Ave, <br />
                      New Jersey, United States
                    </p>
                  </div>
                </div>
              </td>
            </th>
          </table>
        </div>

        <div className="col p2  text-align-center">
          <table className="table">
            <th>
              <td className="align-top">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 py-3">
                    <FaGlobe color="orangered" fontSize="5em" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>GLOBAL OFFICE</h4>
                    <p>
                      Japan Headquarter, <br />
                      New Hall, Tokyo
                    </p>
                  </div>
                </div>
              </td>
            </th>
          </table>
        </div>
      </div>
    </section>
  );
};
