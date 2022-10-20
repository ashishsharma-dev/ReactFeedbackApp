import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

const AboutApp = () => {
  return (
    <div className="card" style={{ width: "90%" }}>
      <h2>About this app</h2>
      <h4>Version: 1.0.0</h4>
      <p style={{ margin: "0.5rem 0" }}>
        This is the feedback application section for a product or service
        website.
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AboutApp;
