import { useState, useEffect } from "react";
import React, { useRef } from "react";
import "../test.css";
import emailjs from "@emailjs/browser";

export const Test = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ayea0km",
        "template_8404qgd",
        form.current,
        "S8YiLcRYqHsLL7DXT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormSubmitionStatus();
          
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    alert("info send successfully");
  };

  const [step, setStep] = useState(0);

  const step_form = step + 1;

  const [formSubmitionStatus, setFormSubmitionStatus] =
    useState("notSubmitted");

  useEffect(() => {
    if (formSubmitionStatus === "submitted") {
    }
  }, [formSubmitionStatus]);

  return (
    <form class="form" ref={form} onSubmit={sendEmail} data-netlify="true">
      <div className="card">
        <div>
          {
            <>
              <div className="form_body" onSubmit={sendEmail}>
                <div className="header">
                  <h4>
                    Get an instant quote or call now our customer care center +1
                    (980) 485-5274
                  </h4>
                  <span>{step_form}</span>
                </div>
                <div className="form_data">
                  <div className="input_field">
                    <input type="text" name="user_name" required />
                    <span>Name</span>
                  </div>

                  <div className="input_field">
                    <input type="email" name="email" required />
                    <span>Email</span>
                  </div>

                  <div className="input_field">
                    <input type="text" name="shipfrom" required />
                    <span>Ship From</span>
                  </div>

                  <div className="input_field">
                    <input type="text" name="shipto" required />
                    <span>Ship To</span>
                  </div>

                  <div className="input_field">
                    <textarea type="message" name="message" required />
                    <span>Message</span>
                  </div>
                </div>
              </div>
              <div className="footer">
                <button
                  type="submit"
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Submit
                </button>

                {formSubmitionStatus === "submitted" && (
                  <div>
                    <h2>Thank you for your order! </h2>
                    <h4>you will be redirected in 3 seconds...</h4>
                  </div>
                )}
              </div>
            </>
          }
        </div>
      </div>
    </form>
  );
};
