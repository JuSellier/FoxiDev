import React from "react";
import SwipeMenu from "../../../components/SwipeMenu/SwipeMenu";
import ProjectPreview from "../../../components/ProjectPreview/ProjectPreview";

const HomePortfolio = () => {
  return (
    <section className="Home-Portfolio">
      <h2 className="fade-in">Discover the portfolio.</h2>
      <p className="fade-in">Explore some of my projects below.</p>
      <SwipeMenu>
        <ProjectPreview
          title="Zenbot"
          imgUrl="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1022&q=80"
        >
          <p>The mental health app.</p>
        </ProjectPreview>

        <ProjectPreview
          title="Algorithmic Art"
          imgUrl="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <p>An algorithmic art project.</p>
        </ProjectPreview>

        <ProjectPreview
          title="Voice to Text for Chrome"
          imgUrl="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <p>
            A minimal web app to transcribe your voice to text and copy it to
            your clipboard.
          </p>
        </ProjectPreview>

        <ProjectPreview
          title="Surf Camp"
          imgUrl="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <p>A prototype for a surf camp wesite.</p>
        </ProjectPreview>

        <ProjectPreview
          title="Guitar Lessons"
          imgUrl="https://images.pexels.com/photos/3987249/pexels-photo-3987249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <p>A prototype for a guitar courses business website.</p>
        </ProjectPreview>
      </SwipeMenu>
    </section>
  );
};

export default HomePortfolio;
