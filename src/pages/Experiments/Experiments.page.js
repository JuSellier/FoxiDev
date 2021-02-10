import React from "react";
import "./Experiments.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";
import { Link } from "react-router-dom";

const ExperimentsPage = () => {
  return (
    <DefaultPage>
      <main className="ExperimentsPage">
        <h1 className="contain">Web dev experiments</h1>

        <Link className="contain" to="/e/dynamic-cursor">
          Dynamic Cursor
        </Link>
        <Link className="contain" to="/e/progressive-scrollbar">
          Progressive Scrollbar
        </Link>
        <Link className="contain" to="/e/interactive-background">
          Interactive Background
        </Link>
      </main>
    </DefaultPage>
  );
};

export default ExperimentsPage;
