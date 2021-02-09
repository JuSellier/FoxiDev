import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Contact.scss";

import { IoWarningOutline as ErrorIcon } from "react-icons/io5";

const Contact = () => {
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [honeyPot, setHoneyPot] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setError(() => null);
    }, 5000);
  }, [error]);

  function submitContactForm(e) {
    e.preventDefault();

    // HONEYPOT
    if (honeyPot.length > 0) return;

    // VALIDATION
    if (validateEmail(email) === false) {
      setError("Your email address is invalid, please check and try again.");
    }

    // SEND FORM TO BACKEND
    const formInputs = {
      name,
      email,
      phoneNumber,
      message,
    };
    console.log(formInputs);

    fetch("https://foxidev.heroku.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function validateEmail(inputEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  }

  return (
    <section className="Contact">
      <form className="Contact-Form">
        <label htmlFor="email">Your email adress</label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="text"
          name="donut-fil-dis-out"
          autoComplete="false"
          onChange={(e) => setHoneyPot(e.target.value)}
          className="Contact-Form-LastInput"
        />

        {error && (
          <div className="Contact-Form-Error">
            <ErrorIcon />
            {error}
          </div>
        )}

        <button
          className="slide-gradient"
          type="submit"
          onClick={submitContactForm}
        >
          Send
        </button>
      </form>

      <div className="Contact-Alternatives">
        <div className="Contact-Alternatives-Title">LinkedIn</div>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          Contact me via LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
