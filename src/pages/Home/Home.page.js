import React, { useEffect } from "react";
import "./Home.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";

import { FiChevronsDown as ScrollDownIcon } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import SwipeMenu from "../../components/SwipeMenu/SwipeMenu";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  function scrollDownIntro() {
    window.scrollTo({ top: window.screen.availHeight, behavior: "smooth" });
  }

  return (
    <DefaultPage>
      <section className="Home-Intro">
        <h1>
          Need <span className="text-gradient">creative</span> web development ?
        </h1>

        <div className="Home-Intro-ScrollDown" onClick={scrollDownIntro}>
          <ScrollDownIcon />
        </div>
      </section>

      <section className="Home-What">
        <h2 className="fade-in">
          Let us take care of your web development project.
        </h2>
        <p className="fade-in">
          We can certify that your business handles privacy responsibly. To put
          it simply, we will evaluate how well your business handles personal
          data and certify our evaluation so that you can share it with your
          audience.
        </p>
        <Link className="link-button slide-gradient fade-in" to="/how">
          See what we can do for you
        </Link>
      </section>

      <section className="Home-Why">
        <h2 className="fade-in">
          We code websites and progressive web apps with ReactJS, NodeJS/Express
          and MongoDB to develop amazing digital experiences.
        </h2>
        <p className="fade-in">
          We can certify that your business handles privacy responsibly. To put
          it simply, we will evaluate how well your business handles personal
          data and certify our evaluation so that you can share it with your
          audience.
        </p>
      </section>

      <section className="Home-How">
        <h2 className="fade-in">
          Here's how we usually proceed with projects.
        </h2>
        <p className="fade-in">Find out more about the main steps below.</p>
        <ul>
          <li className="fade-in">
            1. We get an understanding of your business' operations.
          </li>
          <li className="fade-in">
            2. We check if you comply with the latest privacy regulations (eg.
            GDPR).
          </li>
          <li className="fade-in">
            3. We check if you comply with privacy regulations.
          </li>
          <li className="fade-in">
            4. We audit your technical infrastructure and code dependencies.
          </li>
          <li className="fade-in">
            5. If everything is okay, you get your privacy-friendly certificate
            and you can start using the trustmark publicly.
          </li>
        </ul>

        <Link className="link-button slide-gradient fade-in" to="/how">
          Get a quote for your project
        </Link>
      </section>

      <section className="Home-Why">
        <h2 className="fade-in">Creative, modern & dynamic.</h2>
        <p className="fade-in">
          We make sure to stay up to date with the latest tech trends and tools.
          This is why we choose to work with the MERN stack and carefully pick
          the dependencies used in our projects.
        </p>
      </section>

      <section className="Home-Price">
        <h2 className="fade-in">Transparent pricing.</h2>
        <p className="fade-in">Our hourly rate is 70 euros per hour.</p>
        <p className="fade-in">The minimum project budget is 1000 euros.</p>
        <Link className="link-button slide-gradient fade-in" to="/how">
          Learn more about our pricing
        </Link>
      </section>

      <section className="Home-Portfolio">
        <h2 className="fade-in">Discover our portfolio.</h2>
        <p className="fade-in">Explore some of our projects below.</p>
        <SwipeMenu>
          <ProjectPreview
            title="Zenbot"
            imgUrl="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1022&q=80"
          >
            <p>A mental health tool.</p>
          </ProjectPreview>
          <ProjectPreview
            title="NeoPrivacy"
            imgUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
          ></ProjectPreview>
          <ProjectPreview
            title="FoxiUI"
            imgUrl="https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ></ProjectPreview>
        </SwipeMenu>
      </section>

      <section className="Home-Contact">
        <h2 className="fade-in">Got a question? Contact us.</h2>
        <p className="fade-in">
          You can contact us via email, whatsapp or using the contact form
          below.
        </p>
        <Contact />
      </section>
    </DefaultPage>
  );
};

export default Home;
