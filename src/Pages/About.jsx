import React from "react";
import classes from "./About.module.css";
import Star from "../Components/Star";

const About = () => {
  return (
    <div className={`${classes.about} text-center text-white`}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>ABOUT COMPONENT</h1>
          <Star />
          <div className="row g-2 p-5 text-start">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
