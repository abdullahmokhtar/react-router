import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center p-5">
        <h1>404 Page Not Found.</h1>
        <Link to="">
          <button className="btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
