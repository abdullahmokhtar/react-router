import React, { useState } from "react";
import Star from "../Components/Star";
import "./Contact.module.css";

const Contact = () => {
  const [nameLabel, setNameLabel] = useState(false);
  const [ageLabel, setAgeLabel] = useState(false);
  const [emailLabel, setEmailLabel] = useState(false);
  const [passwordLabel, setPasswordLabel] = useState(false);
  const nameHandler = (e) => {
    setNameLabel(e.target.value.length > 0);
  };
  const ageHandler = (e) => {
    setAgeLabel(e.target.value.length > 0);
  };
  const emailHandler = (e) => {
    setEmailLabel(e.target.value.length > 0);
  };
  const passwordHandler = (e) => {
    setPasswordLabel(e.target.value.length > 0);
  };

  return (
    <div className="container text-center py-5">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">CONATCT SECTION</h1>
        <Star grey="true" />
        <form className="w-50 my-5 text-start">
          <div className="my-3">
            <label className={`px-2 ${nameLabel ? "d-block" : "d-none"}`}>
              userName:
            </label>
            <input
              onInput={nameHandler}
              type="text"
              className="w-100 py-2 px-2"
              placeholder="userName"
            />
          </div>
          <div className="my-3">
            <label className={`px-2 ${ageLabel ? "d-block" : "d-none"}`}>
              userAge:
            </label>
            <input
              onInput={ageHandler}
              type="text"
              className="w-100 py-2 px-2"
              placeholder="userAge"
            />
          </div>
          <div className="my-3">
            <label className={`px-2 ${emailLabel ? "d-block" : "d-none"}`}>
              userEmail:
            </label>
            <input
              onInput={emailHandler}
              type="text"
              className="w-100 py-2 px-2"
              placeholder="userEmail"
            />
          </div>
          <div className="my-3">
            <label className={`px-2 ${passwordLabel ? "d-block" : "d-none"}`}>
              userPassword:
            </label>
            <input
              onInput={passwordHandler}
              type="text"
              className="w-100 py-2 px-2"
              placeholder="userPassword"
            />
          </div>
          <button className="btn" type="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
