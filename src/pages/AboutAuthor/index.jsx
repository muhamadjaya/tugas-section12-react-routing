import React from "react";
import NavbarAbout from "../../components/NavbarAbout";

const AboutAuthor = () => {
  return (
    <>
      <NavbarAbout />
      <h1 className="text-center headingPage">ABOUT THE AUTHOR</h1>
      <p className="text-center textContent">
        This app was developed by Muhamad Jaya, a self-taught web developer and
        ux researcher.
      </p>
    </>
  );
};

export default AboutAuthor;
