import React from "react";
import DefaultPage from "../../components/Layouts/DefaultPage";
import { Link } from "react-router-dom";

const ExperimentsPage = () => {
  return (
    <DefaultPage>
      <main className="ExperimentsPage">
        <h1>Web dev experiments</h1>

        <Link to="/e/dynamic-cursor">Dynamic Cursor</Link>
        <Link to="/e/progressive-scrollbar">Progressive Scrollbar</Link>
      </main>
    </DefaultPage>
  );
};

export default ExperimentsPage;
