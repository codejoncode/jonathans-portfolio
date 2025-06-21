import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img 
            src="/icon.PNG" 
            alt = "Jonathan J Holloway Engineering Logo"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#lectures">
                Lectures
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#theme">
                Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
