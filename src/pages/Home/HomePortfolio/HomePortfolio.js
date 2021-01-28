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
          title="NeoPrivacy"
          imgUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        >
          <p>The privacy-friendly trustmark.</p>
        </ProjectPreview>

        <ProjectPreview
          title="FoxiUI"
          imgUrl="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        >
          <p>The web dev toolkit.</p>
        </ProjectPreview>
      </SwipeMenu>
    </section>
  );
};

export default HomePortfolio;