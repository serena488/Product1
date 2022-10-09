import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "../agreement.css";
import emailjs from "@emailjs/browser";

import Img8 from "../assets/img/agreement.jpg";



const Agreement = () => {


  // const [formSubmitionStatus, setFormSubmitionStatus] =
  //   useState("notSubmitted");

  // useEffect(() => {
  //   if (formSubmitionStatus === "submitted") {
  //   }
  // }, [formSubmitionStatus]);

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_3yit61r",
  //       "template_hj4lnkv",
  //       form.current,
  //       "CEqhc-QEsEKVy3vzA"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //         setFormSubmitionStatus();

  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   form.current.reset();
  //   alert("info send successfully");


  // };


  // var canvas = document.getElementById("signature-pad");

  // function resizeCanvas() {
  //     var ratio = Math.max(window.devicePixelRatio || 1, 1);
  //     canvas.width = canvas.offsetWidth * ratio;
  //     canvas.height = canvas.offsetHeight * ratio;
  //     canvas.getContext("2d").scale(ratio, ratio);
  // }
  // window.onresize = resizeCanvas;
  // resizeCanvas();

  // var signaturePad = new SignaturePad(canvas, {
  //  backgroundColor: 'rgb(250,250,250)'
  // });

  // document.getElementById("clear").addEventListener('click', function(){
  //  signaturePad.clear();
  // })

  return (

    <section className="Agreement" >

      <div className="Agreementbanner">
        <h1>TDS Agreement</h1>
      </div>


      <div className="container p-2 mt-4 align-top">
        <div color="red" className="container m-3   myS">

          <h2>Agreement</h2>
          <p>Provide your data to sign an agreement.

          </p>
        </div><br />
        <div>
        <Container className="border p-4 HIII my-4">

          {/* <form ref={form} onSubmit={sendEmail}> */}
          <form>


            <p>This Dispatcher Agency Agreement (AGREEMENT) is made on <input className="ms-1 me-1" name="date" type="date" />
              by and between Truckage Dispatch Services, (hereinafter referred to as 'DISPATCH'), and<br /><br />
              First Name:<br /> <input type="text" name="fname" placeholder="First Name" /> <br /><br />
              Last Name:<br />  <input type="text" name="lname" placeholder="Last Name" /><br /><br />
              Carrier: <br />   <input type="text" name="carrier" placeholder="Carrier" /><br /><br /><br /><br />




              This Dispatcher Agency Agreement (AGREEMENT) is made on <input name="date" type="date" />
              by and between Truckage Dispatch LLC, (hereinafter referred to as 'DISPATCH'), and <input name="fname" type="text" placeholder="Name" />
              of <select name="state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select> (hereinafter referred to as 'CARRIER').
              I * <input className="ms-1 me-1" type="text" name="mfname" placeholder="First Name" />
              <input className="ms-1 me-1" type="text" name="msname" placeholder="Second Name" />
              <input className="ms-1 me-1" type="text" name="mlname" placeholder="Last Name" />
              the owner of <input className="ms-1 me-1"  type="text" name="company" placeholder="Company" />
               (CARRIER) A licensed Motor Carrier, MC#
              <input className="ms-1 me-1"  name="mc" type="number" placeholder="MC#" />
              and USDOT#*
              <input className="ms-1 me-1"  name="mc" type="number" placeholder="USDOT#" />
              hereby grant authorization to Truckage Dispatch Services LLC by executing a
              General Power of Attorney (a copy of which is attached to this
              agreement and incorporated by reference) to act as my general agent for the
              purposes of locating and booking freight shipments, processing brokerage paperwork,
              and obtaining Certificate of Liability Insurance from CARRIER'S insurance agents listing
              BROKER as Certificate Holder. Under the terms of this General Power of Attorney and the general
              rules of law following agents, the CARRIER is the principal and the DISPATCH is the agent.</p>
              <hr />
              <h4>DISPATCH OBLIGATIONS</h4><br />
              <p>
              DISPATCH will tend to necessary load related documentation and communication over phone,
              fax, or email including set-up documents (carrier packet) listing DISPATCH as primary contact,
              rate confirmations, certificates of liability insurance with BROKER listed as Certificate Holder,
              Notices of Assignment (NOAs), to help tender commodity freight shipments to CARRIER for transportation
              in interstate commerce by CARRIER within the scope of CARRIER registered jurisdictions as per CARRIER
              operating authority and Carrier Profile section of this AGREEMENT. DISPATCH will seek, locate, match,
              bid on, negotiate rates and conditions, and bind freight quotes, contracts, or offerings to CARRIER
              requirements as disclosed by CARRIER in the Carrier Profile section of the AGREEMENT. DISPATCH will
              notify CARRIER of best-matched loads for approval prior to making a binding commitment. DISPATCH will
              negotiate rates on behalf of CARRIER to the best of DISPATCH ability utilizing all reasonable efforts,
              available resources and skills, arriving at the best possible final rate acceptable to CARRIER on a
              case-by-case basis. Once an order is approved by CARRIER, DISPATCH will email or fax the necessary
              documents to BROKER directly. DISPATCH will invoice CARRIER at time of service as well as provide CARRIER
              with a copy of each signed rate confirmation for CARRIER records.<br /><br />

              DISPATCH will complete and sign all necessary documents on behalf of CARRIER
              with CARRIER granting such authority to DISPATCH as CARRIER'S Attorney-in-Fact
              and/or agent. DISPATCH will post CARRIER equipment onto online freight load board(s).
              DISPATCH agrees to not, in good faith, offer remuneration, favors, or kickbacks to BROKER
              in order to obtain loads. When necessary and within DISPATCH capabilities, DISPATCH will
              attempt to assist CARRIER with issues which may arise during load transit. DISPATCH agrees
              to have BROKER billed within 24-hours of receipt of a signed Freight Bill, Bill of Lading (BOL),
              or Proof of Delivery (POD) using CARRIER'S factor. If CARRIER does not have a factor, DISPATCH may recommend one.
              CARRIER is required to pay DISPATCH using invoice factoring services or a credit card kept on file for DISPATCH
              service charges. CARRIER OBLIGATIONS CARRIER agrees to factor invoices billed by DISPATCH on behalf of CARRIER
              unless using Quick Pay options provided by some brokers in which case CARRIER's credit card (kept on file) will
              be charged for services rendered. CARRIER agrees to pay DISPATCH 5% of final load pay or minimum of $25 for
              services rendered upon receipt of a signed Freight Bill, Bill of Lading (BOL), or Proof of Delivery (POD)
              using an invoice factoring service of their choice or a credit card on file. CARRIER agrees to deliver each
              tendered shipment to its designated destination, free of damage or loss. CARRIER agrees to fax or email all
              signed Freight Bills, signed Bill of Lading (BOL), or signed Proof of Delivery (POD) of all loads
              secured/arranged by DISPATCH and within 24 hours of signing. CARRIER agrees to maintain all proper
              licenses and permits as required by the USDOT and FMCSA as well as comply with all applicable State
              and Federal regulations pertaining to the area of intended operation, including, but not limited
              to California CARB compliance. This includes compliance with new laws and ensuring that any changes
              to laws are complied with by the CARRIER. CARRIER agrees to maintain insurance coverage of at
              least $750,000 in General Liability coverage ($1 Millon recommended) as well as a minimum of $100,000 in Cargo
              coverage.<br /><br />
              DISPATCH will be held harmless in the event of any and all claims. CARRIER is liable for all loss, damage, or l
              iability occasioned by the transportation of property arranged by DISPATCH while in the possession of CARRIER.
              CARRIER shall never turn down a load and then contact the BROKER directly to accept the same load in question
              so as to avoid paying the earned DISPATCH fee. CARRIER agrees to never double broker any loads received by
              DISPATCH at any time. If this occurs, CARRIER agrees to pay DISPATCH for loss of business, both actual and
              estimated based on CARRIER's fraudulent and unethical actions. CARRIER agrees that the customer information
              being provided to CARRIER by DISPATCH is the sole and exclusive property of DISPATCH. Neither it, nor any employee, agent,
              or subcontractor shall back-solicit, directly or indirectly, communicate, or perform any service for compensation of any a
              ccount provided by DISPATCH previously tendered to CARRIER for transportation, nor shall it pass on or reveal any
              customer information obtained to any other person or company. Solicitation prohibited under this AGREEMENT means
              participation in any conduct, whether direct or indirect, the purpose of which involves transportation and/or
              handling of property by CARRIER for which CARRIER does, or did in the past, provide such service for that
              customer under arrangements first made or procured by DISPATCH. Solicitation includes conduct initiated
              or induced by CARRIER, or accepted by CARRIER, upon inducement of aforementioned DISPATCH efforts.
              CARRIER agrees to function under the terms of the AGREEMENT strictly as a duly permitted Contract
              and/or Common Carrier under ICC provisions and hereby waives any and all rate provisions, which may
              be contained in its published carrier tariffs. CARRIER agrees to indemnify DISPATCH and hold DISPATCH

              harmless for any damage to persons or property arising from CARRIER performing its duties. CARRIER
              agrees to understand and abide by applicable freight and transport laws including, but not limited
              to, MAP-21 and the Carmack Amendment. DISPATCH will take no action to ensure CARRIER compliance,
              and CARRIER agrees to indemnify DISPATCH against any violations of any applicable laws. Upon
              electronic forwarding of all load related
              documentation to CARRIER by DISPATCH, the DISPATCH services of Truckage Dispatch Services LLC have been
              fully performed.<br /><br />

              OTHER PROVISIONS DISPATCH bears NO financial or legal responsibility in transactions between BROKER
              and CARRIER and will not be liable for any incidental, consequential, or indirect damages for the
              loss of profits, or business interruption arising out of the use of the service. CARRIER agrees to
              hold harmless, before during and after the contract, all direct or indirect damages resulting from
              CARRIER hauling of shipper's freight. This includes, but is not limited to loading problems or issues,
              delays, overages, shortages, damages, billing and collection issues, and hours of service (HOS).
              DISPATCH is NOT responsible for billing or load related issues or problems nor for storing paperwork
              related to CARRIER completed loads. CARRIER agrees to operate under their own Motor Carrier Authority;
              CARRIER is responsible for complying with all USDOT and FMCSA regulations and to notify DISPATCH of
              changes to authority, insurance, Carrier Profile, or changes in ownership. This AGREEMENT shall be
              deemed effective on the first date CARRIER and DISPATCH commence business together as described in
              the whole of this AGREEMENT. CARRIER hereby agrees that the provisions herein properly express the
              complete understanding as contained in any prior agreement either written or verbal. Terms of this
              AGREEMENT shall be perpetual, provided that either party may terminate the AGREEMENT by giving 30 days
              written notice to the other.<br /><br />

              ACCESSORIAL CHARGES DISPATCH will attempt in good faith to collect accessorial charges when possible
              and as per BROKER policies but with no express or implied guarantees of collection and DISPATCH will
              not be responsible for accessorial charges, including but not limited to detention/layover pay that
              remain uncollected. CARRIER agrees to hold DISPATCH harmless for any uncollected charges.<br />

              INTERPRETATION AND GOVERNING LAW This AGREEMENT is to be interpreted as a general durable power of
              attorney under Utah law and shall be governed by and construed in accordance with laws of the State
              of Washington without giving effect to any choice of law or conflict of laws provision or rule
              (whether of the State of Utah or any other jurisdiction) that would cause the application of the
              laws of any jurisdiction other than those of the State of Utah. ATTORNEY'S FEES In the event that
              litigation commences to enforce this AGREEMENT, the prevailing party shall be entitled to reasonable
              attorney's fees. JURISDICTIONS AND VENUE DISPATCH and CARRIER hereby consent to and agree to submit
              to the jurisdiction of the Federal and State courts located in Clark County, Washington in connection
              with any claims or controversies arising out of the Dispatch Agency AGREEMENT enclosed herein.
              CONSIDERATION The CARRIER agrees to pay DISPATCH as per the agreed terms, as stated in the Carrier

              Obligations Section of this AGREEMENT for each completed load. After 30 days the account may
              be placed into collection. A load is considered 'completed' once a Bill of Lading (BOL)
              is signed by the receiver. DISPATCH will invoice CARRIER as per the terms of the AGREEMENT
              via e-Mail, or Fax only. Payment is made to DISPATCH via 5% reduction in final pay or minimum
              of $25 using CARRIER'S invoice factoring service of choice or charged to CARRIER's credit card kept on file.
              Once payment is processed CARRIER will be sent a confirmation receipt via e-Mail.
              The service charge shall be deducted automatically from the amount paid by DISPATCH to CARRIER.
              In the event that the broker does not pay DISPATCH, CARRIER agrees to promptly reimburse DISPATCH
              an amount equal to any
              amounts unpaid by the BROKER. ADDITIONAL PROVISIONS DISPATCH will work within the
              established parameters of the Carrier Profile section of this Dispatch Agency Agreement.
              In the event that DISPATCH books a load matching the CARRIER'S truck posting, the CARRIER
              agrees to pay DISPATCH as agreed to in the Carrier Obligations section of the AGREEMENT.
              <br /><br /></p>
              <p>
            <b>
              NOTE: To avoid charges for unavailable equipment, it is very important to notify
              DISPATCH immediately if the truck is loaded from another source. CARRIER agrees
              to notify DISPATCH on the day the truck or trucks are available for dispatch
              and to advise DISPATCH of any immediate status change or delays.</b></p>
            <br /><hr /><br />
            <h4>Credit Card Information Form</h4>
            <p>
              Below you will find our credit card information form. This form will get your credit card
              information for future service charges. The total charge is $1.00 for each year of service.
              Unfortunately, this is the very minimum we can charge just ask on your first invoice we can
              refund the $1.00 charge. Please complete the form below and we will be charging this credit
              card for any future transactions. Thank you and let us know if you'd prefer to use a checking/savings
              account instead. Credit Card Form - $1.00 Charge for every year * Dispatch Truck Services
              ($1.00 for each year of service) Total: $ 1.00
            </p>
            <br />
            <input name="ccard" type="text" placeholder="Credit Card" /><br />
            <input name="cfname" type="text" placeholder="First Name" /><br />
            <input type="text" name="clname" placeholder="Last Name" /><br />

            <br /><br />
            Credit Card Number*<br />
            <input type="number" name="ccnumber" placeholder="Credit Card Number" /><br />

            Security Code*<br />
            <input type="number" name="scode" placeholder="Security Code" /><br />
            Expiration Month*<br />
            <select id="year" name="emonth"><br />
              <option>Month</option><br />

              <option value="2011">01</option>
              <option value="2012">02</option>
              <option value="2013">03</option>
              <option value="2014">04</option>
              <option value="2015">05</option>
              <option value="2016">06</option>
              <option value="2017">07</option>
              <option value="2018">08</option>
              <option value="2019">09</option>
              <option value="2020">10</option>
              <option value="2021">11</option>
              <option value="2022">12</option>
            </select><br />

            Expiration Year*<br />
            <select id="year" name="eyear"><br />
              <option>Year</option>

              <option value="2011">22</option>
              <option value="2012">23</option>
              <option value="2013">24</option>
              <option value="2014">25</option>
              <option value="2015">26</option>
              <option value="2016">27</option>
              <option value="2017">28</option>
              <option value="2018">29</option>
              <option value="2019">30</option>
              <option value="2020">31</option>
              <option value="2021">32</option>
              <option value="2022">33</option>
            </select><br />
            Billing Address*<br />
            <input type="text" name="baddress" placeholder="Billing Address" /><br />
            Street Address*<br />
            <input type="text" name="saddress" placeholder="Street Address" /><br />

            City*<br />
            <input type="text" name="city" placeholder="City" /><br />
            State / Province*<br />
            <input type="text" name="cstate" placeholder="State / Province" /><br />
            Postal / Zip Code*<br />
            <input type="number" name="postal" placeholder="Postal / Zip Code" /><br />
            Country*<br />
            <input type="text" name="country" placeholder="Country" /><br />
            <br />
            
            <button type="submit" className="btn btn-warning mt-4">
              Submit
            </button>
            <br />
          </form>
        </Container>
        </div>
      </div>

    </section >
  );
};


export default Agreement;