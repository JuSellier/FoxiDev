import React from "react";
import "./Contact.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";
import Contact from "../../components/Contact/Contact";

const ContactPage = () => {
  return (
    <DefaultPage>
      <main className="ContactPage">
        <h1>Get in touch with us !</h1>

        <Contact />
      </main>
    </DefaultPage>
  );
};

export default ContactPage;
