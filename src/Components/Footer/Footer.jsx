import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`py-5 ${classes.footer}`}>
        <div className="container ">
          <ul className="d-flex justify-content-between ">
            <li>
              <h3>location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </li>
            <li>
              <h3>around the web</h3>
              <div className={classes.links}>
                <div className={classes.link}>
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className={classes.link}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className={classes.link}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className={classes.link}>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </li>
            <li>
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["footer-tail"]}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
};

export default Footer;
