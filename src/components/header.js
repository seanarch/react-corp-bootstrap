import React from "react";

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#corp">
          Corporate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#teams">
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
