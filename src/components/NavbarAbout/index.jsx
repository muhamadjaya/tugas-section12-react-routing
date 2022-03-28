import React from "react";
import { Link } from "react-router-dom";

const NavbarAbout = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top customNav">
          <div className="container-fluid">
            <Link className="navbar-brand navBrand" to="/">
              Todo List App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about/about-app">
                  About App
                </Link>
                <Link className="nav-link" to="/about/about-author">
                  About Author
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarAbout;
