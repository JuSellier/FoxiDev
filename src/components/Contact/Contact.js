import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="Contact">
      <form className="Contact-Form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email adress</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message</label>
        <textarea type="message" id="message" />

        <button className="slide-gradient" type="submit">
          Send
        </button>
      </form>

      <div className="Contact-Alternatives">
        <div className="Contact-Alternatives-Title">Direct email</div>
        <p>hello@foxidev.io</p>
        <div className="Contact-Alternatives-Title">Whatsapp</div>
        <p>You can send us a message at the following number: +3132329828</p>
      </div>
    </section>
  );
};

export default Contact;
