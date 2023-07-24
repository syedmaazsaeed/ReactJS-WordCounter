import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const handlePageChange = (page) => {
    props.onPageChange(page);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${props.activePage === "home" ? "active" : ""}`}
                onClick={() => handlePageChange("home")}
                href="#"
              >
              <strong>  Home </strong>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={`nav-link ${props.activePage === "about" ? "active" : ""}`}
                onClick={() => handlePageChange("about")}
                href="#"
              >
              <strong> About </strong>
              </a>
            </li>
            
          </ul>

          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />

            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  onPageChange: PropTypes.func.isRequired, // Add this prop type
};
