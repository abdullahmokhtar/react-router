import React from "react";
import Star from "../Components/Star";
import poert1 from "../assets/images/poert1.png";
import poert2 from "../assets/images/poert2.png";
import poert3 from "../assets/images/poert3.png";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className="container text-center py-5">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold ">PORTFOLIO COMPONENT</h1>
        <Star grey={true} />
        <div className="row gy-3 py-3">
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert1} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert2} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert3} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert1} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert2} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={classes.image}>
              <img src={poert3} className={`w-100`} alt="" />
              <div className={classes.overlay}>
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
