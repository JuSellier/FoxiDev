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
          title="ZenSky"
          imgUrl="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1022&q=80"
        >
          <p>
            A simple app to track and visualise your dreams and your emotions
            through time.
          </p>
        </ProjectPreview>

        <ProjectPreview
          title="NeoCraft"
          uri="neocraft"
          imgUrl="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"
        >
          <p>
            An collaborative algorithmic art project, aimed at promoting
            creative usage of computer algorithms and tech in arts.
          </p>
        </ProjectPreview>

        <ProjectPreview
          title="NeoPass"
          imgUrl="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        >
          <p>A minimal password generator as a chrome extension.</p>
        </ProjectPreview>

        <ProjectPreview
          title="V2T.app"
          imgUrl="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        >
          <p>A simple voice to text utility as a website.</p>
        </ProjectPreview>

        <ProjectPreview
          title="Surf Camp"
          imgUrl="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <p>A showcase website for a surf camp business.</p>
        </ProjectPreview>

        <ProjectPreview
          title="Coworking spaces"
          imgUrl="https://images.unsplash.com/photo-1612831454918-f65c3ecfc34d?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        >
          <p>A showcase website for coworking spaces.</p>
        </ProjectPreview>
      </SwipeMenu>
    </section>
  );
};

export default HomePortfolio;
