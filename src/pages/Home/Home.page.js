import React from "react";
import "./Home.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";

import { FiChevronsDown as ScrollDownIcon } from "react-icons/fi";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import HomePortfolio from "./HomePortfolio/HomePortfolio";

const Home = () => {
  function scrollDownIntro() {
    window.scrollTo({ top: window.screen.availHeight, behavior: "smooth" });
  }

  return (
    <DefaultPage>
      <section className="Home-Intro">
        <h1>
          Want <span className="text-gradient">creative</span> web development?
        </h1>

        <div className="Home-Intro-ScrollDown" onClick={scrollDownIntro}>
          <ScrollDownIcon />
        </div>
      </section>

      <section className="Home-What">
        <h2 className="fade-in">
          I develop amazing digital experiences with Sass, ReactJS, Node &
          MongoDB.
        </h2>
      </section>

      <section className="Home-How">
        <h2 className="fade-in">Creative solutions. Straight plan.</h2>
        <ul>
          <li className="fade-in">
            1. I get a better understanding of the project's expectations and
            objectives.
          </li>
          <li className="fade-in">
            2. I send you a quote and we ajust the pricing if needed.
          </li>
          <li className="fade-in">3. I develop your website or web app.</li>
        </ul>

        <Link className="link-button slide-gradient fade-in" to="/contact">
          Get a quote for your project
        </Link>
      </section>

      <section className="Home-Price">
        <h2 className="fade-in">Transparent pricing.</h2>
        <p className="fade-in">My hourly rate is 70 euros per hour. Fixed.</p>
      </section>

      <HomePortfolio />

      <section className="Home-Contact">
        <h2 className="fade-in">Got a question? Contact me.</h2>
        <p className="fade-in">
          You can contact me using the contact form below or via LinkedIn.
        </p>
        <Contact />
      </section>
    </DefaultPage>
  );
};

export default Home;
