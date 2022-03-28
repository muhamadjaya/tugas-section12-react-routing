import React from "react";
import NavbarAbout from "../../components/NavbarAbout";

const AboutApp = () => {
  return (
    <>
      <NavbarAbout />
      <h1 className="text-center headingPage">ABOUT THE APP</h1>
      <p className="text-center textContent">
        In this app, you can add, delete, and check and uncheck the item. If you
        have done the task, just check the checkbox for marking that the task
        was completed.
      </p>
    </>
  );
};

export default AboutApp;
