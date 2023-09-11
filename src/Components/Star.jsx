import React from "react";
import classes from "./Star.module.css";

const Star = (props) => {
  return (
    <div className={props.grey ? classes["icon-grey"] : classes.icon}>
      <i className="fa-solid fa-star"></i>
    </div>
  );
};

export default Star;
