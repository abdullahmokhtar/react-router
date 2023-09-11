import React from "react";
import classes from "./Home.module.css";
import avtar from "../assets/images/avataaars.svg";
import Star from "../Components/Star";

const Home = () => {
  return (
    <div className={`${classes.home} py-5`}>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
          <img className="w-75" src={avtar} alt="avatar" />
          <h1 className="my-3">START FRAMEWORK </h1>
          <Star />
          <p className="my-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
