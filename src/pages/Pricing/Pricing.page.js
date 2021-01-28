import React from "react";
import "./Pricing.page.scss";
import DefaultPage from "../../components/Layouts/DefaultPage";

const Pricing = () => {
  return (
    <DefaultPage>
      <main className="Pricing">
        <h1>Pricing</h1>
        <h2>Application is free</h2>
        <h2>Certification costs 60€ per month.</h2>
      </main>
    </DefaultPage>
  );
};

export default Pricing;
