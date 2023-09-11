import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link to="" className="navbar-brand text-white fw-bold fs-2">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  to="about"
                  className={`nav-link text-white text-uppercase fw-bold`}
                  aria-current="page"
                >
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link to="portfolio" className="nav-link text-white text-uppercase fw-bold">
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link text-white text-uppercase fw-bold">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
