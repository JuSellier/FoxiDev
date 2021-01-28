import React from "react";
import "./About.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";
import Contact from "../../components/Contact/Contact";

const About = () => {
  return (
    <DefaultPage>
      <main className="About contain">
        <h1>A few words about me</h1>

        <h2>Who am I?</h2>
        <p>
          Nice to e-meet you! I'm Julien, I grew up in France and I also spent a
          few years in Amsterdam. I love travelling, coding, cooking, playing
          guitar and learning new stuff.
        </p>

        <h2>What do I do?</h2>
        <p>
          I code websites and web apps. To do this, I use the Sass, React, Node
          (with Express) and MongoDB.
        </p>

        <h2>Why FoxiDev?</h2>
        <p>
          "Foxi" represents the smartness and adaptability of the fox. "Dev"
          stands for software development.
        </p>
        <p>
          I decided to use the fox as my symbol for one simple reason: I like
          foxes.
        </p>

        <h2>Got another question? Just ask.</h2>
        <Contact />
      </main>
    </DefaultPage>
  );
};

export default About;
